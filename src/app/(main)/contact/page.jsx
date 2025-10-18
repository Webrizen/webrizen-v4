import React from 'react'
import Link from 'next/link'

export default function page() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Header Section */}
      <div className="border-b border-zinc-100 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-light tracking-tight text-zinc-900 dark:text-white mb-6">
              Let's <span className="font-serif italic">Connect</span>
            </h1>
            <p className="text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto font-light">
              Ready to transform your vision into an exceptional digital experience? 
              Let's discuss your project and craft something extraordinary together.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Content */}
      <div className="border-b border-zinc-100 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-light text-zinc-900 dark:text-white mb-8">
                  Get in Touch
                </h2>
                
                {/* Agency Name */}
                <div className="mb-10">
                  <h3 className="text-3xl font-light text-zinc-900 dark:text-white mb-2">
                    Webrizen
                  </h3>
                  <div className="w-20 h-0.5 bg-indigo-700 dark:bg-indigo-400"></div>
                </div>

                {/* Contact Details */}
                <div className="space-y-8">
                  {/* Email */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-900/50 transition-colors duration-300">
                      <svg className="w-6 h-6 text-indigo-700 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wide mb-1">
                        Email
                      </h4>
                      <a 
                        href="mailto:webrizen@gmail.com"
                        className="text-lg text-zinc-900 dark:text-white hover:text-indigo-700 dark:hover:text-indigo-400 transition-colors duration-300"
                      >
                        webrizen@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-900/50 transition-colors duration-300">
                      <svg className="w-6 h-6 text-indigo-700 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wide mb-1">
                        Location
                      </h4>
                      <p className="text-lg text-zinc-900 dark:text-white leading-relaxed">
                        Siliguri, West Bengal
                        <br />
                        India
                      </p>
                    </div>
                  </div>

                  {/* Availability */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-900/50 transition-colors duration-300">
                      <svg className="w-6 h-6 text-indigo-700 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wide mb-1">
                        Response Time
                      </h4>
                      <p className="text-lg text-zinc-900 dark:text-white">
                        Within 24 hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Process */}
              <div className="pt-8 border-t border-zinc-100 dark:border-zinc-800">
                <h3 className="text-lg font-light text-zinc-900 dark:text-white mb-6">
                  Our Process
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-6 h-6 bg-indigo-700 dark:bg-indigo-400 text-white text-xs font-medium rounded-full flex items-center justify-center flex-shrink-0">
                      1
                    </div>
                    <span className="text-zinc-600 dark:text-zinc-400 font-light">Initial Consultation</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-6 h-6 bg-indigo-700 dark:bg-indigo-400 text-white text-xs font-medium rounded-full flex items-center justify-center flex-shrink-0">
                      2
                    </div>
                    <span className="text-zinc-600 dark:text-zinc-400 font-light">Strategy & Proposal</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-6 h-6 bg-indigo-700 dark:bg-indigo-400 text-white text-xs font-medium rounded-full flex items-center justify-center flex-shrink-0">
                      3
                    </div>
                    <span className="text-zinc-600 dark:text-zinc-400 font-light">Project Kickoff</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-light text-zinc-900 dark:text-white mb-4">
                  Start Your Project
                </h2>
                <p className="text-zinc-500 dark:text-zinc-400 font-light">
                  Tell us about your vision and we'll craft a strategic approach to bring it to life.
                </p>
              </div>

              <form className="space-y-6" method='POST' action="https://formsubmit.co/webrizen@gmail.com">
              <input type="hidden" name="_next" value={`https://webrizen.com/thank-you`} />
              <input type="hidden" name="_subject" value="New Contact Form Submission From Webrizen" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:border-indigo-700 dark:focus:border-indigo-400 focus:ring-1 focus:ring-indigo-700 dark:focus:ring-indigo-400 transition-colors duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:border-indigo-700 dark:focus:border-indigo-400 focus:ring-1 focus:ring-indigo-700 dark:focus:ring-indigo-400 transition-colors duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:border-indigo-700 dark:focus:border-indigo-400 focus:ring-1 focus:ring-indigo-700 dark:focus:ring-indigo-400 transition-colors duration-300"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    Project Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white focus:border-indigo-700 dark:focus:border-indigo-400 focus:ring-1 focus:ring-indigo-700 dark:focus:ring-indigo-400 transition-colors duration-300"
                  >
                    <option value="">Select budget range</option>
                    <option value="50k-100k">$50K - $100K</option>
                    <option value="100k-190k">$100K - $190K</option>
                    <option value="190k-plus">$190K+</option>
                    <option value="undecided">To be discussed</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:border-indigo-700 dark:focus:border-indigo-400 focus:ring-1 focus:ring-indigo-700 dark:focus:ring-indigo-400 transition-colors duration-300 resize-none"
                    placeholder="Tell us about your project vision, goals, and timeline..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-indigo-700 hover:bg-indigo-800 text-white py-4 px-8 text-sm font-medium tracking-wide uppercase transition-all duration-300 flex items-center justify-center gap-3 group"
                >
                  Send Message
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-light text-zinc-900 dark:text-white mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto font-light">
            Let's create something extraordinary together. Your vision, our expertise—unlimited possibilities.
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              href="/products"
              className="inline-flex items-center gap-3 bg-indigo-700 hover:bg-indigo-800 text-white px-8 py-4 text-sm font-medium tracking-wide uppercase transition-all duration-300 group"
            >
              View Our Work
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <a 
              href="mailto:webrizen@gmail.com"
              className="inline-flex items-center gap-3 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white hover:bg-zinc-50 dark:hover:bg-zinc-800 px-8 py-4 text-sm font-medium tracking-wide uppercase transition-all duration-300"
            >
              Email Directly
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}