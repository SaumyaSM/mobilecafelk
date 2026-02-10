import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import { colors } from '@/app/constants/colors';

export default function Footer() {
    return (
        <footer
            className="text-white py-12"
            style={{
                background: colors.gradients.heroSection.css
            }}
        >
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold">MobileCafe.lk</h2>
                        <p className="text-gray-200 text-sm leading-relaxed">
                            Your one-stop solution for buying, selling, and repairing mobile phones with trust and quality assurance.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <Link href="#" className="hover:text-primary-light transition-colors">
                                <Facebook className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="hover:text-primary-light transition-colors">
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="hover:text-primary-light transition-colors">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="hover:text-primary-light transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-gray-200">
                            <li>
                                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                            </li>
                            <li>
                                <Link href="/buy" className="hover:text-white transition-colors">Buy Phones</Link>
                            </li>
                            <li>
                                <Link href="/sell" className="hover:text-white transition-colors">Sell Phones</Link>
                            </li>
                            <li>
                                <Link href="/repair" className="hover:text-white transition-colors">Repair Services</Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Services</h3>
                        <ul className="space-y-2 text-sm text-gray-200">
                            <li>
                                <Link href="/repair/phone" className="hover:text-white transition-colors">Phone Repair</Link>
                            </li>
                            <li>
                                <Link href="/accessories" className="hover:text-white transition-colors">Parts & Accessories</Link>
                            </li>
                            <li>
                                <Link href="/data-recovery" className="hover:text-white transition-colors">Data Recovery</Link>
                            </li>
                            <li>
                                <Link href="/trade-in" className="hover:text-white transition-colors">Trade-In Program</Link>
                            </li>
                            <li>
                                <Link href="/support" className="hover:text-white transition-colors">Support</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-3 text-sm text-gray-200">
                            <li className="flex items-center space-x-3">
                                <Phone className="w-4 h-4" />
                                <span>+94 11 234 5678</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="w-4 h-4" />
                                <span>info@mobilecafe.lk</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <MapPin className="w-4 h-4 mt-1" />
                                <span>Colombo, Sri Lanka</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-300">
                    <p>© 2025 MobileCafe.lk. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
