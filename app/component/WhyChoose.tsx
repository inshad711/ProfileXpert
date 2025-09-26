// D:\NewNextProject\web\app\component\WhyChoose.tsx

"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import AOS from "aos"

import "aos/dist/aos.css"
import { BookOpen, LayoutTemplate, BarChart3 } from "lucide-react" // icons
// import Link from "next/link"
import Image from "next/image"

const phoneData = [
    {
        image:
            "/WebMockup/mockup 3.png",
        title: "Create account",
        description:
            "Comprehensive Effects Library of pre-built effects and filters",
        icon: BookOpen,
    },
    {
        image:
            "/WebMockup/mockup 2.png",
        title: "Fill details",
        description:
            "Explore a vast collection of pre-built templates, Effects, and transitions.",
        icon: LayoutTemplate,
    },
    {
        image:
            "/WebMockup/mockup 2.png",
        title: "Share cards ",
        description: "Keep track of all your published projects",
        icon: BarChart3,
    },
]

export default function WhyChoose() {
    const [hoveredPhone, setHoveredPhone] = useState<number | null>(null)

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: "ease-out",
            once: true,
        })
    }, [])

    return (
        <section id='why-choose' className="py-10 bg-gray-50">


            <div className="text-center mb-10">
                {/* <div
                    data-aos="fade-up"
                    className="inline-flex items-center border border-blue-600 rounded-full px-2 py-1 mb-4 hover:bg-blue-50 transition"
                >
                    <span className="bg-gradient-to-r from-blue-200 via-blue-800 to-blue-600 text-white text-xs font-semibold rounded-full px-3 py-1 mr-2">
                        Why Choose
                    </span>
                    <span className="text-sm text-gray-900"> Highlight</span>
                </div> */}

                <h2 data-aos="fade-up" data-aos-delay="100" className="text-2xl md:text-4xl font-gotu mt-4">
                    Create & Share Your {' '}
                    <br className="hidden md:inline" />

                    Digital Identity Seamlessly!
                </h2>


            </div>
            <div className="container mx-auto px-6">
                {/* Desktop layout */}
                <div className="hidden md:flex justify-center items-center h-[600px]">
                    <div className="relative w-full max-w-5xl min-h-[590px] flex justify-center items-center">
                        {/* Left Phone */}
                        <div
                            data-aos="fade-left"
                            data-aos-delay="600"
                            className="absolute left-[10%] z-10"
                            onMouseEnter={() => setHoveredPhone(0)}
                            onMouseLeave={() => setHoveredPhone(null)}
                        >
                            <PhoneFrame phone={phoneData[0]} isHovered={hoveredPhone === 0} />
                        </div>

                        {/* Center Phone */}
                        <div
                            data-aos="zoom-in"
                            data-aos-delay="200"
                            className="relative scale-110 z-20"
                            onMouseEnter={() => setHoveredPhone(1)}
                            onMouseLeave={() => setHoveredPhone(null)}
                        >
                            <PhoneFrame phone={phoneData[1]} isHovered={hoveredPhone === 1} />
                        </div>

                        {/* Right Phone */}
                        <div
                            data-aos="fade-right"
                            data-aos-delay="1000"
                            className="absolute right-[10%] z-10"
                            onMouseEnter={() => setHoveredPhone(2)}
                            onMouseLeave={() => setHoveredPhone(null)}
                        >
                            <PhoneFrame phone={phoneData[2]} isHovered={hoveredPhone === 2} />
                        </div>
                    </div>
                </div>

                {/* Mobile layout (stacked vertically with fade-up) */}
                <div className="flex flex-col items-center gap-10 md:hidden">
                    {phoneData.map((phone, index) => {
                        const Icon = phone.icon
                        return (
                            <div
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={index * 200}
                                className="w-full  justify-center"
                            >
                                <PhoneFrame phone={phone} isHovered={false} />
                                <div className="text-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] py-2  mt-3">
                                    <Icon className="w-6 h-6 mx-auto mb-2 text-gray-700" />
                                    <h3 className="font-semibold text-gray-900 text-xl mb-1">
                                        {phone.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {phone.description}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

function PhoneFrame({
    phone,
    isHovered,
}: {
    phone: typeof phoneData[0]
    isHovered: boolean
}) {
    const Icon = phone.icon
    return (
        <div className="relative flex flex-col items-center">
            {/* Phone Frame */}
            <motion.div
                animate={{ filter: isHovered ? "blur(4px)" : "blur(0px)" }}
                transition={{ duration: 0.3 }}
                className="relative bg-gray-50 w-48 lg:w-60"
            >
                <div className="bg-transparent rounded-[2rem] overflow-hidden relative">
                    <Image
                        height={1000}
                        width={100}
                        src={phone.image}
                        alt={phone.title}
                        className="w-full h-full object-contain"
                    />
                </div>

            </motion.div>

            {/* Hover Popup (desktop only) */}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 40, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="absolute bottom-[150px] w-64 bg-white shadow-xl rounded-2xl p-4 text-center hidden md:block"
                    >
                        <Icon className="w-6 h-6 mx-auto mb-2 text-gray-700" />
                        <h3 className="font-semibold font-gotu text-gray-900 text-base mb-1">
                            {phone.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            {phone.description}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>


        </div>
    )
}