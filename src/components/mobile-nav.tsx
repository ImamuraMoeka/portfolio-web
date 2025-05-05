"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/elements";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/elements";

export function MobileNav() {
  return (
    <div className="md:hidden fixed top-4 right-4 z-50">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="rounded-full">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Open menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <nav className="flex flex-col gap-4 mt-8">
            <Link
              href="#home"
              className="text-lg font-medium hover:text-rose-500 transition-colors"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-lg font-medium hover:text-rose-500 transition-colors"
            >
              About
            </Link>
            <Link
              href="#portfolio"
              className="text-lg font-medium hover:text-rose-500 transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="#blog"
              className="text-lg font-medium hover:text-rose-500 transition-colors"
            >
              Blog
            </Link>
            <Link
              href="#contact"
              className="text-lg font-medium hover:text-rose-500 transition-colors"
            >
              Contact
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
