"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Mail, Lock } from "lucide-react"

export default function CustomerSignInPage() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Customer Sign In:", formData)
        alert("Sign In functionality would happen here.")
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    return (
        <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="p-8">
                    <Link href="/auth/signin" className="inline-flex items-center text-sm text-gray-500 hover:text-[#A73860] mb-6 transition-colors">
                        <ArrowLeft className="h-4 w-4 mr-1" /> Back to selection
                    </Link>

                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Customer Sign In</h1>
                    <p className="text-gray-600 mb-8">Welcome back to MobileCafe.lk</p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                <input
                                    required
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A73860] focus:border-[#A73860] outline-none transition-all"
                                    placeholder="you@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <label className="text-sm font-semibold text-gray-700">Password</label>
                                <Link href="#" className="text-sm text-[#A73860] hover:underline">Forgot password?</Link>
                            </div>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                <input
                                    required
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A73860] focus:border-[#A73860] outline-none transition-all"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <Button type="submit" className="w-full bg-[#A73860] hover:bg-[#8B2E4E] text-white font-bold py-3 mt-2">
                            Sign In
                        </Button>
                    </form>

                    <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                        <p className="text-gray-600 text-sm">
                            Don't have an account?{" "}
                            <Link href="/auth/signup/customer" className="font-bold text-[#A73860] hover:underline">
                                Sign Up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}
