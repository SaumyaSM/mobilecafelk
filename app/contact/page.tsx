import { Mail, MapPin, Phone, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { colors } from "../constants/colors"

export default function Contact() {
    return (
        <main className="min-h-screen bg-gray-50 pb-20">
            {/* Hero Section */}
            <section
                className="text-white py-20 px-4 text-center"
                style={{ background: colors.gradients.heroSection.css }}
            >
                <div className="container mx-auto max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
                    <p className="text-lg md:text-xl opacity-90 mx-auto">
                        We’d love to hear from you. Whether you have a question about repairs, buying a device, or registering your shop, our team is ready to answer all your questions.
                    </p>
                </div>
            </section>

            <div className="container mx-auto max-w-7xl px-4 -mt-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Contact Information Cards */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Card 1: Visit Us */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 flex items-start gap-4 transition-transform hover:-translate-y-1">
                            <div className="h-12 w-12 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: '#fbe8e9', color: colors.primary }}>
                                <MapPin className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    MobileCafe.lk Headquarters<br />
                                    123 Tech Avenue, Colombo 03<br />
                                    Sri Lanka
                                </p>
                            </div>
                        </div>

                        {/* Card 2: Call Us */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 flex items-start gap-4 transition-transform hover:-translate-y-1">
                            <div className="h-12 w-12 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: '#fbe8e9', color: colors.primary }}>
                                <Phone className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Call Center</h3>
                                <p className="text-gray-600 leading-relaxed mb-1">
                                    <span className="font-semibold block">Sales & Support:</span>
                                    +94 11 234 5678
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    <span className="font-semibold block">Repairs Inquiry:</span>
                                    +94 77 987 6543
                                </p>
                            </div>
                        </div>

                        {/* Card 3: Email & Hours */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 flex items-start gap-4 transition-transform hover:-translate-y-1">
                            <div className="h-12 w-12 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: '#fbe8e9', color: colors.primary }}>
                                <Clock className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Working Hours</h3>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    Monday - Saturday<br />
                                    9:00 AM - 7:00 PM
                                </p>
                                <div className="flex items-center gap-2 text-[#A73860] font-semibold">
                                    <Mail className="h-4 w-4" />
                                    <a href="mailto:support@mobilecafe.lk" className="hover:underline">support@mobilecafe.lk</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 border border-gray-100 h-full">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#A73860] focus:border-[#A73860] transition-colors"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#A73860] focus:border-[#A73860] transition-colors"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#A73860] focus:border-[#A73860] transition-colors"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#A73860] focus:border-[#A73860] transition-colors"
                                            placeholder="+94 77 000 0000"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                                    <select
                                        id="subject"
                                        className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#A73860] focus:border-[#A73860] transition-colors text-gray-700"
                                    >
                                        <option>General Inquiry</option>
                                        <option>Looking to Buy/Sell</option>
                                        <option>Repair Assistance</option>
                                        <option>Shop Registration</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                    <textarea
                                        id="message"
                                        rows={6}
                                        className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#A73860] focus:border-[#A73860] transition-colors resize-none"
                                        placeholder="How can we help you?"
                                    ></textarea>
                                </div>

                                <Button className="w-full md:w-auto px-10 py-4 text-base font-semibold" style={{ backgroundColor: colors.primary }}>
                                    Send Message
                                </Button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}
