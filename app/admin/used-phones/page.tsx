"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { colors } from "@/app/constants/colors"
import {
    sellRequests as initialRequests,
    getConditionLabel,
    getConditionColor,
    getStatusColor,
    RequestStatus,
    SellRequest
} from "@/app/sell/data"
import {
    CheckCircle,
    XCircle,
    Clock,
    Search,
    Filter,
    ChevronDown,
    Mail,
    Phone,
    Calendar,
    ArrowLeft,
    LayoutDashboard,
    ExternalLink,
    Smartphone
} from "lucide-react"
import Link from "next/link"

export default function AdminUsedPhones() {
    const [requests, setRequests] = useState<SellRequest[]>(initialRequests)
    const [selectedStatus, setSelectedStatus] = useState<RequestStatus | 'all'>('all')
    const [searchQuery, setSearchQuery] = useState('')
    const [viewingRequest, setViewingRequest] = useState<SellRequest | null>(null)
    const [adminNotes, setAdminNotes] = useState('')
    const [suggestedPrice, setSuggestedPrice] = useState('')

    const filteredRequests = requests.filter(req => {
        if (selectedStatus !== 'all' && req.status !== selectedStatus) return false
        if (searchQuery && !req.userInfo.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
            !req.phoneDetails.model.toLowerCase().includes(searchQuery.toLowerCase())) return false
        return true
    })

    const handleAction = (id: string, status: RequestStatus) => {
        setRequests(prev => prev.map(req =>
            req.id === id ? {
                ...req,
                status,
                adminNotes: adminNotes || req.adminNotes,
                finalPrice: status === 'approved' ? Number(suggestedPrice) || req.expectedPrice : undefined
            } : req
        ))
        setViewingRequest(null)
        setAdminNotes('')
        setSuggestedPrice('')
    }

    const openRequest = (req: SellRequest) => {
        setViewingRequest(req)
        setAdminNotes(req.adminNotes || '')
        setSuggestedPrice(req.finalPrice?.toString() || req.expectedPrice.toString())
    }

    return (
        <main className="min-h-screen bg-gray-50 pb-20">
            {/* Admin Header */}
            <header className="bg-white border-b sticky top-0 z-20">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href="/sell">
                            <Button variant="outline-primary" className="h-9 px-3">
                                <ArrowLeft className="h-4 w-4 mr-2" />
                                Store View
                            </Button>
                        </Link>
                        <div className="h-6 w-px bg-gray-200" />
                        <h1 className="text-xl font-bold flex items-center gap-2">
                            <LayoutDashboard className="h-5 w-5 text-[#A73860]" />
                            Admin Dashboard
                        </h1>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-sm text-gray-500 font-medium">Welcome, Admin</span>
                        <div className="h-8 w-8 rounded-full bg-[#A73860] flex items-center justify-center text-white font-bold">
                            A
                        </div>
                    </div>
                </div>
            </header>

            <div className="container mx-auto px-4 py-8">
                {/* Dashboard Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    {[
                        { label: 'Total Requests', value: requests.length, icon: Calendar, color: 'text-blue-600' },
                        { label: 'Pending Review', value: requests.filter(r => r.status === 'pending').length, icon: Clock, color: 'text-orange-600' },
                        { label: 'Approved', value: requests.filter(r => r.status === 'approved').length, icon: CheckCircle, color: 'text-green-600' },
                        { label: 'Rejected', value: requests.filter(r => r.status === 'rejected').length, icon: XCircle, color: 'text-red-600' },
                    ].map((stat, i) => (
                        <div key={i} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm font-medium text-gray-500 uppercase">{stat.label}</span>
                                <stat.icon className={`h-5 w-5 ${stat.color}`} />
                            </div>
                            <div className="text-3xl font-bold">{stat.value}</div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* List Section */}
                    <div className="flex-1">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="p-4 border-b bg-gray-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <h2 className="font-bold text-gray-800">Used Mobile Sell Requests</h2>
                                <div className="flex items-center gap-3">
                                    <div className="relative">
                                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                        <input
                                            type="text"
                                            placeholder="Search name or model..."
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            className="pl-9 pr-4 py-2 border rounded-lg text-sm w-full md:w-64 focus:ring-2 focus:ring-[#A73860] focus:outline-none"
                                        />
                                    </div>
                                    <select
                                        className="border rounded-lg text-sm py-2 px-3 focus:outline-none"
                                        value={selectedStatus}
                                        onChange={(e) => setSelectedStatus(e.target.value as any)}
                                    >
                                        <option value="all">All Status</option>
                                        <option value="pending">Pending</option>
                                        <option value="approved">Approved</option>
                                        <option value="rejected">Rejected</option>
                                    </select>
                                </div>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="bg-gray-50/50 text-gray-500 text-xs uppercase font-bold border-b">
                                            <th className="px-6 py-4">User</th>
                                            <th className="px-6 py-4">Device</th>
                                            <th className="px-6 py-4">Expected Price</th>
                                            <th className="px-6 py-4">Status</th>
                                            <th className="px-6 py-4">Date</th>
                                            <th className="px-6 py-4 text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y">
                                        {filteredRequests.map((req) => (
                                            <tr key={req.id} className="hover:bg-gray-50 transition-colors">
                                                <td className="px-6 py-4">
                                                    <div className="font-bold text-gray-900">{req.userInfo.name}</div>
                                                    <div className="text-xs text-gray-500">{req.userInfo.phone}</div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="font-medium">{req.phoneDetails.brand} {req.phoneDetails.model}</div>
                                                    <div className="text-xs text-gray-500">{req.phoneDetails.storage} • {getConditionLabel(req.condition)}</div>
                                                </td>
                                                <td className="px-6 py-4 font-bold text-gray-900">
                                                    LKR {req.expectedPrice.toLocaleString()}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${getStatusColor(req.status).bg} ${getStatusColor(req.status).text}`}>
                                                        {req.status}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 text-xs text-gray-500">
                                                    {req.submittedDate}
                                                </td>
                                                <td className="px-6 py-4 text-right">
                                                    <Button
                                                        variant="secondary"
                                                        className="text-[#A73860] hover:bg-[#fdf4f4] font-bold"
                                                        onClick={() => openRequest(req)}
                                                    >
                                                        Review
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))}
                                        {filteredRequests.length === 0 && (
                                            <tr>
                                                <td colSpan={6} className="px-6 py-12 text-center text-gray-500 font-medium">
                                                    No requests found matching your criteria.
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Review Detail Panel */}
                    {viewingRequest && (
                        <div className="lg:w-[400px] shrink-0">
                            <div className="bg-white rounded-xl shadow-xl border border-[#A73860]/20 sticky top-24 overflow-hidden duration-300">
                                <div className="p-5 bg-gray-50 border-b flex items-center justify-between">
                                    <h3 className="font-bold uppercase text-xs tracking-wider text-gray-500">Request Review</h3>
                                    <button onClick={() => setViewingRequest(null)} className="text-gray-400 hover:text-gray-600">
                                        <XCircle className="h-5 w-5" />
                                    </button>
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="h-16 w-16 bg-gray-100 rounded-lg flex items-center justify-center">
                                            <Smartphone className="h-8 w-8 text-gray-400" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold leading-tight">{viewingRequest.phoneDetails.brand} {viewingRequest.phoneDetails.model}</h4>
                                            <p className="text-sm text-gray-500">{viewingRequest.phoneDetails.storage} • {viewingRequest.phoneDetails.color}</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4 mb-8">
                                        <div className="flex items-center gap-3 text-sm">
                                            <div className={`p-1.5 rounded-lg ${getConditionColor(viewingRequest.condition).bg}`}>
                                                <CheckCircle className={`h-4 w-4 ${getConditionColor(viewingRequest.condition).text}`} />
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500 uppercase font-bold">Declared Condition</p>
                                                <p className="font-bold text-gray-800">{getConditionLabel(viewingRequest.condition)}</p>
                                            </div>
                                        </div>

                                        <div className="bg-gray-50 p-3 rounded-lg border text-sm italic text-gray-600">
                                            "{viewingRequest.conditionNotes}"
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <p className="text-xs text-gray-500 uppercase font-bold mb-1">User's Price</p>
                                                <p className="text-lg font-bold text-gray-900">LKR {viewingRequest.expectedPrice.toLocaleString()}</p>
                                            </div>
                                            {viewingRequest.status === 'approved' && viewingRequest.finalPrice && (
                                                <div>
                                                    <p className="text-xs text-gray-500 uppercase font-bold mb-1 text-green-600">Final Price</p>
                                                    <p className="text-lg font-bold text-green-600">LKR {viewingRequest.finalPrice.toLocaleString()}</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {viewingRequest.status === 'pending' ? (
                                        <div className="space-y-4 border-t pt-6">
                                            <div>
                                                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Adjust Final Price (LKR)</label>
                                                <input
                                                    type="number"
                                                    value={suggestedPrice}
                                                    onChange={(e) => setSuggestedPrice(e.target.value)}
                                                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#A73860] outline-none"
                                                    placeholder="Enter final offer price..."
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Admin Feedback / Notes</label>
                                                <textarea
                                                    value={adminNotes}
                                                    onChange={(e) => setAdminNotes(e.target.value)}
                                                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#A73860] outline-none h-24"
                                                    placeholder="Add rejection reason or approval details..."
                                                />
                                            </div>
                                            <div className="grid grid-cols-2 gap-3 pt-2">
                                                <Button
                                                    variant="secondary"
                                                    className="border border-red-200 text-red-600 hover:bg-red-50 font-bold"
                                                    onClick={() => handleAction(viewingRequest.id, 'rejected')}
                                                >
                                                    <XCircle className="h-4 w-4 mr-2" />
                                                    Reject
                                                </Button>
                                                <Button
                                                    className="bg-[#A73860] hover:bg-[#8B2E4E] font-bold"
                                                    onClick={() => handleAction(viewingRequest.id, 'approved')}
                                                >
                                                    <CheckCircle className="h-4 w-4 mr-2" />
                                                    Approve
                                                </Button>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="border-t pt-6">
                                            <p className="text-xs text-gray-500 uppercase font-bold mb-2">Admin Action Result</p>
                                            <div className={`p-4 rounded-lg border ${getStatusColor(viewingRequest.status).bg}`}>
                                                <p className={`font-bold ${getStatusColor(viewingRequest.status).text} capitalize mb-1`}>
                                                    {viewingRequest.status}
                                                </p>
                                                {viewingRequest.adminNotes && (
                                                    <p className="text-sm text-gray-600">{viewingRequest.adminNotes}</p>
                                                )}
                                            </div>
                                            <Button
                                                variant="outline-primary"
                                                className="w-full mt-4"
                                                onClick={() => {
                                                    setViewingRequest(prev => prev ? { ...prev, status: 'pending' } : null)
                                                }}
                                            >
                                                Reset to Pending
                                            </Button>
                                        </div>
                                    )}

                                    <div className="mt-8 pt-6 border-t">
                                        <p className="text-xs text-gray-500 uppercase font-bold mb-4">Contact Info</p>
                                        <div className="flex flex-col gap-3">
                                            <div className="flex items-center gap-3 text-sm text-gray-700">
                                                <Mail className="h-4 w-4 text-gray-400" />
                                                {viewingRequest.userInfo.email}
                                            </div>
                                            <div className="flex items-center gap-3 text-sm text-gray-700">
                                                <Phone className="h-4 w-4 text-gray-400" />
                                                {viewingRequest.userInfo.phone}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </main>
    )
}
