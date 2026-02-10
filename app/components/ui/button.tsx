"use client"

import * as React from "react"
import { colors } from "../../constants/colors"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "secondary" | "outline" | "dark" | "outline-primary"
}

const variantClasses: Record<string, string> = {
  default: "text-white", // Colors handled by inline style
  dark: "text-white", // Colors handled by inline style
  secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
  outline: "border border-white text-white hover:bg-white/10",
  "outline-primary": "border", // Colors handled by inline style
}

export function Button({ variant = "default", className = "", style, ...props }: ButtonProps) {
  const [isHovered, setIsHovered] = React.useState(false)
  const base = "inline-flex items-center justify-center rounded px-4 py-2 text-sm font-medium transition duration-200"

  // Dynamic styles based on variant and hover state
  const getVariantStyles = (): React.CSSProperties => {
    switch (variant) {
      case "default":
        return {
          backgroundColor: isHovered ? colors.primaryDark : colors.primary,
          color: colors.white,
        }
      case "dark":
        return {
          backgroundColor: isHovered ? colors.primary : colors.primaryDark,
          color: colors.white,
        }
      case "outline-primary":
        return {
          borderColor: colors.primary,
          color: isHovered ? colors.white : colors.primary,
          backgroundColor: isHovered ? colors.primary : "transparent",
        }
      default:
        return {}
    }
  }

  const variantClass = variantClasses[variant] ?? variantClasses.default

  return (
    <button
      className={`${base} ${variantClass} ${className}`.trim()}
      style={{ ...getVariantStyles(), ...style }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    />
  )
}
