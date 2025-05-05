"use client"

import Image from "next/image"
import Link from "next/link"
import {
  Calendar,
  Clock,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Twitter,
} from "lucide-react"
import { Button } from "@/components/ui/elements"
import { JSX } from "react"

export function AboutHero(): JSX.Element {
  return (
    <section className="container mx-auto px-4 py-12 md:py-20">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        {/* Profile Image */}
        <div className="w-full md:w-1/3">
          <div className="relative">
            <div className="absolute -top-5 -left-5 w-32 h-32 bg-rose-100 rounded-full blur-3xl opacity-70" />
            <div className="relative z-10 bg-gradient-to-br from-rose-50 to-cyan-50 rounded-2xl p-2">
              <div className="bg-white rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=500"
                  alt="Profile Photo"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bio Content */}
        <div className="w-full md:w-2/3 space-y-6">
          <div className="inline-block px-4 py-2 bg-rose-100 text-rose-600 rounded-full">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Currently in: Bali</span>
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Your Name</h1>
          <p className="text-xl text-rose-500 font-medium">Freelance Frontend Developer</p>
          <p className="text-gray-600">
            I&apos;m a cheerful and energetic developer with a passion for creating beautiful, functional
            websites and applications. As a digital nomad, I work from various locations around the
            world, bringing a global perspective to every project I undertake.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button className="gap-2">
              <Download className="h-4 w-4" /> Download Resume
            </Button>
            <Link href="/#contact">
              <Button variant="outline">Contact Me</Button>
            </Link>
          </div>

          <div className="flex flex-wrap gap-6 pt-4 text-gray-600">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-rose-500" />
              <span>
                Availability: <span className="font-medium">Open to new projects</span>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-rose-500" />
              <span>Working Hours: Mon-Fri 10:00-19:00 (UTC+8)</span>
            </div>
          </div>

          <div className="flex items-center gap-6 pt-4">
            <Link href="#" className="text-gray-600 hover:text-rose-500 transition-colors">
              <Github className="h-5 w-5" />
              <span className="sr-only">Github</span>
            </Link>
            <Link href="#" className="text-gray-600 hover:text-rose-500 transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-gray-600 hover:text-rose-500 transition-colors">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="text-gray-600 hover:text-rose-500 transition-colors">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
