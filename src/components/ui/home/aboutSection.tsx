import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/elements";
import { FC } from "react";

export const AboutSection: FC = () => {
  return (
    <section
      id="about"
      className="container mx-auto px-4 py-20 bg-gradient-to-br from-rose-50 to-cyan-50 rounded-3xl my-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <Image
            src="/placeholder.svg?height=500&width=500"
            alt="About Me"
            width={500}
            height={500}
            className="rounded-2xl"
          />
          <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <p className="font-medium">Available for freelance work</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <p className="text-gray-600">
            Hello! I&apos;m a freelance frontend developer with a passion for
            creating beautiful, functional websites. My cheerful and energetic
            personality, combined with my curiosity and eagerness to take on new
            challenges, makes me a great collaborator for your next project.
          </p>
          <p className="text-gray-600">
            As a digital nomad, I&apos;ve had the opportunity to work from
            various countries around the world, which has given me a unique
            perspective and approach to problem-solving. I bring this global
            mindset to every project I work on.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold">Skills</h3>
              <ul className="mt-2 space-y-1 text-gray-600">
                <li>HTML/CSS/JavaScript</li>
                <li>React & Next.js</li>
                <li>Responsive Design</li>
                <li>UI/UX Principles</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Tools</h3>
              <ul className="mt-2 space-y-1 text-gray-600">
                <li>Figma</li>
                <li>VS Code</li>
                <li>Git/GitHub</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
          </div>
          <Link href="/about">
            <Button>
              Learn More About Me <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
