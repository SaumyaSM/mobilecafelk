// Used Mobile Data Types and Mock Data

export type PhoneCondition = 'excellent' | 'good' | 'fair'
export type RequestStatus = 'pending' | 'approved' | 'rejected'

// Interface for used phones that are approved and listed on marketplace
export interface UsedPhone {
    id: string
    brand: string
    model: string
    condition: PhoneCondition
    price: number
    originalPrice: number
    image: string
    specs: {
        storage: string
        ram: string
        battery: string
        [key: string]: string
    }
    dateAdded: string
    warranty: string
    rating?: number
}

// Interface for sell requests submitted by users
export interface SellRequest {
    id: string
    userInfo: {
        name: string
        email: string
        phone: string
    }
    phoneDetails: {
        brand: string
        model: string
        storage: string
        color: string
    }
    condition: PhoneCondition
    conditionNotes: string
    images: string[] // URLs to uploaded images
    expectedPrice: number
    submittedDate: string
    status: RequestStatus
    adminNotes?: string
    finalPrice?: number
}

// Mock data for approved used phones
export const usedPhones: UsedPhone[] = [
    {
        id: 'u1',
        brand: 'Apple',
        model: 'iPhone 13 Pro',
        condition: 'excellent',
        price: 185000,
        originalPrice: 250000,
        image: '/images/iphone-13.jpg',
        specs: {
            storage: '256GB',
            ram: '6GB',
            battery: '95% Health',
            display: '6.1" Super Retina XDR'
        },
        dateAdded: '2026-01-28',
        warranty: '3 months warranty',
        rating: 4.8
    },
    {
        id: 'u2',
        brand: 'Samsung',
        model: 'Galaxy S24',
        condition: 'good',
        price: 145000,
        originalPrice: 220000,
        image: '/images/samsung-s24.jpg',
        specs: {
            storage: '256GB',
            ram: '8GB',
            battery: '88% Health',
            display: '6.2" Dynamic AMOLED'
        },
        dateAdded: '2026-01-25',
        warranty: '2 months warranty',
        rating: 4.5
    },
    {
        id: 'u3',
        brand: 'Apple',
        model: 'iPhone 15 Pro',
        condition: 'good',
        price: 285000,
        originalPrice: 350000,
        image: '/images/iphone-15-pro.jpg',
        specs: {
            storage: '128GB',
            ram: '8GB',
            battery: '99% Health',
            display: '6.1" Super Retina XDR'
        },
        dateAdded: '2026-01-30',
        warranty: '2 months warranty',
        rating: 4.9
    },
    {
        id: 'u4',
        brand: 'OnePlus',
        model: 'OnePlus 12',
        condition: 'excellent',
        price: 195000,
        originalPrice: 240000,
        image: '/images/oneplus-12.jpg',
        specs: {
            storage: '512GB',
            ram: '16GB',
            battery: '100% Health',
            display: '6.82" Fluid AMOLED'
        },
        dateAdded: '2026-02-01',
        warranty: '3 months warranty',
        rating: 4.7
    },
    {
        id: 'u5',
        brand: 'Google',
        model: 'Pixel 8 Pro',
        condition: 'fair',
        price: 135000,
        originalPrice: 195000,
        image: '/images/pixel-8-pro.jpg',
        specs: {
            storage: '128GB',
            ram: '12GB',
            battery: '85% Health',
            display: '6.7" LTPO OLED'
        },
        dateAdded: '2026-01-20',
        warranty: '1 month warranty',
        rating: 4.3
    },
    {
        id: 'u6',
        brand: 'Xiaomi',
        model: 'Xiaomi 14 Pro',
        condition: 'excellent',
        price: 188000,
        originalPrice: 230000,
        image: '/images/xiaomi-14-pro.jpg',
        specs: {
            storage: '256GB',
            ram: '12GB',
            battery: '94% Health',
            display: '6.73" LTPO AMOLED'
        },
        dateAdded: '2026-02-03',
        warranty: '3 months warranty',
        rating: 4.8
    }
]

// Mock data for sell requests (for admin dashboard)
export const sellRequests: SellRequest[] = [
    {
        id: 'sr1',
        userInfo: {
            name: 'Rajesh Kumar',
            email: 'rajesh@example.com',
            phone: '+94 77 123 4567'
        },
        phoneDetails: {
            brand: 'Apple',
            model: 'iPhone 14 Pro Max',
            storage: '512GB',
            color: 'Deep Purple'
        },
        condition: 'excellent',
        conditionNotes: 'Phone is in pristine condition, always used with case and screen protector. No scratches or dents.',
        images: ['/images/iphone-15-pro.jpg'],
        expectedPrice: 250000,
        submittedDate: '2026-02-04',
        status: 'pending'
    },
    {
        id: 'sr2',
        userInfo: {
            name: 'Priya Silva',
            email: 'priya@example.com',
            phone: '+94 71 987 6543'
        },
        phoneDetails: {
            brand: 'Samsung',
            model: 'Galaxy S23 Ultra',
            storage: '256GB',
            color: 'Phantom Black'
        },
        condition: 'good',
        conditionNotes: 'Minor scratches on the back, screen is perfect. Battery health is good.',
        images: ['/images/samsung-s24.jpg'],
        expectedPrice: 180000,
        submittedDate: '2026-02-05',
        status: 'pending'
    },
    {
        id: 'sr3',
        userInfo: {
            name: 'Anil Fernando',
            email: 'anil@example.com',
            phone: '+94 76 555 7890'
        },
        phoneDetails: {
            brand: 'OnePlus',
            model: 'OnePlus 11',
            storage: '256GB',
            color: 'Eternal Green'
        },
        condition: 'excellent',
        conditionNotes: 'Barely used, bought 3 months ago. All accessories included.',
        images: ['/images/oneplus-12.jpg'],
        expectedPrice: 120000,
        submittedDate: '2026-02-03',
        status: 'approved',
        adminNotes: 'Approved - excellent condition verified',
        finalPrice: 125000
    },
    {
        id: 'sr4',
        userInfo: {
            name: 'Nuwan Perera',
            email: 'nuwan@example.com',
            phone: '+94 75 222 3333'
        },
        phoneDetails: {
            brand: 'Apple',
            model: 'iPhone 11',
            storage: '64GB',
            color: 'Black'
        },
        condition: 'fair',
        conditionNotes: 'Phone works fine but has some scratches and a small crack on back glass.',
        images: ['/images/iphone-13.jpg'],
        expectedPrice: 60000,
        submittedDate: '2026-02-02',
        status: 'rejected',
        adminNotes: 'Storage too low, crack too visible for our quality standards'
    }
]

// Helper functions
export function getBrands(): string[] {
    const brands = new Set(usedPhones.map(phone => phone.brand))
    return Array.from(brands).sort()
}

export function getConditionLabel(condition: PhoneCondition): string {
    const labels: Record<PhoneCondition, string> = {
        excellent: 'Excellent',
        good: 'Good',
        fair: 'Fair'
    }
    return labels[condition]
}

export function getConditionColor(condition: PhoneCondition): { bg: string; text: string; border: string } {
    const colors: Record<PhoneCondition, { bg: string; text: string; border: string }> = {
        excellent: { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-200' },
        good: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
        fair: { bg: 'bg-yellow-50', text: 'text-yellow-700', border: 'border-yellow-200' }
    }
    return colors[condition]
}

export function getStatusColor(status: RequestStatus): { bg: string; text: string } {
    const colors: Record<RequestStatus, { bg: string; text: string }> = {
        pending: { bg: 'bg-orange-50', text: 'text-orange-700' },
        approved: { bg: 'bg-green-50', text: 'text-green-700' },
        rejected: { bg: 'bg-red-50', text: 'text-red-700' }
    }
    return colors[status]
}
