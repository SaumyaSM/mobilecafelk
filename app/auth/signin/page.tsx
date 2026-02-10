"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { User, Store } from "lucide-react"
import { colors } from "@/app/constants/colors"

export default function SignInSelectionPage() {
    return (
        <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="p-8 text-center">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
                    <p className="text-gray-600 mb-8">Choose how you want to sign in</p>

                    <div className="space-y-4">
                        <Link href="/auth/signin/customer" className="block group">
                            <div className="border-2 border-gray-100 rounded-xl p-4 hover:border-[#A73860] hover:bg-gray-50 transition-all flex items-center gap-4">
                                <div className="bg-gray-100 p-3 rounded-full group-hover:bg-[#A73860] group-hover:text-white transition-colors">
                                    <User className="h-6 w-6" />
                                </div>
                                <div className="text-left">
                                    <h3 className="font-bold text-gray-900">Customer</h3>
                                    <p className="text-sm text-gray-500">Log in to buy, sell, or repair</p>
                                </div>
                            </div>
                        </Link>

                        <Link href="/auth/signin/shop" className="block group">
                            <div className="border-2 border-gray-100 rounded-xl p-4 hover:border-[#A73860] hover:bg-gray-50 transition-all flex items-center gap-4">
                                <div className="bg-gray-100 p-3 rounded-full group-hover:bg-[#A73860] group-hover:text-white transition-colors">
                                    <Store className="h-6 w-6" />
                                </div>
                                <div className="text-left">
                                    <h3 className="font-bold text-gray-900">Shop Partner</h3>
                                    <p className="text-sm text-gray-500">Manage your shop and orders</p>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-100">
                        <p className="text-gray-600 text-sm">
                            Don't have an account?{" "}
                            <Link href="/auth/signup" className="font-bold text-[#A73860] hover:underline">
                                Sign Up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}
