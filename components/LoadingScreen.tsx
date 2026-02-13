'use client'

import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 10))
    }, 150)

    const timer = setTimeout(() => setIsLoading(false), 2000)

    return () => {
      clearInterval(progressInterval)
      clearTimeout(timer)
    }
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center px-4">
      <div className="text-center w-full max-w-sm sm:max-w-md">

        {/* Logo */}
        <div className="mb-6 sm:mb-8">
          <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto relative">
            <div className="absolute inset-0 border-4 border-primary/30 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-transparent border-t-primary rounded-full animate-spin"></div>

            <div className="absolute inset-3 sm:inset-4 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center animate-pulse">
              <svg
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Text */}
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
          Loading...
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mb-5">
          Please wait while we prepare everything...
        </p>

        {/* Progress Bar */}
        <div className="w-full max-w-xs sm:max-w-sm mx-auto bg-gray-200 rounded-full h-2 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-300 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage */}
        <p className="text-primary font-semibold mt-3 text-sm sm:text-base">
          {progress}%
        </p>

        {/* Dots */}
        <div className="flex justify-center space-x-2 mt-5">
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>

      </div>
    </div>
  )
}
