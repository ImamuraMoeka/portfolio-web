import { FC } from "react"
import Image from "next/image"
import NextLink from "next/link"
import {
  ArrowRight,
  ArrowDown,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Mail,
} from "lucide-react"
import { Button } from "@/components/ui/elements"

export const HeroSection: FC = () => {
  return (
    <section id="home" className="container mx-auto px-4 py-20 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Block */}
        <div className="space-y-6">
          <div className="inline-block px-4 py-2 bg-rose-100 text-rose-600 rounded-full">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Currently working from abroad</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Hello, I&apos;m
            <br />
            <span className="text-rose-500">Your Name</span>
            <br />
            Freelance Frontend Developer
          </h1>
          <p className="text-gray-600 text-lg">
            I&apos;m a cheerful and energetic developer with a passion for creating beautiful,
            functional websites. As a digital nomad, I bring a global perspective to every project.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg">
              View My Work <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="group">
              Download Resume{" "}
              <ArrowDown className="ml-2 h-4 w-4 group-hover:animate-bounce" />
            </Button>
          </div>
          <div className="flex items-center gap-6 pt-4">
            <NextLink href="#" className="text-gray-600 hover:text-rose-500 transition-colors">
              <Github className="h-5 w-5" />
              <span className="sr-only">Github</span>
            </NextLink>
            <NextLink href="#" className="text-gray-600 hover:text-rose-500 transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </NextLink>
            <NextLink href="#" className="text-gray-600 hover:text-rose-500 transition-colors">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </NextLink>
            <NextLink href="#" className="text-gray-600 hover:text-rose-500 transition-colors">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </NextLink>
          </div>
        </div>

        {/* Image Block */}
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-rose-100 rounded-full blur-3xl opacity-70" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-100 rounded-full blur-3xl opacity-70" />
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
    </section>
  )
}
