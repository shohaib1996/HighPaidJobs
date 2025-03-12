import { Check, ChevronRight } from "lucide-react"
import { Button } from "../ui/button"
import { Card } from "../ui/card"


const HighPay = () => {
    return (
        <div className="px-4 py-12 bg-foreground">
            <div className="mb-10 text-center">
                <h1 className="mb-2 text-4xl font-bold text-black">Your path to a High-Paying career</h1>
                <p className="text-black">Follow our proven step-by-step process to land your dream job</p>
            </div>

            <div className="container grid gap-8 mx-auto md:grid-cols-2">
                {/* Left column - Career path steps */}
                <div className="relative">
                    {/* Replace the solid line with a dashed line */}
                    <div className="absolute left-[30px] top-[60px] bottom-[100px] w-[2px] bg-primary-forground"
                        style={{
                            background: 'repeating-linear-gradient(to bottom, #dbeafe 0, #dbeafe 6px, transparent 6px, transparent 12px)'
                        }}>
                    </div>

                    <div className="space-y-12">
                        <div className="flex gap-6">
                            <div className="relative">
                                <div className="flex items-center justify-center w-[60px] h-[60px] rounded-full  bg-primary-foreground text-secondary font-semibold">
                                    <span>01</span>
                                </div>
                            </div>
                            <div>
                                <h3 className="mb-1 text-xl font-bold text-black">Pick your plan</h3>
                                <p className="text-sm text-black">
                                    Choose between Job Placement Only or Boot Camp + Job Placement based on your needs.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="relative">
                                <div className="flex items-center justify-center w-[60px] h-[60px] rounded-full  bg-primary-foreground text-secondary font-semibold">
                                    <span>02</span>
                                </div>
                            </div>
                            <div>
                                <h3 className="mb-1 text-xl font-bold text-black">Master your skills</h3>
                                <p className="text-sm text-black">
                                    Get one-on-one instruction and build real-world products with industry professionals.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="relative">
                                <div className="flex items-center justify-center w-[60px] h-[60px] rounded-full  bg-primary-foreground text-secondary font-semibold">
                                    <span>03</span>
                                </div>
                            </div>
                            <div>
                                <h3 className="mb-1 text-xl font-bold text-black">Land your dream job</h3>
                                <p className="text-sm text-black">
                                    We&apos;ll review your resume, connect you with recruiters, and prepare you for interviews.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="relative">
                                <div className="flex items-center justify-center w-[60px] h-[60px] border border-gray rounded-full  bg-primary-foreground text-secondary font-semibold">
                                    <span>04</span>
                                </div>
                            </div>
                            <div>
                                <h3 className="mb-1 text-xl font-bold text-black">Thrive in your new role</h3>
                                <p className="text-sm text-black">
                                    Receive full support during your probation period to ensure your success.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <Button className="px-6 text-white rounded-full bg-primary hover:bg-blue-700">
                            Book Free Consultation <ChevronRight className="w-4 h-4 ml-2" />
                        </Button>
                    </div>
                </div>

                {/* Right column - Available career tracks */}
                <div>
                    <Card className="overflow-hidden border rounded-lg border-success">
                        <div className="px-6 py-4 text-xl font-semibold bg-success text-pure-white">Available Career Tracks</div>
                        <div className="p-6 space-y-4 bg-success-foreground">
                            {/* First component - already has gradient effect */}
                            <div className="relative flex items-center gap-3 p-3 overflow-hidden rounded-lg"
                                style={{
                                    background: 'linear-gradient(to right, var(--forground) 70%, var(--success-foreground) 100%)',
                                }}>
                                {/* Border with fading effect */}
                                <div className="absolute inset-0 rounded-lg"
                                    style={{
                                        border: '1px solid #E5E7EB',
                                        borderRightColor: 'transparent',
                                        background: 'linear-gradient(to right, transparent, transparent 70%, var(--success-foreground) 100%)',
                                        maskImage: 'linear-gradient(to right, black 70%, transparent 100%)',
                                        WebkitMaskImage: 'linear-gradient(to right, black 70%, transparent 100%)',
                                        pointerEvents: 'none'
                                    }}> <div
                                    className="relative flex items-center gap-3 p-3 overflow-hidden rounded-lg"
                                    style={{
                                      background: "linear-gradient(to right, var(--background) 70%, var(--success-foreground) 100%)",
                                    }}
                                  >
                                    {/* Border with fading effect */}
                                    <div
                                      className="absolute inset-0 rounded-lg"
                                      style={{
                                        border: "1px solid #E5E7EB",
                                        background: "linear-gradient(to right, transparent, transparent 70%, var(--success-foreground) 100%)",
                                        maskImage: "linear-gradient(to right, black 70%, transparent 100%)",
                                        WebkitMaskImage: "linear-gradient(to right, black 70%, transparent 100%)",
                                        pointerEvents: "none",
                                      }}
                                    />
                              
                                    <div className="z-10 flex items-center justify-center w-6 h-6 text-green-600 bg-green-100 rounded-full">
                                      <Check className="w-4 h-4" />
                                    </div>
                                    <span className="z-10 text-foreground">CloudOps/DevOps (AWS)</span>
                                  </div>
                                </div>

                                <div className="z-10 flex items-center justify-center w-6 h-6 text-green-600 bg-green-100 rounded-full">
                                    <Check className="w-4 h-4" />
                                </div>
                                <span className="z-10 text-black">CloudOps/DevOps (AWS)</span>
                            </div>

                            {/* Second component - with gradient effect */}
                            <div className="relative flex items-center gap-3 p-3 ml-5 overflow-hidden rounded-lg"
                                style={{
                                    background: 'linear-gradient(to right, var(--forground) 70%, var(--success-foreground) 100%)',
                                }}>
                                {/* Border with fading effect */}
                                <div className="absolute inset-0 rounded-lg"
                                    style={{
                                        border: '1px solid #E5E7EB',
                                        borderRightColor: 'transparent',
                                        background: 'linear-gradient(to right, transparent, transparent 70%, var(--success-foreground) 100%)',
                                        maskImage: 'linear-gradient(to right, black 70%, transparent 100%)',
                                        WebkitMaskImage: 'linear-gradient(to right, black 70%, transparent 100%)',
                                        pointerEvents: 'none'
                                    }}>
                                </div>

                                <div className="z-10 flex items-center justify-center w-6 h-6 text-green-600 bg-green-100 rounded-full">
                                    <Check className="w-4 h-4" />
                                </div>
                                <span className="z-10 text-black">Full-Stack Web/Mobile (MERN)</span>
                            </div>

                            {/* Third component - with gradient effect */}
                            <div className="relative flex items-center gap-3 p-3 ml-8 overflow-hidden rounded-lg"
                                style={{
                                    background: 'linear-gradient(to right, var(--forground) 70%, var(--success-foreground) 100%)',
                                }}>
                                {/* Border with fading effect */}
                                <div className="absolute inset-0 rounded-lg"
                                    style={{
                                        border: '1px solid #E5E7EB',
                                        borderRightColor: 'transparent',
                                        background: 'linear-gradient(to right, transparent, transparent 70%, var(--success-foreground) 100%)',
                                        maskImage: 'linear-gradient(to right, black 70%, transparent 100%)',
                                        WebkitMaskImage: 'linear-gradient(to right, black 70%, transparent 100%)',
                                        pointerEvents: 'none'
                                    }}>
                                </div>

                                <div className="z-10 flex items-center justify-center w-6 h-6 text-green-600 bg-green-100 rounded-full">
                                    <Check className="w-4 h-4" />
                                </div>
                                <span className="z-10 text-black">Project/Product Management</span>
                            </div>

                            {/* Fourth component - with gradient effect */}
                            <div className="relative flex items-center gap-3 p-3 overflow-hidden rounded-lg ml-11"
                                style={{
                                    background: 'linear-gradient(to right, var(--forground) 70%, var(--success-foreground) 100%)',
                                }}>
                                {/* Border with fading effect */}
                                <div className="absolute inset-0 rounded-lg"
                                    style={{
                                        border: '1px solid #E5E7EB',
                                        borderRightColor: 'transparent',
                                        background: 'linear-gradient(to right, transparent, transparent 70%, var(--success-foreground) 100%)',
                                        maskImage: 'linear-gradient(to right, black 70%, transparent 100%)',
                                        WebkitMaskImage: 'linear-gradient(to right, black 70%, transparent 100%)',
                                        pointerEvents: 'none'
                                    }}>
                                </div>

                                <div className="z-10 flex items-center justify-center w-6 h-6 text-green-600 bg-green-100 rounded-full">
                                    <Check className="w-4 h-4" />
                                </div>
                                <span className="z-10 text-black">SQA Engineering</span>
                            </div>

                            <div className="mt-4 text-sm text-center text-black">All tracks include job placement guarantee</div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default HighPay