import { getBlogBySlug } from '@/actions/blogs';
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';

export default async function page({ params }) {
    const { slug } = await params;
    const blog = await getBlogBySlug(slug);
    
    const portableTextComponents = {
        block: {
            normal: ({ children }) => (
                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 font-light">
                    {children}
                </p>
            ),
        },
    };

    return (
        <div className="min-h-screen bg-white dark:bg-black">
            {/* Navigation */}
            <nav className="border-b border-zinc-100 dark:border-zinc-800 backdrop-blur-sm bg-white/80 dark:bg-black/80">
                <div className="max-w-4xl mx-auto px-6 py-6">
                    <Link 
                        href="/blogs"
                        className="inline-flex items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-300 group"
                    >
                        <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Blogs
                    </Link>
                </div>
            </nav>

            {/* Article Header */}
            <div className="border-b border-zinc-100 dark:border-zinc-800">
                <div className="max-w-4xl mx-auto px-6 py-16">
                    {/* Categories */}
                    <div className="flex flex-wrap gap-3 mb-6">
                        {blog.categories.map((category, index) => (
                            <span 
                                key={index}
                                className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-medium tracking-wide uppercase rounded-full"
                            >
                                {category}
                            </span>
                        ))}
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl lg:text-5xl font-light text-zinc-900 dark:text-white leading-tight mb-8 tracking-tight">
                        {blog.title}
                    </h1>

                    {/* Meta Information */}
                    <div className="flex items-center gap-6 text-zinc-500 dark:text-zinc-400 mb-8">
                        <div className="flex items-center gap-3">
                            <span className="font-medium text-zinc-900 dark:text-white">
                                {blog.author.name}
                            </span>
                            <span>•</span>
                            <span>{blog.readTime} min read</span>
                        </div>
                        <span>•</span>
                        <span>
                            {new Date(blog.publishedAt).toLocaleDateString('en-US', {
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric'
                            })}
                        </span>
                    </div>

                    {/* Cover Image */}
                    <div className="aspect-[16/9] bg-zinc-50 dark:bg-zinc-900 rounded-none overflow-hidden mb-12">
                        <Image 
                            src={blog.coverImage.asset.url}
                            alt={blog.coverImage.alt}
                            width={1200}
                            height={675}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Article Content */}
            <div className="border-b border-zinc-100 dark:border-zinc-800">
                <div className="max-w-2xl mx-auto px-6 py-16">
                    <article className="prose prose-lg dark:prose-invert max-w-none">
                        <PortableText 
                            value={blog.body} 
                            components={portableTextComponents}
                        />
                    </article>
                </div>
            </div>

            {/* Tags */}
            {blog.tags && blog.tags.length > 0 && (
                <div className="border-b border-zinc-100 dark:border-zinc-800">
                    <div className="max-w-4xl mx-auto px-6 py-12">
                        <div className="flex items-center gap-4 flex-wrap">
                            <span className="text-sm font-medium text-zinc-900 dark:text-white uppercase tracking-wide">
                                Tags:
                            </span>
                            {blog.tags.map((tag, index) => (
                                <span 
                                    key={index}
                                    className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-sm rounded-full border border-zinc-200 dark:border-zinc-700"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Author Bio */}
            <div className="border-b border-zinc-100 dark:border-zinc-800">
                <div className="max-w-4xl mx-auto px-6 py-16">
                    <div className="flex items-start gap-6">
                        <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-indigo-700 dark:text-indigo-400 text-xl font-light">
                                {blog.author.name.charAt(0)}
                            </span>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-xl font-light text-zinc-900 dark:text-white">
                                {blog.author.name}
                            </h3>
                            <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                                Writer and mindfulness advocate exploring the intersection of intentional living 
                                and modern productivity. Passionate about helping others find calm in the chaos.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Related Articles CTA */}
            <div className="bg-zinc-50 dark:bg-zinc-900">
                <div className="max-w-4xl mx-auto px-6 py-20 text-center">
                    <h3 className="text-2xl font-light text-zinc-900 dark:text-white mb-6">
                        Explore More Insights
                    </h3>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto font-light">
                        Discover more articles on mindfulness, productivity, and intentional living.
                    </p>
                    <Link 
                        href="/blogs"
                        className="inline-flex items-center gap-3 bg-indigo-700 hover:bg-indigo-800 text-white px-8 py-4 text-sm font-medium tracking-wide uppercase transition-all duration-300 group"
                    >
                        Read More Articles
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}