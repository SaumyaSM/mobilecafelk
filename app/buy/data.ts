// Product data for the buy page
import { Smartphone, Headphones, Cable, Battery, Shield, Watch } from "lucide-react"

export interface Product {
    id: string
    name: string
    brand: string
    category: 'phone' | 'accessory'
    type?: string // For accessories: charger, case, earphones, etc.
    price: number
    originalPrice?: number
    image: string
    specs: Record<string, string>
    condition: 'new' | 'refurbished'
    inStock: boolean
    availableAt: 'store' | 'shops' | 'both'
    rating?: number
    reviews?: number
}

export interface Shop {
    id: string
    name: string
    address: string
    rating: number
    distanceKm: number
    products: string[] // Product IDs available at this shop
    contactNumber: string
}

export const products: Product[] = [
    // Phones
    {
        id: 'p1',
        name: 'iPhone 15 Pro Max',
        brand: 'Apple',
        category: 'phone',
        price: 299000,
        originalPrice: 320000,
        image: '/images/iphone-15-pro.jpg',
        specs: {
            'Storage': '256GB',
            'RAM': '8GB',
            'Display': '6.7" Super Retina XDR',
            'Camera': '48MP + 12MP + 12MP',
            'Battery': '4422 mAh'
        },
        condition: 'new',
        inStock: true,
        availableAt: 'both',
        rating: 4.8,
        reviews: 124
    },
    {
        id: 'p2',
        name: 'Samsung Galaxy S24 Ultra',
        brand: 'Samsung',
        category: 'phone',
        price: 275000,
        originalPrice: 290000,
        image: '/images/samsung-s24.jpg',
        specs: {
            'Storage': '512GB',
            'RAM': '12GB',
            'Display': '6.8" Dynamic AMOLED',
            'Camera': '200MP + 50MP + 12MP + 10MP',
            'Battery': '5000 mAh'
        },
        condition: 'new',
        inStock: true,
        availableAt: 'both',
        rating: 4.7,
        reviews: 98
    },
    {
        id: 'p3',
        name: 'Google Pixel 8 Pro',
        brand: 'Google',
        category: 'phone',
        price: 195000,
        image: '/images/pixel-8-pro.jpg',
        specs: {
            'Storage': '256GB',
            'RAM': '12GB',
            'Display': '6.7" LTPO OLED',
            'Camera': '50MP + 48MP + 48MP',
            'Battery': '5050 mAh'
        },
        condition: 'new',
        inStock: true,
        availableAt: 'store',
        rating: 4.6,
        reviews: 76
    },
    {
        id: 'p4',
        name: 'OnePlus 12',
        brand: 'OnePlus',
        category: 'phone',
        price: 145000,
        originalPrice: 160000,
        image: '/images/oneplus-12.jpg',
        specs: {
            'Storage': '256GB',
            'RAM': '16GB',
            'Display': '6.82" AMOLED',
            'Camera': '50MP + 64MP + 48MP',
            'Battery': '5400 mAh'
        },
        condition: 'new',
        inStock: true,
        availableAt: 'shops',
        rating: 4.5,
        reviews: 62
    },
    {
        id: 'p5',
        name: 'iPhone 13',
        brand: 'Apple',
        category: 'phone',
        price: 135000,
        originalPrice: 155000,
        image: '/images/iphone-13.jpg',
        specs: {
            'Storage': '128GB',
            'RAM': '4GB',
            'Display': '6.1" Super Retina XDR',
            'Camera': '12MP + 12MP',
            'Battery': '3240 mAh'
        },
        condition: 'refurbished',
        inStock: true,
        availableAt: 'both',
        rating: 4.4,
        reviews: 156
    },
    {
        id: 'p6',
        name: 'Xiaomi 14 Pro',
        brand: 'Xiaomi',
        category: 'phone',
        price: 125000,
        image: '/images/xiaomi-14-pro.jpg',
        specs: {
            'Storage': '512GB',
            'RAM': '12GB',
            'Display': '6.73" AMOLED',
            'Camera': '50MP + 50MP + 50MP',
            'Battery': '4880 mAh'
        },
        condition: 'new',
        inStock: true,
        availableAt: 'shops',
        rating: 4.5,
        reviews: 43
    },

    // Accessories
    {
        id: 'a1',
        name: 'AirPods Pro (2nd Gen)',
        brand: 'Apple',
        category: 'accessory',
        type: 'earphones',
        price: 45000,
        originalPrice: 52000,
        image: '/images/airpods-pro.jpg',
        specs: {
            'Type': 'True Wireless',
            'Noise Cancellation': 'Active',
            'Battery Life': 'Up to 6 hours',
            'Charging Case': 'MagSafe'
        },
        condition: 'new',
        inStock: true,
        availableAt: 'both',
        rating: 4.7,
        reviews: 89
    },
    {
        id: 'a2',
        name: 'Samsung Galaxy Buds2 Pro',
        brand: 'Samsung',
        category: 'accessory',
        type: 'earphones',
        price: 28000,
        image: '/images/galaxy-buds.jpg',
        specs: {
            'Type': 'True Wireless',
            'Noise Cancellation': 'Active',
            'Battery Life': 'Up to 8 hours',
            'Water Resistance': 'IPX7'
        },
        condition: 'new',
        inStock: true,
        availableAt: 'store',
        rating: 4.5,
        reviews: 54
    },
    {
        id: 'a3',
        name: 'Anker 65W GaN Charger',
        brand: 'Anker',
        category: 'accessory',
        type: 'charger',
        price: 8500,
        image: '/images/anker-charger.jpg',
        specs: {
            'Power': '65W',
            'Ports': '3 USB-C + 1 USB-A',
            'Technology': 'GaN',
            'Fast Charging': 'Yes'
        },
        condition: 'new',
        inStock: true,
        availableAt: 'both',
        rating: 4.8,
        reviews: 132
    },
    {
        id: 'a4',
        name: 'Spigen Tough Armor Case',
        brand: 'Spigen',
        category: 'accessory',
        type: 'case',
        price: 4500,
        image: '/images/spigen-case.jpg',
        specs: {
            'Compatible': 'iPhone 15 Pro',
            'Material': 'TPU + Polycarbonate',
            'Protection': 'Military Grade',
            'Kickstand': 'Yes'
        },
        condition: 'new',
        inStock: true,
        availableAt: 'shops',
        rating: 4.6,
        reviews: 87
    },
    {
        id: 'a5',
        name: 'Belkin USB-C Cable',
        brand: 'Belkin',
        category: 'accessory',
        type: 'cable',
        price: 3200,
        image: '/images/belkin-cable.jpg',
        specs: {
            'Length': '2 meters',
            'Type': 'USB-C to USB-C',
            'Power': 'Up to 100W',
            'Data Transfer': '480 Mbps'
        },
        condition: 'new',
        inStock: true,
        availableAt: 'both',
        rating: 4.4,
        reviews: 76
    },
    {
        id: 'a6',
        name: 'Apple Watch Series 9',
        brand: 'Apple',
        category: 'accessory',
        type: 'smartwatch',
        price: 85000,
        originalPrice: 95000,
        image: '/images/apple-watch.jpg',
        specs: {
            'Display': '1.9" Always-On Retina',
            'Health': 'ECG, Blood Oxygen',
            'Battery': 'Up to 18 hours',
            'Water Resistance': '50m'
        },
        condition: 'new',
        inStock: true,
        availableAt: 'store',
        rating: 4.7,
        reviews: 124
    },
    {
        id: 'a7',
        name: 'Baseus Power Bank 20000mAh',
        brand: 'Baseus',
        category: 'accessory',
        type: 'powerbank',
        price: 6800,
        image: '/images/baseus-powerbank.jpg',
        specs: {
            'Capacity': '20000mAh',
            'Output': '22.5W Fast Charge',
            'Ports': '2 USB-A + 1 USB-C',
            'Display': 'LED Indicator'
        },
        condition: 'new',
        inStock: true,
        availableAt: 'both',
        rating: 4.5,
        reviews: 91
    },
    {
        id: 'a8',
        name: 'Nilkin Tempered Glass',
        brand: 'Nilkin',
        category: 'accessory',
        type: 'screen-protector',
        price: 1500,
        image: '/images/screen-protector.jpg',
        specs: {
            'Material': '9H Tempered Glass',
            'Coverage': 'Full Screen',
            'Oleophobic': 'Yes',
            'Clarity': 'HD Clear'
        },
        condition: 'new',
        inStock: true,
        availableAt: 'shops',
        rating: 4.3,
        reviews: 203
    }
]

// Registered shops selling products
export const shops: Shop[] = [
    {
        id: 's1',
        name: 'Tech Hub Colombo',
        address: '123 Galle Road, Colombo 03',
        rating: 4.7,
        distanceKm: 2.3,
        products: ['p1', 'p2', 'p5', 'a1', 'a3', 'a5', 'a7'],
        contactNumber: '+94 77 123 4567'
    },
    {
        id: 's2',
        name: 'Mobile World Kandy',
        address: '45 Peradeniya Road, Kandy',
        rating: 4.5,
        distanceKm: 5.8,
        products: ['p2', 'p4', 'p6', 'a4', 'a7', 'a8'],
        contactNumber: '+94 77 234 5678'
    },
    {
        id: 's3',
        name: 'Smart Phone Corner',
        address: '78 Main Street, Nugegoda',
        rating: 4.8,
        distanceKm: 1.2,
        products: ['p1', 'p5', 'a1', 'a3', 'a5'],
        contactNumber: '+94 77 345 6789'
    },
    {
        id: 's4',
        name: 'Gadget Galaxy',
        address: '234 Duplication Road, Colombo 04',
        rating: 4.6,
        distanceKm: 3.5,
        products: ['p2', 'p4', 'p6', 'a4', 'a7', 'a8'],
        contactNumber: '+94 77 456 7890'
    }
]

// Get unique brands for filtering
export const getBrands = () => {
    return Array.from(new Set(products.map(p => p.brand))).sort()
}

// Get unique accessory types
export const getAccessoryTypes = () => {
    return Array.from(new Set(
        products
            .filter(p => p.category === 'accessory' && p.type)
            .map(p => p.type!)
    )).sort()
}

// Get shops that sell a specific product
export const getShopsForProduct = (productId: string): Shop[] => {
    return shops.filter(shop => shop.products.includes(productId))
}
