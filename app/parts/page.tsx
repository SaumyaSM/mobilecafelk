"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { colors } from "../constants/colors"
import { products, shops, getBrands, getAccessoryTypes, getShopsForProduct, Product, Shop } from "../buy/data"
import { Search, Star, MapPin, Phone, ShoppingCart, Filter, Tag, Package } from "lucide-react"

export default function PartsPage() {
    // State management
    const [selectedCategory, setSelectedCategory] = useState<'all' | 'phone' | 'accessory' | 'part'>('part')
    const [selectedSource, setSelectedSource] = useState<'all' | 'store' | 'shops'>('all')
    const [selectedBrand, setSelectedBrand] = useState<string>('all')
    const [selectedCondition, setSelectedCondition] = useState<'all' | 'new' | 'refurbished'>('all')
    const [searchQuery, setSearchQuery] = useState<string>('')
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
    const [showShopsFor, setShowShopsFor] = useState<string | null>(null)

    // Filtered products
    const filteredProducts = useMemo(() => {
        return products.filter(product => {
            // Category filter
            if (selectedCategory !== 'all' && product.category !== selectedCategory) return false

            // Source filter
            if (selectedSource === 'store' && product.availableAt === 'shops') return false
            if (selectedSource === 'shops' && product.availableAt === 'store') return false

            // Brand filter
            if (selectedBrand !== 'all' && product.brand !== selectedBrand) return false

            // Condition filter
            if (selectedCondition !== 'all' && product.condition !== selectedCondition) return false

            // Search query
            if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) return false

            return true
        })
    }, [selectedCategory, selectedSource, selectedBrand, selectedCondition, searchQuery])

    // Get brands for current category
    const brands = useMemo(() => getBrands(), [])

    const handleViewShops = (productId: string) => {
        setShowShopsFor(productId)
        setTimeout(() => {
            document.getElementById('shops-section')?.scrollIntoView({ behavior: 'smooth' })
        }, 100)
    }

    const shopsForProduct = showShopsFor ? getShopsForProduct(showShopsFor) : []
    const currentProduct = showShopsFor ? products.find(p => p.id === showShopsFor) : null

    return (
        <main className="min-h-screen pb-20 bg-gray-50">
            {/* Hero Section */}
            <section
                className="text-white py-16 px-4 text-center"
                style={{ background: colors.gradients.heroSection.css }}
            >
                <div className="container mx-auto max-w-6xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Shop Parts 🛒</h1>
                    <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
                        Browse our collection of premium phone parts. Buy from our store or discover products at trusted partner shops.
                    </p>
                </div>
            </section>

            <div className="container mx-auto max-w-7xl px-4 -mt-8">
                {/* Filter Panel */}
                <div className="bg-white rounded-xl shadow-xl p-6 mb-8">
                    {/* Search Bar */}
                    <div className="mb-6">
                        <div className="relative max-w-xl">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A73860] focus:border-[#A73860] bg-white"
                            />
                        </div>
                    </div>

                    {/* Category Tabs */}
                    <div className="flex items-center gap-3 mb-6 flex-wrap">
                        <span className="text-sm font-semibold text-gray-700">Category:</span>
                        {[
                            { value: 'all', label: 'All', icon: Package },
                            { value: 'part', label: 'Parts', icon: Tag }
                        ].map(({ value, label, icon: Icon }) => (
                            <button
                                key={value}
                                onClick={() => setSelectedCategory(value as any)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg border-2 font-medium transition-all ${selectedCategory === value
                                    ? 'border-[#A73860] bg-[#fdf4f4] text-[#A73860]'
                                    : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
                                    }`}
                            >
                                <Icon className="h-4 w-4" />
                                {label}
                            </button>
                        ))}
                    </div>

                    {/* Filters Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Source Filter */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Source</label>
                            <select
                                value={selectedSource}
                                onChange={(e) => setSelectedSource(e.target.value as any)}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A73860] focus:border-[#A73860] bg-white"
                            >
                                <option value="all">All Sources</option>
                                <option value="store">Our Store</option>
                                <option value="shops">Partner Shops</option>
                            </select>
                        </div>

                        {/* Brand Filter */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Brand</label>
                            <select
                                value={selectedBrand}
                                onChange={(e) => setSelectedBrand(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A73860] focus:border-[#A73860] bg-white"
                            >
                                <option value="all">All Brands</option>
                                {brands.map(brand => (
                                    <option key={brand} value={brand}>{brand}</option>
                                ))}
                            </select>
                        </div>

                        {/* Condition Filter */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Condition</label>
                            <select
                                value={selectedCondition}
                                onChange={(e) => setSelectedCondition(e.target.value as any)}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A73860] focus:border-[#A73860] bg-white"
                            >
                                <option value="all">All Conditions</option>
                                <option value="new">New</option>
                                <option value="refurbished">Refurbished</option>
                            </select>
                        </div>
                    </div>

                    {/* Results Count */}
                    <div className="mt-4 pt-4 border-t border-gray-100">
                        <p className="text-sm text-gray-600">
                            Showing <span className="font-semibold text-[#A73860]">{filteredProducts.length}</span> products
                        </p>
                    </div>
                </div>

                {/* Products Grid */}
                {filteredProducts.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-gray-100">
                        <div className="text-6xl mb-4">🔍</div>
                        <h3 className="text-xl font-bold text-gray-700">No products found</h3>
                        <p className="text-gray-500 max-w-md mx-auto mt-2">
                            Try adjusting your filters or search query to find what you're looking for.
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {filteredProducts.map((product) => (
                            <div
                                key={product.id}
                                className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden transition-all hover:shadow-xl hover:border-gray-200 hover:-translate-y-1 duration-300"
                            >
                                {/* Product Image */}
                                <div className="relative h-64 bg-gray-50">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-contain p-4"
                                    />
                                    {product.originalPrice && (
                                        <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                            {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                                        </div>
                                    )}
                                    {product.condition === 'refurbished' && (
                                        <div className="absolute top-3 left-3 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                            Refurbished
                                        </div>
                                    )}
                                </div>

                                {/* Product Info */}
                                <div className="p-5">
                                    <div className="flex items-start justify-between mb-2">
                                        <div>
                                            <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">{product.brand}</p>
                                            <h3 className="text-lg font-bold text-gray-900 leading-tight">{product.name}</h3>
                                        </div>
                                        {product.rating && (
                                            <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded text-sm font-semibold text-yellow-700">
                                                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                                {product.rating}
                                            </div>
                                        )}
                                    </div>

                                    {/* Price */}
                                    <div className="flex items-baseline gap-2 mb-4">
                                        <span className="text-2xl font-bold" style={{ color: colors.primary }}>
                                            LKR {product.price.toLocaleString()}
                                        </span>
                                        {product.originalPrice && (
                                            <span className="text-sm text-gray-400 line-through">
                                                LKR {product.originalPrice.toLocaleString()}
                                            </span>
                                        )}
                                    </div>

                                    {/* Key Specs */}
                                    <div className="mb-4 space-y-1">
                                        {Object.entries(product.specs).slice(0, 2).map(([key, value]) => (
                                            <div key={key} className="flex items-center justify-between text-xs">
                                                <span className="text-gray-500">{key}:</span>
                                                <span className="text-gray-700 font-medium">{value}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Availability Badge */}
                                    <div className="mb-4">
                                        {product.availableAt === 'both' ? (
                                            <span className="inline-block bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-medium border border-green-200">
                                                Available at Store & Partner Shops
                                            </span>
                                        ) : product.availableAt === 'store' ? (
                                            <span className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium border border-blue-200">
                                                Available at Our Store
                                            </span>
                                        ) : (
                                            <span className="inline-block bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs font-medium border border-purple-200">
                                                Available at Partner Shops
                                            </span>
                                        )}
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="space-y-2">
                                        <Button
                                            className="w-full bg-[#A73860] hover:bg-[#8B2E4E] text-white font-semibold"
                                            onClick={() => alert(`Contact us to purchase: ${product.name}`)}
                                        >
                                            <ShoppingCart className="h-4 w-4 mr-2" />
                                            Contact to Buy
                                        </Button>
                                        {(product.availableAt === 'shops' || product.availableAt === 'both') && (
                                            <Button
                                                variant="outline"
                                                className="w-full border-[#A73860] text-[#A73860] hover:bg-[#fdf4f4]"
                                                onClick={() => handleViewShops(product.id)}
                                            >
                                                <MapPin className="h-4 w-4 mr-2" />
                                                View Partner Shops
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Partner Shops Section */}
                {showShopsFor && shopsForProduct.length > 0 && currentProduct && (
                    <section id="shops-section" className="mt-16 animate-in slide-in-from-bottom-10 fade-in duration-500">
                        <div className="bg-white rounded-xl shadow-xl p-8">
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <h2 className="text-3xl font-bold text-gray-900">Partner Shops</h2>
                                    <p className="text-gray-600 mt-2">
                                        Find <span className="font-semibold text-[#A73860]">{currentProduct.name}</span> at these registered shops
                                    </p>
                                </div>
                                <button
                                    onClick={() => setShowShopsFor(null)}
                                    className="text-gray-400 hover:text-gray-600 text-sm font-medium"
                                >
                                    ✕ Close
                                </button>
                            </div>

                            <div className="grid gap-6">
                                {shopsForProduct.map((shop) => (
                                    <div
                                        key={shop.id}
                                        className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all hover:border-gray-300"
                                    >
                                        <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between">
                                            <div className="flex-1">
                                                <div className="flex items-start justify-between mb-3">
                                                    <h3 className="text-xl font-bold text-gray-900">{shop.name}</h3>
                                                    <div className="flex flex-col items-end">
                                                        <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded text-yellow-700 font-semibold text-sm">
                                                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                                            {shop.rating}
                                                        </div>
                                                        <span className="text-xs text-gray-400 mt-1">{shop.distanceKm} km away</span>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-2 text-gray-600 mb-2">
                                                    <MapPin className="h-4 w-4 shrink-0" />
                                                    <span className="text-sm">{shop.address}</span>
                                                </div>

                                                <div className="flex items-center gap-2 text-gray-600">
                                                    <Phone className="h-4 w-4 shrink-0" />
                                                    <span className="text-sm font-medium">{shop.contactNumber}</span>
                                                </div>
                                            </div>

                                            <div className="flex flex-row md:flex-col gap-3 md:min-w-[160px]">
                                                <Button
                                                    className="flex-1 bg-[#A73860] hover:bg-[#8B2E4E]"
                                                    onClick={() => alert(`Calling ${shop.name}: ${shop.contactNumber}`)}
                                                >
                                                    <Phone className="h-4 w-4 mr-2" />
                                                    Call Shop
                                                </Button>
                                                <Button
                                                    variant="outline"
                                                    className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50"
                                                    onClick={() => alert('Opening maps...')}
                                                >
                                                    <MapPin className="h-4 w-4 mr-2" />
                                                    Get Directions
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </div>
        </main>
    )
}
