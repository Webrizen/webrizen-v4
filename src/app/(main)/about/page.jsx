import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AboutImage from '@/assets/pfp.png';

export default function page() {
    return (
        <div className="min-h-screen bg-white dark:bg-black">
            {/* Hero Section */}
            <div className="border-b border-zinc-100 dark:border-zinc-800">
                <div className="max-w-7xl mx-auto px-6 py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Content */}
                        <div className="space-y-8">
                            <div>
                                <span className="text-sm font-medium tracking-widest uppercase text-indigo-700 dark:text-indigo-400 mb-4 block">
                                    About Our Agency
                                </span>
                                <h1 className="text-5xl lg:text-6xl font-light tracking-tight text-zinc-900 dark:text-white leading-tight">
                                    Crafting Digital <span className="font-serif italic">Excellence</span>
                                </h1>
                            </div>

                            <p className="text-xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                                We are architects of digital experiences, building premium solutions
                                for visionary brands. With uncompromising attention to detail and
                                relentless pursuit of perfection, we transform ideas into exceptional
                                digital products.
                            </p>

                            <div className="flex gap-4 pt-4">
                                <Link
                                    href="/contact"
                                    className="bg-indigo-700 hover:bg-indigo-800 text-white px-8 py-4 text-sm font-medium tracking-wide uppercase transition-all duration-300 flex items-center gap-3 group"
                                >
                                    Start Your Project
                                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>

                                <Link
                                    href="/products"
                                    className="border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white hover:bg-zinc-50 dark:hover:bg-zinc-900 px-8 py-4 text-sm font-medium tracking-wide uppercase transition-all duration-300"
                                >
                                    View Our Work
                                </Link>
                            </div>
                        </div>

                        {/* Founder Image */}
                        <div className="relative">
                            <div className="aspect-[9/16] max-w-md mx-auto">
                                <Image
                                    src={AboutImage}
                                    alt="Founder"
                                    className="w-full h-full object-cover"
                                    priority
                                />
                                {/* Decorative Element */}
                                <div className="absolute -inset-4 border-2 border-indigo-700/20 dark:border-indigo-400/20 -z-10"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Philosophy Section */}
            <div className="border-b border-zinc-100 dark:border-zinc-800">
                <div className="max-w-4xl mx-auto px-6 py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        <div>
                            <h2 className="text-sm md:text-4xl md:transform md:rotate-90 md:mt-22 font-medium tracking-widest uppercase text-indigo-700 dark:text-indigo-400 mb-6">
                                Our Philosophy
                            </h2>
                        </div>
                        <div className="lg:col-span-2 space-y-8">
                            {/* Ayanokoji's Quote: Focused on Utility and Control */}
                            <p className="text-2xl font-light text-zinc-900 dark:text-white leading-relaxed">
                                "All outcomes are determined by the efficiency of the means applied. A digital product's value is purely its **utility**; every pixel, every line of code, and every interaction must serve as a calculated lever to control the user's intended response."
                            </p>

                            <div className="space-y-6">
                                <p className="text-lg text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                                    The market is inherently defined by its saturation of mediocre attempts. We do not aim to 'stand apart,' but to **dominate** by guaranteeing the fulfillment of the client's ultimate objective. Our methodology is a matter of cold, technical precision, not 'artistic sensibility.'
                                </p>

                                <p className="text-lg text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                                    Resources must be allocated without waste, which is why we engage only with clients whose ambitions warrant our capacity. The $190K minimum is not a reflection of 'craftsmanship,' but a calculated **filter** to ensure we invest our superior capabilities only where the return is absolute.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Values Section */}
            <div className="border-b border-zinc-100 dark:border-zinc-800">
                <div className="max-w-7xl mx-auto px-6 py-24">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl font-light text-zinc-900 dark:text-white mb-4">
                            Our Values
                        </h2>
                        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto font-light">
                            The principles that guide our work and define our standards
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Value 1 */}
                        <div className="text-center space-y-6">
                            <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto">
                                <svg className="w-8 h-8 text-indigo-700 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-light text-zinc-900 dark:text-white">
                                Innovation
                            </h3>
                            <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                                Pushing boundaries with cutting-edge technologies and forward-thinking
                                design approaches that set new industry standards.
                            </p>
                        </div>

                        {/* Value 2 */}
                        <div className="text-center space-y-6">
                            <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto">
                                <svg className="w-8 h-8 text-indigo-700 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-light text-zinc-900 dark:text-white">
                                Precision
                            </h3>
                            <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                                Meticulous attention to every detail, ensuring pixel-perfect execution
                                and flawless user experiences across all devices.
                            </p>
                        </div>

                        {/* Value 3 */}
                        <div className="text-center space-y-6">
                            <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mx-auto">
                                <svg className="w-8 h-8 text-indigo-700 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-light text-zinc-900 dark:text-white">
                                Partnership
                            </h3>
                            <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                                Building lasting relationships with our clients through transparent
                                communication, trust, and shared vision for success.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Process Section */}
            <div className="border-b border-zinc-100 dark:border-zinc-800">
                <div className="max-w-4xl mx-auto px-6 py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        <div>
                            <h2 className="text-sm md:text-4xl md:transform md:rotate-90 md:mt-22 font-medium tracking-widest uppercase text-indigo-700 dark:text-indigo-400 mb-6">
                                Our Process
                            </h2>
                        </div>
                        <div className="lg:col-span-2 space-y-12">
                            {/* Step 1 */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 bg-indigo-700 dark:bg-indigo-400 text-white text-sm font-medium rounded-full flex items-center justify-center">
                                        1
                                    </div>
                                    <h3 className="text-xl font-light text-zinc-900 dark:text-white">
                                        Discovery & Strategy
                                    </h3>
                                </div>
                                <p className="text-lg text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                                    Deep dive into your vision, objectives, and audience. We craft
                                    comprehensive strategies that align business goals with user needs.
                                </p>
                            </div>

                            {/* Step 2 */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 bg-indigo-700 dark:bg-indigo-400 text-white text-sm font-medium rounded-full flex items-center justify-center">
                                        2
                                    </div>
                                    <h3 className="text-xl font-light text-zinc-900 dark:text-white">
                                        Design & Prototyping
                                    </h3>
                                </div>
                                <p className="text-lg text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                                    Transform concepts into beautiful, functional prototypes. Iterative
                                    design process ensures every interaction feels intuitive and engaging.
                                </p>
                            </div>

                            {/* Step 3 */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 bg-indigo-700 dark:bg-indigo-400 text-white text-sm font-medium rounded-full flex items-center justify-center">
                                        3
                                    </div>
                                    <h3 className="text-xl font-light text-zinc-900 dark:text-white">
                                        Development & Testing
                                    </h3>
                                </div>
                                <p className="text-lg text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                                    Craft robust, scalable solutions with clean, maintainable code.
                                    Rigorous testing ensures flawless performance across all platforms.
                                </p>
                            </div>

                            {/* Step 4 */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 bg-indigo-700 dark:bg-indigo-400 text-white text-sm font-medium rounded-full flex items-center justify-center">
                                        4
                                    </div>
                                    <h3 className="text-xl font-light text-zinc-900 dark:text-white">
                                        Launch & Growth
                                    </h3>
                                </div>
                                <p className="text-lg text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                                    Seamless deployment followed by ongoing optimization and support
                                    to ensure your digital product continues to excel.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-zinc-50 dark:bg-zinc-900">
                <div className="max-w-4xl mx-auto px-6 py-24 text-center">
                    <h2 className="text-3xl font-light text-zinc-900 dark:text-white mb-6">
                        Ready to Build Something Extraordinary?
                    </h2>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto font-light">
                        Let's discuss how we can transform your vision into a premium digital experience.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-3 bg-indigo-700 hover:bg-indigo-800 text-white px-8 py-4 text-sm font-medium tracking-wide uppercase transition-all duration-300 group"
                    >
                        Begin Your Project
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}