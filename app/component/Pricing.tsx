"use client"

import { motion } from "framer-motion"
import { Check, Sparkles, Zap, Crown } from "lucide-react"

export function Pricing() {
    const plans = [
        {
            name: "Starter",
            price: "Free",
            period: "",
            description: "Perfect for trying out our AI naming tool",
            icon: Sparkles,
            features: [
                "3 free profile layouts",
                "Colour customizations",
                "20 Free Profile Cards",
                "Upload upto 20 Images",
            ],

            popular: false,
            buttonText: "Get Started Free",
            buttonVariant: "outline" as const,
        },
        {
            name: "Pro",
            price: "₹49.00",
            period: "/month",
            description: "For serious entrepreneurs and creators",
            icon: Zap,
            features: [
                "20 free profile layouts",
                "Colour customizations",
                "Customized QR Codes",
                "Font customization",
                "CTA button",

            ],

            popular: true,
            buttonText: "Pay Monthly",
            buttonVariant: "default" as const,
        },
        {
            name: "Enterprise",
            price: "₹399.00",
            period: "/yearly",
            description: "For teams and agencies",
            icon: Crown,
            features: [
                "20 free profile layouts",
                "Customized QR Codes",
                "Additional Users",
                "Colour & Font",
                "Customizations",
                "CTA button",

            ],

            popular: false,
            buttonText: "Pay Yearly",
            buttonVariant: "outline" as const,
        },
    ]

    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background spotlight */}


            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    {/* <h2 className="text-4xl md:text-5xl font-gotu text-black mb-6">Choose Your Plan</h2> */}
                    {/* <span className="inline-flex items-center border border-blue-600 rounded-full px-2 py-1 mb-4 hover:bg-blue-50 transition">
                        <span className="bg-gradient-to-r from-blue-200 via-blue-800 to-blue-600 text-white text-xs font-semibold rounded-full px-3 py-1 mr-2">
                            Choose Your
                        </span>
                        <span className="text-sm text-gray-900">Plan </span>
                    </span> */}

                    {/* <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Start free and upgrade as your naming needs grow. All plans include our core AI technology.
                    </p> */}

                    <div className="flex justify-center">
                        <h2
                            data-aos="fade-up"
                            data-aos-delay="100"
                            className="text-2xl md:text-4xl font-gotu mt-4 text-center"
                        >
                            Choose Your {' '}
                            {/* <br className="hidden md:inline" /> */}
                            Plan

                        </h2>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => {
                        const IconComponent = plan.icon
                        return (
                            <motion.div
                                key={index}
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                viewport={{ once: true }}
                                className={`relative rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${plan.popular
                                    ? " border-[#3338A0] shadow-2xl shadow-[#0AB6BC]/20"
                                    : "glass-dark bg-white border-[#3338A0]/50 hover:border-[#3338A0]"
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <div className="bg-gradient-to-l from-[#6F00FF] to-[#3338A0] font-gotu text-white px-6 py-2 rounded-full text-sm font-medium">
                                            Most Popular
                                        </div>
                                    </div>
                                )}

                                <div className="text-center mb-8">
                                    {/* <div className="flex justify-center mb-4">
                                        <div
                                            className={`w-16 h-16 rounded-2xl flex items-center justify-center ${plan.popular ? "bg-gradient-to-br from-[#0AB6BC] to-[#3338A0]" : "bg-white/10"
                                                }`}
                                        >
                                            <IconComponent className={`w-8 h-8 ${plan.popular ? "text-white" : "text-[#6F00FF]"}`} />
                                        </div>
                                    </div> */}
                                    <div className="flex justify-center mb-4">
                                        <div
                                            className={`w-16 h-16 rounded-2xl flex items-center justify-center ${plan.popular
                                                ? "bg-gradient-to-l from-[#6F00FF] to-[#3338A0]"
                                                : "bg-white/10"
                                                }`}
                                        >
                                            <IconComponent
                                                className={`w-8 h-8 ${plan.popular ? "text-white" : "text-[#6F00FF]"}`}
                                            />
                                        </div>
                                    </div>

                                    <h3 className={`text-2xl font-bold mb-2 font-gotu ${plan.popular ? "text-gray-900" : "text-black"}`}>
                                        {plan.name}
                                    </h3>
                                    <div className="mb-4">
                                        <span className={`text-4xl font-gotu ${plan.popular ? "text-gray-900" : "text-black"}`}>
                                            {plan.price}
                                        </span>
                                        <span className={`text-lg ${plan.popular ? "text-black" : "text-black"}`}>{plan.period}</span>
                                    </div>
                                    <p className={`text-sm ${plan.popular ? "text-black" : "text-black"}`}>{plan.description}</p>
                                </div>

                                <div className="space-y-4  mb-8">
                                    {plan.features.map((feature, featureIndex) => (
                                        <div key={featureIndex} className="flex items-center gap-3">
                                            <Check className={`w-5 h-5 ${plan.popular ? "text-[#3338A0]" : "text-[#3338A0]"}`} />
                                            <span className={`text-sm ${plan.popular ? "text-black" : "text-black"}`}>{feature}</span>
                                        </div>
                                    ))}

                                </div>

                                {/* Custom Button (no external component) */}
                                {/* <button
                                    className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-sm
                    ${plan.popular
                                            ? "bg-gradient-to-r from-[#0AB6BC] to-[#3338A0] text-white hover:from-[#0AB6BC]/90 hover:to-[#3338A0]/90"
                                            : "bg-transparent border border-[#3338A0] text-[#3338A0] hover:bg-[#3338A0] hover:text-white"
                                        }
                  `}
                                >
                                    {plan.buttonText}
                                </button> */}
                                <button
                                    className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-sm
    ${plan.popular
                                            ? "bg-gradient-to-l from-[#6F00FF] to-[#3338A0] text-white hover:from-[#6F00FF]/90 hover:to-[#3338A0]/90"
                                            : "bg-transparent border border-[#3338A0] text-[#3338A0] hover:bg-[#3338A0] hover:text-white"
                                        }
  `}
                                >
                                    {plan.buttonText}
                                </button>

                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
