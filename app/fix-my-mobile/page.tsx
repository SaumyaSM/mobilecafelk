"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { colors } from "../constants/colors"
import { phoneModels, problems, shops } from "./data"
import { MapPin, Star, Phone, Calendar } from "lucide-react"

export default function FixMyMobilePage() {
    const [selectedProblem, setSelectedProblem] = useState<string | null>(null)
    const [selectedBrand, setSelectedBrand] = useState<string>("")
    const [selectedModel, setSelectedModel] = useState<string>("")
    const [showResults, setShowResults] = useState(false)

    // Get unique brands
    const brands = Array.from(new Set(phoneModels.map((p) => p.brand)))

    // Filter models based on selected brand
    const availableModels = phoneModels.filter((p) => p.brand === selectedBrand)

    // Filter shops
    const filteredShops = shops
        .filter((shop) => {
            // Must match problem if selected (shops mocked to support specific problems)
            // If mock data doesn't fully cover it, we can be lenient or strict.
            // Requirements say: "Filter shops by: Matching supportedProblems"
            if (selectedProblem && !shop.supportedProblems.includes(selectedProblem)) {
                return false
            }
            // "Matching supportedBrands"
            if (selectedBrand && !shop.supportedBrands.includes(selectedBrand)) {
                return false
            }
            return true
        })
        .sort((a, b) => a.distanceKm - b.distanceKm) // Nearest first

    const handleFindShops = () => {
        setShowResults(true)
        // Scroll to results
        setTimeout(() => {
            document.getElementById("results-section")?.scrollIntoView({ behavior: "smooth" })
        }, 100)
    }

    const handleProblemSelect = (id: string) => {
        setSelectedProblem(id)
        setShowResults(false) // Reset results if search criteria changes
    }

    const handleBrandChange = (brand: string) => {
        setSelectedBrand(brand)
        setSelectedModel("") // Reset model
        setShowResults(false)
    }

    const handleModelChange = (model: string) => {
        setSelectedModel(model)
        setShowResults(false)
    }

    return (
        <main className="min-h-screen pb-20 bg-gray-50">
            {/* 1. Hero Section */}
            <section
                className="text-white py-16 px-4 text-center"
                style={{ background: colors.gradients.heroSection.css }}
            >
                <div className="container mx-auto max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Fix My Mobile 🛠️</h1>
                    <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
                        Select your issue and device to find the best repair experts near you.
                    </p>
                </div>
            </section>

            <div className="container mx-auto max-w-5xl px-4 -mt-8">
                <div className="bg-white rounded-xl shadow-xl p-6 md:p-10 space-y-12">

                    {/* Step 1: Select Problem */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="bg-gray-100 text-gray-800 font-bold h-8 w-8 rounded-full flex items-center justify-center">1</div>
                            <h2 className="text-2xl font-bold text-gray-800">What's the problem?</h2>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                            {problems.map((problem) => {
                                const Icon = problem.icon
                                const isSelected = selectedProblem === problem.id
                                return (
                                    <button
                                        key={problem.id}
                                        onClick={() => handleProblemSelect(problem.id)}
                                        className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all duration-200 h-32 hover:shadow-md ${isSelected
                                            ? "border-[#A73860] bg-[#fdf4f4] text-[#A73860]"
                                            : "border-gray-100 bg-gray-50 text-gray-600 hover:border-gray-200"
                                            }`}
                                    >
                                        <Icon className={`h-8 w-8 mb-3 ${isSelected ? "text-[#A73860]" : "text-gray-500"}`} />
                                        <span className="text-sm font-medium text-center leading-tight">
                                            {problem.label}
                                        </span>
                                    </button>
                                )
                            })}
                        </div>
                    </section>

                    {/* Step 2: Select Device */}
                    <section className={`transition-opacity duration-300 ${selectedProblem ? 'opacity-100' : 'opacity-50 pointer-events-none'}`}>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="bg-gray-100 text-gray-800 font-bold h-8 w-8 rounded-full flex items-center justify-center">2</div>
                            <h2 className="text-2xl font-bold text-gray-800">Which device do you have?</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 max-w-2xl">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Brand</label>
                                <div className="relative">
                                    <select
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A73860] focus:border-[#A73860] bg-white appearance-none"
                                        value={selectedBrand}
                                        onChange={(e) => handleBrandChange(e.target.value)}
                                    >
                                        <option value="">Select Brand</option>
                                        {brands.map((brand) => (
                                            <option key={brand} value={brand}>
                                                {brand}
                                            </option>
                                        ))}
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Model</label>
                                <div className="relative">
                                    <select
                                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#A73860] focus:border-[#A73860] bg-white appearance-none disabled:bg-gray-100 disabled:text-gray-400"
                                        value={selectedModel}
                                        onChange={(e) => handleModelChange(e.target.value)}
                                        disabled={!selectedBrand}
                                    >
                                        <option value="">Select Model</option>
                                        {availableModels.map((m) => (
                                            <option key={m.model} value={m.model}>
                                                {m.model}
                                            </option>
                                        ))}
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Action Button */}
                    <section className="pt-4 border-t border-gray-100">
                        <Button
                            className="w-full md:w-auto md:min-w-[300px] h-12 text-lg font-semibold shadow-lg transition-transform active:scale-95"
                            style={{
                                backgroundColor: selectedProblem && selectedModel ? colors.primary : '#e5e7eb',
                                color: selectedProblem && selectedModel ? 'white' : '#9ca3af',
                            }}
                            disabled={!selectedProblem || !selectedModel}
                            onClick={handleFindShops}
                        >
                            Find Repair Shops
                        </Button>
                        {(!selectedProblem || !selectedModel) && (
                            <p className="text-sm text-gray-400 mt-2">Please select a problem and device to continue</p>
                        )}
                    </section>

                </div>

                {/* Results Section */}
                {showResults && (
                    <section id="results-section" className="mt-16 animate-in slide-in-from-bottom-10 fade-in duration-500">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Repair Shops Near You</h2>

                        {filteredShops.length === 0 ? (
                            <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-gray-100">
                                <div className="text-6xl mb-4">🏠</div>
                                <h3 className="text-xl font-bold text-gray-700">No shops found matching your criteria.</h3>
                                <p className="text-gray-500 max-w-md mx-auto mt-2">
                                    Try selecting a different brand or checking for other nearby locations.
                                </p>
                            </div>
                        ) : (
                            <div className="grid gap-6">
                                {filteredShops.map((shop) => (
                                    <div
                                        key={shop.id}
                                        className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col md:flex-row gap-6 md:items-center transition-all hover:shadow-lg hover:border-gray-200"
                                    >
                                        {/* Shop Info */}
                                        <div className="flex-1">
                                            <div className="flex items-start justify-between">
                                                <h3 className="text-xl font-bold text-gray-900">{shop.name}</h3>
                                                <div className="flex flex-col items-end">
                                                    <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded text-yellow-700 font-semibold text-sm">
                                                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                                        {shop.rating}
                                                    </div>
                                                    <span className="text-xs text-gray-400 mt-1">{shop.distanceKm} km away</span>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-2 text-gray-600 mt-2 mb-4">
                                                <MapPin className="h-4 w-4 shrink-0" />
                                                <span className="text-sm">{shop.address}</span>
                                            </div>

                                            <div className="flex flex-wrap gap-2">
                                                {shop.specialties?.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="bg-[#fdf4f4] text-[#A73860] px-3 py-1 rounded-full text-xs font-medium border border-[#fbe8e9]"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Actions */}
                                        <div className="flex flex-row md:flex-col gap-3 md:min-w-[160px]">
                                            <Button className="w-full bg-[#A73860] hover:bg-[#8B2E4E]">
                                                <Calendar className="h-4 w-4 mr-2" />
                                                Book Now
                                            </Button>
                                            <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:bg-gray-50">
                                                <Phone className="h-4 w-4 mr-2" />
                                                Call
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </section>
                )}
            </div>
        </main>
    )
}
