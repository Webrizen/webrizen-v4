import React from 'react';
import { getBlogs } from '@/actions/blogs';
import Link from 'next/link';
import Image from 'next/image';

export default async function page() {
    const blogs = await getBlogs();
    
    return (
        <div className="min-h-screen bg-white dark:bg-black">
            {/* Header Section */}
            <div className="border-b border-zinc-100 dark:border-zinc-800">
                <div className="max-w-7xl mx-auto px-6 py-20">
                    <div className="text-center">
                        <h1 className="text-5xl lg:text-6xl font-light tracking-tight text-zinc-900 dark:text-white mb-6">
                            Our <span className="font-serif italic">Journal</span>
                        </h1>
                        <p className="text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto font-light">
                            Insights on lifestyle, wellness, and the art of intentional living
                        </p>
                    </div>
                </div>
            </div>

            {/* Blogs Grid */}
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <BlogCard key={blog._id} blog={blog} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function BlogCard({ blog }) {
    return (
        <Link href={`/blogs/${blog.slug}`}>
            <div className="group cursor-pointer bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:border-zinc-200 dark:hover:border-zinc-700 transition-all duration-300 hover:shadow-lg">
                {/* Image Container */}
                <div className="relative overflow-hidden bg-zinc-50 dark:bg-zinc-800">
                    <div className="aspect-[4/3] relative">
                        <Image 
                            src={blog.coverImage.asset.url}
                            alt={blog.coverImage.alt}
                            fill
                            className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                    {/* Categories */}
                    <div className="flex flex-wrap gap-2">
                        {blog.categories.map((category, index) => (
                            <span 
                                key={index}
                                className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-medium tracking-wide uppercase rounded-full"
                            >
                                {category}
                            </span>
                        ))}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-light text-zinc-900 dark:text-white group-hover:text-indigo-700 dark:group-hover:text-indigo-400 transition-colors duration-300 leading-tight">
                        {blog.title}
                    </h3>

                    {/* Meta Information */}
                    <div className="flex items-center justify-between pt-4 border-t border-zinc-100 dark:border-zinc-800">
                        <div className="flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400">
                            <span className="font-medium text-zinc-900 dark:text-white">
                                {blog.author.name}
                            </span>
                            <span>•</span>
                            <span>{blog.readTime} min read</span>
                        </div>
                        
                        <div className="text-sm text-zinc-400 dark:text-zinc-500">
                            {new Date(blog.publishedAt).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric'
                            })}
                        </div>
                    </div>

                    {/* CTA Arrow */}
                    <div className="pt-2">
                        <span className="text-sm font-medium text-zinc-900 dark:text-white group-hover:text-indigo-700 dark:group-hover:text-indigo-400 transition-colors duration-300 flex items-center gap-2">
                            Read Article
                            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}