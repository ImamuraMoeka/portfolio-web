import { FC } from "react";
import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export const Footer: FC = () => {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <Link href="/" className="text-2xl font-bold">
              Portfolio<span className="text-rose-500">.</span>
            </Link>
            <p className="text-gray-600 mt-2">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-6 mt-6 md:mt-0">
            <Link
              href="#"
              className="text-gray-600 hover:text-rose-500 transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">Github</span>
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-rose-500 transition-colors"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-rose-500 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-rose-500 transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
