"use client"

import Image from "next/image"
import Link from "next/link"
import { colors } from "../constants/colors"
import { Button } from "@/components/ui/button"
import { Wrench, ShoppingBag, ShoppingCart, Handshake, Mail, Phone, MapPin, ArrowRight } from "lucide-react"

export default function AboutPage() {
    return (
        <main className="min-h-screen pb-20 bg-gray-50">
            {/* Hero Section */}
            <section
                className="text-white py-20 px-4 text-center relative overflow-hidden"
                style={{ background: colors.gradients.heroSection.css }}
            >
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="container mx-auto max-w-4xl relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        About <span className="text-yellow-400">MobileCafe.lk</span>
                    </h1>
                    <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-8">
                        Your trusted partner for everything mobile. From expert repairs to buying and selling, we are simplifying the mobile experience in Sri Lanka.
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Vision Card */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[#A73860]">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="bg-[#fdf4f4] p-2 rounded-lg text-[#A73860]">Our Vision</span>
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                To become Sri Lanka's most trusted and accessible platform for mobile solutions, creating a seamless ecosystem where technology meets convenience and reliability.
                            </p>
                        </div>

                        {/* Mission Card */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[#A73860]">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                <span className="bg-[#fdf4f4] p-2 rounded-lg text-[#A73860]">Our Mission</span>
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                We are committed to providing top-quality repairs with genuine parts, offering a fair marketplace for buying and selling, and empowering local shop owners through our partner network.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Do Section */}
            <section className="py-16 px-4 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Do</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">We offer a complete range of services to cater to all your mobile phone needs.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: Wrench,
                                title: "Expert Repairs",
                                description: "Fast, reliable fixes for screens, batteries, and more by skilled technicians.",
                                link: "/fix-my-mobile",
                                linkText: "Fix My Device"
                            },
                            {
                                icon: ShoppingCart,
                                title: "Buy Phones",
                                description: "Wide selection of brand new and quality used mobile phones.",
                                link: "/buy",
                                linkText: "Shop Now"
                            },
                            {
                                icon: ShoppingBag,
                                title: "Sell Your Phone",
                                description: "Get the best price for your used device with our easy selling process.",
                                link: "/used-mobile",
                                linkText: "Sell Now"
                            },
                            {
                                icon: Handshake,
                                title: "For Shops",
                                description: "Partner with us to grow your business and reach more customers.",
                                link: "/for-shops",
                                linkText: "Partner With Us"
                            }
                        ].map((service, index) => (
                            <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-5 text-[#A73860] shadow-sm group-hover:scale-110 transition-transform">
                                    <service.icon className="h-7 w-7" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                                <p className="text-gray-600 mb-6 text-sm leading-relaxed min-h-[60px]">{service.description}</p>
                                <Link href={service.link} className="inline-flex items-center text-[#A73860] font-semibold hover:gap-2 transition-all">
                                    {service.linkText} <ArrowRight className="h-4 w-4 ml-1" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-4xl">
                    <div className="bg-[#2D1B3D] text-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
                        <div className="p-10 md:w-3/5">
                            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                            <p className="opacity-80 mb-8 leading-relaxed">
                                Have questions or need assistance? Our support team is here to help you with any inquiries about our services.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-white/10 rounded-lg">
                                        <Phone className="h-5 w-5 text-yellow-400" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-lg">Call Us</p>
                                        <p className="opacity-80">+94 77 123 4567</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-white/10 rounded-lg">
                                        <Mail className="h-5 w-5 text-yellow-400" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-lg">Email Us</p>
                                        <p className="opacity-80">support@mobilecafe.lk</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-white/10 rounded-lg">
                                        <MapPin className="h-5 w-5 text-yellow-400" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-lg">Visit Us</p>
                                        <p className="opacity-80">No. 123, Mobile Street, Colombo 04</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="md:w-2/5 bg-[#8B1538] relative min-h-[300px]">
                            <Image
                                src="/images/background3.jpg" // Assuming this image exists or using a placeholder
                                alt="Customer Support"
                                fill
                                className="object-cover opacity-60"
                            />
                            <div className="absolute inset-0 flex items-center justify-center p-8 text-center bg-black/20">
                                <div>
                                    <h3 className="text-xl font-bold mb-3">Operating Hours</h3>
                                    <p className="opacity-90">Mon - Sat: 9:00 AM - 7:00 PM</p>
                                    <p className="opacity-90">Sunday: Closed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
