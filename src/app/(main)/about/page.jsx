import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function page() {
    const teamMembers = [
        {
            name: "Arsh",
            role: "Founder & CEO",
            image: "/pfp.png",
            description: "Visionary leader with 10+ years in digital transformation"
        },
        {
            name: "Sarah Chen",
            role: "Creative Director",
            image: "/sarah-chen.png",
            description: "Award-winning designer with focus on user experience"
        },
        {
            name: "Marcus Rodriguez",
            role: "Technical Director",
            image: "/marcus-rodriguez.png",
            description: "Full-stack architect specializing in scalable solutions"
        },
        {
            name: "Elena Petrova",
            role: "Lead Developer",
            image: "/elena-petrova.png",
            description: "React & Next.js expert with performance optimization"
        },
        {
            name: "David Kim",
            role: "UX Strategist",
            image: "/david-kim.png",
            description: "User research and conversion optimization specialist"
        },
        {
            name: "Isabelle Laurent",
            role: "Project Manager",
            image: "/isabelle-laurent.png",
            description: "Agile methodology expert and client relations"
        }
    ];

    const stats = [
        { number: "50+", label: "Projects Delivered" },
        { number: "$15M+", label: "Client Revenue Generated" },
        { number: "98%", label: "Client Retention" },
        { number: "24h", label: "Average Response Time" }
    ];

    // Professional placeholder images for different sections
    const placeholderImages = {
        hero: {
            topLeft: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&w=800&h=800&fit=crop&crop=center",
            bottomLeft: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&w=800&h=800&fit=crop&crop=center",
            topRight: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&w=800&h=800&fit=crop&crop=center"
        },
        cta: {
            topLeft: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&w=600&h=600&fit=crop&crop=center",
            bottomLeft: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&w=600&h=600&fit=crop&crop=center",
            topRight: "https://i.pinimg.com/1200x/0d/f2/76/0df276ceb9063496b3e9137abdae3971.jpg",
            bottomRight: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&w=600&h=600&fit=crop&crop=center"
        }
    };

    return (
        <div className="min-h-screen bg-white dark:bg-black">
            <div className="border-b border-zinc-200 dark:border-zinc-800">
                <div className="max-w-7xl mx-auto px-6 py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="border-l-4 border-indigo-700 dark:border-indigo-400 pl-6">
                                <span className="text-sm font-medium tracking-widest uppercase text-indigo-700 dark:text-indigo-400 mb-2 block">
                                    About Our Agency
                                </span>
                                <h1 className="text-5xl lg:text-6xl font-light tracking-tight text-zinc-900 dark:text-white leading-tight">
                                    Digital Excellence <span className="font-serif italic">Perfected</span>
                                </h1>
                            </div>

                            <p className="text-xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed border-t border-zinc-100 dark:border-zinc-800 pt-6">
                                We are architects of digital experiences, building premium solutions
                                for visionary brands. With uncompromising attention to detail and
                                relentless pursuit of perfection, we transform ideas into exceptional
                                digital products.
                            </p>

                            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-zinc-100 dark:border-zinc-800">
                                {stats.map((stat, index) => (
                                    <div key={index} className="text-center">
                                        <div className="text-2xl font-light text-zinc-900 dark:text-white mb-2">
                                            {stat.number}
                                        </div>
                                        <div className="text-sm text-zinc-500 dark:text-zinc-400 uppercase tracking-wide">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Founder Image Grid */}
                        <div className="relative">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-4">
                                    <div className="aspect-square border-2 border-zinc-900 dark:border-zinc-100 relative overflow-hidden">
                                        <Image
                                            src={placeholderImages.hero.topLeft}
                                            alt="Team collaboration session"
                                            width={400}
                                            height={400}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="aspect-square border-2 border-zinc-900 dark:border-zinc-100 relative overflow-hidden">
                                        <Image
                                            src={placeholderImages.hero.bottomLeft}
                                            alt="Design strategy meeting"
                                            width={400}
                                            height={400}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-4 pt-8">
                                    <div className="aspect-square border-2 border-zinc-900 dark:border-zinc-100 relative overflow-hidden">
                                        <Image
                                            src={placeholderImages.hero.topRight}
                                            alt="Data analytics dashboard"
                                            width={400}
                                            height={400}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="aspect-[9/16] border-2 border-indigo-700 dark:border-indigo-400 relative overflow-hidden">
                                        <Image
                                            src="/pfp.png"
                                            width={400}
                                            height={600}
                                            alt="Arsh - Founder"
                                            className="w-full h-full object-cover"
                                            priority
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                                            <div className="text-white text-sm font-medium">Arsh</div>
                                            <div className="text-white/70 text-xs">Founder & CEO</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className="border-b border-zinc-200 dark:border-zinc-800">
                <div className="max-w-7xl mx-auto px-6 py-24">
                    <div className="text-center mb-16">
                        <div className="inline-block border-2 border-indigo-700 dark:border-indigo-400 px-4 py-2 mb-6">
                            <span className="text-sm font-medium tracking-widest uppercase text-indigo-700 dark:text-indigo-400">
                                Our Team
                            </span>
                        </div>
                        <h2 className="text-4xl font-light text-zinc-900 dark:text-white mb-4">
                            The Minds Behind the Magic
                        </h2>
                        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto font-light">
                            A collective of exceptional talent dedicated to delivering unparalleled digital experiences
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="group border-2 border-zinc-200 dark:border-zinc-800 hover:border-indigo-700 dark:hover:border-indigo-400 transition-all duration-300">
                                <div className="aspect-[4/5] relative overflow-hidden">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        width={400}
                                        height={600}
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <p className="text-white/80 text-sm font-light">
                                                {member.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 border-t border-zinc-200 dark:border-zinc-800">
                                    <h3 className="text-xl font-light text-zinc-900 dark:text-white mb-1">
                                        {member.name}
                                    </h3>
                                    <p className="text-indigo-700 dark:text-indigo-400 text-sm font-medium">
                                        {member.role}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Philosophy Section */}
            <div className="border-b border-zinc-200 dark:border-zinc-800">
                <div className="max-w-7xl mx-auto px-6 py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        <div className="lg:col-span-4 border-r border-zinc-200 dark:border-zinc-800 pr-8">
                            <h2 className="text-2xl font-light text-zinc-900 dark:text-white mb-6">
                                Our Philosophy
                            </h2>
                            <div className="text-sm text-indigo-700 dark:text-indigo-400 font-medium tracking-widest uppercase">
                                Excellence Through Precision
                            </div>
                        </div>

                        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div className="border-2 border-zinc-200 dark:border-zinc-800 p-6">
                                    <h3 className="text-lg font-light text-zinc-900 dark:text-white mb-3">
                                        Utility-Driven Design
                                    </h3>
                                    <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                                        Every pixel, every line of code, and every interaction must serve as a calculated lever to control the user's intended response.
                                    </p>
                                </div>
                                <div className="border-2 border-zinc-200 dark:border-zinc-800 p-6">
                                    <h3 className="text-lg font-light text-zinc-900 dark:text-white mb-3">
                                        Strategic Allocation
                                    </h3>
                                    <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                                        Resources must be allocated without waste. We engage only with clients whose ambitions warrant our capacity.
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="border-2 border-zinc-200 dark:border-zinc-800 p-6">
                                    <h3 className="text-lg font-light text-zinc-900 dark:text-white mb-3">
                                        Market Domination
                                    </h3>
                                    <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                                        We do not aim to 'stand apart,' but to dominate by guaranteeing the fulfillment of the client's ultimate objective.
                                    </p>
                                </div>
                                <div className="border-2 border-zinc-200 dark:border-zinc-800 p-6">
                                    <h3 className="text-lg font-light text-zinc-900 dark:text-white mb-3">
                                        Calculated Excellence
                                    </h3>
                                    <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                                        Our methodology is a matter of cold, technical precision, not 'artistic sensibility.'
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Process Section */}
            <div className="border-b border-zinc-200 dark:border-zinc-800">
                <div className="max-w-7xl mx-auto px-6 py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        <div className="lg:col-span-4">
                            <div className="border-2 border-indigo-700 dark:border-indigo-400 p-6">
                                <h2 className="text-2xl font-light text-zinc-900 dark:text-white mb-4">
                                    Our Process
                                </h2>
                                <p className="text-zinc-600 dark:text-zinc-400 font-light">
                                    A systematic approach to delivering exceptional results
                                </p>
                            </div>
                        </div>

                        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { step: "01", title: "Discovery & Strategy", desc: "Deep dive into your vision and objectives" },
                                { step: "02", title: "Design & Prototyping", desc: "Transform concepts into functional prototypes" },
                                { step: "03", title: "Development & Testing", desc: "Craft robust, scalable solutions" },
                                { step: "04", title: "Launch & Growth", desc: "Seamless deployment and ongoing optimization" }
                            ].map((item, index) => (
                                <div key={index} className="border-2 border-zinc-200 dark:border-zinc-800 p-6 group hover:border-indigo-700 dark:hover:border-indigo-400 transition-all duration-300">
                                    <div className="text-3xl font-light text-zinc-400 dark:text-zinc-600 group-hover:text-indigo-700 dark:group-hover:text-indigo-400 mb-4">
                                        {item.step}
                                    </div>
                                    <h3 className="text-xl font-light text-zinc-900 dark:text-white mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="text-zinc-600 dark:text-zinc-400 font-light">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-zinc-50 dark:bg-zinc-900">
                <div className="max-w-7xl mx-auto px-6 py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-light text-zinc-900 dark:text-white mb-6">
                                Ready to Build Something Extraordinary?
                            </h2>
                            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 font-light leading-relaxed">
                                Let's discuss how we can transform your vision into a premium digital experience that delivers measurable results.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center gap-3 bg-indigo-700 hover:bg-indigo-800 text-white px-8 py-4 text-sm font-medium tracking-wide uppercase transition-all duration-300 group border-2 border-indigo-700"
                                >
                                    Start Your Project
                                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                                <Link
                                    href="/products"
                                    className="inline-flex items-center justify-center border-2 border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white hover:bg-zinc-50 dark:hover:bg-zinc-800 px-8 py-4 text-sm font-medium tracking-wide uppercase transition-all duration-300"
                                >
                                    View Case Studies
                                </Link>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <div className="aspect-square border-2 border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 relative overflow-hidden">
                                    <Image
                                        src={placeholderImages.cta.topLeft}
                                        alt="Client project showcase"
                                        width={400}
                                        height={400}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="aspect-square border-2 border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 relative overflow-hidden">
                                    <Image
                                        src={placeholderImages.cta.bottomLeft}
                                        alt="Team workshop session"
                                        width={400}
                                        height={400}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="space-y-4 pt-8">
                                <div className="aspect-square border-2 border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 relative overflow-hidden">
                                    <Image
                                        src={placeholderImages.cta.topRight}
                                        alt="Creative design process"
                                        width={400}
                                        height={400}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="aspect-square border-2 border-indigo-700 dark:border-indigo-400 bg-indigo-50 dark:bg-indigo-900/20 relative overflow-hidden">
                                    <Image
                                        src={placeholderImages.cta.bottomRight}
                                        alt="Project success celebration"
                                        width={400}
                                        height={400}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}