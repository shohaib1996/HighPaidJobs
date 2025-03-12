import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Background circles */}

      {/* Content */}
      <div className="relative container mx-auto px-4">
        <div className="bg-primary  rounded-3xl p-12 text-center">
          <div className="absolute inset-0 h-full w-full">
            <Image
              src={"/CTA V2.png"}
              alt="/CTA V2.png"
              height={1080}
              width={1920}
              className="h-full w-full object-cover animate-pulse delay-[3000]"
            />
          </div>
          <div className="z-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Secure Your $100K+ Future Today!
            </h2>

            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Spots are filling FAST! Join our next hiring wave and start your
              journey to a high-paying tech career.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <Button
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold rounded-full px-8"
              >
                Book a Free 30-Min Call{" "}
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 rounded-full px-8"
              >
                Join Next Webinar <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <p className="text-white/90 flex items-center justify-center gap-2">
              🚀 HighPaidJobs.us – The Fastest Path to a $100K+ Career!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
