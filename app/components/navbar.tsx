"use client"
import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Smartphone, Globe, ChevronDown } from "lucide-react"

export default function Navbar() {
    const pathname = usePathname()

    const isActive = (path: string) => pathname === path

    const [isSettingsOpen, setIsSettingsOpen] = useState(false)
    const [language, setLanguage] = useState("English")
    const [currency, setCurrency] = useState("AUD")
    const [tempLanguage, setTempLanguage] = useState("English")
    const [tempCurrency, setTempCurrency] = useState("AUD")
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsSettingsOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    const handleSaveSettings = () => {
        setLanguage(tempLanguage)
        setCurrency(tempCurrency)
        setIsSettingsOpen(false)
    }

    return (
        <header className="w-full border-b bg-white sticky top-0 z-50">
            <div className="container mx-auto flex items-center gap-6 justify-between px-4 py-4">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <Image src="/images/logo.PNG" alt="MobileCafe.lk Logo" width={40} height={40} className="h-10 w-10 object-contain" />
                    <span className="font-semibold text-lg text-gray-900">MobileCafe.lk</span>
                </Link>

                {/* Menu */}
                <nav className="hidden md:flex ml-auto items-center gap-8 text-sm text-gray-700 font-semibold">
                    {[
                        { name: "Home", href: "/" },
                        { name: "Repair", href: "/repair" },
                        { name: "Sell", href: "/sell", icon: Smartphone },
                        { name: "Buy", href: "/buy", icon: Smartphone },
                        { name: "Accessories", href: "/accessories" },
                        { name: "Parts", href: "/parts" },
                        { name: "About", href: "/about" },
                        { name: "Contact", href: "/contact" },
                    ].map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`relative flex items-center gap-1 py-1 transition-colors hover:text-[#A73860] ${isActive(link.href) ? "text-[#A73860]" : "text-gray-700"
                                }`}
                        >
                            {link.name}
                            {link.icon && <link.icon className="h-4 w-4" />}
                            {isActive(link.href) && (
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#A73860] rounded-full" />
                            )}
                        </Link>
                    ))}
                </nav>


                {/* Right Actions */}
                <div className="flex items-center gap-4 md:gap-6 md:ml-4">
                    {/* Language & Currency Selector */}
                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => {
                                setTempLanguage(language);
                                setTempCurrency(currency);
                                setIsSettingsOpen(!isSettingsOpen);
                            }}
                            className="flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900 transition-colors bg-white rounded-full py-1.5 px-2 hover:bg-gray-50"
                        >
                            <Globe className="h-5 w-5" />
                            <span className="hidden md:inline font-medium">{language}-{currency}</span>
                            <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${isSettingsOpen ? "rotate-180" : ""}`} />
                        </button>

                        {/* Dropdown Menu */}
                        {isSettingsOpen && (
                            <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 p-6 z-50 animate-in slide-in-from-top-2 fade-in duration-200" style={{ right: "-20px" }}>
                                {/* Arrow on top */}
                                <div className="absolute top-[-6px] right-[40px] w-3 h-3 bg-white border-t border-l border-gray-100 rotate-45 transform"></div>

                                <h3 className="text-[17px] font-semibold text-gray-900 mb-1.5">Set language and currency</h3>
                                <p className="text-sm text-gray-500 mb-5 leading-relaxed">
                                    Select your preferred language and currency. You can update the settings at any time.
                                </p>

                                <div className="space-y-4 mb-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Language</label>
                                        <select
                                            value={tempLanguage}
                                            onChange={(e) => setTempLanguage(e.target.value)}
                                            className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E54545] focus:border-[#E54545] outline-none text-sm text-gray-900 transition-all appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%239CA3AF%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.4-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_12px] bg-[right_16px_center] bg-no-repeat pr-10"
                                        >
                                            <option value="English">English</option>
                                            <option value="Sinhala">Sinhala</option>
                                            <option value="Tamil">Tamil</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Currency</label>
                                        <select
                                            value={tempCurrency}
                                            onChange={(e) => setTempCurrency(e.target.value)}
                                            className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#E54545] focus:border-[#E54545] outline-none text-sm text-gray-900 transition-all appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%239CA3AF%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.4-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_12px] bg-[right_16px_center] bg-no-repeat pr-10"
                                        >
                                            <option value="AUD">AUD - Australian Dollar</option>
                                            <option value="LKR">LKR - Sri Lankan Rupee</option>
                                            <option value="USD">USD - US Dollar</option>
                                            <option value="EUR">EUR - Euro</option>
                                            <option value="GBP">GBP - British Pound</option>
                                        </select>
                                    </div>
                                </div>

                                <Button
                                    onClick={handleSaveSettings}
                                    className="w-full bg-[#E54545] hover:bg-[#D43434] text-white font-semibold py-3 rounded-[24px]"
                                >
                                    Save
                                </Button>
                            </div>
                        )}
                    </div>

                    {/* Auth Buttons */}
                    <div className="flex items-center gap-3">
                        <Link href="/auth/signup">
                            <Button
                                variant="dark"
                                style={{
                                    backgroundColor: pathname?.startsWith("/auth/signup") ? "#A73860" : "#2563eb",
                                    borderColor: pathname?.startsWith("/auth/signup") ? "#A73860" : "#2563eb"
                                }}
                            >
                                Sign Up
                            </Button>
                        </Link>
                        <Link href="/auth/signin">
                            <Button
                                variant="dark"
                                style={{
                                    backgroundColor: pathname?.startsWith("/auth/signin") ? "#A73860" : "#16a34a",
                                    borderColor: pathname?.startsWith("/auth/signin") ? "#A73860" : "#16a34a"
                                }}
                            >
                                Log In
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}
