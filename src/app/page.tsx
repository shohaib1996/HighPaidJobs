import FAQSection from "@/components/FAQSection/FAQSection";
import Hero from "@/components/Hero/Hero";
import HighPay from "@/components/highPay/HighPay";
import CTASection from "@/components/home/cta-section";
import { SiteFooter } from "@/components/home/site-footer";
import SuccessStories from "@/components/home/SuccessStories/SuccessStories";
import PricingSection from "@/components/pricingSection/PricingSection";
import TicketToSuccess from "@/components/ticketToSuccess/TicketToSuccess";

import WhyChooseUs from "@/components/whyChooseUs/WhyChooseUs";

export default function Home() {
  return <>
    <Hero />
    <TicketToSuccess />
    <HighPay />
    <SuccessStories />
    <WhyChooseUs />
    <PricingSection />
    <FAQSection />
    <CTASection />
    <SiteFooter />
  </>
}
