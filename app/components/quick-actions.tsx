// components/quick-actions.tsx
import {
  Wrench,
  ShoppingCart,
  DollarSign,
  FileText,
} from "lucide-react"

const actions = [
  { icon: Wrench, title: "Repair and Fix", desc: "Find the best & nearest shop near me" },
  { icon: ShoppingCart, title: "Buy", desc: "Phones | Accessories | Parts" },
  { icon: DollarSign, title: "Sell", desc: "Sell used phones (only verified members)" },
  { icon: FileText, title: "Help and Resources", desc: "Better knowledge about mobils" },
]

import { colors } from "../constants/colors"

export default function QuickActions() {
  return (
    <section className="text-white" style={{ background: colors.gradients.heroSection.css }}>
      <div className="container mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
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
