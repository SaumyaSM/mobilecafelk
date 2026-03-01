import {
    Smartphone,
    Battery,
    Zap,
    Droplets,
    Speaker,
    Cpu,
    MonitorSmartphone,
} from "lucide-react"

export const problems = [
    {
        id: "screen",
        label: "Screen Damage",
        icon: MonitorSmartphone,
    },
    {
        id: "battery",
        label: "Battery Issue",
        icon: Battery,
    },
    {
        id: "charging",
        label: "Charging Problem",
        icon: Zap,
    },
    {
        id: "water",
        label: "Water Damage",
        icon: Droplets,
    },
    {
        id: "audio",
        label: "Speaker / Mic Issue",
        icon: Speaker,
    },
    {
        id: "software",
        label: "Software Issue",
        icon: Cpu,
    },
]

export const phoneModels = [
    { brand: "Apple", model: "iPhone 15 Pro Max" },
    { brand: "Apple", model: "iPhone 15 Pro" },
    { brand: "Apple", model: "iPhone 15" },
    { brand: "Apple", model: "iPhone 14 Pro Max" },
    { brand: "Apple", model: "iPhone 14" },
    { brand: "Apple", model: "iPhone 13" },
    { brand: "Samsung", model: "Galaxy S24 Ultra" },
    { brand: "Samsung", model: "Galaxy S24" },
    { brand: "Samsung", model: "Galaxy S23" },
    { brand: "Samsung", model: "Galaxy Z Fold 5" },
    { brand: "Google", model: "Pixel 8 Pro" },
    { brand: "Google", model: "Pixel 8" },
    { brand: "Google", model: "Pixel 7a" },
    { brand: "OnePlus", model: "OnePlus 12" },
    { brand: "Xiaomi", model: "Xiaomi 14 Ultra" },
]

export const shops = [
    {
        id: "1",
        name: "TechFix Colombo",
        address: "123, Galle Road, Colombo 03",
        rating: 4.8,
        distanceKm: 1.2,
        supportedProblems: ["screen", "battery", "charging", "audio"],
        supportedBrands: ["Apple", "Samsung", "Huawei"],
        specialties: ["Apple Certified", "1 Hour Screen Fix"],
    },
    {
        id: "2",
        name: "Mobile Master",
        address: "45, Duplication Road, Colombo 04",
        rating: 4.5,
        distanceKm: 2.5,
        supportedProblems: ["screen", "battery", "water", "software"],
        supportedBrands: ["Apple", "Samsung", "Pending", "Xiaomi"],
        specialties: ["Water Damage Experts"],
    },
    {
        id: "3",
        name: "iRepair Zone",
        address: "89, Union Place, Colombo 02",
        rating: 4.9,
        distanceKm: 3.1,
        supportedProblems: ["screen", "battery", "charging", "water", "audio", "software"],
        supportedBrands: ["Apple"],
        specialties: ["Apple Only", "Original Parts"],
    },
    {
        id: "4",
        name: "Android Clinic",
        address: "22, High Level Road, Nugegoda",
        rating: 4.6,
        distanceKm: 5.8,
        supportedProblems: ["screen", "battery", "charging", "software"],
        supportedBrands: ["Samsung", "Google", "OnePlus", "Xiaomi"],
        specialties: ["Software Unlocking", "Chip Level Repair"],
    },
    {
        id: "5",
        name: "Quick Fix Mobile",
        address: "10, Liberty Plaza, Colombo 03",
        rating: 4.2,
        distanceKm: 1.5,
        supportedProblems: ["screen", "battery"],
        supportedBrands: ["Apple", "Samsung"],
        specialties: ["Budget Friendly"],
    },
]
