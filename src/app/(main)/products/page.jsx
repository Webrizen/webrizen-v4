import { getProjects } from '@/actions/products';
import React from 'react'
import Link from 'next/link';

export default async function page() {
    const projects = await getProjects();
    
    return (
        <div className="min-h-screen bg-white dark:bg-black">
            {/* Premium Header Section */}
            <div className="border-b border-gray-100 dark:border-gray-800">
                <div className="max-w-7xl mx-auto px-6 py-16">
                    <div className="text-center">
                        <h1 className="text-6xl font-light tracking-tight text-gray-900 dark:text-white mb-6">
                            Our <span className="font-serif italic">Work</span>
                        </h1>
                        <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-light">
                            Curated portfolio of digital excellence—where innovation meets impeccable execution
                        </p>
                    </div>
                </div>
            </div>

            {/* Projects Grid - Premium Layout */}
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {projects.map((project, index) => (
                        <ProjectCard key={project._id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}

function ProjectCard({ project, index }) {
    return (
        <Link href={`/products/${project.slug}`} key={index}>
            <div className="group cursor-pointer">
                <div className="relative overflow-hidden bg-gray-50 dark:bg-gray-900 rounded-none mb-8">
                    <div className="aspect-[4/3] relative">
                        <img 
                            src={project.mainImageUrl} 
                            alt={project.title}
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <div className="absolute top-6 left-6">
                            <span className={`px-4 py-2 text-xs font-medium tracking-wider uppercase ${
                                project.status === 'archived' 
                                    ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300' 
                                    : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300'
                            }`}>
                                {project.status}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <div>
                        <div className="flex items-center gap-4 mb-3">
                            <span className="text-xs font-medium tracking-widest uppercase text-gray-500 dark:text-gray-400">
                                {project.division}
                            </span>
                            <span className="text-gray-300 dark:text-gray-600">—</span>
                            <span className="text-xs text-gray-400 dark:text-gray-500">
                                {new Date(project.publishedAt).getFullYear()}
                            </span>
                        </div>
                        
                        <h3 className="text-2xl font-light text-gray-900 dark:text-white tracking-tight leading-tight">
                            {project.title}
                        </h3>
                    </div>

                    <p className="text-gray-500 dark:text-gray-400 font-light leading-relaxed text-lg line-clamp-2">
                        {project.description.split('.').slice(0, 2).join('.')}.
                    </p>

                    <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-800">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                            <span 
                                key={techIndex}
                                className="text-xs text-gray-400 dark:text-gray-500 font-light tracking-wide"
                            >
                                {tech}
                            </span>
                        ))}
                        {project.technologies.length > 3 && (
                            <span className="text-xs text-gray-300 dark:text-gray-600">
                                +{project.technologies.length - 3}
                            </span>
                        )}
                    </div>

                    <div className="pt-2">
                        <span className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300 flex items-center gap-2">
                            View Case Study
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