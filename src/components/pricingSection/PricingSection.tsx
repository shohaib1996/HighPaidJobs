import { ArrowRight, Check } from "lucide-react"

export default function PricingSection() {
    return (
        <div className=" px-4 py-12 bg-foreground">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-black mb-2">Invest in Your Future, Risk-Free</h1>
                <p className="text-black">Choose the plan that works best for you with our flexible payment options</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 container mx-auto">
                {/* Job Placement Only Card */}
                <div className="bg-foreground rounded-lg border border-gray-200 p-6 flex flex-col">
                    <div className="mb-6">
                        <h3 className="font-bold text-black">Job Placement Only</h3>
                        <p className="text-sm text-black">Ideal if you're ready to jump in</p>
                    </div>
                    <div className="mb-6">
                        <p className="text-4xl font-bold text-black">$7,999</p>
                    </div>
                    <div className="space-y-3 mb-8 flex-grow">
                        <div className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                            <span className="text-black">Resume & LinkedIn revamp</span>
                        </div>
                        <div className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                            <span className="text-black">Access to 500+ recruiters</span>
                        </div>
                        <div className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                            <span className="text-black">Interview preparation</span>
                        </div>
                        <div className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                            <span className="text-black">Salary negotiation support</span>
                        </div>
                        <div className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                            <span className="text-black">Probation period backup</span>
                        </div>
                        <div className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                            <span className="text-black">Guaranteed $100k+ offer</span>
                        </div>
                    </div>
                    <button className="w-full bg-primary hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-full flex items-center justify-center">
                        Get Started
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                </div>

                {/* Boot Camp + Job Placement Card */}
                <div className="bg-primary rounded-lg border border-blue-600 p-6 flex flex-col relative">
                    <div className="absolute top-10 -right-2">
                        <div className="bg-[#C57D10] text-xs font-bold px-3 py-1 rounded-md">Most Popular</div>
                        <div className="absolute top-5 right-0">
                            <svg width="7.903320" height="7.903320" viewBox="0 0 7.90332 7.90332" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <desc>
                                    Created with Pixso.
                                </desc>
                                <defs />
                                <path id="Vector 80" d="M0 0L7.9 0L0 7.9L0 0Z" fill="#C57D10" fill-opacity="1.000000" fill-rule="evenodd" />
                            </svg>

                        </div>
                    </div>
                    <div className="mb-6">
                        <h3 className="font-bold text-white">Boot Camp + Job Placement</h3>
                        <p className="text-sm text-blue-200">Complete career transformation</p>
                    </div>
                    <div className="mb-6">
                        <p className="text-3xl font-bold text-white">Custom Pricing</p>
                        <p className="text-sm text-blue-200">Based on selected track</p>
                    </div>
                    <div className="space-y-3 mb-8 flex-grow">
                        <div className="flex items-start">
                            <Check className="h-5 w-5 text-white mr-2 flex-shrink-0" />
                            <span className="text-white">Everything in Job Placement</span>
                        </div>
                        <div className="flex items-start">
                            <Check className="h-5 w-5 text-white mr-2 flex-shrink-0" />
                            <span className="text-white">One-on-one instruction</span>
                        </div>
                        <div className="flex items-start">
                            <Check className="h-5 w-5 text-white mr-2 flex-shrink-0" />
                            <span className="text-white">Hands-on real-world projects</span>
                        </div>
                        <div className="flex items-start">
                            <Check className="h-5 w-5 text-white mr-2 flex-shrink-0" />
                            <span className="text-white">Optional 400-hour internship</span>
                        </div>
                        <div className="flex items-start">
                            <Check className="h-5 w-5 text-white mr-2 flex-shrink-0" />
                            <span className="text-white">Industry mentor matching</span>
                        </div>
                        <div className="flex items-start">
                            <Check className="h-5 w-5 text-white mr-2 flex-shrink-0" />
                            <span className="text-white">Portfolio development</span>
                        </div>
                        <div className="flex items-start">
                            <Check className="h-5 w-5 text-white mr-2 flex-shrink-0" />
                            <span className="text-white">Lifetime access to materials</span>
                        </div>
                    </div>
                    <button className="w-full bg-foreground hover:bg-gray-100 text-blue-600 font-medium py-3 px-4 rounded-full flex items-center justify-center">
                        Schedule Consultation
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                </div>

                {/* Payment Options Card */}
                <div className="bg-foreground rounded-lg border border-gray-200 p-6 flex flex-col">
                    <div className="mb-6">
                        <h3 className="font-bold text-black">Payment Options</h3>
                        <p className="text-sm text-black">Flexible ways to invest</p>
                    </div>

                    <div className="space-y-6 mb-8 flex-grow">
                        <div>
                            <h4 className="font-semibold text-black mb-1">Student Loan</h4>
                            <p className="text-black text-sm">
                                Start with $500, no payments for 6 months, then 24 interest-free installments. Tax-deductible!
                            </p>
                        </div>

                        <div>
                            <h4 className="font-semibold text-black mb-1">Upfront Discount</h4>
                            <p className="text-black text-sm">Pay 20%+ upfront and save up to 20%. Start with just $500.</p>
                        </div>

                        <div>
                            <h4 className="font-semibold text-black mb-1">15-Day Money-Back Guarantee</h4>
                            <p className="text-black text-sm">Full refund if you back out within 15 days—no questions asked.</p>
                        </div>
                    </div>

                    <button className="w-full bg-primary hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-full flex items-center justify-center">
                        Get Pricing Info
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                </div>
            </div>
        </div>
    )
}

