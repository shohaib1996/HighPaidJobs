import { Button } from "@/components/ui/button";
import { TestimonialCard } from "./testimonial-card";

const testimonials = [
  {
    name: "Alex P.",
    position: "Software Engineer",
    company: "Fortune 100",
    salary: "$108K",
    testimonial:
      "I got two offers within 3 months! The interview prep was incredible, and they even helped me negotiate $8K extra!",
  },
  {
    name: "Maria S.",
    position: "Frontend Developer",
    company: "FAANG",
    salary: "$130K",
    testimonial:
      "I got two offers within 3 months! The interview prep was incredible, and they even helped me negotiate $8K extra!",
  },
  {
    name: "Jamal R.",
    position: "Cloud Engineer",
    company: "Federal Job",
    salary: "$115K",
    testimonial:
      "I got two offers within 3 months! The interview prep was incredible, and they even helped me negotiate $8K extra!",
  },
  {
    name: "Sarah M.",
    position: "DevOps Engineer",
    company: "Tech Startup",
    salary: "$120K",
    testimonial:
      "I got two offers within 3 months! The interview prep was incredible, and they even helped me negotiate $8K extra!",
  },
];

export default function SuccessStories() {
  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="flex justify-center gap-4">
            <span className="bg-slate-800 text-white text-sm px-3 py-1 rounded-full">
              REAL STORIES
            </span>
          </div>
          <h2 className="text-4xl font-bold text-white">Success Stories</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Hear from people who transformed their careers with our program
          </p>
          <p className="inline-block">
            {" "}
            <span className="bg-slate-800 text-red-500 text-sm px-3 py-1 rounded-full flex items-center gap-2">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              LIVE TESTIMONIAL
            </span>
          </p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold rounded-full px-8"
          >
            Book Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
