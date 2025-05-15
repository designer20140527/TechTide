import { cn } from "@/lib/utils"
import React from "react"

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export default function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div className={cn("w-full max-w-[1400px] mx-auto px-8", className)} {...props}>
      {children}
    </div>
  )
} 