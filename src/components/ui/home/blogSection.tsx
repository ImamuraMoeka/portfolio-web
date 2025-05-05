import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/elements";

export const BlogSection: FC = () => {
  const cities = ["Bali", "Tokyo", "Barcelona"];

  return (
    <section id="blog" className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold">From My Blog</h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Follow my journey as a digital nomad and developer. I share insights,
          tips, and stories from around the world.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((item) => {
          const city = cities[item - 1];
          return (
            <div
              key={item}
              className="border rounded-xl overflow-hidden group hover:shadow-lg transition-shadow"
            >
              <div className="overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=200&width=400&text=Blog ${item}`}
                  alt={`Blog Post ${item}`}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-rose-500 mb-2">
                  May {item}, 2023
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Working Remotely from {city}
                </h3>
                <p className="text-gray-600 mb-4">
                  Tips and experiences from my time working as a digital nomad
                  in {city}.
                </p>
                <Link
                  href="#"
                  className="text-rose-500 font-medium inline-flex items-center hover:underline"
                >
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-12">
        <Button variant="outline" size="lg">
          Visit My Blog <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};
