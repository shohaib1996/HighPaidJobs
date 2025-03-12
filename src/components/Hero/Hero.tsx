import React from "react";
import Navbar from "../shared/Navbar";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-primary text-white min-h-[560px] w-full ">
      <div>
        <div>
          <Image
            src="/Maskgroup.png"
            alt=""
            className="absolute bottom-0 left-0 rotate-180 animate-pulse"
            height={300}
            width={400}
          />
        </div>
        <div className="">
          <Image
            src="/Maskgroup.png"
            alt=""
            className="absolute top-0 right-0 animate-pulse"
            height={300}
            width={400}
          />
        </div>
      </div>

      <div className="container flex flex-col h-full mx-auto md:p-5 lg:p-0 ">
        <Navbar />
        <div className="grid items-center h-full grid-cols-1 lg:grid-cols-2 gap-36 ">
          <div className="space-y-6 ">
            <div className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-full bg-white/10 backdrop-blur-sm">
              <span className="text-warn">🔥</span> GUARANTEED $100K+ JOB
              PLACEMENT
            </div>

            <h2 className="text-4xl font-bold leading-8 tracking-wider sm:text-5xl text-balance">
              Land Your Dream Tech <br /> Job in{" "}
              <div className="relative inline-block">
                <span className="relative text-warn">
                  8-16 Weeks
                  <svg
                    className="absolute left-0 w-full -bottom-1"
                    height="20"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 5 Q50 0, 100 5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-warn"
                    />
                  </svg>
                </span>
              </div>{" "}
              or <br /> Your Money Back
            </h2>

            <p className="text-lg text-blue-100/90">
              Join our program and get placed in a high-paying tech role with
              our 99.99% success rate guarantee
            </p>

            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <Button
                size="lg"
                className="px-8 font-semibold text-blue-900 rounded-full bg-warn hover:bg-yellow-500"
              >
                Book Free Consultation <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 text-white rounded-full border-white/30 hover:bg-white/10 bg-white/5"
              >
                Join Next Webinar <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          <div>
            <Card className="overflow-hidden transition-all duration-1000 backdrop-blur-sm bg-white/10 hover:shadow-xl hover:scale-105 border-white/20 rounded-3xl">
              <div className="p-2">
                <div className="mb-2">
                  <h3 className="text-xl font-semibold ">Success Rate</h3>
                  <p className="mb-2 text-sm text-blue-200/80">
                    Our placement statistics
                  </p>
                  <hr className="h-1 border-white/20" />
                </div>

                <div className="mb-2 text-center">
                  <div className="text-6xl font-bold tracking-tight">
                    99.99%
                  </div>
                  <div className="mt-1 text-sm text-blue-200/80 ">
                    Success Rate
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {[
                    { title: "8-16", subtitle: "Week to Job" },
                    { title: "500+", subtitle: "Active Recruiters" },
                    { title: "$100k+", subtitle: "Starting Salary" },
                    { title: "100%", subtitle: "Money-Back" },
                  ].map((stat, index) => (
                    <Card
                      key={index}
                      className="p-2 bg-white/5 border-white/10 rounded-xl"
                    >
                      <div className="text-center">
                        <div className="text-2xl font-bold">{stat.title}</div>
                        <div className="mt-1 text-sm text-blue-200/80">
                          {stat.subtitle}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
