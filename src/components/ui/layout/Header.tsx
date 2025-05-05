"use client"

import { FC } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/elements"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/elements"

export const Header: FC = () => {
  return (
    <header className="container mx-auto px-4 py-6">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          Portfolio<span className="text-rose-500">.</span>
        </Link>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4 mt-8">
              <Link href="/" className="text-lg font-medium hover:text-rose-500 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-lg font-medium hover:text-rose-500 transition-colors">
                About
              </Link>
              <Link href="#portfolio" className="text-lg font-medium hover:text-rose-500 transition-colors">
                Portfolio
              </Link>
              <Link href="#blog" className="text-lg font-medium hover:text-rose-500 transition-colors">
                Blog
              </Link>
              <Link href="#contact" className="text-lg font-medium hover:text-rose-500 transition-colors">
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="font-medium hover:text-rose-500 transition-colors">
            Home
          </Link>
          <Link href="/about" className="font-medium hover:text-rose-500 transition-colors">
            About
          </Link>
          <Link href="#portfolio" className="font-medium hover:text-rose-500 transition-colors">
            Portfolio
          </Link>
          <Link href="#blog" className="font-medium hover:text-rose-500 transition-colors">
            Blog
          </Link>
          <Link href="#contact" className="font-medium hover:text-rose-500 transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
