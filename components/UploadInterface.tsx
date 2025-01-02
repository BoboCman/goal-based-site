'use client'

import { useState, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, CheckCircle, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

interface UploadInterfaceProps {
  token: string
}

interface UploadResponse {
  success: boolean
  message?: string
  error?: string
}

interface FormQuestion {
  question: string
  options: string[]
}

const formQuestions: FormQuestion[] = [
  {
    question: "What planning goal will this policy address for your client?",
    options: [
      "Provide survivor income protection for dependents or beneficiaries",
      "Act as a supplemental income source through tax-advantaged cash value access",
      "Enhance tax efficiency or maximize wealth accumulation potential",
      "Provide estate liquidity or support wealth transfer objectives",
      "Support business planning needs (e.g., succession, buy-sell agreements, key-person protection)"
    ]
  },
  {
    question: "What time horizon does your client expect for realizing the benefits of this policy?",
    options: [
      "Short-term: Less than 10 years",
      "Medium-term: 10–20 years",
      "Long-term: 20+ years",
      "Lifetime: Benefits needed indefinitely"
    ]
  },
  {
    question: "How comfortable is your client with risk related to policy cash value growth?",
    options: [
      "Very conservative: No market exposure; guarantees are the priority",
      "Conservative: Limited exposure for modest growth potential",
      "Balanced: Comfortable with moderate fluctuations for higher returns",
      "Growth-focused: Willing to accept significant market risk for maximum growth"
    ]
  },
  {
    question: "How important will liquidity and cash value access be to your client?",
    options: [
      "Not important: Focused on long-term death benefit",
      "Somewhat important: Occasional access may be needed",
      "Important: Planned access for supplemental income or opportunities",
      "Critical: Maximizing liquidity and flexibility is a top priority"
    ]
  },
  {
    question: "What premium structure will best align with the financial goals of your client?",
    options: [
      "Fixed premiums for stability and predictability",
      "Flexible premiums to adapt to changing circumstances",
      "Minimal premiums now, with options to increase later",
      "Performance-tied premiums to prioritize cash value growth"
    ]
  },
  {
    question: "How important will additional features beyond death benefit and cash value be for your client?",
    options: [
      "Not important: Focus on core benefits only",
      "Somewhat important: Added protection or flexibility would be helpful",
      "Important: Features for unexpected events, like illness or disability, add value",
      "Very important: Comprehensive benefits to adapt to life&apos;s uncertainties are essential"
    ]
  }
]

export default function UploadInterface({ token }: UploadInterfaceProps) {
  const [email, setEmail] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadSuccess, setUploadSuccess] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [formAnswers, setFormAnswers] = useState<string[]>(new Array(formQuestions.length).fill(''))

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0]
    if (selectedFile) {
      if (selectedFile.type !== 'application/pdf') {
        setError('Please select a PDF file.')
        setFile(null)
      } else if (selectedFile.size > 2 * 1024 * 1024) {
        setError('File size exceeds 2 MB limit. Please select a smaller file.')
        setFile(null)
      } else {
        setFile(selectedFile)
        setError(null)
      }
    }
  }

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
  }

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    const droppedFile = event.dataTransfer.files[0]
    if (droppedFile) {
      if (droppedFile.type !== 'application/pdf') {
        setError('Please select a PDF file.')
      } else if (droppedFile.size > 2 * 1024 * 1024) {
        setError('File size exceeds 2 MB limit. Please select a smaller file.')
      } else {
        setFile(droppedFile)
        setError(null)
      }
    }
  }

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleUpload = async () => {
    if (!file || !email || formAnswers.some(answer => answer === '')) return
    
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.')
      return
    }

    setIsUploading(true)
    setError(null)
    setUploadSuccess(false)

    try {
      const formData = new FormData()
      formData.append('data0', file)
      formData.append('metadata', JSON.stringify({
        email: email.trim(),
        token: token,
        formAnswers: formAnswers
      }))

      const response = await fetch('/api/upload', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      })

      const responseText = await response.text()
      console.log('n8n response:', responseText)

      let data: UploadResponse
      try {
        data = JSON.parse(responseText)
      } catch {
        console.log('Response is not JSON:', responseText)
        data = { success: response.ok, message: responseText }
      }

      if (!response.ok) {
        throw new Error(data.error || data.message || 'Upload failed')
      }

      setUploadSuccess(true)
      setFile(null)
      setEmail('')
      setFormAnswers(new Array(formQuestions.length).fill(''))
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }

    } catch (error) {
      console.error('Upload failed:', error)
      setError(
        error instanceof Error 
          ? error.message 
          : 'An error occurred during upload. Please try again.'
      )
    } finally {
      setIsUploading(false)
    }
  }

  const handleFormChange = (index: number, value: string) => {
    const newFormAnswers = [...formAnswers]
    newFormAnswers[index] = value
    setFormAnswers(newFormAnswers)
  }

  const isFormComplete = file && email && formAnswers.every(answer => answer !== '')

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          as="div"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-3xl font-bold mb-6 text-[#4361EE] text-center">Goal-Based Policy Analysis</h3>
          
          <div className="space-y-8 bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center">
              <Zap className="inline-block text-[#4361EE] mb-4" size={40} />
              <p className="text-lg text-gray-700">
                Create your Goal-Based Policy Analysis in minutes. Our AI will transform your illustration and client objectives into a powerful presentation companion.
              </p>
            </div>

            <div 
              onClick={() => fileInputRef.current?.click()}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              className="text-center p-8 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-blue-50"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Upload className="mx-auto mb-4 text-[#4361EE]" size={40} />
                <p className="mb-2 text-gray-700 font-medium">Drop your life insurance illustration here or click to browse</p>
                <p className="text-sm text-gray-500">(PDF up to 2MB)</p>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept=".pdf"
                  className="hidden"
                />
              </motion.div>
            </div>
          
            {file && (
              <p className="text-sm text-green-600 font-medium">Selected file: {file.name}</p>
            )}

            {error && (
              <p className="text-sm text-red-600 font-medium">{error}</p>
            )}
          
            <div>
              <label htmlFor="email" className="block mb-2 font-medium text-[#4361EE]">Email for Report Delivery</label>
              <Input
                type="email"
                id="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-gray-300 focus:border-[#4361EE] focus:ring-[#4361EE]"
              />
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h4 className="text-2xl font-semibold text-[#4361EE] mb-4">Client Goals and Priorities</h4>
              <p className="text-gray-700 mb-6">
                Tell us about your client&apos;s goals. Our AI will analyze these priorities alongside your illustration to create a personalized presentation framework that connects policy features to client objectives.
              </p>
            </div>

            {formQuestions.map((q, index) => (
              <div key={index}>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <label className="block mb-2 font-medium text-[#4361EE]">{q.question}</label>
                  <Select onValueChange={(value) => handleFormChange(index, value)}>
                    <SelectTrigger className="border-gray-300 focus:border-[#4361EE] focus:ring-[#4361EE]">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      {q.options.map((option, optionIndex) => (
                        <SelectItem key={optionIndex} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </motion.div>
              </div>
            ))}
          
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-blue-50 border border-blue-200 rounded-md p-6 mt-8 mb-4"
              >
                <h5 className="text-lg font-semibold text-[#4361EE] mb-2">Ready for your Goal-Based Policy Analysis?</h5>
                <p className="text-gray-700 mb-4">Before clicking submit, please verify:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Your email address is entered correctly - your analysis will arrive here</li>
                  <li>Your responses accurately reflect your client&apos;s priorities</li>
                  <li>Your illustration PDF has been successfully uploaded</li>
                </ul>
              </motion.div>
            </div>

            <Button 
              className="w-full bg-[#4361EE] text-white hover:bg-[#3651DE] transition-all duration-300" 
              size="lg"
              onClick={handleUpload}
              disabled={!isFormComplete || isUploading}
            >
              {isUploading ? 'Uploading...' : 'Submit for Analysis'}
            </Button>

            <p className="text-sm text-gray-600 mt-4">
              Our AI will deliver your Goal-Based Policy Analysis within 5-10 minutes. Can&apos;t find it?
              <br />
              • Check your spam/junk folders
              <br />
              • Verify your email address
              <br />
              • Need help? Contact us at support@fpai.com
              <br /><br />
              The accuracy of your AI-powered analysis depends on both your illustration and goal selections. Take a moment to review your inputs to ensure the most relevant presentation companion possible.
            </p>

            {uploadSuccess && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-4 p-4 bg-green-100 text-green-700 rounded-md flex items-center"
              >
                <CheckCircle className="mr-2" />
                <span>Thank you for uploading your policy document. Your reports will be sent shortly to the email address you provided.</span>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
