"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { colors } from "../constants/colors"
import { Building2, Users, Trophy, CheckCircle2, ArrowRight } from "lucide-react"

export default function ForShopsPage() {
    const [formData, setFormData] = useState({
        shopName: "",
        ownerName: "",
        contactNumber: "",
        email: "",
        address: "",
        shopType: "repair",
        services: ""
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // In a real app, this would send data to a backend
        console.log("Form submitted:", formData)
        alert("Thank you for registering! We will contact you soon.")
        setFormData({
            shopName: "",
            ownerName: "",
            contactNumber: "",
            email: "",
            address: "",
            shopType: "repair",
            services: ""
        })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

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
                        Partner with <span className="text-yellow-400">MobileCafe.lk</span>
                    </h1>
                    <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-8">
                        Join Sri Lanka's fastest-growing mobile service network. Grow your business by reaching thousands of customers looking for phone repairs and accessories.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            className="bg-white text-[#A73860] hover:bg-gray-100 font-bold text-lg px-8 py-3"
                            onClick={() => document.getElementById('register-form')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Register Your Shop
                        </Button>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Partner With Us?</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">We provide the platform and tools you need to take your mobile business to the next level.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Users,
                                title: "Expand Your Reach",
                                description: "Connect with thousands of potential customers in your area who are actively looking for repair services and new phones."
                            },
                            {
                                icon: Trophy,
                                title: "Build Trust",
                                description: "Get verified and build a reputation with customer reviews and ratings. A trusted badge helps you stand out from the competition."
                            },
                            {
                                icon: Building2,
                                title: "Easy Management",
                                description: "Manage your profile, services, and incoming requests through our simple partner dashboard. Focus on what you do best."
                            }
                        ].map((benefit, index) => (
                            <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                                <div className="w-14 h-14 bg-[#fdf4f4] rounded-full flex items-center justify-center mb-6 text-[#A73860]">
                                    <benefit.icon className="h-7 w-7" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Registration Section */}
            <section id="register-form" className="py-16 px-4 bg-white relative">
                <div className="container mx-auto max-w-4xl">
                    <div className="bg-gray-50 rounded-2xl shadow-xl overflow-hidden border border-gray-100 grid md:grid-cols-5">

                        {/* Form Sidebar */}
                        <div className="md:col-span-2 text-white p-10 flex flex-col justify-between" style={{ background: colors.gradients.featureCard.css }}>
                            <div>
                                <h3 className="text-2xl font-bold mb-4">Join Our Network</h3>
                                <p className="opacity-90 mb-8">Fill out the form to become a registered partner. Our team will verify your details and get you started.</p>

                                <ul className="space-y-4">
                                    {[
                                        "Free registration",
                                        "Dedicated support",
                                        "Marketing materials",
                                        "Analytics dashboard"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <CheckCircle2 className="h-5 w-5 text-yellow-400" />
                                            <span className="font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-12">
                                <p className="text-sm opacity-75">Already a partner?</p>
                                <button className="text-white font-bold underline hover:text-yellow-300 transition-colors">Log in to Dashboard</button>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="md:col-span-3 p-10 bg-white">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Shop Registration</h3>
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700">Shop Name</label>
                                        <input
                                            required
                                            type="text"
                                            name="shopName"
                                            value={formData.shopName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A73860] focus:border-[#A73860] outline-none transition-all"
                                            placeholder="e.g. Mobile Tech"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700">Owner Name</label>
                                        <input
                                            required
                                            type="text"
                                            name="ownerName"
                                            value={formData.ownerName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A73860] focus:border-[#A73860] outline-none transition-all"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700">Contact Number</label>
                                        <input
                                            required
                                            type="tel"
                                            name="contactNumber"
                                            value={formData.contactNumber}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A73860] focus:border-[#A73860] outline-none transition-all"
                                            placeholder="077xxxxxxx"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700">Email Address</label>
                                        <input
                                            required
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A73860] focus:border-[#A73860] outline-none transition-all"
                                            placeholder="shop@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">Shop Address</label>
                                    <input
                                        required
                                        type="text"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A73860] focus:border-[#A73860] outline-none transition-all"
                                        placeholder="Street address, City"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">Business Type</label>
                                    <div className="flex gap-4">
                                        {['repair', 'selling', 'both'].map((type) => (
                                            <label key={type} className="flex items-center gap-2 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="shopType"
                                                    value={type}
                                                    checked={formData.shopType === type}
                                                    onChange={handleChange}
                                                    className="text-[#A73860] focus:ring-[#A73860]"
                                                />
                                                <span className="capitalize text-gray-700">{type}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">Services / Products Offered</label>
                                    <textarea
                                        required
                                        name="services"
                                        value={formData.services}
                                        onChange={handleChange}
                                        rows={3}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A73860] focus:border-[#A73860] outline-none transition-all resize-none"
                                        placeholder="Briefly describe what you offer (e.g. Screen replacement, Used phones...)"
                                    ></textarea>
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full bg-[#A73860] hover:bg-[#8B2E4E] text-white font-bold py-3 mt-4"
                                >
                                    Register Shop <ArrowRight className="h-4 w-4 ml-2" />
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
