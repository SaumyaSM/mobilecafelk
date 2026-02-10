// components/quick-actions.tsx
import {
  ShoppingCart,
  DollarSign,
  Wrench,
  Scale,
  MapPin,
  ShieldCheck,
} from "lucide-react"

const actions = [
  { icon: ShoppingCart, title: "Buy Phones", desc: "Buy new & used phones" },
  { icon: DollarSign, title: "Sell Phones", desc: "Instant quotes, list fast" },
  { icon: Wrench, title: "Repair & Fix", desc: "Certified techs, fast repairs" },
  { icon: Scale, title: "Compare Shops", desc: "Compare ratings & prices" },
  { icon: MapPin, title: "Nearby Finder", desc: "Find shops near you" },
  { icon: ShieldCheck, title: "Verified Shops", desc: "Trusted & verified" },
]

import { colors } from "../constants/colors"

export default function QuickActions() {
  return (
    <section className="text-white" style={{ background: colors.gradients.heroSection.css }}>
      <div className="container mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-6 gap-8 text-center">
        {actions.map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-3">
            <div className="h-14 w-14 rounded-full bg-white/20 flex items-center justify-center">
              <item.icon className="h-6 w-6" />
            </div>
            <h4 className="font-semibold">{item.title}</h4>
            <p className="text-xs opacity-80">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
