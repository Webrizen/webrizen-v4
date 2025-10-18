import React from 'react'
import Link from 'next/link'

export default function page() {
  return (
    <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        {/* Success Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center">
            <svg className="w-12 h-12 text-emerald-700 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>

        {/* Message */}
        <h1 className="text-4xl lg:text-5xl font-light text-zinc-900 dark:text-white mb-6 tracking-tight">
          Thank You for Your Submission!
        </h1>
        
        <p className="text-xl text-zinc-500 dark:text-zinc-400 mb-8 font-light leading-relaxed">
          We've received your message and will get back to you within 24 hours. 
          Our team is excited to learn more about your project and discuss how we can bring your vision to life.
        </p>

        {/* Next Steps */}
        <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 p-8 mb-8">
          <h3 className="text-lg font-light text-zinc-900 dark:text-white mb-4">
            What's Next?
          </h3>
          <div className="space-y-3 text-left">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-indigo-700 dark:bg-indigo-400 text-white text-xs font-medium rounded-full flex items-center justify-center flex-shrink-0">
                1
              </div>
              <span className="text-zinc-600 dark:text-zinc-400 font-light">Initial review of your project details</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-indigo-700 dark:bg-indigo-400 text-white text-xs font-medium rounded-full flex items-center justify-center flex-shrink-0">
                2
              </div>
              <span className="text-zinc-600 dark:text-zinc-400 font-light">Strategic consultation call</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-indigo-700 dark:bg-indigo-400 text-white text-xs font-medium rounded-full flex items-center justify-center flex-shrink-0">
                3
              </div>
              <span className="text-zinc-600 dark:text-zinc-400 font-light">Customized project proposal</span>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mb-8">
          <p className="text-zinc-500 dark:text-zinc-400 mb-4 font-light">
            For immediate assistance, feel free to reach out directly:
          </p>
          <a 
            href="mailto:webrizen@gmail.com"
            className="text-indigo-700 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-light transition-colors duration-300"
          >
            webrizen@gmail.com
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/"
            className="bg-indigo-700 hover:bg-indigo-800 text-white px-8 py-4 text-sm font-medium tracking-wide uppercase transition-all duration-300 flex items-center justify-center gap-3 group"
          >
            Return Home
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </Link>
          
          <Link 
            href="/products"
            className="border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white hover:bg-zinc-50 dark:hover:bg-zinc-800 px-8 py-4 text-sm font-medium tracking-wide uppercase transition-all duration-300 flex items-center justify-center gap-3 group"
          >
            View Our Work
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Follow Up */}
        <div className="mt-12 pt-8 border-t border-zinc-100 dark:border-zinc-800">
          <p className="text-sm text-zinc-400 dark:text-zinc-500 font-light">
            We look forward to creating something extraordinary with you.
            <br />
            <span className="text-indigo-700 dark:text-indigo-400">— The Webrizen Team</span>
          </p>
        </div>
      </div>
    </div>
  )
}