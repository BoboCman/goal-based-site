'use client'

import { Zap, ArrowRight, Map, Lightbulb, BracketsIcon as Bridge, PresentationIcon as PresentationChart, UploadIcon, Brain, PresentationIcon, FileText, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-[#F8FAFC] to-[#E2E8F0] py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#4B6FEE] mb-4 tracking-tight">
          Goal-Based Policy Analysis<br />
          <span className="text-4xl md:text-5xl lg:text-6xl">In Minutes</span>
        </h1>
        <h2 className="text-2xl md:text-3xl mb-12 text-gray-600 font-light">
          Transform Life Insurance Illustrations Into AI-Powered Client Guidance
        </h2>
        
        <div className="max-w-4xl mx-auto mb-16 bg-white rounded-lg shadow-xl overflow-hidden transform transition-all hover:scale-105 duration-300">
          <div className="p-8">
            <h3 className="text-3xl font-bold mb-6 text-[#4B6FEE] flex items-center justify-center">
              <Zap className="w-8 h-8 mr-2" aria-hidden="true" /> 
              From Illustration to Impact in Minutes
            </h3>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Upload any illustration and our AI creates your presentation companion. Instantly transform technical details into meaningful client discussions with intelligent analysis that connects policy features to client goals.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-gray-700 font-medium">
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-green-500 mr-2" aria-hidden="true" />
                <span>No complex software to learn</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-green-500 mr-2" aria-hidden="true" />
                <span>No lengthy analysis to perform</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-4xl font-semibold mb-16 text-[#4B6FEE] text-center">How It Works</h3>
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Arrow decorations */}
            <div className="hidden md:block absolute top-1/4 left-[30%] transform -translate-y-1/2">
              <ArrowRight className="w-12 h-12 text-[#4B6FEE]/30" />
            </div>
            <div className="hidden md:block absolute top-1/4 right-[30%] transform -translate-y-1/2">
              <ArrowRight className="w-12 h-12 text-[#4B6FEE]/30" />
            </div>

            {/* Step 1 */}
            <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
              <div className="bg-[#4B6FEE]/10 p-6 rounded-full mb-4">
                <UploadIcon className="w-12 h-12 text-[#4B6FEE]" aria-hidden="true" />
              </div>
              <h4 className="text-2xl font-semibold mb-4 text-[#4B6FEE]">1. Quick Upload</h4>
              <ul className="space-y-2 text-left text-gray-600 text-lg">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Share any carrier&apos;s life insurance illustration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Input key client objectives &amp; priorities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Takes less than 2 minutes</span>
                </li>
              </ul>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
              <div className="bg-[#4B6FEE]/10 p-6 rounded-full mb-4">
                <Brain className="w-12 h-12 text-[#4B6FEE]" aria-hidden="true" />
              </div>
              <h4 className="text-2xl font-semibold mb-4 text-[#4B6FEE]">2. AI Transforms</h4>
              <ul className="space-y-2 text-left text-gray-600 text-lg">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Analyzes policy features &amp; benefits</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Maps coverage to client goals</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Creates personalized presentation framework</span>
                </li>
              </ul>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
              <div className="bg-[#4B6FEE]/10 p-6 rounded-full mb-4">
                <PresentationIcon className="w-12 h-12 text-[#4B6FEE]" aria-hidden="true" />
              </div>
              <h4 className="text-2xl font-semibold mb-4 text-[#4B6FEE]">3. Ready to Present</h4>
              <ul className="space-y-2 text-left text-gray-600 text-lg">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Receive your analysis in minutes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Get clear client conversation guides</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Present with confidence</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-4xl font-semibold mb-8 text-[#4B6FEE] text-center">What You&apos;ll Receive</h3>
          <div className="bg-white rounded-xl shadow-lg p-12">
            <div className="text-center mb-8">
              <h4 className="text-3xl font-bold text-[#4B6FEE] mb-2">Goal-Based Policy Analysis</h4>
              <p className="text-xl text-gray-600">Because numbers tell the what, but stories sell the why.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-lg p-6 transform transition-all hover:scale-105 duration-300">
                <div className="flex flex-col items-center mb-4">
                  <Map className="w-8 h-8 text-[#4B6FEE] mb-2" />
                  <h4 className="text-2xl font-bold text-[#4B6FEE] text-center">Conversation Roadmap &amp;<br />Planning Guide</h4>
                </div>
                <p className="text-gray-600 text-center">A concise framework complementing your policy illustration. Provides the narrative to guide meaningful client discussions around protection goals, time horizons, and risk preferences.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 transform transition-all hover:scale-105 duration-300">
                <div className="flex flex-col items-center mb-4">
                  <Lightbulb className="w-8 h-8 text-[#4B6FEE] mb-2" />
                  <h4 className="text-2xl font-bold text-[#4B6FEE] text-center">Strategic<br />Value Story</h4>
                </div>
                <p className="text-gray-600 text-center">Transform complex policy features into clear client benefits. Distills technical details into compelling talking points, articulating how policy elements deliver on client objectives.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 transform transition-all hover:scale-105 duration-300">
                <div className="flex flex-col items-center mb-4">
                  <Bridge className="w-8 h-8 text-[#4B6FEE] mb-2" />
                  <h4 className="text-2xl font-bold text-[#4B6FEE] text-center">Discovery-to-Solution<br />Pathway</h4>
                </div>
                <p className="text-gray-600 text-center">Bridge the gap between client discovery and policy recommendations. Demonstrate how each policy element directly addresses your client&apos;s stated needs and concerns.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 transform transition-all hover:scale-105 duration-300">
                <div className="flex flex-col items-center mb-4">
                  <PresentationChart className="w-8 h-8 text-[#4B6FEE] mb-2" />
                  <h4 className="text-2xl font-bold text-[#4B6FEE] text-center">Implementation &amp;<br />Education Framework</h4>
                </div>
                <p className="text-gray-600 text-center">Turn technical considerations into client-friendly discussions. Explain key concepts, address common questions, and highlight important features without getting lost in illustration details.</p>
              </div>
            </div>
            <div className="mt-8 p-6 bg-[#4B6FEE]/10 rounded-lg">
              <p className="text-lg text-gray-700 italic">
                Two Essential Tools, One Complete Story: Your illustration delivers the policy details. Your Goal-Based Policy Analysis transforms them into meaningful client conversations. Together, they help you connect protection features with client goals and turn policy benefits into personal value.
              </p>
            </div>
            <Button asChild className="w-full bg-[#4B6FEE] hover:bg-[#3B4FDE] text-white font-medium py-6 rounded-lg flex items-center justify-center gap-2 text-lg mt-12">
              <Link href="/sample-report">
                <FileText className="w-5 h-5" aria-hidden="true" /> Download Sample Report
              </Link>
            </Button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden transform transition-all hover:scale-105 duration-300">
            <div className="bg-[#4B6FEE] text-white p-6">
              <h3 className="text-3xl font-bold mb-2 flex items-center justify-center">
                <Zap className="w-8 h-8 mr-2" aria-hidden="true" />
                Ready to Align Policies with Your Client&apos;s Goals?
              </h3>
              <p className="text-xl">Upload illustration, share client goals, get your analysis in minutes</p>
            </div>
            <div className="p-8">
              <div className="flex justify-center mt-8">
                <Button asChild className="bg-[#22C55E] text-white hover:bg-[#16A34A] text-lg px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center">
                  <Link href="/pre-payment-info">
                    Start Your Analysis
                    <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
