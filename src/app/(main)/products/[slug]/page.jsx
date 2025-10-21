import React from 'react';
import { getProjectBySlug } from '@/actions/products';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';

export default async function page({ params }) {
    const { slug } = await params;
    const project = await getProjectBySlug(slug);
    
    const portableTextComponents = {
        block: {
            h3: ({ children }) => (
                <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-6 mt-12 first:mt-0 tracking-tight">
                    {children}
                </h3>
            ),
            normal: ({ children }) => (
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6 font-light">
                    {children}
                </p>
            ),
        },
        marks: {
            strong: ({ children }) => (
                <strong className="font-medium text-gray-900 dark:text-white">
                    {children}
                </strong>
            ),
            link: ({ value, children }) => (
                <a 
                    href={value.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline transition-colors duration-300"
                >
                    {children}
                </a>
            ),
        },
        list: {
            bullet: ({ children }) => (
                <ul className="space-y-3 mb-6">
                    {children}
                </ul>
            ),
        },
        listItem: {
            bullet: ({ children }) => (
                <li className="flex items-start gap-3 text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                    <span className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full mt-3 flex-shrink-0" />
                    <span>{children}</span>
                </li>
            ),
        },
    };

    return (
        <div className="min-h-screen bg-white dark:bg-black">
            <nav className="border-b border-gray-100 dark:border-gray-800 backdrop-blur-sm bg-white/80 dark:bg-black/80">
                <div className="max-w-4xl mx-auto px-6 py-6">
                    <Link 
                        href="/products"
                        className="inline-flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 group"
                    >
                        <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Projects
                    </Link>
                </div>
            </nav>

            <div className="border-b border-gray-100 dark:border-gray-800">
                <div className="max-w-4xl mx-auto px-6 py-20">
                    <div className="space-y-8">
                        <div>
                            <span className="text-xs font-medium tracking-widest uppercase text-gray-500 dark:text-gray-400 mb-4 block">
                                {project.division}
                            </span>
                            <h1 className="text-5xl lg:text-6xl font-light tracking-tight text-gray-900 dark:text-white leading-tight">
                                {project.title}
                            </h1>
                        </div>
                        
                        <p className="text-xl text-gray-500 dark:text-gray-400 font-light leading-relaxed">
                            {project.description}
                        </p>

                        {/* Status & Date */}
                        <div className="flex items-center gap-8 pt-4">
                            <div>
                                <span className={`px-4 py-2 text-xs font-medium tracking-wider uppercase ${
                                    project.status === 'archived' 
                                        ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300' 
                                        : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300'
                                }`}>
                                    {project.status}
                                </span>
                            </div>
                            <div className="text-sm text-gray-400 dark:text-gray-500">
                                Published {new Date(project.publishedAt).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4 pt-8">
                            {project.demoUrl && (
                                <a 
                                    href={project.demoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100 px-8 py-4 text-sm font-medium tracking-wide uppercase transition-all duration-300 flex items-center gap-3 group"
                                >
                                    View Live Demo
                                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            )}
                            
                            {project.githubUrl && (
                                <a 
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-900 px-8 py-4 text-sm font-medium tracking-wide uppercase transition-all duration-300 flex items-center gap-3 group"
                                >
                                    Source Code
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-b border-gray-100 dark:border-gray-800">
                <div className="max-w-4xl mx-auto px-6 py-20">
                    <div className="aspect-[16/9] bg-gray-50 dark:bg-gray-900 rounded-none overflow-hidden">
                        <img 
                            src={project.mainImageUrl} 
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
            {project.body && (
                <div className="border-b border-gray-100 dark:border-gray-800">
                    <div className="max-w-2xl mx-auto px-6 py-20">
                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            <PortableText 
                                value={project.body} 
                                components={portableTextComponents}
                            />
                        </div>
                    </div>
                </div>
            )}

            <div className="border-b border-gray-100 dark:border-gray-800">
                <div className="max-w-4xl mx-auto px-6 py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div>
                            <h3 className="text-sm font-medium tracking-widest uppercase text-gray-500 dark:text-gray-400 mb-6">
                                Technology Stack
                            </h3>
                        </div>
                        <div className="lg:col-span-2">
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                                {project.technologies.map((tech, index) => (
                                    <div key={index} className="group">
                                        <span className="text-lg text-gray-900 dark:text-white font-light group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300">
                                            {tech}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {project.galleryUrls.length > 0 && (
                <div className="border-b border-gray-100 dark:border-gray-800">
                    <div className="max-w-4xl mx-auto px-6 py-20">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            <div>
                                <h3 className="text-sm font-medium tracking-widest uppercase text-gray-500 dark:text-gray-400 mb-6">
                                    Project Gallery
                                </h3>
                            </div>
                            <div className="lg:col-span-2">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {project.galleryUrls.map((url, index) => (
                                        <div key={index} className="group">
                                            <div className="aspect-[4/3] bg-gray-50 dark:bg-gray-900 rounded-none overflow-hidden">
                                                <img 
                                                    src={url} 
                                                    alt={`${project.title} - View ${index + 1}`}
                                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className="bg-indigo-700">
                <div className="max-w-4xl mx-auto px-6 py-20 text-center">
                    <h3 className="text-2xl font-light text-white mb-8">
                        Ready to start your project?
                    </h3>
                    <Link 
                        href="/contact"
                        className="inline-flex items-center gap-3 text-sm font-medium tracking-widest uppercase text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300 group"
                    >
                        Get in Touch
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}