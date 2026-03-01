"use client"

import Image from "next/image"
import { Users, ShieldCheck, Lightbulb, Handshake } from "lucide-react"
import { Button } from "@/components/ui/button"
import { colors } from "../constants/colors"

const features = [
    {
        icon: Users,
        title: "Customer First",
        description: "Every decision starts with user convenience and safety.",
    },
    {
        icon: ShieldCheck,
        title: "Verified Quality",
        description: "Only trusted shops, genuine parts, and skilled technicians.",
    },
    {
        icon: Lightbulb,
        title: "Innovation Driven",
        description: "Always improving with new technology and smart solutions.",
    },
    {
        icon: Handshake,
        title: "Community Powered",
        description: "Growing together with local businesses and customers.",
    },
]

export default function AboutCulture() {
    return (
        <section className="container mx-auto px-4 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Side - Image Grid */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="relative h-100 md:h-100 rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src="/images/background4.jpg"
                            alt="Technician repairing mobile phone"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src="/images/background.png"
                            alt="Mobile repair tools"
                            fill
                            className="object-cover"
                        />
                    </div>
                    {/* Colored Card */}
                    <div
                        className="rounded-2xl p-8 flex flex-col justify-center text-white shadow-lg h-80 md:h-96"
                        style={{ background: colors.gradients.heroSection.css }}
                    >
                        <span className="text-sm font-medium opacity-80 mb-2">Our goal</span>
                        <h3 className="text-2xl font-bold leading-tight">
                            "We will fix it, till we make it"
                        </h3>
                    </div>
                    <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src="/images/background2.jpg" // Using background2 as a placeholder for the 3rd image if distinct
                            alt="Electronic circuit board"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Right Side - Content */}
                <div className="space-y-8">
                    <div>
                        <h4
                            className="font-bold tracking-widest uppercase text-sm mb-2"
                            style={{ color: colors.primary }}
                        >
                            ABOUT OUR CULTURE
                        </h4>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            Leading the way in mobile repair solutions
                        </h2>
                        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                            At MobileCafe.lk, our culture is built on trust, innovation, and community. We believe in making mobile services simple, transparent, and reliable for everyone.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            From customers to repair technicians and sellers, we create a connected ecosystem where quality, honesty, and service excellence always come first.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-gray-100 p-6 rounded-xl hover:shadow-md transition-shadow">
                                <div
                                    className="w-12 h-12 rounded-full flex items-center justify-center mb-4 text-white"
                                    style={{ backgroundColor: colors.primary }}
                                >
                                    <feature.icon className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div>
                        <Button className="px-6 py-3 rounded-full text-sm font-medium">
                            Learn More
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
