"use client"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function Navbar() {
    const pathname = usePathname()

    const isActive = (path: string) => pathname === path

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
                        { name: "Fix My Mobile", href: "/fix-my-mobile" },
                        { name: "Buy", href: "/buy" },
                        { name: "Used Mobile", href: "/used-mobile" },
                        { name: "For Shops", href: "/for-shops" },
                        { name: "About", href: "/about" },
                    ].map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`relative py-1 transition-colors hover:text-[#A73860] ${isActive(link.href) ? "text-[#A73860]" : "text-gray-700"
                                }`}
                        >
                            {link.name}
                            {isActive(link.href) && (
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#A73860] rounded-full" />
                            )}
                        </Link>
                    ))}
                </nav>


                {/* Auth Buttons */}
                <div className="flex items-center gap-3">
                    <Link href="/auth/signin">
                        <Button
                            variant="dark"
                            style={{
                                backgroundColor: pathname?.startsWith("/auth/signin") ? "#A73860" : "#16a34a",
                                borderColor: pathname?.startsWith("/auth/signin") ? "#A73860" : "#16a34a"
                            }}
                        >
                            Sign In
                        </Button>
                    </Link>
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
                </div>
            </div>
        </header>
    )
}
