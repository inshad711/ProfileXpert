//////////////full working //////////


// "use client"

// import { Palette, PenTool, QrCode, Layers } from "lucide-react"
// import Image from "next/image"
// import { useEffect, useRef, useState } from "react"
// import { motion } from "framer-motion"

// import { PlayCircle } from 'lucide-react';
// type PhoneImg = {
//     src: string
//     alt?: string
// }

// type TriplePhoneHeroProps = {
//     title: string
//     highlight?: string
//     subtitle?: string
//     phones?: {
//         center: PhoneImg
//         left: PhoneImg
//         right: PhoneImg
//     }
//     className?: string
// }

// function useIsMobile() {
//     const [isMobile, setIsMobile] = useState(false)

//     useEffect(() => {
//         const checkScreen = () => setIsMobile(window.innerWidth < 768) // Tailwind's 'md'
//         checkScreen()

//         window.addEventListener("resize", checkScreen)
//         return () => window.removeEventListener("resize", checkScreen)
//     }, [])

//     return isMobile
// }
// const fallbackPhones = {
//     left: { src: "/newmockup/a66aec9c-585f-4237-abc5-da30b81a0598.png", alt: "Left phone" },
//     center: { src: "/newmockup/a939bddf-942a-4914-9df6-df1c5a3601d2.png", alt: "Center phone" },
//     right: { src: "/newmockup/27d940a5-e40c-491b-9f09-5b42b05162d7.png", alt: "Right phone" },
// }

// export default function HeroTech({

//     phones = fallbackPhones,
//     className,
// }: TriplePhoneHeroProps) {
//     const ref = useRef<HTMLDivElement | null>(null)
//     const [active, setActive] = useState(false)

//     useEffect(() => {
//         const el = ref.current
//         if (!el) return

//         const alreadyVisible = el.getBoundingClientRect().top < window.innerHeight
//         if (alreadyVisible) {
//             setActive(true)
//             return
//         }

//         const io = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) {
//                     setActive(true)
//                     io.disconnect()
//                 }
//             },
//             { threshold: 0.1 }
//         )
//         io.observe(el)
//         return () => io.disconnect()
//     }, [])

//     return (
//         <div className="templateContainer">
//             <section
//                 ref={ref}
//                 className={`relative isolate w-full overflow-hidden pt-28 md:py-28 lg:py-28 ${className || ""}`}
//             >
//                 <motion.h1
//                     className="mx-auto mt-6 max-w-4xl text-center font-gotu text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl"
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     transition={{ duration: 0.6, delay: 0.1 }}
//                     viewport={{ once: true }}
//                 >
//                     Your Digital Business Card
//                     <br className="hidden sm:block" />
//                     Smarter, Faster, Professional
//                 </motion.h1>

//                 <motion.p
//                     className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-gray-600 sm:text-lg"
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     transition={{ duration: 0.6, delay: 0.25 }}
//                     viewport={{ once: true }}
//                 >
//                     Create and share your profile instantly with NFC or WhatsApp.
//                 </motion.p>



//                 {/* <div className="flex md:pb-10 sm:flex-row justify-center gap-x-4 mt-6">
//                     <a
//                         data-aos="fade-up" data-aos-delay="100"
//                         href="https://apps.apple.com/in/app/profilexpert/id6747479661"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="transition-transform hover:-translate-y-0.5"
//                     >
//                         <Image
//                             src="/icone/en-us.svg"
//                             alt="Download on the App Store"
//                             width={160}
//                             height={48}
//                             className="h-[42px] w-auto"
//                         />
//                     </a>

//                     <a
//                         data-aos="fade-up" data-aos-delay="100"
//                         href="https://play.google.com/store/apps/details?id=com.profile.expert&pli=1"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="transition-transform hover:-translate-y-0.5"
//                     >
//                         <Image
//                             src="/icone/googleplay.svg"
//                             alt="Get it on Google Play"
//                             width={160}
//                             height={48}
//                             className="h-[42px] w-auto"
//                         />
//                     </a>
//                 </div> */}

//                 <div className="flex flex-wrap justify-center gap-4 mt-6 md:pb-10 sm:flex-row">



//                     {/* Create Free Profile Button */}
//                     <a
//                         data-aos="fade-up" data-aos-delay="100"
//                         href="#"
//                         className="px-6 py-3 rounded-md text-white bg-gradient-to-r from-[#6F00FF] to-[#9929EA] hover:bg-blue-700 transition-colors text-sm font-semibold"
//                     >
//                         Create Free Profile
//                     </a>

//                     {/* Watch Demo Button */}
//                     <button
//                         data-aos="fade-up"
//                         data-aos-delay="100"
//                         onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//                         className="flex items-center gap-2 px-6 py-3 rounded-md border border-gray-400 text-gray-700 hover:bg-gray-100 transition-colors text-sm font-semibold"
//                     >
//                         <PlayCircle className="w-5 h-5" />
//                         Watch Demo
//                     </button>

//                 </div>



//                 <div className="relative mx-auto md:mt-0 h-[560px] w-full max-w-6xl flex items-center justify-center">
//                     {/* Background Rings */}
//                     <div
//                         aria-hidden
//                         className={`pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-1000 ease-out ${active ? "opacity-70 scale-100" : "opacity-0 scale-90"
//                             }`}
//                     >
//                         <div className="absolute h-[900px] w-[900px] rounded-full border border-gray-300/40 animate-pulse" />
//                         <div className="absolute h-[700px] w-[700px] rounded-full border border-gray-300/30 animate-pulse delay-150" />
//                         <div className="absolute h-[500px] w-[500px] rounded-full border border-gray-300/20 animate-pulse delay-300" />
//                         <div className="absolute h-[300px] w-[300px] rounded-full border border-gray-300/10 animate-pulse delay-500" />
//                     </div>

//                     {/* Left Features */}
//                     <div className="absolute max-lg:hidden  left-0 top-1/2 -translate-y-1/2 flex flex-col gap-6">
//                         <FeatureCard
//                             icon={<PenTool className="h-5 w-5 text-blue-600" />}
//                             title="Create & Customize"
//                             desc="Design your digital card your way — fast and easy."
//                             delay={0.1}
//                         />
//                         <FeatureCard
//                             icon={<Layers className="h-5 w-5 text-green-600" />}
//                             title="Premium Layouts & Themes"
//                             desc="Select from clean, modern, and pro-level designs."
//                             delay={0.25}
//                         />
//                     </div>

//                     {/* Right Features */}
//                     <div className="absolute max-lg:hidden  right-0 top-1/2 -translate-y-1/2 flex flex-col gap-6">
//                         <FeatureCard
//                             icon={<QrCode className="h-5 w-5 text-purple-600" />}
//                             title="QR Code Sharing"
//                             desc="Share your card instantly with a smart QR code."
//                             delay={0.15}
//                         />
//                         <FeatureCard
//                             icon={<Palette className="h-5 w-5 text-orange-600" />}
//                             title="Pick Your Style"
//                             desc="Choose from sleek, professional themes and layouts."
//                             delay={0.3}
//                         />
//                     </div>

//                     {/* Phones */}
//                     <div className="relative flex h-[360px] sm:h-[480px] lg:h-[600px] w-full items-center justify-center">
//                         <PhoneFrame
//                             img={phones.left}
//                             className="left"
//                             delayMs={120}
//                         />
//                         <PhoneFrame
//                             img={phones.right}
//                             className="right"
//                             delayMs={220}
//                         />
//                         <PhoneFrame
//                             img={phones.center}
//                             emphasis
//                             delayMs={50}
//                         />
//                     </div>
//                 </div>
//             </section>
//         </div>
//     )
// }



// function PhoneFrame({
//     img,
//     className,
//     emphasis = false,
//     delayMs = 0,
// }: {
//     img: PhoneImg
//     className?: string
//     emphasis?: boolean
//     delayMs?: number
// }) {
//     const isLeft = className?.includes("left")
//     const isRight = className?.includes("right")
//     const isMobile = useIsMobile()

//     const offsetX = isMobile ? 53 : 175 // <<< adjust this value to control gap on mobile

//     return (
//         <motion.div
//             className={`pointer-events-none h-[460px] w-[230px] sm:h-[400px] sm:w-[250px] lg:h-[500px] lg:w-[260px] absolute ${className || ""}`}
//             initial={{ opacity: 0, x: 0, y: 0, rotate: 0, scale: 1 }}
//             whileInView={{
//                 opacity: 1,
//                 x: isLeft ? -offsetX : isRight ? offsetX : 0,
//                 y: emphasis ? -35 : 0,
//                 rotate: isLeft ? -6 : isRight ? 6 : 0,
//                 scale: 1,
//                 zIndex: emphasis ? 10 : "auto",
//             }}
//             transition={{
//                 duration: 0.7,
//                 delay: delayMs / 1000,
//                 ease: "easeOut",
//             }}
//             viewport={{ once: true }}
//             style={{ zIndex: emphasis ? 10 : undefined }}
//         >
//             <div className="relative m-[10px] h-[calc(100%-20px)] w-[calc(100%-20px)] overflow-hidden rounded-[32px]">
//                 <Image
//                     src={img.src}
//                     alt={img.alt ?? "App preview"}
//                     height={460}
//                     width={230}
//                     unoptimized
//                     className="h-full w-full object-cover"
//                     priority={emphasis}
//                 />
//             </div>
//         </motion.div>
//     )
// }


// // FEATURE CARD
// function FeatureCard({
//     icon,
//     title,
//     desc,
//     delay = 0,
// }: {
//     icon: React.ReactNode
//     title: string
//     desc: string
//     delay?: number
// }) {
//     const isLeft = title === "Create & Customize" || title === "Premium Layouts & Themes"

//     return (
//         <motion.div
//             className="flex max-w-[250px] items-start gap-3 rounded-xl bg-white/70 p-4 shadow-md backdrop-blur"
//             initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: delay }}
//             viewport={{ once: true }}
//         >
//             <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
//                 {icon}
//             </div>
//             <div>
//                 <h4 className="text-xl font-gotu text-gray-900">{title}</h4>
//                 <p className="mt-1 text-sm text-gray-600">{desc}</p>
//             </div>
//         </motion.div>
//     )
// }






// "use client"

// import { Palette, PenTool, QrCode, Layers } from "lucide-react"
// import Image from "next/image"
// import { useEffect, useRef, useState } from "react"
// import { motion } from "framer-motion"

// import { PlayCircle } from 'lucide-react';
// type PhoneImg = {
//     src: string
//     alt?: string
// }

// type TriplePhoneHeroProps = {
//     title: string
//     highlight?: string
//     subtitle?: string
//     phones?: {
//         center: PhoneImg
//         left: PhoneImg
//         right: PhoneImg
//     }
//     className?: string
// }

// function useIsMobile() {
//     const [isMobile, setIsMobile] = useState(false)

//     useEffect(() => {
//         const checkScreen = () => setIsMobile(window.innerWidth < 768) // Tailwind's 'md'
//         checkScreen()

//         window.addEventListener("resize", checkScreen)
//         return () => window.removeEventListener("resize", checkScreen)
//     }, [])

//     return isMobile
// }
// const fallbackPhones = {
//     left: { src: "/newmockup/a66aec9c-585f-4237-abc5-da30b81a0598.png", alt: "Left phone" },
//     center: { src: "/newmockup/a939bddf-942a-4914-9df6-df1c5a3601d2.png", alt: "Center phone" },
//     right: { src: "/newmockup/27d940a5-e40c-491b-9f09-5b42b05162d7.png", alt: "Right phone" },
// }

// export default function HeroTech({

//     phones = fallbackPhones,
//     className,
// }: TriplePhoneHeroProps) {
//     const ref = useRef<HTMLDivElement | null>(null)
//     const [active, setActive] = useState(false)

//     useEffect(() => {
//         const el = ref.current
//         if (!el) return

//         const alreadyVisible = el.getBoundingClientRect().top < window.innerHeight
//         if (alreadyVisible) {
//             setActive(true)
//             return
//         }

//         const io = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) {
//                     setActive(true)
//                     io.disconnect()
//                 }
//             },
//             { threshold: 0.1 }
//         )
//         io.observe(el)
//         return () => io.disconnect()
//     }, [])

//     return (
//         <div className="templateContainer">
//             <section
//                 ref={ref}
//                 className={`relative isolate w-full overflow-hidden pt-28 md:py-28 lg:py-28 ${className || ""}`}
//             >
//                 <motion.h1
//                     className="mx-auto mt-6 max-w-4xl text-center font-gotu text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl"
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     transition={{ duration: 0.6, delay: 0.1 }}
//                     viewport={{ once: true }}
//                 >
//                     Your Digital Business Card
//                     <br className="hidden sm:block" />
//                     Smarter, Faster, Professional
//                 </motion.h1>

//                 <motion.p
//                     className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-gray-600 sm:text-lg"
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     transition={{ duration: 0.6, delay: 0.25 }}
//                     viewport={{ once: true }}
//                 >
//                     Create and share your profile instantly with NFC or WhatsApp.
//                 </motion.p>




//                 <div className="flex flex-wrap justify-center gap-4 mt-6 md:pb-10 sm:flex-row">



//                     {/* Create Free Profile Button */}
//                     <a
//                         data-aos="fade-up" data-aos-delay="100"
//                         href="#"
//                         className="px-6 py-3 rounded-md text-white bg-gradient-to-r from-[#6F00FF] to-[#9929EA] hover:bg-blue-700 transition-colors text-sm font-semibold"
//                     >
//                         Create Free Profile
//                     </a>

//                     {/* Watch Demo Button */}
//                     <button
//                         data-aos="fade-up"
//                         data-aos-delay="100"
//                         onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//                         className="flex items-center gap-2 px-6 py-3 rounded-md border border-gray-400 text-gray-700 hover:bg-gray-100 transition-colors text-sm font-semibold"
//                     >
//                         <PlayCircle className="w-5 h-5" />
//                         Watch Demo
//                     </button>

//                 </div>



//                 <div className="relative mx-auto md:mt-0 h-[560px] w-full max-w-6xl flex items-center justify-center">
//                     {/* Background Rings */}
//                     <div
//                         aria-hidden
//                         className={`pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-1000 ease-out ${active ? "opacity-70 scale-100" : "opacity-0 scale-90"
//                             }`}
//                     >
//                         <div className="absolute h-[900px] w-[900px] rounded-full border border-gray-300/40 animate-pulse" />
//                         <div className="absolute h-[700px] w-[700px] rounded-full border border-gray-300/30 animate-pulse delay-150" />
//                         <div className="absolute h-[500px] w-[500px] rounded-full border border-gray-300/20 animate-pulse delay-300" />
//                         <div className="absolute h-[300px] w-[300px] rounded-full border border-gray-300/10 animate-pulse delay-500" />
//                     </div>

//                     {/* Left Features */}
//                     <div className="absolute max-lg:hidden  left-0 top-1/2 -translate-y-1/2 flex flex-col gap-6">
//                         <FeatureCard
//                             icon={<PenTool className="h-5 w-5 text-blue-600" />}
//                             title="Create & Customize"
//                             desc="Design your digital card your way — fast and easy."
//                             delay={0.1}
//                         />
//                         <FeatureCard
//                             icon={<Layers className="h-5 w-5 text-green-600" />}
//                             title="Premium Layouts & Themes"
//                             desc="Select from clean, modern, and pro-level designs."
//                             delay={0.25}
//                         />
//                     </div>

//                     {/* Right Features */}
//                     <div className="absolute max-lg:hidden  right-0 top-1/2 -translate-y-1/2 flex flex-col gap-6">
//                         <FeatureCard
//                             icon={<QrCode className="h-5 w-5 text-purple-600" />}
//                             title="QR Code Sharing"
//                             desc="Share your card instantly with a smart QR code."
//                             delay={0.15}
//                         />
//                         <FeatureCard
//                             icon={<Palette className="h-5 w-5 text-orange-600" />}
//                             title="Pick Your Style"
//                             desc="Choose from sleek, professional themes and layouts."
//                             delay={0.3}
//                         />
//                     </div>

//                     {/* Phones */}
//                     <div className="relative flex h-[360px] sm:h-[480px] lg:h-[600px] w-full items-center justify-center">
//                         <PhoneFrame
//                             img={phones.left}
//                             className="left"
//                             delayMs={120}
//                         />
//                         <PhoneFrame
//                             img={phones.right}
//                             className="right"
//                             delayMs={220}
//                         />
//                         <PhoneFrame
//                             img={phones.center}
//                             emphasis
//                             delayMs={50}
//                         />
//                     </div>
//                 </div>
//             </section>
//         </div>
//     )
// }



// function PhoneFrame({
//     img,
//     className,
//     emphasis = false,
//     delayMs = 0,
// }: {
//     img: PhoneImg
//     className?: string
//     emphasis?: boolean
//     delayMs?: number
// }) {
//     const isLeft = className?.includes("left")
//     const isRight = className?.includes("right")
//     const isMobile = useIsMobile()

//     const offsetX = isMobile ? 53 : 175 // <<< adjust this value to control gap on mobile

//     return (
//         <motion.div
//             className={`pointer-events-none h-[460px] w-[230px] sm:h-[400px] sm:w-[250px] lg:h-[500px] lg:w-[260px] absolute ${className || ""}`}
//             initial={{ opacity: 0, x: 0, y: 0, rotate: 0, scale: 1 }}
//             whileInView={{
//                 opacity: 1,
//                 x: isLeft ? -offsetX : isRight ? offsetX : 0,
//                 y: emphasis ? -35 : 0,
//                 rotate: isLeft ? -6 : isRight ? 6 : 0,
//                 scale: 1,
//                 zIndex: emphasis ? 10 : "auto",
//             }}
//             transition={{
//                 duration: 0.7,
//                 delay: delayMs / 1000,
//                 ease: "easeOut",
//             }}
//             viewport={{ once: true }}
//             style={{ zIndex: emphasis ? 10 : undefined }}
//         >
//             <div className="relative m-[10px] h-[calc(100%-20px)] w-[calc(100%-20px)] overflow-hidden rounded-[32px]">
//                 <Image
//                     src={img.src}
//                     alt={img.alt ?? "App preview"}
//                     height={460}
//                     width={230}
//                     unoptimized
//                     className="h-full w-full object-cover"
//                     priority={emphasis}
//                 />
//             </div>
//         </motion.div>
//     )
// }


// // FEATURE CARD
// function FeatureCard({
//     icon,
//     title,
//     desc,
//     delay = 0,
// }: {
//     icon: React.ReactNode
//     title: string
//     desc: string
//     delay?: number
// }) {
//     const isLeft = title === "Create & Customize" || title === "Premium Layouts & Themes"

//     return (
//         <motion.div
//             className="flex max-w-[250px] items-start gap-3 rounded-xl bg-white/70 p-4 shadow-md backdrop-blur"
//             initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: delay }}
//             viewport={{ once: true }}
//         >
//             <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
//                 {icon}
//             </div>
//             <div>
//                 <h4 className="text-xl font-gotu text-gray-900">{title}</h4>
//                 <p className="mt-1 text-sm text-gray-600">{desc}</p>
//             </div>
//         </motion.div>
//     )
// }



// "use client"

// import { PlayCircle } from 'lucide-react'
// import Image from "next/image"
// import { useEffect, useRef, useState } from "react"
// import { motion } from "framer-motion"

// type PhoneImg = {
//     src: string
//     alt?: string
// }

// type TriplePhoneHeroProps = {
//     title: string
//     highlight?: string
//     subtitle?: string
//     phones?: {
//         center: PhoneImg
//         left: PhoneImg
//         right: PhoneImg
//     }
//     className?: string
// }

// function useIsMobile() {
//     const [isMobile, setIsMobile] = useState(false)

//     useEffect(() => {
//         const checkScreen = () => setIsMobile(window.innerWidth < 768)
//         checkScreen()

//         window.addEventListener("resize", checkScreen)
//         return () => window.removeEventListener("resize", checkScreen)
//     }, [])

//     return isMobile
// }

// const fallbackPhones = {
//     left: { src: "/newmockup/a66aec9c-585f-4237-abc5-da30b81a0598.png", alt: "Left phone" },
//     center: { src: "/newmockup/a939bddf-942a-4914-9df6-df1c5a3601d2.png", alt: "Center phone" },
//     right: { src: "/newmockup/27d940a5-e40c-491b-9f09-5b42b05162d7.png", alt: "Right phone" },
// }

// export default function HeroTech({
//     phones = fallbackPhones,
//     className,
// }: TriplePhoneHeroProps) {
//     const ref = useRef<HTMLDivElement | null>(null)
//     const [active, setActive] = useState(false)

//     useEffect(() => {
//         const el = ref.current
//         if (!el) return

//         const alreadyVisible = el.getBoundingClientRect().top < window.innerHeight
//         if (alreadyVisible) {
//             setActive(true)
//             return
//         }

//         const io = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) {
//                     setActive(true)
//                     io.disconnect()
//                 }
//             },
//             { threshold: 0.1 }
//         )
//         io.observe(el)
//         return () => io.disconnect()
//     }, [])

//     return (


//         <div className="templateContainer">
//             <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
//                 {/* Left column: content */}
//                 <section
//                     ref={ref}
//                     className={`w-full md:w-1/2 relative isolate overflow-hidden pt-20 md:pt-28 lg:pt-32 ${className || ""}`}
//                 >
//                     <motion.h1
//                         className="mx-auto max-w-xl text-left font-gotu text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl"
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         transition={{ duration: 0.6, delay: 0.1 }}
//                         viewport={{ once: true }}
//                     >
//                         Your Digital Business Card
//                         <br className="hidden sm:block" />
//                         Smarter, Faster, Professional
//                     </motion.h1>

//                     <motion.p
//                         className="mt-6 max-w-md text-left text-base leading-relaxed text-gray-600 sm:text-lg"
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         transition={{ duration: 0.6, delay: 0.25 }}
//                         viewport={{ once: true }}
//                     >
//                         Create and share your profile instantly with NFC or WhatsApp.
//                     </motion.p>

//                     <div className="flex flex-wrap justify-start gap-4 mt-6 sm:flex-row">
//                         {/* Create Free Profile Button */}
//                         <a
//                             data-aos="fade-up"
//                             data-aos-delay="100"
//                             href="#"
//                             className="px-6 py-3 rounded-md text-white bg-gradient-to-r from-[#6F00FF] to-[#9929EA] hover:bg-blue-700 transition-colors text-sm font-semibold"
//                         >
//                             Create Free Profile
//                         </a>

//                         {/* Watch Demo Button */}
//                         <button
//                             data-aos="fade-up"
//                             data-aos-delay="100"
//                             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//                             className="flex items-center gap-2 px-6 py-3 rounded-md border border-gray-400 text-gray-700 hover:bg-gray-100 transition-colors text-sm font-semibold"
//                         >
//                             <PlayCircle className="w-5 h-5" />
//                             Watch Demo
//                         </button>
//                     </div>
//                 </section>

//                 {/* Right column: images */}
//                 <div className="relative w-full md:w-1/2 h-[560px] flex items-center justify-center">
//                     {/* Background Rings */}
//                     <div
//                         aria-hidden
//                         className={`pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-1000 ease-out ${active ? "opacity-70 scale-100" : "opacity-0 scale-90"
//                             }`}
//                     >
//                         <div className="absolute h-[900px] w-[900px] rounded-full border border-gray-300/40 animate-pulse" />
//                         <div className="absolute h-[700px] w-[700px] rounded-full border border-gray-300/30 animate-pulse delay-150" />
//                         <div className="absolute h-[500px] w-[500px] rounded-full border border-gray-300/20 animate-pulse delay-300" />
//                         <div className="absolute h-[300px] w-[300px] rounded-full border border-gray-300/10 animate-pulse delay-500" />
//                     </div>

//                     {/* Phones */}
//                     <div className="relative flex h-[360px] sm:h-[480px] lg:h-[600px] w-full items-center justify-center">
//                         <PhoneFrame img={phones.left} className="left" delayMs={120} />
//                         <PhoneFrame img={phones.right} className="right" delayMs={220} />
//                         <PhoneFrame img={phones.center} emphasis delayMs={50} />
//                     </div>
//                 </div>
//             </div>
//         </div>


//     )
// }

// function PhoneFrame({
//     img,
//     className,
//     emphasis = false,
//     delayMs = 0,
// }: {
//     img: PhoneImg
//     className?: string
//     emphasis?: boolean
//     delayMs?: number
// }) {
//     const isLeft = className?.includes("left")
//     const isRight = className?.includes("right")
//     const isMobile = useIsMobile()

//     const offsetX = isMobile ? 53 : 175

//     return (
//         <motion.div
//             className={`pointer-events-none h-[460px] w-[230px] sm:h-[400px] sm:w-[250px] lg:h-[500px] lg:w-[260px] absolute ${className || ""}`}
//             initial={{ opacity: 0, x: 0, y: 0, rotate: 0, scale: 1 }}
//             whileInView={{
//                 opacity: 1,
//                 x: isLeft ? -offsetX : isRight ? offsetX : 0,
//                 y: emphasis ? -35 : 0,
//                 rotate: isLeft ? -6 : isRight ? 6 : 0,
//                 scale: 1,
//                 zIndex: emphasis ? 10 : "auto",
//             }}
//             transition={{
//                 duration: 0.7,
//                 delay: delayMs / 1000,
//                 ease: "easeOut",
//             }}
//             viewport={{ once: true }}
//             style={{ zIndex: emphasis ? 10 : undefined }}
//         >

//             <div className="relative m-[10px] h-[calc(100%-20px)] w-[calc(100%-20px)] overflow-hidden rounded-[32px]">
//                 <Image
//                     src={img.src}
//                     alt={img.alt ?? "App preview"}
//                     height={460}
//                     width={230}
//                     unoptimized
//                     className="h-full w-full object-cover"
//                     priority={emphasis}
//                 />
//             </div>
//         </motion.div>
//     )
// }



//////////////////// all working //////////////

// "use client"

// import { PlayCircle } from 'lucide-react'
// import Image from "next/image"
// import { useEffect, useRef, useState } from "react"
// import { motion } from "framer-motion"

// type PhoneImg = {
//     src: string
//     alt?: string
// }

// type TriplePhoneHeroProps = {
//     title: string
//     highlight?: string
//     subtitle?: string
//     phones?: {
//         center: PhoneImg
//         left: PhoneImg
//         right: PhoneImg
//     }
//     className?: string
// }

// function useIsMobile() {
//     const [isMobile, setIsMobile] = useState(false)

//     useEffect(() => {
//         const checkScreen = () => setIsMobile(window.innerWidth < 768)
//         checkScreen()

//         window.addEventListener("resize", checkScreen)
//         return () => window.removeEventListener("resize", checkScreen)
//     }, [])

//     return isMobile
// }

// const fallbackPhones = {
//     left: { src: "/WebMockup/mockup 1.png", alt: "Left phone" },
//     center: { src: "/WebMockup/mockup 2.png", alt: "Center phone" },
//     right: { src: "/WebMockup/mockup 4.png", alt: "Right phone" },
// }

// export default function HeroTech({
//     phones = fallbackPhones,
//     className,
// }: TriplePhoneHeroProps) {
//     const ref = useRef<HTMLDivElement | null>(null)
//     const [active, setActive] = useState(false)

//     useEffect(() => {
//         const el = ref.current
//         if (!el) return

//         const alreadyVisible = el.getBoundingClientRect().top < window.innerHeight
//         if (alreadyVisible) {
//             setActive(true)
//             return
//         }

//         const io = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) {
//                     setActive(true)
//                     io.disconnect()
//                 }
//             },
//             { threshold: 0.1 }
//         )
//         io.observe(el)
//         return () => io.disconnect()
//     }, [])

//     return (


//         <div className="templateContainer ">
//             <div className="flex pt-20 md:py-12 flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
//                 {/* Left column: content */}
//                 <section
//                     ref={ref}
//                     className={`w-full md:w-1/2 relative isolate overflow-hidden pt-20 md:pt-28 lg:pt-32 ${className || ""}`}
//                 >
//                     <motion.h1
//                         className="mx-auto max-w-xl text-center font-gotu text-4xl leading-tight tracking-tight sm:text-3xl md:text-[40px]"
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         transition={{ duration: 0.6, delay: 0.1 }}
//                         viewport={{ once: true }}
//                     >
//                         Your Digital Business Card
//                         <br className="hidden sm:block" />
//                         Smarter, Faster, Professional
//                     </motion.h1>

//                     <motion.p
//                         className="mt-6 max-w-xl text-center text-base leading-relaxed text-gray-600 sm:text-lg"
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         transition={{ duration: 0.6, delay: 0.25 }}
//                         viewport={{ once: true }}
//                     >
//                         Create and share your profile instantly with NFC or WhatsApp.
//                     </motion.p>

//                     <div className="flex flex-wrap justify-center gap-4 mt-6 sm:flex-row">
//                         {/* Create Free Profile Button */}
//                         <a
//                             data-aos="fade-up"
//                             data-aos-delay="100"
//                             href="#"
//                             className="px-6 py-3 rounded-md text-white bg-gradient-to-r from-[#6F00FF] to-[#9929EA] hover:bg-blue-700 transition-colors text-sm font-semibold"
//                         >
//                             Create Free Profile
//                         </a>

//                         {/* Watch Demo Button */}
//                         <button
//                             data-aos="fade-up"
//                             data-aos-delay="100"
//                             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//                             className="flex items-center gap-2 px-6 py-3 rounded-md border border-gray-400 text-gray-700 hover:bg-gray-100 transition-colors text-sm font-semibold"
//                         >
//                             <PlayCircle className="w-5 h-5" />
//                             Watch Demo
//                         </button>
//                     </div>
//                 </section>

//                 {/* Right column: images */}
//                 <div className="w-full overflow-hidden md:pt-32 md:w-1/2 h-[560px] flex items-center justify-center">
//                     {/* Background Rings */}


//                     {/* Phones */}
//                     <div className="flex h-[360px] sm:h-[480px] lg:h-[600px] w-full items-center justify-center">
//                         <PhoneFrame img={phones.left} className="left" delayMs={120} />
//                         <PhoneFrame img={phones.right} className="right" delayMs={220} />
//                         <PhoneFrame img={phones.center} emphasis delayMs={50} />
//                     </div>
//                 </div>
//             </div>
//         </div>


//     )
// }

// function PhoneFrame({
//     img,
//     className,
//     emphasis = false,
//     delayMs = 0,
// }: {
//     img: PhoneImg
//     className?: string
//     emphasis?: boolean
//     delayMs?: number
// }) {
//     const isLeft = className?.includes("left")
//     const isRight = className?.includes("right")
//     const isMobile = useIsMobile()

//     const offsetX = isMobile ? 53 : 175

//     return (
//         <motion.div
//             className={`pointer-events-none h-[460px] w-[230px] sm:h-[400px] sm:w-[250px] lg:h-[500px] lg:w-[260px] absolute ${className || ""}`}
//             initial={{ opacity: 0, x: 0, y: 0, rotate: 0, scale: 1 }}
//             whileInView={{
//                 opacity: 1,
//                 x: isLeft ? -offsetX : isRight ? offsetX : 0,
//                 y: emphasis ? -15 : 0,
//                 rotate: isLeft ? -6 : isRight ? 6 : 0,
//                 scale: 1,
//                 zIndex: emphasis ? 10 : "auto",
//             }}
//             transition={{
//                 duration: 0.7,
//                 delay: delayMs / 1000,
//                 ease: "easeOut",
//             }}
//             viewport={{ once: true }}
//             style={{ zIndex: emphasis ? 10 : undefined }}
//         >

//             <div className="relative h-[calc(100%-50px)] w-[calc(100%-20px)] overflow-hidden rounded-[32px]">
//                 <Image
//                     src={img.src}
//                     alt={img.alt ?? "App preview"}
//                     height={460}
//                     width={230}
//                     unoptimized
//                     className="h-full w-full object-cover"
//                     priority={emphasis}
//                 />
//             </div>
//         </motion.div>
//     )
// }



// "use client"

// import { PlayCircle } from 'lucide-react'
// import Image from "next/image"
// import { useEffect, useRef, useState } from "react"
// import { motion } from "framer-motion"

// type PhoneImg = {
//     src: string
//     alt?: string
// }

// type TriplePhoneHeroProps = {
//     title?: string
//     highlight?: string
//     subtitle?: string
//     phones?: {
//         center: PhoneImg
//         left: PhoneImg
//         right: PhoneImg
//     }
//     className?: string
// }

// function useIsMobile() {
//     const [isMobile, setIsMobile] = useState(false)

//     useEffect(() => {
//         const checkScreen = () => setIsMobile(window.innerWidth < 768)
//         checkScreen()

//         window.addEventListener("resize", checkScreen)
//         return () => window.removeEventListener("resize", checkScreen)
//     }, [])

//     return isMobile
// }

// const fallbackPhones = {
//     left: { src: "/WebMockup/mockup 1.png", alt: "Left phone" },
//     center: { src: "/WebMockup/mockup 2.png", alt: "Center phone" },
//     right: { src: "/WebMockup/mockup 4.png", alt: "Right phone" },
// }

// export default function HeroTech({
//     phones = fallbackPhones,
//     className,
// }: TriplePhoneHeroProps) {
//     const ref = useRef<HTMLDivElement | null>(null)
//     const [active, setActive] = useState(false)

//     useEffect(() => {
//         const el = ref.current
//         if (!el) return

//         const alreadyVisible = el.getBoundingClientRect().top < window.innerHeight
//         if (alreadyVisible) {
//             setActive(true)
//             return
//         }

//         const io = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) {
//                     setActive(true)
//                     io.disconnect()
//                 }
//             },
//             { threshold: 0.1 }
//         )
//         io.observe(el)
//         return () => io.disconnect()
//     }, [])

//     return (
//         <div className="templateContainer">
//             <div className="flex pt-20 md:py-12 flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
//                 {/* Left column: content */}
//                 <section
//                     ref={ref}
//                     className={`w-full md:w-1/2 isolate overflow-visible pt-20 md:pt-28 lg:pt-32 ${className || ""}`}
//                 >
//                     <motion.h1
//                         className="mx-auto max-w-xl text-center font-gotu text-4xl leading-tight tracking-tight sm:text-3xl md:text-[40px]"
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         transition={{ duration: 0.6, delay: 0.1 }}
//                         viewport={{ once: true }}
//                     >
//                         Your Digital Business Card
//                         <br className="hidden sm:block" />
//                         Smarter, Faster, Professional
//                     </motion.h1>

//                     <motion.p
//                         className="mt-6 max-w-xl text-center text-base leading-relaxed text-gray-600 sm:text-lg"
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         transition={{ duration: 0.6, delay: 0.25 }}
//                         viewport={{ once: true }}
//                     >
//                         Create and share your profile instantly with NFC or WhatsApp.
//                     </motion.p>

//                     <div className="flex flex-wrap justify-center gap-4 mt-6 sm:flex-row">
//                         {/* Create Free Profile Button */}
//                         <a
//                             data-aos="fade-up"
//                             data-aos-delay="100"
//                             href="#"
//                             className="px-6 py-3 rounded-md text-white bg-gradient-to-r from-[#6F00FF] to-[#9929EA] hover:bg-blue-700 transition-colors text-sm font-semibold"
//                         >
//                             Create Free Profile
//                         </a>

//                         {/* Watch Demo Button */}
//                         <button
//                             data-aos="fade-up"
//                             data-aos-delay="100"
//                             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//                             className="flex items-center gap-2 px-6 py-3 rounded-md border border-gray-400 text-gray-700 hover:bg-gray-100 transition-colors text-sm font-semibold"
//                         >
//                             <PlayCircle className="w-5 h-5" />
//                             Watch Demo
//                         </button>
//                     </div>
//                 </section>

//                 {/* Right column: images */}
//                 <div className="w-full md:pt-32 md:w-1/2 h-[560px] flex items-center justify-center">
//                     <div className="relative flex h-[360px] sm:h-[480px] lg:h-[600px] w-full items-center justify-center">
//                         <PhoneFrame img={phones.left} className="left" delayMs={120} />
//                         <PhoneFrame img={phones.right} className="right" delayMs={220} />
//                         <PhoneFrame img={phones.center} emphasis delayMs={50} />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// function PhoneFrame({
//     img,
//     className,
//     emphasis = false,
//     delayMs = 0,
// }: {
//     img: PhoneImg
//     className?: string
//     emphasis?: boolean
//     delayMs?: number
// }) {
//     const isLeft = className?.includes("left")
//     const isRight = className?.includes("right")
//     const isMobile = useIsMobile()

//     const offsetX = isMobile ? 53 : 175

//     return (
//         <motion.div
//             className={`pointer-events-none absolute h-[460px] w-[230px] sm:h-[400px] sm:w-[250px] lg:h-[500px] lg:w-[260px] ${className || ""}`}
//             initial={{ opacity: 0 }}
//             whileInView={{
//                 opacity: 1,
//                 x: isLeft ? -offsetX : isRight ? offsetX : 0,
//                 y: emphasis ? -15 : 0,
//                 rotate: isLeft ? -6 : isRight ? 6 : 0,
//                 scale: 1,
//             }}
//             transition={{
//                 duration: 0.7,
//                 delay: delayMs / 1000,
//                 ease: "easeOut",
//             }}
//             viewport={{ once: true }}
//             style={{ zIndex: emphasis ? 10 : undefined }}
//         >
//             <div className="relative h-[calc(100%-50px)] w-[calc(100%-20px)] overflow-hidden rounded-[32px]">
//                 <Image
//                     src={img.src}
//                     alt={img.alt ?? "App preview"}
//                     height={460}
//                     width={230}
//                     unoptimized
//                     className="h-full w-full object-cover"
//                     priority={emphasis}
//                 />
//             </div>
//         </motion.div>
//     )
// }



// "use client"

// import { PlayCircle } from "lucide-react"
// import Image from "next/image"
// import { useEffect, useRef, useState } from "react"
// import { motion } from "framer-motion"

// type PhoneImg = {
//     src: string
//     alt?: string
// }

// type TriplePhoneHeroProps = {
//     title?: string
//     highlight?: string
//     subtitle?: string
//     phones?: {
//         center: PhoneImg
//         left: PhoneImg
//         right: PhoneImg
//     }
//     className?: string
// }

// function useIsMobile() {
//     const [isMobile, setIsMobile] = useState(false)

//     useEffect(() => {
//         const checkScreen = () => setIsMobile(window.innerWidth < 768)
//         checkScreen()

//         window.addEventListener("resize", checkScreen)
//         return () => window.removeEventListener("resize", checkScreen)
//     }, [])

//     return isMobile
// }

// const fallbackPhones = {
//     left: { src: "/WebMockup/mockup 1.png", alt: "Left phone" },
//     center: { src: "/WebMockup/mockup 2.png", alt: "Center phone" },
//     right: { src: "/WebMockup/mockup 4.png", alt: "Right phone" },
// }

// export default function HeroTech({
//     phones = fallbackPhones,
//     className,
// }: TriplePhoneHeroProps) {
//     const ref = useRef<HTMLDivElement | null>(null)
//     const [active, setActive] = useState(false)

//     useEffect(() => {
//         const el = ref.current
//         if (!el) return

//         const alreadyVisible = el.getBoundingClientRect().top < window.innerHeight
//         if (alreadyVisible) {
//             setActive(true)
//             return
//         }

//         const io = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) {
//                     setActive(true)
//                     io.disconnect()
//                 }
//             },
//             { threshold: 0.1 }
//         )
//         io.observe(el)
//         return () => io.disconnect()
//     }, [])

//     return (
//         <div className="templateContainer max-w-screen-xl mx-auto px-4">
//             <div className="flex pt-20 md:py-12 flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
//                 {/* Left column: content */}
//                 <section
//                     ref={ref}
//                     className={`w-full md:w-1/2 isolate overflow-visible pt-20 md:pt-28 lg:pt-20 ${className || ""}`}
//                 >
//                     <motion.h1
//                         className="mx-auto max-w-xl text-center font-gotu text-3xl sm:text-4xl md:text-[40px] leading-tight tracking-tight"
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         transition={{ duration: 0.6, delay: 0.1 }}
//                         viewport={{ once: true }}
//                     >
//                         Your Digital Business Card
//                         <br className="hidden sm:block" />
//                         Smarter, Faster, Professional
//                     </motion.h1>

//                     <motion.p
//                         className="mt-6 max-w-xl text-center text-base leading-relaxed text-gray-600 sm:text-lg"
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         transition={{ duration: 0.6, delay: 0.25 }}
//                         viewport={{ once: true }}
//                     >
//                         Create and share your profile instantly with NFC or WhatsApp.
//                     </motion.p>

//                     <div className="flex flex-wrap justify-center gap-4 mt-6 sm:flex-row">
//                         {/* Create Free Profile Button */}
//                         <a
//                             data-aos="fade-up"
//                             data-aos-delay="100"
//                             href="#"
//                             className="w-full sm:w-auto px-6 py-3 rounded-md text-white bg-gradient-to-r from-[#6F00FF] to-[#9929EA] hover:bg-blue-700 transition-colors text-sm font-semibold text-center"
//                         >
//                             Create Free Profile
//                         </a>

//                         {/* Watch Demo Button */}
//                         <button
//                             data-aos="fade-up"
//                             data-aos-delay="100"
//                             onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//                             className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-md border border-gray-400 text-gray-700 hover:bg-gray-100 transition-colors text-sm font-semibold"
//                         >
//                             <PlayCircle className="w-5 h-5" />
//                             Watch Demo
//                         </button>
//                     </div>
//                 </section>

//                 {/* Right column: images */}
//                 <div className="w-full md:pt-32 md:w-1/2 h-[360px] sm:h-[440px] md:h-[520px] lg:h-[600px] flex items-center justify-center">
//                     <div className="relative flex w-full h-full items-center justify-center">
//                         <PhoneFrame img={phones.left} className="left" delayMs={120} />
//                         <PhoneFrame img={phones.right} className="right" delayMs={220} />
//                         <PhoneFrame img={phones.center} emphasis delayMs={50} />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// function PhoneFrame({
//     img,
//     className,
//     emphasis = false,
//     delayMs = 0,
// }: {
//     img: PhoneImg
//     className?: string
//     emphasis?: boolean
//     delayMs?: number
// }) {
//     const isLeft = className?.includes("left")
//     const isRight = className?.includes("right")
//     const isMobile = useIsMobile()

//     const offsetX = isMobile ? 0 : 175

//     const positionStyles = isMobile
//         ? { x: 0, rotate: 0, y: emphasis ? -10 : 0 }
//         : {
//             x: isLeft ? -offsetX : isRight ? offsetX : 0,
//             y: emphasis ? -15 : 0,
//             rotate: isLeft ? -6 : isRight ? 6 : 0,
//         }

//     return (
//         <motion.div
//             className={`pointer-events-none absolute ${className || ""
//                 } h-[320px] w-[160px] sm:h-[400px] sm:w-[200px] md:h-[460px] md:w-[230px] lg:h-[500px] lg:w-[260px]`}
//             initial={{ opacity: 0 }}
//             whileInView={{
//                 opacity: 1,
//                 ...positionStyles,
//                 scale: 1,
//             }}
//             transition={{
//                 duration: 0.7,
//                 delay: delayMs / 1000,
//                 ease: "easeOut",
//             }}
//             viewport={{ once: true }}
//             style={{ zIndex: emphasis ? 10 : undefined }}
//         >
//             <div className="relative h-[calc(100%-50px)] w-[calc(100%-20px)] overflow-hidden rounded-[32px]">
//                 <Image
//                     src={img.src}
//                     alt={img.alt ?? "App preview"}
//                     height={500}
//                     width={260}
//                     unoptimized
//                     className="h-full w-full object-cover"
//                     priority={emphasis}
//                 />
//             </div>
//         </motion.div>
//     )
// }


// "use client"

// import { PlayCircle } from "lucide-react"
// import Image from "next/image"
// import { useEffect, useRef, useState } from "react"
// import { motion } from "framer-motion"

// type PhoneImg = {
//     src: string
//     alt?: string
// }

// type TriplePhoneHeroProps = {
//     title?: string
//     highlight?: string
//     subtitle?: string
//     phones?: {
//         center: PhoneImg
//         left: PhoneImg
//         right: PhoneImg
//     }
//     className?: string
// }

// function useIsMobile() {
//     const [isMobile, setIsMobile] = useState(false)

//     useEffect(() => {
//         const checkScreen = () => setIsMobile(window.innerWidth < 768)
//         checkScreen()

//         window.addEventListener("resize", checkScreen)
//         return () => window.removeEventListener("resize", checkScreen)
//     }, [])

//     return isMobile
// }

// const fallbackPhones = {
//     left: { src: "/WebMockup/mockup 1.png", alt: "Left phone" },
//     center: { src: "/WebMockup/mockup 5.png", alt: "Center phone" },
//     right: { src: "/WebMockup/mockup 4.png", alt: "Right phone" },
// }

// export default function HeroTech({
//     phones = fallbackPhones,
//     className,
// }: TriplePhoneHeroProps) {
//     const ref = useRef<HTMLDivElement | null>(null)
//     const [active, setActive] = useState(false)

//     useEffect(() => {
//         const el = ref.current
//         if (!el) return

//         const alreadyVisible = el.getBoundingClientRect().top < window.innerHeight
//         if (alreadyVisible) {
//             setActive(true)
//             return
//         }

//         const io = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) {
//                     setActive(true)
//                     io.disconnect()
//                 }
//             },
//             { threshold: 0.1 }
//         )
//         io.observe(el)
//         return () => io.disconnect()
//     }, [])

//     return (
//         <div className="templateContainer max-w-screen-xl mx-auto px-4">
//             <div className="flex pt-20 md:py-12 flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
//                 {/* Left column: content */}
//                 <section
//                     ref={ref}
//                     className={`w-full md:w-1/2 isolate overflow-visible pt-20 md:pt-28 lg:pt-20 ${className || ""}`}
//                 >
//                     <motion.h1
//                         className="mx-auto max-w-xl text-center font-gotu text-3xl sm:text-4xl md:text-[40px] leading-tight tracking-tight"
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         transition={{ duration: 0.6, delay: 0.1 }}
//                         viewport={{ once: true }}
//                     >
//                         Your Digital Business Card
//                         <br className="hidden sm:block" />
//                         Smarter, Faster, Professional
//                     </motion.h1>

//                     <motion.p
//                         className="mt-6 max-w-xl text-center text-base leading-relaxed text-gray-600 sm:text-lg"
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         transition={{ duration: 0.6, delay: 0.25 }}
//                         viewport={{ once: true }}
//                     >
//                         Create and share your profile instantly with NFC or WhatsApp.
//                     </motion.p>

//                     {/* <div className="flex flex-wrap justify-center gap-4 mt-6 sm:flex-row">

//                         <a
//                             data-aos="fade-up"
//                             data-aos-delay="100"
//                             href="#contact"
//                             className="w-full sm:w-auto px-6 py-3 rounded-md text-white bg-gradient-to-r from-[#6F00FF] to-[#9929EA] hover:bg-blue-700 transition-colors text-sm font-semibold text-center"
//                         >
//                             Create Free Profile
//                         </a>


//                         <a
//                             href="#video"

//                             data-aos="fade-up"
//                             data-aos-delay="100"
//                             className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-md border border-gray-400 text-gray-700 hover:bg-gray-100 transition-colors text-sm font-semibold"
//                         >
//                             <PlayCircle className="w-5 h-5" />
//                             Watch Demo
//                         </a>

//                     </div> */}
//                     <div className="flex flex-wrap justify-center gap-4 mt-6 sm:flex-row">
//                         {/* Create Free Profile Button */}
//                         <a
//                             data-aos="fade-up"
//                             data-aos-delay="100"
//                             href="#contact"
//                             className="px-6 py-3 rounded-md text-white bg-gradient-to-r from-[#6F00FF] to-[#9929EA] hover:bg-blue-700 transition-colors text-sm font-semibold text-center"
//                         >
//                             Create Free Profile
//                         </a>

//                         <a
//                             href="#video"
//                             data-aos="fade-up"
//                             data-aos-delay="100"
//                             className="flex items-center justify-center gap-2 px-6 py-3 rounded-md border border-gray-400 text-gray-700 hover:bg-gray-100 transition-colors text-sm font-semibold"
//                         >
//                             <PlayCircle className="w-5 h-5" />
//                             Watch Demo
//                         </a>
//                     </div>

//                 </section>

//                 {/* Right column: images */}
//                 <div className="w-full md:pt-32 md:w-1/2 h-[360px] sm:h-[440px] md:h-[520px] lg:h-[600px] flex items-center justify-center">
//                     <div className="relative flex w-full h-full items-center justify-center">
//                         <PhoneFrame img={phones.left} className="left" delayMs={120} />
//                         <PhoneFrame img={phones.right} className="right" delayMs={220} />
//                         <PhoneFrame img={phones.center} emphasis delayMs={50} />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// function PhoneFrame({
//     img,
//     className,
//     emphasis = false,
//     delayMs = 0,
// }: {
//     img: PhoneImg
//     className?: string
//     emphasis?: boolean
//     delayMs?: number
// }) {
//     const isLeft = className?.includes("left")
//     const isRight = className?.includes("right")
//     const isMobile = useIsMobile()

//     // Updated offsetX for mobile to spread phones horizontally
//     const offsetX = isMobile ? 80 : 175

//     const positionStyles = isMobile
//         ? {
//             x: isLeft ? -offsetX : isRight ? offsetX : 0,
//             y: emphasis ? -10 : 0,
//             rotate: 0, // no rotation on mobile for cleaner look
//         }
//         : {
//             x: isLeft ? -offsetX : isRight ? offsetX : 0,
//             y: emphasis ? -15 : 0,
//             rotate: isLeft ? -6 : isRight ? 6 : 0,
//         }

//     return (
//         <motion.div
//             className={`pointer-events-none absolute ${className || ""}
//       h-[240px] w-[120px] 
//       sm:h-[320px] sm:w-[160px] 
//       md:h-[380px] md:w-[190px] 
//       lg:h-[500px] lg:w-[260px]`}
//             initial={{ opacity: 0 }}
//             whileInView={{
//                 opacity: 1,
//                 ...positionStyles,
//                 scale: 1,
//             }}
//             transition={{
//                 duration: 0.7,
//                 delay: delayMs / 1000,
//                 ease: "easeOut",
//             }}
//             viewport={{ once: true }}
//             style={{ zIndex: emphasis ? 10 : undefined }}
//         >
//             <div className="relative h-[calc(100%-50px)] w-[calc(100%-20px)] overflow-hidden rounded-[32px]">
//                 <Image
//                     src={img.src}
//                     alt={img.alt ?? "App preview"}
//                     height={500}
//                     width={260}
//                     unoptimized
//                     className="h-full w-full object-contain"
//                     priority={emphasis}
//                 />
//             </div>
//         </motion.div>
//     )
// }






// "use client"

// import { PlayCircle } from "lucide-react"
// import Image from "next/image"
// import { useEffect, useRef, useState } from "react"
// import { motion } from "framer-motion"

// type PhoneImg = {
//     src: string
//     alt?: string
// }

// type TriplePhoneHeroProps = {
//     title?: string
//     highlight?: string
//     subtitle?: string
//     phones?: {
//         center: PhoneImg
//         left: PhoneImg
//         right: PhoneImg
//     }
//     className?: string
// }

// function useIsMobile() {
//     const [isMobile, setIsMobile] = useState(false)

//     useEffect(() => {
//         const checkScreen = () => setIsMobile(window.innerWidth < 768)
//         checkScreen()

//         window.addEventListener("resize", checkScreen)
//         return () => window.removeEventListener("resize", checkScreen)
//     }, [])

//     return isMobile
// }

// const fallbackPhones = {
//     left: { src: "/WebMockup/mockup 1.png", alt: "Left phone" },
//     center: { src: "/WebMockup/mockup 5.png", alt: "Center phone" },
//     right: { src: "/WebMockup/mockup 4.png", alt: "Right phone" },
// }

// export default function HeroTech({
//     phones = fallbackPhones,
//     className,
// }: TriplePhoneHeroProps) {
//     const ref = useRef<HTMLDivElement | null>(null)
//     const [active, setActive] = useState(false)

//     useEffect(() => {
//         const el = ref.current
//         if (!el) return

//         const alreadyVisible = el.getBoundingClientRect().top < window.innerHeight
//         if (alreadyVisible) {
//             setActive(true)
//             return
//         }

//         const io = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) {
//                     setActive(true)
//                     io.disconnect()
//                 }
//             },
//             { threshold: 0.1 }
//         )
//         io.observe(el)
//         return () => io.disconnect()
//     }, [])

//     return (
//         <div className="templateContainer max-w-screen-xl mx-auto px-4">
//             <div className="flex pt-20 md:py-12 flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
//                 {/* Left column: content */}
//                 <section
//                     ref={ref}
//                     className={`w-full md:w-1/2 isolate overflow-visible pt-20 md:pt-28 lg:pt-20 ${className || ""}`}
//                 >
//                     <motion.h1
//                         className="mx-auto max-w-xl text-center font-gotu text-3xl sm:text-4xl md:text-[40px] leading-tight tracking-tight"
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         transition={{ duration: 0.6, delay: 0.1 }}
//                         viewport={{ once: true }}
//                     >
//                         Your Digital Business Card
//                         <br className="hidden sm:block" />
//                         Smarter, Faster, Professional
//                     </motion.h1>

//                     <motion.p
//                         className="mt-6 max-w-xl text-center text-base leading-relaxed text-gray-600 sm:text-lg"
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         transition={{ duration: 0.6, delay: 0.25 }}
//                         viewport={{ once: true }}
//                     >
//                         Create and share your profile instantly with NFC or WhatsApp.
//                     </motion.p>




//                     <div className="flex flex-wrap justify-center gap-4 mt-6 sm:flex-row">
//                         {/* Create Free Profile Button */}
//                         <a
//                             data-aos="fade-up"
//                             data-aos-delay="100"
//                             href="#contact"
//                             className="px-6 py-3 rounded-md text-white bg-gradient-to-r from-[#6F00FF] to-[#9929EA] hover:bg-blue-700 transition-colors text-sm font-semibold text-center"
//                         >
//                             Create Free Profile
//                         </a>

//                         <a
//                             href="#video"
//                             data-aos="fade-up"
//                             data-aos-delay="100"
//                             className="flex items-center justify-center gap-2 px-6 py-3 rounded-md border border-gray-400 text-gray-700 hover:bg-gray-100 transition-colors text-sm font-semibold"
//                         >
//                             <PlayCircle className="w-5 h-5" />
//                             Watch Demo
//                         </a>
//                     </div>

//                 </section>

//                 {/* Right column: images */}
//                 <div className="w-full md:pt-32 md:w-1/2 h-[360px] sm:h-[440px] md:h-[320px] lg:h-[600px] flex items-center justify-center">
//                     <div className="relative flex w-full h-full items-center justify-center">
//                         <PhoneFrame img={phones.left} className="left" delayMs={120} />
//                         <PhoneFrame img={phones.right} className="right" delayMs={220} />
//                         <PhoneFrame img={phones.center} emphasis delayMs={50} />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// function PhoneFrame({
//     img,
//     className,
//     emphasis = false,
//     delayMs = 0,
// }: {
//     img: PhoneImg
//     className?: string
//     emphasis?: boolean
//     delayMs?: number
// }) {
//     const isLeft = className?.includes("left")
//     const isRight = className?.includes("right")
//     const isMobile = useIsMobile()

//     // Updated offsetX for mobile to spread phones horizontally
//     const offsetX = isMobile ? 80 : 175

//     const positionStyles = isMobile
//         ? {
//             x: isLeft ? -offsetX : isRight ? offsetX : 0,
//             y: emphasis ? -10 : 0,
//             rotate: 0, // no rotation on mobile for cleaner look
//         }
//         : {
//             x: isLeft ? -offsetX : isRight ? offsetX : 0,
//             y: emphasis ? -15 : 0,
//             rotate: isLeft ? -6 : isRight ? 6 : 0,
//         }

//     return (
//         <motion.div
//             className={`pointer-events-none absolute ${className || ""}
//       h-[240px] w-[120px] 
//       sm:h-[320px] sm:w-[160px] 
//       md:h-[380px] md:w-[190px] 
//       lg:h-[500px] lg:w-[260px]`}
//             initial={{ opacity: 0 }}
//             whileInView={{
//                 opacity: 1,
//                 ...positionStyles,
//                 scale: 1,
//             }}
//             transition={{
//                 duration: 0.7,
//                 delay: delayMs / 1000,
//                 ease: "easeOut",
//             }}
//             viewport={{ once: true }}
//             style={{ zIndex: emphasis ? 10 : undefined }}
//         >
//             <div className="relative  overflow-hidden rounded-[32px]">
//                 <Image
//                     src={img.src}
//                     alt={img.alt ?? "App preview"}
//                     height={500}
//                     width={260}
//                     unoptimized
//                     className="h-full w-full object-contain"
//                     priority={emphasis}
//                 />
//             </div>
//         </motion.div>
//     )
// }

///////////////////////////////// wor working ////////

// "use client"

// import { PlayCircle } from "lucide-react"
// import Image from "next/image"
// import { useEffect, useRef, useState } from "react"
// import { motion } from "framer-motion"

// type PhoneImg = {
//     src: string
//     alt?: string
// }

// type TriplePhoneHeroProps = {
//     title?: string
//     highlight?: string
//     subtitle?: string
//     phones?: {
//         center: PhoneImg
//         left: PhoneImg
//         right: PhoneImg
//     }
//     className?: string
// }

// function useIsMobile() {
//     const [isMobile, setIsMobile] = useState(false)

//     useEffect(() => {
//         const checkScreen = () => setIsMobile(window.innerWidth < 768)
//         checkScreen()

//         window.addEventListener("resize", checkScreen)
//         return () => window.removeEventListener("resize", checkScreen)
//     }, [])

//     return isMobile
// }

// const fallbackPhones = {
//     left: { src: "/WebMockup/mockup 1.png", alt: "Left phone" },
//     center: { src: "/WebMockup/mockup 5.png", alt: "Center phone" },
//     right: { src: "/WebMockup/mockup 4.png", alt: "Right phone" },
// }

// export default function HeroTech({
//     phones = fallbackPhones,
//     className,
// }: TriplePhoneHeroProps) {
//     const ref = useRef<HTMLDivElement | null>(null)
//     const [active, setActive] = useState(false)

//     useEffect(() => {
//         const el = ref.current
//         if (!el) return

//         const alreadyVisible = el.getBoundingClientRect().top < window.innerHeight
//         if (alreadyVisible) {
//             setActive(true)
//             return
//         }

//         const io = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) {
//                     setActive(true)
//                     io.disconnect()
//                 }
//             },
//             { threshold: 0.1 }
//         )
//         io.observe(el)
//         return () => io.disconnect()
//     }, [])

//     return (
//         <div className="templateContainer">
//             <div className="flex  pt-28 md:py-12 flex-col lg:flex-row items-center justify-between gap-12 md:gap-20">
//                 {/* Left column: content */}


//                 <section
//                     ref={ref}
//                     className={`w-full md:w-1/2 isolate overflow-visible pt-12 sm:pt-16 md:pt-18 lg:pt-0 ${className || ""}`}
//                 >
//                     <motion.h1
//                         className="mx-auto max-w-xl text-center font-gotu text-3xl sm:text-3xl md:text-3xl lg:text-[40px] leading-snug sm:leading-tight md:leading-tight tracking-tight"
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         transition={{ duration: 0.6, delay: 0.1 }}
//                         viewport={{ once: true }}
//                     >
//                         Your Digital Business Card
//                         <br className="hidden sm:block" />
//                         Smarter, Faster, Professional
//                     </motion.h1>

//                     <motion.p
//                         className="mt-4 sm:mt-6 max-w-xl mx-auto text-center text-sm sm:text-base md:text-md leading-relaxed text-gray-600"
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         transition={{ duration: 0.6, delay: 0.25 }}
//                         viewport={{ once: true }}
//                     >
//                         Create and share your profile instantly with NFC or WhatsApp.
//                     </motion.p>

//                     <div className="flex flex-wrap justify-center gap-3 mt-4 sm:mt-6 sm:flex-row">

//                         <a
//                             data-aos="fade-up"
//                             data-aos-delay="100"
//                             href="#contact"
//                             className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-md text-white bg-gradient-to-r from-[#9112BC] to-[#9929EA] hover:bg-purple-700 transition-colors text-xs sm:text-sm font-semibold text-center hover:shadow-[0_0_6px_1.5px_rgba(153,41,234,0.7)]"
//                         >
//                             Create Free Profile
//                         </a>



//                         <a
//                             href="#video"
//                             data-aos="fade-up"
//                             data-aos-delay="100"
//                             className="flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-md border border-gray-400 text-gray-700 hover:bg-gray-100 transition-colors text-xs sm:text-sm font-semibold"
//                         >
//                             <PlayCircle className="w-4 h-4 sm:w-5 sm:h-5" />
//                             Watch Demo
//                         </a>
//                     </div>
//                 </section>


//                 {/* Right column: images */}
//                 <div className="w-full md:w-1/2 h-[360px] sm:h-[440px] md:h-[420px] lg:h-[600px] flex items-center justify-center overflow-visible">
//                     <div className="relative flex w-full max-w-[900px] h-full items-center justify-center">
//                         <PhoneFrame img={phones.left} className="left" delayMs={120} />
//                         <PhoneFrame img={phones.right} className="right" delayMs={220} />
//                         <PhoneFrame img={phones.center} emphasis delayMs={50} />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// function PhoneFrame({
//     img,
//     className,
//     emphasis = false,
//     delayMs = 0,
// }: {
//     img: PhoneImg
//     className?: string
//     emphasis?: boolean
//     delayMs?: number
// }) {
//     const isLeft = className?.includes("left")
//     const isRight = className?.includes("right")
//     const isMobile = useIsMobile()

//     // Position styles (keep as-is)
//     const offsetX = isMobile ? 60 : 150

//     const positionStyles = isMobile
//         ? {
//             x: isLeft ? -offsetX : isRight ? offsetX : 0,
//             y: emphasis ? -10 : 0,
//             rotate: 0,
//         }
//         : {
//             x: isLeft ? -offsetX : isRight ? offsetX : 0,
//             y: emphasis ? -15 : 0,
//             rotate: isLeft ? -6 : isRight ? 6 : 0,
//         }

//     return (
//         <motion.div
//             className={`pointer-events-none absolute ${className || ""}`}
//             initial={{ opacity: 0 }}
//             whileInView={{
//                 opacity: 1,
//                 ...positionStyles,
//                 scale: 1,
//             }}
//             transition={{
//                 duration: 0.7,
//                 delay: delayMs / 1000,
//                 ease: "easeOut",
//             }}
//             viewport={{ once: true }}
//             style={{
//                 zIndex: emphasis ? 10 : undefined,
//             }}
//         >
//             {/* Container with responsive sizes */}
//             <div className="relative overflow-hidden rounded-[32px] 
//                             h-[280px] w-[140px] 
//                             sm:h-[320px] sm:w-[160px] 
//                             md:h-[400px] md:w-[200px] 
//                             lg:h-[420px] lg:w-[280px]">
//                 <Image
//                     src={img.src}
//                     alt={img.alt ?? "App preview"}
//                     height={1200}
//                     width={1200}
//                     className="h-full w-full object-contain"
//                     priority={emphasis}
//                 />
//             </div>
//         </motion.div>
//     )
// }

/////////////// all working new /////////////

// "use client"

// import { PlayCircle } from "lucide-react"
// import Image from "next/image"
// import { useEffect, useRef, useState } from "react"
// import { motion } from "framer-motion"

// type PhoneImg = {
//     src: string
//     alt?: string
// }

// type TriplePhoneHeroProps = {
//     title?: string
//     highlight?: string
//     subtitle?: string
//     phones?: {
//         center: PhoneImg
//         left: PhoneImg
//         right: PhoneImg
//     }
//     className?: string
// }


// function useIsMobile() {
//     const [isMobile, setIsMobile] = useState(false)

//     useEffect(() => {
//         const checkScreen = () => setIsMobile(window.innerWidth < 768)
//         checkScreen()

//         window.addEventListener("resize", checkScreen)
//         return () => window.removeEventListener("resize", checkScreen)
//     }, [])

//     return isMobile
// }

// const fallbackPhones = {
//     left: { src: "/WebMockup/mockup 4.png", alt: "Left phone" },
//     center: { src: "/WebMockup/mockup 2.png", alt: "Center phone" },
//     right: { src: "/WebMockup/mockup 1.png", alt: "Right phone" },
// }

// export default function HeroTech({
//     phones = fallbackPhones,
//     className,
// }: TriplePhoneHeroProps) {
//     const ref = useRef<HTMLDivElement | null>(null)
//     // const [active, setActive] = useState(false)
//     const [showModal, setShowModal] = useState(false) // ✅ modal state

//     useEffect(() => {
//         const el = ref.current
//         if (!el) return

//         const alreadyVisible = el.getBoundingClientRect().top < window.innerHeight
//         if (alreadyVisible) {
//             // setActive(true)
//             return
//         }

//         const io = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) {
//                     // setActive(true)
//                     io.disconnect()
//                 }
//             },
//             { threshold: 0.1 }
//         )
//         io.observe(el)
//         return () => io.disconnect()
//     }, [])

//     useEffect(() => {
//         if (showModal) {
//             document.body.classList.add("overflow-hidden")
//         } else {
//             document.body.classList.remove("overflow-hidden")
//         }

//         // Clean up when component unmounts
//         return () => {
//             document.body.classList.remove("overflow-hidden")
//         }
//     }, [showModal])


//     return (
//         <div className="templateContainer">
//             <div className="flex  pt-28 md:py-12 flex-col lg:flex-row items-center justify-between gap-12 md:gap-20">
//                 {/* Left column: content */}

//                 <section
//                     ref={ref}
//                     className={`w-full md:w-1/2 isolate overflow-visible pt-12 sm:pt-16 md:pt-18 lg:pt-0 ${className || ""}`}
//                 >
//                     <motion.h1
//                         className="mx-auto max-w-xl text-center font-gotu text-3xl sm:text-3xl md:text-3xl lg:text-[40px] leading-snug sm:leading-tight md:leading-tight tracking-tight"
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         transition={{ duration: 0.6, delay: 0.1 }}
//                         viewport={{ once: true }}
//                     >
//                         Your Digital Business Card
//                         <br className="hidden sm:block" />
//                         Smarter, Faster, Professional
//                     </motion.h1>

//                     <motion.p
//                         className="mt-4 sm:mt-6 max-w-xl mx-auto text-center text-sm sm:text-base md:text-md leading-relaxed text-gray-600"
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         transition={{ duration: 0.6, delay: 0.25 }}
//                         viewport={{ once: true }}
//                     >
//                         Create and share your profile instantly with NFC or WhatsApp.
//                     </motion.p>

//                     <div className="flex flex-wrap justify-center gap-3 mt-4 sm:mt-6 sm:flex-row">
//                         <a
//                             data-aos="fade-up"
//                             data-aos-delay="100"
//                             href="https://backend.profilexpert.in/download-app"
//                             className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-md text-white bg-gradient-to-r from-[#9112BC] to-[#9929EA] hover:bg-purple-700 transition-colors text-xs sm:text-sm font-semibold text-center hover:shadow-[0_0_6px_1.5px_rgba(153,41,234,0.7)]"
//                         >
//                             Create Free Profile
//                         </a>

//                         <button
//                             data-aos="fade-up"
//                             data-aos-delay="100"
//                             onClick={() => setShowModal(true)}
//                             className="flex items-center cursor-pointer justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-md border border-gray-400 text-gray-700 hover:bg-gray-100 transition-colors text-xs sm:text-sm font-semibold"
//                         >
//                             <PlayCircle className="w-4 h-4 sm:w-5 sm:h-5" />
//                             Watch Demo
//                         </button>
//                     </div>
//                 </section>

//                 {/* Right column: images */}
//                 <div className="w-full md:w-1/2 h-[360px] sm:h-[440px] md:h-[420px] lg:h-[600px] flex items-center justify-center overflow-visible">
//                     <div className="relative flex w-full max-w-[900px] h-full items-center justify-center">
//                         <PhoneFrame img={phones.left} className="left" delayMs={120} />
//                         <PhoneFrame img={phones.right} className="right" delayMs={220} />
//                         <PhoneFrame img={phones.center} emphasis delayMs={50} />
//                     </div>
//                 </div>
//             </div>

//             {/* ✅ Modal for Video */}
//             {showModal && (
//                 <div
//                     className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4"
//                     onClick={() => setShowModal(false)} // ✅ Click outside closes modal
//                 >
//                     <div
//                         className="bg-white rounded-lg overflow-hidden shadow-xl max-w-2xl w-full relative"
//                         onClick={(e) => e.stopPropagation()} // ✅ Prevent closing when clicking inside modal
//                     >
//                         {/* Close Button */}
//                         <button
//                             className="absolute top-3 right-3 text-purple-600 cursor-pointer hover:text-black text-3xl font-bold z-10"
//                             onClick={() => setShowModal(false)}
//                         >
//                             &times;
//                         </button>

//                         {/* Video */}

//                         <div className="w-full aspect-video sm:aspect-video sm:h-auto h-[400px]">

//                             <iframe
//                                 className="w-full h-full"
//                                 src="https://www.youtube.com/embed/6wJsp3ISzgo?autoplay=1"
//                                 title="Demo Video"
//                                 frameBorder="0"
//                                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                                 allowFullScreen
//                             ></iframe>

//                         </div>

//                     </div>
//                 </div>
//             )}

//         </div>
//     )
// }

// function PhoneFrame({
//     img,
//     className,
//     emphasis = false,
//     delayMs = 0,
// }: {
//     img: PhoneImg
//     className?: string
//     emphasis?: boolean
//     delayMs?: number
// }) {
//     const isLeft = className?.includes("left")
//     const isRight = className?.includes("right")
//     const isMobile = useIsMobile()

//     const offsetX = isMobile ? 60 : 150

//     const positionStyles = isMobile
//         ? {
//             x: isLeft ? -offsetX : isRight ? offsetX : 0,
//             y: emphasis ? -10 : 0,
//             rotate: 0,
//         }
//         : {
//             x: isLeft ? -offsetX : isRight ? offsetX : 0,
//             y: emphasis ? -15 : 0,
//             rotate: isLeft ? -6 : isRight ? 6 : 0,
//         }

//     return (
//         <motion.div
//             className={`pointer-events-none absolute ${className || ""}`}
//             initial={{ opacity: 0 }}
//             whileInView={{
//                 opacity: 1,
//                 ...positionStyles,
//                 scale: 1,
//             }}
//             transition={{
//                 duration: 0.7,
//                 delay: delayMs / 1000,
//                 ease: "easeOut",
//             }}
//             viewport={{ once: true }}
//             style={{
//                 zIndex: emphasis ? 10 : undefined,
//             }}
//         >
//             <div className="relative overflow-hidden rounded-[32px] 
//                             h-[280px] w-[140px] 
//                             sm:h-[320px] sm:w-[160px] 
//                             md:h-[400px] md:w-[200px] 
//                             lg:h-[420px] lg:w-[280px]">
//                 <Image
//                     src={img.src}
//                     alt={img.alt ?? "App preview"}
//                     height={1200}
//                     width={1200}
//                     className="h-full w-full object-contain"
//                     priority={emphasis}
//                 />
//             </div>
//         </motion.div>
//     )
// }





///////////////////////// alll working ........./////////////////

// "use client"

// import { PlayCircle } from "lucide-react"
// import Image from "next/image"
// import { useEffect, useRef, useState } from "react"
// import { motion } from "framer-motion"

// type PhoneImg = {
//     src: string
//     alt?: string
// }

// type TriplePhoneHeroProps = {
//     title?: string
//     highlight?: string
//     subtitle?: string
//     phones?: {
//         center: PhoneImg
//         left: PhoneImg
//         right: PhoneImg
//     }
//     className?: string
// }


// function useIsMobile() {
//     const [isMobile, setIsMobile] = useState(false)

//     useEffect(() => {
//         const checkScreen = () => setIsMobile(window.innerWidth < 768)
//         checkScreen()

//         window.addEventListener("resize", checkScreen)
//         return () => window.removeEventListener("resize", checkScreen)
//     }, [])

//     return isMobile
// }

// const fallbackPhones = {
//     left: { src: "/WebMockup/mockup 4.png", alt: "Left phone" },
//     center: { src: "/WebMockup/mockup-32.png", alt: "Center phone" },
//     right: { src: "/WebMockup/mockup 1.png", alt: "Right phone" },
// }

// export default function HeroTech({
//     phones = fallbackPhones,
//     className,
// }: TriplePhoneHeroProps) {
//     const ref = useRef<HTMLDivElement | null>(null)
//     // const [active, setActive] = useState(false)
//     const [showModal, setShowModal] = useState(false) // ✅ modal state

//     useEffect(() => {
//         const el = ref.current
//         if (!el) return

//         const alreadyVisible = el.getBoundingClientRect().top < window.innerHeight
//         if (alreadyVisible) {
//             // setActive(true)
//             return
//         }

//         const io = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) {
//                     // setActive(true)
//                     io.disconnect()
//                 }
//             },
//             { threshold: 0.1 }
//         )
//         io.observe(el)
//         return () => io.disconnect()
//     }, [])

//     useEffect(() => {
//         if (showModal) {
//             document.body.classList.add("overflow-hidden")
//         } else {
//             document.body.classList.remove("overflow-hidden")
//         }

//         // Clean up when component unmounts
//         return () => {
//             document.body.classList.remove("overflow-hidden")
//         }
//     }, [showModal])


//     return (
//         <div className="templateContainer">
//             <div className="flex  pt-28 md:py-12 flex-col lg:flex-row items-center justify-between gap-12 md:gap-20">
//                 {/* Left column: content */}

//                 <section
//                     ref={ref}
//                     className={`w-full md:w-1/2 isolate overflow-visible pt-12 sm:pt-16 md:pt-18 lg:pt-0 ${className || ""}`}
//                 >
//                     <motion.h1
//                         className="mx-auto max-w-xl text-center font-gotu text-3xl sm:text-3xl md:text-3xl lg:text-[40px] leading-snug sm:leading-tight md:leading-tight tracking-tight"
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         transition={{ duration: 0.6, delay: 0.1 }}
//                         viewport={{ once: true }}
//                     >
//                         Your Digital Business Card {" "}
//                         <br className="hidden sm:block" />
//                         Smarter, Faster, Professional
//                     </motion.h1>

//                     <motion.p
//                         className="mt-4 sm:mt-6 max-w-xl mx-auto text-center text-sm sm:text-base md:text-md leading-relaxed text-gray-600"
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         transition={{ duration: 0.6, delay: 0.25 }}
//                         viewport={{ once: true }}
//                     >
//                         Create and share your profile instantly with NFC or WhatsApp.
//                     </motion.p>

//                     <div className="flex flex-wrap justify-center gap-3 mt-4 sm:mt-6 sm:flex-row">
//                         <a
//                             data-aos="fade-up"
//                             data-aos-delay="100"
//                             href="https://backend.profilexpert.in/download-app"
//                             className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-md text-white bg-gradient-to-r from-[#9112BC] to-[#9929EA] hover:bg-purple-700 transition-colors text-xs sm:text-sm font-semibold text-center hover:shadow-[0_0_6px_1.5px_rgba(153,41,234,0.7)]"
//                         >
//                             Create Free Profile
//                         </a>

//                         <button
//                             data-aos="fade-up"
//                             data-aos-delay="100"
//                             onClick={() => setShowModal(true)}
//                             className="flex items-center cursor-pointer justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-md border border-gray-400 text-gray-700 hover:bg-gray-100 transition-colors text-xs sm:text-sm font-semibold"
//                         >
//                             <PlayCircle className="w-4 h-4 sm:w-5 sm:h-5" />
//                             Watch Demo
//                         </button>
//                     </div>
//                 </section>

//                 {/* Right column: images */}
//                 <div className="w-full md:w-1/2 h-[360px] sm:h-[440px] md:h-[420px] lg:h-[600px] flex items-center justify-center overflow-visible">
//                     <div className="relative flex w-full max-w-[900px] h-full items-center justify-center">
//                         <PhoneFrame img={phones.left} className="left" delayMs={120} />
//                         <PhoneFrame img={phones.right} className="right" delayMs={220} />
//                         <PhoneFrame img={phones.center} emphasis delayMs={50} />
//                     </div>
//                 </div>
//             </div>

//             {/* ✅ Modal for Video */}
//             {showModal && (
//                 <div
//                     className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4"
//                     onClick={() => setShowModal(false)} // ✅ Click outside closes modal
//                 >
//                     <div
//                         className="bg-white rounded-lg overflow-hidden shadow-xl max-w-2xl w-full relative"
//                         onClick={(e) => e.stopPropagation()} // ✅ Prevent closing when clicking inside modal
//                     >
//                         {/* Close Button */}
//                         <button
//                             className="absolute top-3 right-3 text-purple-600 cursor-pointer hover:text-black text-3xl font-bold z-10"
//                             onClick={() => setShowModal(false)}
//                         >
//                             &times;
//                         </button>

//                         {/* Video */}

//                         <div className="w-full aspect-video sm:aspect-video sm:h-auto h-[400px]">

//                             <iframe
//                                 className="w-full h-full"
//                                 src="https://www.youtube.com/embed/6wJsp3ISzgo?autoplay=1"
//                                 title="Demo Video"
//                                 frameBorder="0"
//                                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                                 allowFullScreen
//                             ></iframe>

//                         </div>

//                     </div>
//                 </div>
//             )}

//         </div>
//     )
// }

// function PhoneFrame({
//     img,
//     className,
//     emphasis = false,
//     delayMs = 0,
// }: {
//     img: PhoneImg
//     className?: string
//     emphasis?: boolean
//     delayMs?: number
// }) {
//     const isLeft = className?.includes("left")
//     const isRight = className?.includes("right")
//     const isMobile = useIsMobile()

//     const offsetX = isMobile ? 100 : 150

//     const positionStyles = isMobile
//         ? {
//             x: isLeft ? -offsetX : isRight ? offsetX : 0,
//             y: emphasis ? -10 : 0,
//             rotate: 0,
//         }
//         : {
//             x: isLeft ? -offsetX : isRight ? offsetX : 0,
//             y: emphasis ? -15 : 0,
//             rotate: isLeft ? -6 : isRight ? 6 : 0,
//         }

//     return (
//         <motion.div
//             className={`pointer-events-none absolute ${className || ""}`}
//             initial={{ opacity: 0 }}
//             whileInView={{
//                 opacity: 1,
//                 ...positionStyles,
//                 scale: 1,
//             }}
//             transition={{
//                 duration: 0.7,
//                 delay: delayMs / 1000,
//                 ease: "easeOut",
//             }}
//             viewport={{ once: true }}
//             style={{
//                 zIndex: emphasis ? 10 : undefined,
//             }}
//         >
//             <div className="relative overflow-hidden rounded-[32px] 
//                             h-[320px] w-[140px] 
//                             sm:h-[320px] sm:w-[160px] 
//                             md:h-[400px] md:w-[200px] 
//                             lg:h-[420px] lg:w-[280px]">
//                 <Image
//                     src={img.src}
//                     alt={img.alt ?? "App preview"}
//                     height={1200}
//                     width={1200}
//                     className="h-full w-full object-contain"
//                     priority={emphasis}
//                 />
//             </div>
//         </motion.div>
//     )
// }





// "use client"

// import { PlayCircle } from "lucide-react"
// import Image from "next/image"
// import { useEffect, useRef, useState } from "react"
// import { motion } from "framer-motion"

// type PhoneImg = {
//     src: string
//     alt?: string
// }

// type TriplePhoneHeroProps = {
//     title?: string
//     highlight?: string
//     subtitle?: string
//     phones?: {
//         center: PhoneImg
//         left: PhoneImg
//         right: PhoneImg
//     }
//     className?: string
// }


// function useIsMobile() {
//     const [isMobile, setIsMobile] = useState(false)

//     useEffect(() => {
//         const checkScreen = () => setIsMobile(window.innerWidth < 768)
//         checkScreen()

//         window.addEventListener("resize", checkScreen)
//         return () => window.removeEventListener("resize", checkScreen)
//     }, [])

//     return isMobile
// }

// const fallbackPhones = {
//     left: { src: "/WebMockup/mockup 4.png", alt: "Left phone" },
//     center: { src: "/WebMockup/mockup-32.png", alt: "Center phone" },
//     right: { src: "/WebMockup/mockup 1.png", alt: "Right phone" },
// }

// export default function HeroTech({
//     phones = fallbackPhones,
//     className,
// }: TriplePhoneHeroProps) {
//     const ref = useRef<HTMLDivElement | null>(null)
//     // const [active, setActive] = useState(false)
//     const [showModal, setShowModal] = useState(false) // ✅ modal state

//     useEffect(() => {
//         const el = ref.current
//         if (!el) return

//         const alreadyVisible = el.getBoundingClientRect().top < window.innerHeight
//         if (alreadyVisible) {
//             // setActive(true)
//             return
//         }

//         const io = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) {
//                     // setActive(true)
//                     io.disconnect()
//                 }
//             },
//             { threshold: 0.1 }
//         )
//         io.observe(el)
//         return () => io.disconnect()
//     }, [])

//     useEffect(() => {
//         if (showModal) {
//             document.body.classList.add("overflow-hidden")
//         } else {
//             document.body.classList.remove("overflow-hidden")
//         }

//         // Clean up when component unmounts
//         return () => {
//             document.body.classList.remove("overflow-hidden")
//         }
//     }, [showModal])


//     return (
//         <div className="templateContainer">
//             <div className="flex  pt-28 md:py-12 flex-col lg:flex-row items-center justify-between gap-12 md:gap-20">
//                 {/* Left column: content */}

//                 <section
//                     ref={ref}
//                     className={`w-full md:w-1/2 isolate overflow-visible pt-12 sm:pt-16 md:pt-18 lg:pt-0 ${className || ""}`}
//                 >
//                     <motion.h1
//                         className="mx-auto max-w-xl text-center font-gotu text-3xl sm:text-3xl md:text-3xl lg:text-[40px] leading-snug sm:leading-tight md:leading-tight tracking-tight"
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         transition={{ duration: 0.6, delay: 0.1 }}
//                         viewport={{ once: true }}
//                     >
//                         Your Digital Business Card {" "}
//                         <br className="hidden sm:block" />
//                         Smarter, Faster, Professional
//                     </motion.h1>

//                     <motion.p
//                         className="mt-4 sm:mt-6 max-w-xl mx-auto text-center text-sm sm:text-base md:text-md leading-relaxed text-gray-600"
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         transition={{ duration: 0.6, delay: 0.25 }}
//                         viewport={{ once: true }}
//                     >
//                         Create and share your profile instantly with NFC or WhatsApp.
//                     </motion.p>

//                     <div className="flex flex-wrap justify-center gap-3 mt-4 sm:mt-6 sm:flex-row">
//                         <a
//                             data-aos="fade-up"
//                             data-aos-delay="100"
//                             href="https://backend.profilexpert.in/download-app"
//                             className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-md text-white bg-gradient-to-r from-[#9112BC] to-[#9929EA] hover:bg-purple-700 transition-colors text-xs sm:text-sm font-semibold text-center hover:shadow-[0_0_6px_1.5px_rgba(153,41,234,0.7)]"
//                         >
//                             Create Free Profile
//                         </a>

//                         <button
//                             data-aos="fade-up"
//                             data-aos-delay="100"
//                             onClick={() => setShowModal(true)}
//                             className="flex items-center cursor-pointer justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-md border border-gray-400 text-gray-700 hover:bg-gray-100 transition-colors text-xs sm:text-sm font-semibold"
//                         >
//                             <PlayCircle className="w-4 h-4 sm:w-5 sm:h-5" />
//                             Watch Demo
//                         </button>
//                     </div>
//                 </section>

//                 {/* Right column: images */}
//                 <div className="w-full md:w-1/2 h-[360px] sm:h-[440px] md:h-[420px] lg:h-[600px] flex items-center justify-center overflow-visible">
//                     <div className="relative flex w-full max-w-[900px] h-full items-center justify-center">
//                         <PhoneFrame img={phones.left} className="left" delayMs={120} />
//                         <PhoneFrame img={phones.right} className="right" delayMs={220} />
//                         <PhoneFrame img={phones.center} emphasis delayMs={50} />
//                     </div>
//                 </div>
//             </div>

//             {/* ✅ Modal for Video */}
//             {showModal && (
//                 <div
//                     className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4"
//                     onClick={() => setShowModal(false)} // ✅ Click outside closes modal
//                 >
//                     <div
//                         className="bg-white rounded-lg overflow-hidden shadow-xl max-w-2xl w-full relative"
//                         onClick={(e) => e.stopPropagation()} // ✅ Prevent closing when clicking inside modal
//                     >
//                         {/* Close Button */}
//                         <button
//                             className="absolute top-3 right-3 text-purple-600 cursor-pointer hover:text-black text-3xl font-bold z-10"
//                             onClick={() => setShowModal(false)}
//                         >
//                             &times;
//                         </button>

//                         {/* Video */}

//                         <div className="w-full aspect-video sm:aspect-video sm:h-auto h-[400px]">

//                             <iframe
//                                 className="w-full h-full"
//                                 src="https://www.youtube.com/embed/6wJsp3ISzgo?autoplay=1"
//                                 title="Demo Video"
//                                 frameBorder="0"
//                                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                                 allowFullScreen
//                             ></iframe>

//                         </div>

//                     </div>
//                 </div>
//             )}

//         </div>
//     )
// }

// function PhoneFrame({
//     img,
//     className,
//     emphasis = false,
//     delayMs = 0,
// }: {
//     img: PhoneImg
//     className?: string
//     emphasis?: boolean
//     delayMs?: number
// }) {
//     const isLeft = className?.includes("left")
//     const isRight = className?.includes("right")
//     const isMobile = useIsMobile()

//     const offsetX = isMobile ? 100 : 150

//     const positionStyles = isMobile
//         ? {
//             x: isLeft ? -offsetX : isRight ? offsetX : 0,
//             y: emphasis ? -10 : 0,
//             rotate: 0,
//         }
//         : {
//             x: isLeft ? -offsetX : isRight ? offsetX : 0,
//             y: emphasis ? -15 : 0,
//             rotate: isLeft ? -6 : isRight ? 6 : 0,
//         }

//     return (
//         <motion.div
//             className={`pointer-events-none absolute ${className || ""}`}
//             initial={{ opacity: 0 }}
//             whileInView={{
//                 opacity: 1,
//                 ...positionStyles,
//                 scale: 1,
//             }}
//             transition={{
//                 duration: 0.7,
//                 delay: delayMs / 1000,
//                 ease: "easeOut",
//             }}
//             viewport={{ once: true }}
//             style={{
//                 zIndex: emphasis ? 10 : undefined,
//             }}
//         >
//             <div className="relative overflow-hidden rounded-[32px] 
//                             h-[320px] w-[140px] 
//                             sm:h-[320px] sm:w-[160px] 
//                             md:h-[400px] md:w-[200px] 
//                             lg:h-[420px] lg:w-[280px]">
//                 <Image
//                     src={img.src}
//                     alt={img.alt ?? "App preview"}
//                     height={1200}
//                     width={1200}
//                     className="h-full w-full object-contain"
//                     priority={emphasis}
//                 />
//             </div>
//         </motion.div>
//     )
// }



"use client"

import { PlayCircle } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

type PhoneImg = {
    src: string
    alt?: string
}

type TriplePhoneHeroProps = {
    title?: string
    highlight?: string
    subtitle?: string
    phones?: {
        center: PhoneImg
        left: PhoneImg
        right: PhoneImg
    }
    className?: string
}

function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkScreen = () => setIsMobile(window.innerWidth < 768)
        checkScreen()

        window.addEventListener("resize", checkScreen)
        return () => window.removeEventListener("resize", checkScreen)
    }, [])

    return isMobile
}

const fallbackPhones = {
    left: { src: "/hero-mockup/mockup04.webp", alt: "Left phone" },
    center: { src: "/hero-mockup/mockup-32.webp", alt: "Center phone" },
    right: { src: "/hero-mockup/mockup_1.webp", alt: "Right phone" },
}

export default function HeroTech({
    phones = fallbackPhones,
    className,
}: TriplePhoneHeroProps) {
    const ref = useRef<HTMLDivElement | null>(null)
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const alreadyVisible = el.getBoundingClientRect().top < window.innerHeight
        if (alreadyVisible) {
            return
        }

        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    io.disconnect()
                }
            },
            { threshold: 0.1 }
        )
        io.observe(el)
        return () => io.disconnect()
    }, [])

    useEffect(() => {
        if (showModal) {
            document.body.classList.add("overflow-hidden")
        } else {
            document.body.classList.remove("overflow-hidden")
        }

        return () => {
            document.body.classList.remove("overflow-hidden")
        }
    }, [showModal])

    return (
        <div className="templateContainer overflow-x-hidden">
            <div className="flex pt-28 md:py-12 flex-col lg:flex-row items-center justify-between gap-12 md:gap-20">
                {/* Left column: content */}
                <section
                    ref={ref}
                    className={`w-full md:w-1/2 isolate overflow-visible pt-12 sm:pt-16 md:pt-18 lg:pt-0 ${className || ""}`}
                >
                    <motion.h1
                        className="mx-auto max-w-xl text-center font-gotu text-3xl sm:text-3xl md:text-3xl lg:text-[40px] leading-snug sm:leading-tight md:leading-tight tracking-tight"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        Your Digital Business Card{" "}
                        <br className="hidden sm:block" />
                        Smarter, Faster, Professional
                    </motion.h1>

                    <motion.p
                        className="mt-4 sm:mt-6 max-w-xl mx-auto text-center text-sm sm:text-base md:text-md leading-relaxed text-gray-600"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.25 }}
                        viewport={{ once: true }}
                    >
                        Create and share your profile instantly with NFC or WhatsApp.
                    </motion.p>

                    <div className="flex flex-wrap justify-center gap-3 mt-4 sm:mt-6 sm:flex-row">


                        <a
                            data-aos="fade-up"
                            data-aos-delay="100"
                            href="https://backend.profilexpert.in/download-app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-md text-white bg-gradient-to-r from-[#9112BC] to-[#9929EA] hover:bg-purple-700 transition-colors text-xs sm:text-sm font-semibold text-center hover:shadow-[0_0_6px_1.5px_rgba(153,41,234,0.7)]"
                        >
                            Create Free Profile
                        </a>

                        <button
                            data-aos="fade-up"
                            data-aos-delay="100"
                            onClick={() => setShowModal(true)}
                            className="flex items-center cursor-pointer justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-md border border-gray-400 text-gray-700 hover:bg-gray-100 transition-colors text-xs sm:text-sm font-semibold"
                        >
                            <PlayCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                            Watch Demo
                        </button>
                    </div>
                </section>

                {/* Right column: images */}
                <div className="w-full md:w-1/2 h-[360px] sm:h-[440px] md:h-[420px] lg:h-[600px] flex items-center justify-center overflow-visible">
                    <div className="relative flex w-full max-w-[900px] h-full items-center justify-center">
                        {/* ✅ Updated delays for proper stacking */}
                        <PhoneFrame img={phones.center} emphasis className="z-10" delayMs={0} />
                        <PhoneFrame img={phones.left} className="left z-0" delayMs={300} />
                        <PhoneFrame img={phones.right} className="right z-0" delayMs={400} />
                    </div>
                </div>
            </div>

            {/* Modal for Video */}
            {showModal && (
                <div
                    className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4"
                    onClick={() => setShowModal(false)}
                >
                    <div
                        className="bg-white rounded-lg overflow-hidden shadow-xl max-w-2xl w-full relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-3 right-3 text-purple-600 cursor-pointer hover:text-black text-3xl font-bold z-10"
                            onClick={() => setShowModal(false)}
                        >
                            &times;
                        </button>

                        <div className="w-full aspect-video sm:aspect-video sm:h-auto h-[400px]">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/6wJsp3ISzgo?autoplay=1"
                                title="Demo Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

function PhoneFrame({
    img,
    className,
    emphasis = false,
    delayMs = 0,
}: {
    img: PhoneImg
    className?: string
    emphasis?: boolean
    delayMs?: number
}) {
    const isLeft = className?.includes("left")
    const isRight = className?.includes("right")
    const isMobile = useIsMobile()

    const offsetX = isMobile ? 100 : 150

    const positionStyles = isMobile
        ? {
            x: isLeft ? -offsetX : isRight ? offsetX : 0,
            y: emphasis ? -10 : 0,
            rotate: 0,
        }
        : {
            x: isLeft ? -offsetX : isRight ? offsetX : 0,
            y: emphasis ? -15 : 0,
            rotate: isLeft ? -6 : isRight ? 6 : 0,
        }

    return (
        <motion.div
            className={`pointer-events-none absolute ${emphasis ? "z-10" : "z-0"} ${className || ""}`}
            initial={{ opacity: 0 }}
            whileInView={{
                opacity: 1,
                ...positionStyles,
                scale: 1,
            }}
            transition={{
                duration: 0.7,
                delay: delayMs / 1000,
                ease: "easeOut",
            }}
            viewport={{ once: true }}
        >
            <div className="relative overflow-hidden rounded-[32px] 
                            h-[320px] w-[140px] 
                            sm:h-[320px] sm:w-[160px] 
                            md:h-[400px] md:w-[200px] 
                            lg:h-[450px] lg:w-[280px]">
                <Image
                    src={img.src}
                    alt={img.alt ?? "App preview"}
                    height={1200}
                    width={1200}
                    className="h-full w-full object-contain"
                    priority={emphasis}
                />
            </div>
        </motion.div>
    )
}
