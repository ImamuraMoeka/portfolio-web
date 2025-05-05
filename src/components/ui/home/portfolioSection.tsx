import { FC } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/elements"

export const PortfolioSection: FC = () => {
  return (
    <section id="portfolio" className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold">Recent Work</h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Check out some of my latest projects. Each one represents a unique challenge and creative solution.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((item) => (
          <div key={item} className="group relative overflow-hidden rounded-xl">
            <Image
              src={`/placeholder.svg?height=400&width=600&text=Project ${item}`}
              alt={`Project ${item}`}
              width={600}
              height={400}
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h3 className="text-white text-xl font-bold">Project Name {item}</h3>
              <p className="text-white/80 mt-2">Web Design / Development</p>
              <Button
                variant="outline"
                className="mt-4 bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20"
              >
                View Details
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button variant="outline" size="lg">
          View All Projects <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  )
}
