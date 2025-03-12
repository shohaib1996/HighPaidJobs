"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ChevronRight } from "lucide-react"

export default function FAQSection() {
  const [openItem, setOpenItem] = useState<string>("item-1")

  const faqItems = [
    {
      id: "item-1",
      question: "How fast can I get a job?",
      answer: "Job placement only: 8 weeks. Boot camp + placement: 10-12 weeks of training + 4-6 weeks to an offer.",
    },
    {
      id: "item-2",
      question: "What if I don't get hired?",
      answer:
        "We offer ongoing support and resources until you secure employment. Our program includes career coaching and job placement assistance.",
    },
    {
      id: "item-3",
      question: "Can I work remotely?",
      answer:
        "Yes, many of our graduates secure remote positions. We prepare you for both remote and in-office opportunities based on your preferences.",
    },
    {
      id: "item-4",
      question: "Who is this program for?",
      answer:
        "Our program is designed for motivated individuals looking to start or advance their career in technology, regardless of prior experience.",
    },
    {
      id: "item-5",
      question: "Do I need prior experience?",
      answer:
        "No prior experience is required. Our curriculum is designed to take you from beginner to job-ready, with personalized support along the way.",
    },
    {
      id: "item-6",
      question: "What companies hire your graduates?",
      answer:
        "Our graduates have been hired by a wide range of companies, from startups to Fortune 500 corporations across various industries.",
    },
  ]

  return (
    <div className="container px-4 py-12 mx-auto">
      <div className="mb-8 text-center">
        <h2 className="mb-2 text-2xl font-bold text-black md:text-3xl lg:text-5xl">Got Questions? We&apos;ve Got Answers</h2>
        <p className="text-black dark:text-gray-400">Find answers to our most frequently asked questions</p>
      </div>

      <Accordion type="single" collapsible value={openItem} onValueChange={setOpenItem} className="w-full space-y-4">
        {faqItems.map((item) => (
          <AccordionItem
            key={item.id}
            value={item.id}
            className="bg-white border rounded-md shadow-sm dark:bg-gray-950"
          >
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <span className="text-xl font-medium text-left text-black">{item.question}</span>

            </AccordionTrigger>
            <AccordionContent className="px-6 pt-0 pb-4 text-black">{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="mt-8 text-center">
        <p className="mb-4 text-black">Have more questions? Ask us during your FREE consultation!</p>
        <Button className="px-6 py-2 rounded-full bg-primary hover:bg-blue-700 text-pure-white">
          Book Free Consultation <ChevronRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  )
}

