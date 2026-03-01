"use client"

import React, { useState, useMemo } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { colors } from "../constants/colors"
import {
    usedPhones,
    sellRequests,
    getBrands,
    getConditionLabel,
    getConditionColor,
    PhoneCondition,
    UsedPhone
} from "./data"
import {
    Search,
    Star,
    ShoppingCart,
    Package,
    Award,
    CheckCircle,
    Send,
    Upload,
    Smartphone,
    ChevronDown
} from "lucide-react"

export default function UsedMobilePage() {
    // Browse state
    const [selectedBrand, setSelectedBrand] = useState<string>('all')
    const [selectedCondition, setSelectedCondition] = useState<PhoneCondition | 'all'>('all')
    const [searchQuery, setSearchQuery] = useState<string>('')
    const [showSellForm, setShowSellForm] = useState(false)

    // Sell form state
    const [sellForm, setSellForm] = useState({
        name: '',
        email: '',
        phone: '',
        brand: '',
        model: '',
        storage: '',
        color: '',
        condition: 'good' as PhoneCondition,
        conditionNotes: '',
        expectedPrice: ''
    })
    const [formSubmitted, setFormSubmitted] = useState(false)

    // Filtered used phones
    const filteredPhones = useMemo(() => {
        return usedPhones.filter(phone => {
            if (selectedBrand !== 'all' && phone.brand !== selectedBrand) return false
            if (selectedCondition !== 'all' && phone.condition !== selectedCondition) return false
            if (searchQuery && !phone.model.toLowerCase().includes(searchQuery.toLowerCase())) return false
            return true
        })
    }, [selectedBrand, selectedCondition, searchQuery])

    const brands = useMemo(() => getBrands(), [])

    const handleSellFormChange = (field: keyof typeof sellForm, value: string) => {
        setSellForm(prev => ({ ...prev, [field]: value }))
    }

    const handleSellSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // In production, this would send data to backend
        console.log('Sell request submitted:', sellForm)
        setFormSubmitted(true)
        setTimeout(() => {
            setShowSellForm(false)
            setFormSubmitted(false)
            // Reset form
            setSellForm({
                name: '',
                email: '',
                phone: '',
                brand: '',
                model: '',
                storage: '',
                color: '',
                condition: 'good',
                conditionNotes: '',
                expectedPrice: ''
            })
        }, 3000)
    }

    return (
        <main className="min-h-screen pb-20 bg-gray-50">
            {/* Hero Section */}
            <section
                className="text-white py-20 px-4 text-center relative overflow-hidden"
                style={{ background: colors.gradients.heroSection.css }}
            >
                <div className="container mx-auto max-w-6xl relative z-10">
                    <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4 border border-white/20">
                        💎 Certified Pre-Owned Phones
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Used Mobile Marketplace 📱
                    </h1>
                    <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto mb-10">
                        Buy certified pre-owned phones at great prices, or sell your phone to us for instant cash!
                    </p>

                    {/* Dual CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button
                            className="bg-white text-[#A73860] hover:bg-gray-100 font-bold text-lg px-8 py-6 rounded-xl shadow-xl transition-all hover:scale-105"
                            onClick={() => {
                                document.getElementById('browse-section')?.scrollIntoView({ behavior: 'smooth' })
                            }}
                        >
                            <ShoppingCart className="h-5 w-5 mr-2" />
                            Browse Used Phones
                        </Button>
                        <Button
                            variant="outline"
                            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#A73860] font-bold text-lg px-8 py-6 rounded-xl shadow-xl transition-all hover:scale-105"
                            onClick={() => {
                                setShowSellForm(true)
                                setTimeout(() => {
                                    document.getElementById('sell-section')?.scrollIntoView({ behavior: 'smooth' })
                                }, 100)
                            }}
                        >
                            <Package className="h-5 w-5 mr-2" />
                            Sell Your Phone
                        </Button>
                    </div>

                    {/* Trust Indicators */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                            <Award className="h-10 w-10 mx-auto mb-3" />
                            <h3 className="font-bold text-lg mb-2">Admin Verified</h3>
                            <p className="text-sm opacity-80">Every phone is checked and approved by our experts</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                            <CheckCircle className="h-10 w-10 mx-auto mb-3" />
                            <h3 className="font-bold text-lg mb-2">Quality Guarantee</h3>
                            <p className="text-sm opacity-80">All phones come with warranty and quality assurance</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                            <Smartphone className="h-10 w-10 mx-auto mb-3" />
                            <h3 className="font-bold text-lg mb-2">Best Prices</h3>
                            <p className="text-sm opacity-80">Get the best value for buying and selling phones</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mx-auto max-w-7xl px-4 -mt-12 relative z-20">
                {/* Browse Section */}
                <section id="browse-section" className="mb-16">
                    {/* Filter Panel */}
                    <div className="bg-white rounded-2xl shadow-2xl p-8 mb-10 border border-gray-100">
                        <div className="grid grid-cols-1 gap-8">
                            {/* Search Bar */}
                            <div className="relative max-w-md">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search by model..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#A73860] focus:border-transparent bg-gray-50/50 transition-all"
                                />
                            </div>

                            {/* Filters Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Brand Filter */}
                                <div>
                                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Brand</label>
                                    <div className="relative">
                                        <select
                                            value={selectedBrand}
                                            onChange={(e) => setSelectedBrand(e.target.value)}
                                            className="w-full p-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#A73860] focus:border-transparent bg-white appearance-none cursor-pointer text-gray-700 font-medium transition-all"
                                        >
                                            <option value="all">All Brands</option>
                                            {brands.map(brand => (
                                                <option key={brand} value={brand}>{brand}</option>
                                            ))}
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                            <ChevronDown className="h-5 w-5" />
                                        </div>
                                    </div>
                                </div>

                                {/* Condition Filter */}
                                <div>
                                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Condition</label>
                                    <div className="relative">
                                        <select
                                            value={selectedCondition}
                                            onChange={(e) => setSelectedCondition(e.target.value as any)}
                                            className="w-full p-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#A73860] focus:border-transparent bg-white appearance-none cursor-pointer text-gray-700 font-medium transition-all"
                                        >
                                            <option value="all">All Conditions</option>
                                            <option value="excellent">Excellent</option>
                                            <option value="good">Good</option>
                                            <option value="fair">Fair</option>
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                            <ChevronDown className="h-5 w-5" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Results Count */}
                            <div className="pt-2">
                                <p className="text-sm text-gray-500">
                                    Showing <span className="font-bold text-[#A73860]">{filteredPhones.length}</span> used phones
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Phones Grid */}
                    {filteredPhones.length === 0 ? (
                        <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-gray-100">
                            <div className="text-6xl mb-4">🔍</div>
                            <h3 className="text-xl font-bold text-gray-700">No phones found</h3>
                            <p className="text-gray-500 max-w-md mx-auto mt-2">
                                Try adjusting your filters to find what you're looking for.
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredPhones.map((phone) => {
                                const conditionColors = getConditionColor(phone.condition)
                                const savingsPercent = Math.round((1 - phone.price / phone.originalPrice) * 100)

                                return (
                                    <div
                                        key={phone.id}
                                        className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden transition-all hover:shadow-xl hover:border-gray-200 hover:-translate-y-1 duration-300"
                                    >
                                        {/* Phone Image */}
                                        <div className="relative h-64 bg-gray-50">
                                            <Image
                                                src={phone.image}
                                                alt={phone.model}
                                                fill
                                                className="object-contain p-4"
                                            />
                                            <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                                {savingsPercent}% OFF
                                            </div>
                                            <div className={`absolute top-3 left-3 ${conditionColors.bg} ${conditionColors.text} px-3 py-1 rounded-full text-sm font-semibold border ${conditionColors.border}`}>
                                                {getConditionLabel(phone.condition)}
                                            </div>
                                        </div>

                                        {/* Phone Info */}
                                        <div className="p-5">
                                            <div className="flex items-start justify-between mb-2">
                                                <div>
                                                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">{phone.brand}</p>
                                                    <h3 className="text-lg font-bold text-gray-900 leading-tight">{phone.model}</h3>
                                                </div>
                                                {phone.rating && (
                                                    <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded text-sm font-semibold text-yellow-700">
                                                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                                        {phone.rating}
                                                    </div>
                                                )}
                                            </div>

                                            {/* Price */}
                                            <div className="flex items-baseline gap-2 mb-4">
                                                <span className="text-2xl font-bold" style={{ color: colors.primary }}>
                                                    LKR {phone.price.toLocaleString()}
                                                </span>
                                                <span className="text-sm text-gray-400 line-through">
                                                    LKR {phone.originalPrice.toLocaleString()}
                                                </span>
                                            </div>

                                            {/* Key Specs */}
                                            <div className="mb-4 space-y-1">
                                                {Object.entries(phone.specs).slice(0, 2).map(([key, value]) => (
                                                    <div key={key} className="flex items-center justify-between text-xs">
                                                        <span className="text-gray-500">{key}:</span>
                                                        <span className="text-gray-700 font-medium">{value}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Warranty Badge */}
                                            <div className="mb-4">
                                                <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-medium border border-green-200">
                                                    <CheckCircle className="h-3 w-3" />
                                                    {phone.warranty}
                                                </span>
                                            </div>

                                            {/* Action Button */}
                                            <Button
                                                className="w-full bg-[#A73860] hover:bg-[#8B2E4E] text-white font-semibold"
                                                onClick={() => alert(`Contact us to purchase: ${phone.model}\nPrice: LKR ${phone.price.toLocaleString()}`)}
                                            >
                                                <ShoppingCart className="h-4 w-4 mr-2" />
                                                Contact to Buy
                                            </Button>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    )}
                </section>

                {/* Sell Section */}
                {showSellForm && (
                    <section id="sell-section" className="mb-16">
                        <div className="bg-white rounded-xl shadow-xl p-8">
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <h2 className="text-3xl font-bold text-gray-900">Sell Your Phone 💰</h2>
                                    <p className="text-gray-600 mt-2">
                                        Submit your phone details and we'll review it within 24 hours
                                    </p>
                                </div>
                                <button
                                    onClick={() => setShowSellForm(false)}
                                    className="text-gray-400 hover:text-gray-600 text-sm font-medium"
                                >
                                    ✕ Close
                                </button>
                            </div>

                            {formSubmitted ? (
                                <div className="text-center py-12">
                                    <div className="text-6xl mb-4">✅</div>
                                    <h3 className="text-2xl font-bold text-green-600 mb-3">Request Submitted Successfully!</h3>
                                    <p className="text-gray-600 max-w-md mx-auto">
                                        Our team will review your phone and contact you within 24 hours with an offer.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSellSubmit} className="space-y-6">
                                    {/* Contact Information */}
                                    <div className="bg-gray-50 rounded-lg p-6">
                                        <h3 className="font-bold text-lg mb-4 text-gray-900">Contact Information</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                                                <input
                                                    type="text"
                                                    required
                                                    value={sellForm.name}
                                                    onChange={(e) => handleSellFormChange('name', e.target.value)}
                                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A73860] focus:border-[#A73860]"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                                                <input
                                                    type="email"
                                                    required
                                                    value={sellForm.email}
                                                    onChange={(e) => handleSellFormChange('email', e.target.value)}
                                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A73860] focus:border-[#A73860]"
                                                    placeholder="john@example.com"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                                                <input
                                                    type="tel"
                                                    required
                                                    value={sellForm.phone}
                                                    onChange={(e) => handleSellFormChange('phone', e.target.value)}
                                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A73860] focus:border-[#A73860]"
                                                    placeholder="+94 77 123 4567"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Phone Details */}
                                    <div className="bg-gray-50 rounded-lg p-6">
                                        <h3 className="font-bold text-lg mb-4 text-gray-900">Phone Details</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Brand *</label>
                                                <input
                                                    type="text"
                                                    required
                                                    value={sellForm.brand}
                                                    onChange={(e) => handleSellFormChange('brand', e.target.value)}
                                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A73860] focus:border-[#A73860]"
                                                    placeholder="Apple, Samsung, etc."
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Model *</label>
                                                <input
                                                    type="text"
                                                    required
                                                    value={sellForm.model}
                                                    onChange={(e) => handleSellFormChange('model', e.target.value)}
                                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A73860] focus:border-[#A73860]"
                                                    placeholder="iPhone 13 Pro, Galaxy S22, etc."
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Storage *</label>
                                                <input
                                                    type="text"
                                                    required
                                                    value={sellForm.storage}
                                                    onChange={(e) => handleSellFormChange('storage', e.target.value)}
                                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A73860] focus:border-[#A73860]"
                                                    placeholder="128GB, 256GB, etc."
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">Color</label>
                                                <input
                                                    type="text"
                                                    value={sellForm.color}
                                                    onChange={(e) => handleSellFormChange('color', e.target.value)}
                                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A73860] focus:border-[#A73860]"
                                                    placeholder="Black, White, etc."
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Condition Assessment */}
                                    <div className="bg-gray-50 rounded-lg p-6">
                                        <h3 className="font-bold text-lg mb-4 text-gray-900">Condition Assessment</h3>
                                        <div className="mb-4">
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Condition *</label>
                                            <select
                                                value={sellForm.condition}
                                                onChange={(e) => handleSellFormChange('condition', e.target.value)}
                                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A73860] focus:border-[#A73860] bg-white"
                                            >
                                                <option value="excellent">Excellent - Like new, no visible wear</option>
                                                <option value="good">Good - Minor scratches, fully functional</option>
                                                <option value="fair">Fair - Visible wear, some cosmetic damage</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Condition Notes *</label>
                                            <textarea
                                                required
                                                value={sellForm.conditionNotes}
                                                onChange={(e) => handleSellFormChange('conditionNotes', e.target.value)}
                                                rows={4}
                                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A73860] focus:border-[#A73860]"
                                                placeholder="Describe any scratches, dents, or issues with the phone..."
                                            />
                                        </div>
                                    </div>

                                    {/* Image Upload Placeholder */}
                                    <div className="bg-gray-50 rounded-lg p-6">
                                        <h3 className="font-bold text-lg mb-4 text-gray-900">Phone Images</h3>
                                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                                            <Upload className="h-12 w-12 mx-auto text-gray-400 mb-3" />
                                            <p className="text-gray-600 mb-2">Upload up to 5 images of your phone</p>
                                            <p className="text-sm text-gray-500">This feature will be available in the full version</p>
                                        </div>
                                    </div>

                                    {/* Expected Price */}
                                    <div className="bg-gray-50 rounded-lg p-6">
                                        <h3 className="font-bold text-lg mb-4 text-gray-900">Expected Price</h3>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Your Expected Price (LKR) *</label>
                                            <input
                                                type="number"
                                                required
                                                value={sellForm.expectedPrice}
                                                onChange={(e) => handleSellFormChange('expectedPrice', e.target.value)}
                                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A73860] focus:border-[#A73860]"
                                                placeholder="120000"
                                            />
                                            <p className="text-sm text-gray-500 mt-2">
                                                Our admin team will review and may adjust the price based on market value and condition.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                                        <p className="text-sm text-gray-500">
                                            * Required fields. We'll contact you within 24 hours.
                                        </p>
                                        <Button
                                            type="submit"
                                            className="bg-[#A73860] hover:bg-[#8B2E4E] text-white font-bold px-8 py-3"
                                        >
                                            <Send className="h-4 w-4 mr-2" />
                                            Submit for Review
                                        </Button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </section>
                )}
            </div>
        </main>
    )
}
