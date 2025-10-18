import { getToolBySlug } from '@/actions/products';
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

export default async function page({ params }) {
    const { slug } = await params;
    const tool = await getToolBySlug(slug);
    
    return (
        <div className="min-h-screen bg-white dark:bg-black">
            {/* Navigation */}
            <nav className="border-b border-zinc-100 dark:border-zinc-800 backdrop-blur-sm bg-white/80 dark:bg-black/80">
                <div className="max-w-7xl mx-auto px-6 py-6">
                    <Link 
                        href="/resources"
                        className="inline-flex items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-300 group"
                    >
                        <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Resources
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="border-b border-zinc-100 dark:border-zinc-800">
                <div className="max-w-7xl mx-auto px-6 py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        {/* Content */}
                        <div className="space-y-8">
                            {/* Badges */}
                            <div className="flex flex-wrap gap-4">
                                <span className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-medium tracking-wide uppercase rounded-full">
                                    {tool.category}
                                </span>
                                <span className={`px-4 py-2 text-sm font-medium tracking-wider uppercase rounded-full ${
                                    tool.status === 'live' 
                                        ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300' 
                                        : 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300'
                                }`}>
                                    {tool.status}
                                </span>
                                <span className={`px-4 py-2 text-sm font-medium tracking-wider uppercase rounded-full ${
                                    tool.price === 'free' 
                                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300' 
                                        : tool.price === 'freemium'
                                        ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300'
                                        : 'bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300'
                                }`}>
                                    {tool.price}
                                </span>
                            </div>

                            {/* Title & Tagline */}
                            <div className="space-y-4">
                                <h1 className="text-4xl lg:text-5xl font-light text-zinc-900 dark:text-white leading-tight tracking-tight">
                                    {tool.name}
                                </h1>
                                <p className="text-xl text-zinc-500 dark:text-zinc-400 font-light leading-relaxed">
                                    {tool.tagline}
                                </p>
                            </div>

                            {/* Description */}
                            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                                {tool.description}
                            </p>

                            {/* Primary CTA */}
                            {tool.liveUrl && (
                                <div className="flex gap-4 pt-4">
                                    <a 
                                        href={tool.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-indigo-700 hover:bg-indigo-800 text-white px-8 py-4 text-sm font-medium tracking-wide uppercase transition-all duration-300 flex items-center gap-3 group"
                                    >
                                        Use Tool Now
                                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                </div>
                            )}

                            {/* Launch Date */}
                            <div className="text-sm text-zinc-400 dark:text-zinc-500 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                                Launched {new Date(tool.publishedAt).toLocaleDateString('en-US', {
                                    month: 'long',
                                    day: 'numeric',
                                    year: 'numeric'
                                })}
                            </div>
                        </div>

                        {/* Screenshot */}
                        <div className="relative">
                            <div className="aspect-[4/3] bg-zinc-50 dark:bg-zinc-900 rounded-none overflow-hidden border border-zinc-100 dark:border-zinc-800">
                                <Image 
                                    src={tool.screenshotUrl}
                                    alt={tool.name}
                                    width={800}
                                    height={600}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="border-b border-zinc-100 dark:border-zinc-800">
                <div className="max-w-7xl mx-auto px-6 py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        <div>
                            <h2 className="text-2xl font-light text-zinc-900 dark:text-white mb-6">
                                Key Features
                            </h2>
                            <p className="text-zinc-500 dark:text-zinc-400 font-light">
                                Everything you need to know about {tool.name}'s main features.
                            </p>
                        </div>
                        <div className="lg:col-span-2">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {tool.features.map((feature, index) => (
                                    <div key={index} className="flex items-start gap-4 group">
                                        <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-900/50 transition-colors duration-300">
                                            <svg className="w-4 h-4 text-indigo-700 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-light text-zinc-900 dark:text-white mb-2">
                                                {feature}
                                            </h3>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}