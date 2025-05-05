import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/elements";

type ContactFormProps = {
  title: string;
  description: string;
  buttonLabel?: string;
  className?: string;
};

export function ContactForm({
  title,
  description,
  buttonLabel = "Send Message",
  className,
}: ContactFormProps) {
  return (
    <section className={className ?? "container mx-auto px-4 py-20"}>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">{description}</p>
      </div>

      <div className="max-w-3xl mx-auto">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block font-medium">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500"
                placeholder="john@example.com"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="block font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500"
              placeholder="Tell me about your project..."
            ></textarea>
          </div>
          <Button size="lg" className="w-full md:w-auto">
            {buttonLabel} <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </div>
    </section>
  );
}
