import Link from "next/link";
import { Facebook, Twitter, Star, Linkedin, Send } from "lucide-react";

const navigation = {
  company: [
    { name: "About Us", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "How it works", href: "#" },
  ],
  support: [
    { name: "Privacy Policy", href: "#" },
    { name: "Term and Conditions", href: "#" },
    { name: "Help Center", href: "#" },
    { name: "FAQ", href: "#" },
  ],
  social: [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Telegram", icon: Send, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
  ],
};

export function SiteFooter() {
  return (
    <footer className="bg-[#0B0B2B] text-white">
      <div className="container mx-auto px-4 py-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">HighPaidJobs</h2>
            <p className="text-slate-400 max-w-xs">
              HighPaidJobs offers industry-focused bootcamps for skill
              development
            </p>
            {/* Decorative circle */}
            <div className="relative w-24 h-24">
              <div className="absolute inset-0 border-2 border-blue-500/20 rounded-full"></div>
              <div className="absolute inset-2 border-2 border-blue-500/10 rounded-full"></div>
              <div className="absolute inset-4 border-2 border-blue-500/5 rounded-full"></div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-4">
              {navigation.support.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
              <Star className="w-5 h-5 text-slate-400" />
            </div>
            <p className="text-slate-400 mb-6">Support@gmail.com</p>
            <div className="flex gap-4">
              {navigation.social.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    <span className="sr-only">{item.name}</span>
                    <Icon className="w-5 h-5" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className=" pt-3 border-t border-slate-800">
          <p className="text-slate-400 text-sm text-center">
            © 2025 All rights reserved by HighPaidJobs
          </p>
        </div>
      </div>
    </footer>
  );
}
