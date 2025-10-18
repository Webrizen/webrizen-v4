import { getTools } from '@/actions/products';
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

export default async function page() {
    const tools = await getTools();
    
    return (
        <div className="min-h-screen bg-white dark:bg-black">
            {/* Header Section */}
            <div className="border-b border-zinc-100 dark:border-zinc-800">
                <div className="max-w-7xl mx-auto px-6 py-20">
                    <div className="text-center">
                        <h1 className="text-5xl lg:text-6xl font-light tracking-tight text-zinc-900 dark:text-white mb-6">
                            Our <span className="font-serif italic">Tools</span>
                        </h1>
                        <p className="text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto font-light">
                            Premium digital tools crafted to enhance your workflow and creativity
                        </p>
                    </div>
                </div>
            </div>

            {/* Tools Grid */}
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {tools.map((tool) => (
                        <ToolCard key={tool._id} tool={tool} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function ToolCard({ tool }) {
    return (
        <div className="group cursor-pointer bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:border-zinc-200 dark:hover:border-zinc-700 transition-all duration-300 hover:shadow-lg">
            {/* Image Container */}
            <div className="relative overflow-hidden bg-zinc-50 dark:bg-zinc-800">
                <div className="aspect-[4/3] relative">
                    <Image 
                        src={tool.screenshotUrl}
                        alt={tool.name}
                        fill
                        className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-full ${
                            tool.status === 'live' 
                                ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300' 
                                : 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300'
                        }`}>
                            {tool.status}
                        </span>
                    </div>

                    {/* Price Badge */}
                    <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 text-xs font-medium tracking-wider uppercase rounded-full ${
                            tool.price === 'free' 
                                ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300' 
                                : tool.price === 'freemium'
                                ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300'
                                : 'bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300'
                        }`}>
                            {tool.price}
                        </span>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
                {/* Category */}
                <div className="flex items-center justify-between">
                    <span className="text-sm font-medium tracking-widest uppercase text-indigo-700 dark:text-indigo-400">
                        {tool.category}
                    </span>
                </div>

                {/* Name & Tagline */}
                <div className="space-y-2">
                    <h3 className="text-xl font-light text-zinc-900 dark:text-white group-hover:text-indigo-700 dark:group-hover:text-indigo-400 transition-colors duration-300 leading-tight">
                        {tool.name}
                    </h3>
                    <p className="text-zinc-500 dark:text-zinc-400 font-light leading-relaxed">
                        {tool.tagline}
                    </p>
                </div>

                {/* Description */}
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                    {tool.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                    <h4 className="text-sm font-medium text-zinc-900 dark:text-white uppercase tracking-wide">
                        Features
                    </h4>
                    <ul className="space-y-1">
                        {tool.features.slice(0, 3).map((feature, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                                <svg className="w-4 h-4 text-indigo-700 dark:text-indigo-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                {feature}
                            </li>
                        ))}
                        {tool.features.length > 3 && (
                            <li className="text-sm text-zinc-400 dark:text-zinc-500">
                                +{tool.features.length - 3} more features
                            </li>
                        )}
                    </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                    {tool.liveUrl && (
                        <a 
                            href={tool.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-indigo-700 hover:bg-indigo-800 text-white text-sm font-medium py-3 px-4 text-center transition-all duration-300 flex items-center justify-center gap-2 group"
                        >
                            Use Tool
                            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    )}
                    
                    <Link 
                        href={`/resources/${tool.slug}`}
                        className="flex-1 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-sm font-medium py-3 px-4 text-center transition-all duration-300"
                    >
                        View Details
                    </Link>
                </div>

                {/* Published Date */}
                <div className="text-xs text-zinc-400 dark:text-zinc-500 pt-2">
                    Launched {new Date(tool.publishedAt).toLocaleDateString('en-US', {
                        month: 'long',
                        year: 'numeric'
                    })}
                </div>
            </div>
        </div>
    );
}