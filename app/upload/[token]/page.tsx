'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState, use } from 'react'
import { UploadInterface } from '@/components/UploadInterface'  // Note: Using named import since I see interface in component code

export default function UploadPage({ 
  params 
}: { 
  params: Promise<{ token: string }> 
}) {
  const router = useRouter()
  const { token } = use(params)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (token) {
      try {
        sessionStorage.setItem('upload_token', token)
        setIsLoading(false)
      } catch (error) {
        console.error('Session storage error:', error)
        router.push('/')
      }
    } else {
      router.push('/')
    }
  }, [token, router])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#4B6FEE]" aria-label="Loading" />
      </div>
    )
  }

  return <UploadInterface token={token} />
}
