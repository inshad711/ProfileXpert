"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Smartphone, Users, Settings, Rocket, } from "lucide-react"
import Image from "next/image"

interface Feature {
    id: number
    title: string
    description: string
    phoneImage: string
    phonePosition: "left" | "right"
    icon: React.ComponentType<{ className?: string }>
}

const features: Feature[] = [
    {
        id: 3,
        title: "NFC Tap & Share",
        description:
            "Ditch the old paper business cards. With our NFC-enabled smart cards, you can share your digital profile instantly by simply tapping your card to any smartphone — no app installation or setup required. It’s fast, seamless, and makes a lasting first impression.",
        phoneImage: "/WebFeatures/PROFILE XPERTS MOCKUP CROSS 1 RIGHT.png",
        phonePosition: "right",
        icon: Smartphone,
    },
    {
        id: 4,
        title: "20+ Templates & Full Customization",
        description:
            "Choose from a growing library of 20+ professionally crafted templates, each optimized for visual appeal and performance. Customize colors, fonts, layouts, and content to create a unique profile that truly represents your personal brand or business identity — all with zero design skills needed.",
        phoneImage: "/WebFeatures/PROFILE XPERTS MOCKUP CRO.png",
        phonePosition: "left",
        icon: Users,
    },
    {
        id: 5,
        title: "Multimedia-Ready Profiles",
        description:
            "Go beyond plain text. Upload high-resolution images, videos, portfolios, certifications, and more to create a dynamic and interactive profile. Whether you’re an entrepreneur, artist, freelancer, or professional, show off your work and achievements in the most engaging way possible.",
        phoneImage: "/WebFeatures/PROFILE XPERTS MOCKUP CROSS 2 RIGHTdd.png",
        phonePosition: "right",
        icon: Settings,
    },
    {
        id: 6,
        title: "Share Anywhere, Anytime",
        description:
            "Your profile lives on a single, easy-to-share link that works across all platforms — from WhatsApp and LinkedIn to Instagram, email signatures, and even QR codes. Whether you’re networking in person or online, your digital presence is always just a tap or click away.",
        phoneImage: "/WebFeatures/PROFILE XPERTS MOCKUP CROSS 1 LEFT.png",
        phonePosition: "left",
        icon: Rocket,
    },

]

export default function WhyChooseFeatures() {
    return (

        <section>

            <div className="flex justify-center">
                <h2
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className="text-2xl md:text-4xl font-gotu mt-4 text-center"
                >
                    Our Features {' '}
                    {/* <br className="hidden md:inline" /> */}

                </h2>
            </div>

            <section className="py-20 bg-gradient-to-b from-background to-muted/20">

                <div className=" mx-auto px-4 max-w-5xl ">

                    {features.map((feature, index) => {
                        const isEven = feature.id % 2 === 0
                        const IconComponent = feature.icon

                        return (
                            <motion.div
                                key={feature.id}
                                className={`flex flex-col py-4 lg:flex-row items-center gap-12 lg:gap-20 ${index > 0 ? "mt-10" : ""
                                    } ${feature.phonePosition === "left" ? "lg:flex-row-reverse" : ""} ${isEven ? "bg-gray-200 rounded-3xl p-8 lg:p-12" : ""
                                    }`}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.2 }}
                                viewport={{ once: true, margin: "-100px" }}
                            >
                                {/* Phone Mockup */}
                                <motion.div
                                    className="w-[30%]  flex justify-center"
                                    initial={{ opacity: 0, y: 60 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                                    viewport={{ once: true, margin: "-100px" }}
                                >
                                    <div className="relative">
                                        <motion.div
                                            className="relative  z-10"
                                            whileHover={{
                                                scale: 1.05,
                                                rotateY: feature.phonePosition === "left" ? -5 : 5,
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <Image
                                                width={800}
                                                height={800}
                                                src={
                                                    feature.phoneImage ||
                                                    "/placeholder.svg?height=600&width=300&query=phone mockup" ||
                                                    "/placeholder.svg"
                                                }
                                                alt={`${feature.title} phone mockup`}
                                                className="w-56 h-auto drop-shadow-2xl"
                                            />
                                        </motion.div>

                                        {/* Glow */}
                                        {/* <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-red-300/20 to-red-500/20 blur-3xl -z-10 scale-110"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ duration: 1, delay: 0.4 }}
                                            viewport={{ once: true }}
                                        /> */}
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-purple-300/20 to-purple-500/20 blur-3xl -z-10 scale-110"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ duration: 1, delay: 0.4 }}
                                            viewport={{ once: true }}
                                        />

                                    </div>
                                </motion.div>

                                {/* Text Content */}
                                <motion.div
                                    className="w-[70%]  text-center lg:text-left"
                                    initial={{
                                        opacity: 0,
                                        x: feature.phonePosition === "left" ? -80 : 80,
                                        scale: 0.9,
                                    }}
                                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                                    viewport={{ once: true, margin: "-100px" }}
                                >
                                    {/* <motion.div
                                        className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-300 to-red-600 rounded-2xl mb-6"
                                        initial={{ scale: 0, rotate: -180 }}
                                        whileInView={{ scale: 1, rotate: 0 }}
                                        transition={{
                                            duration: 0.2,
                                            delay: 0.8,
                                            type: "spring",
                                            stiffness: 200,
                                        }}
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        viewport={{ once: true }}
                                    >
                                        <IconComponent className="w-8 h-8 text-white" />
                                    </motion.div> */}
                                    <motion.div
                                        className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-l from-purple-300 to-purple-600 rounded-2xl mb-6"
                                        initial={{ scale: 0, rotate: -180 }}
                                        whileInView={{ scale: 1, rotate: 0 }}
                                        transition={{
                                            duration: 0.2,
                                            delay: 0.8,
                                            type: "spring",
                                            stiffness: 200,
                                        }}
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        viewport={{ once: true }}
                                    >
                                        <IconComponent className="w-8 h-8 text-white" />
                                    </motion.div>


                                    <motion.h3
                                        className="text-3xl lg:text-4xl font-gotu font-bold text-foreground mb-4 text-balance"
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.2, delay: 1 }}
                                        viewport={{ once: true }}
                                    >
                                        {feature.title}
                                    </motion.h3>

                                    <motion.p
                                        className="text-base text-muted-foreground leading-relaxed max-w-md mx-auto lg:mx-0 text-pretty"
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.2, delay: 1.2 }}
                                        viewport={{ once: true }}
                                    >
                                        {feature.description}
                                    </motion.p>

                                    <motion.div
                                        className="mt-8"
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.2, delay: 1.4 }}
                                        viewport={{ once: true }}
                                    >
                                        {/* <motion.button
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-red-600 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            Learn More
                                            <motion.span
                                                animate={{ x: [0, 4, 0] }}
                                                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                                            >
                                                →
                                            </motion.span>
                                        </motion.button> */}
                                        <motion.button
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-l from-purple-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            Learn More
                                            <motion.span
                                                animate={{ x: [0, 4, 0] }}
                                                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                                            >
                                                →
                                            </motion.span>
                                        </motion.button>

                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        )
                    })}
                </div>
            </section>
        </section>
    )
}
