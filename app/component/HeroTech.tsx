

// "use client"

// import { BadgeIcon, BoltIcon, RocketIcon, ShieldIcon } from "lucide-react"
// import Image from "next/image"
// import { useEffect, useRef, useState } from "react"

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

// // ✅ Default fallback phones
// const fallbackPhones = {
//     left: { src: "/image/84c0c7a4-0288-4ec5-adf6-b83387999873.png", alt: "Left phone" },
//     center: { src: "/image/84c0c7a4-0288-4ec5-adf6-b83387999873.png", alt: "Center phone" },
//     right: { src: "/image/84c0c7a4-0288-4ec5-adf6-b83387999873.png", alt: "Right phone" },
// }

// export default function HeroTech({
//     title,
//     highlight,
//     subtitle,
//     phones = fallbackPhones, // ✅ fallback if undefined
//     className,
// }: TriplePhoneHeroProps) {
//     const ref = useRef<HTMLDivElement | null>(null)
//     const [active, setActive] = useState(false)

//     useEffect(() => {
//         const el = ref.current
//         if (!el) return
//         const io = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) setActive(true)
//             },
//             { threshold: 0.45 },
//         )
//         io.observe(el)
//         return () => io.disconnect()
//     }, [])

//     return (

//         <section
//             ref={ref}
//             className={`relative isolate w-full overflow-hidden 
//              py-16 md:py-20 !lg:py-24 ${className || ""}`}
//         >
//             <h1
//                 className="mx-auto mt-6 max-w-4xl text-center font-gotu text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl"
//                 data-aos="fade-up"
//                 data-aos-delay="100"
//             >
//                 The Future of Digital
//                 <br className="hidden sm:block" />
//                 Networking & Smart Profiles
//             </h1>

//             <p
//                 className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-gray-600 sm:text-lg"
//                 data-aos="fade-up"
//                 data-aos-delay="250"
//             >
//                 ProfileXpert is your all-in-one solution for creating stunning, customizable digital profile cards with premium layouts and shareable QR codes. Enhance your personal or business identity effortlessly!
//             </p>

//             {/* CTAs */}
//             <div
//                 className="mt-8 flex w-full flex-col items-center justify-center gap-3 md:flex-row"
//                 data-aos="fade-up"
//                 data-aos-delay="400"
//             >


//                 <a
//                     href="#"
//                     className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-l from-[#6F00FF] to-[#3338A0] px-6 py-3 text-white shadow-lg shadow-indigo-600/30 transition hover:-translate-y-0.5 hover:opacity-90 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600/40 sm:w-auto"
//                 >
//                     <span className="text-sm font-semibold">Get Start</span>
//                     <span
//                         aria-hidden="true"
//                         className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/20 text-xs leading-none"
//                     >
//                         ↗
//                     </span>
//                 </a>



//                 <a
//                     href="#"
//                     className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-gray-900 ring-1 ring-black/10 shadow-sm transition hover:-translate-y-0.5 hover:bg-gray-50 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600/20 sm:w-auto"
//                 >
//                     <span className="text-sm font-semibold">View Pricing</span>
//                 </a>
//             </div>

//             {/* Phones + Side Features */}
//             <div className="relative mx-auto md:mt-16 h-[600px] w-full max-w-6xl flex items-center justify-center">
//                 {/* Background Rings */}
//                 <div
//                     aria-hidden
//                     className={`pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-1000 ease-out ${active ? "opacity-70 scale-100" : "opacity-0 scale-90"
//                         }`}
//                 >
//                     <div className="absolute h-[900px] w-[900px] rounded-full border border-gray-300/40 animate-pulse" />
//                     <div className="absolute h-[700px] w-[700px] rounded-full border border-gray-300/30 animate-pulse delay-150" />
//                     <div className="absolute h-[500px] w-[500px] rounded-full border border-gray-300/20 animate-pulse delay-300" />
//                     <div className="absolute h-[300px] w-[300px] rounded-full border border-gray-300/10 animate-pulse delay-500" />
//                 </div>

//                 {/* Left Features */}
//                 <div className="absolute max-lg:hidden  left-0 top-1/2 -translate-y-1/2 flex flex-col gap-6">
//                     <FeatureCard
//                         icon={<BoltIcon className="h-5 w-5 text-blue-600" />}
//                         title="Fast Delivery"
//                         desc="Launch campaigns quickly with our streamlined process."
//                         aos="fade-right"
//                         delay={100}
//                     />
//                     <FeatureCard
//                         icon={<ShieldIcon className="h-5 w-5 text-green-600" />}
//                         title="Trusted Security"
//                         desc="Your business data is always safe & protected."
//                         aos="fade-right"
//                         delay={250}
//                     />
//                 </div>

//                 {/* Right Features */}
//                 <div className="absolute max-lg:hidden  right-0 top-1/2 -translate-y-1/2 flex flex-col gap-6">
//                     <FeatureCard
//                         icon={<RocketIcon className="h-5 w-5 text-purple-600" />}
//                         title="Scalable Growth"
//                         desc="Designed to grow with your business seamlessly."
//                         aos="fade-left"
//                         delay={150}
//                     />
//                     <FeatureCard
//                         icon={<BadgeIcon className="h-5 w-5 text-orange-600" />}
//                         title="Proven Results"
//                         desc="Backed by success stories across industries."
//                         aos="fade-left"
//                         delay={300}
//                     />
//                 </div>

//                 {/* Phones */}
//                 <div className="relative flex h-[360px] sm:h-[480px] lg:h-[600px] w-full items-center justify-center">
//                     <PhoneFrame
//                         img={phones.left}
//                         className={`hidden sm:block absolute object-contain transition-all duration-700 ease-out translate-x-0 rotate-0 opacity-0 ${active
//                             ? "-translate-x-[32%] rotate-[-6deg] opacity-100 md:-translate-x-[36%] lg:-translate-x-[42%]"
//                             : ""
//                             }`}
//                         delayMs={120}
//                     />
//                     <PhoneFrame
//                         img={phones.right}
//                         className={`hidden md:block absolute transition-all duration-700 ease-out translate-x-0 rotate-0 opacity-0 ${active
//                             ? "translate-x-[32%] rotate-[6deg] opacity-100 md:translate-x-[36%] lg:translate-x-[42%]"
//                             : ""
//                             }`}
//                         delayMs={220}
//                     />
//                     <PhoneFrame
//                         img={phones.center}
//                         className={`relative z-10 transition-transform duration-700 ease-out ${active ? "scale-100" : "scale-95"
//                             }`}
//                         emphasis
//                     />
//                 </div>
//             </div>
//         </section>
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
//     return (
//         <div
//             className={`pointer-events-none h-[460px] w-[230px] sm:h-[400px] sm:w-[250px] lg:h-[500px] lg:w-[260px] rounded-[44px] border border-black/20 bg-black/80 ring-1 ring-white/10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.55)] ${className || ""}`}
//             style={{ transitionDelay: `${delayMs}ms` }}
//         >
//             <div className="absolute inset-0 rounded-[44px] ring-1 ring-white/15" />
//             <div className="relative m-[10px] h-[calc(100%-20px)] w-[calc(100%-20px)] overflow-hidden rounded-[32px] bg-black">

//                 <Image
//                     src={img.src}
//                     alt={img.alt ?? "App preview"}
//                     height={1200}
//                     width={1200}
//                     sizes="(min-width: 1024px) 270px, (min-width: 640px) 250px, 230px"
//                     className={`h-full w-full object-cover ${emphasis ? "" : "opacity-90 saturate-[0.95]"}`}
//                     priority={emphasis}
//                 />

//                 <div className="absolute left-1/2 top-0 h-3 w-24 -translate-x-1/2 rounded-b-2xl bg-black/75" />
//             </div>
//         </div>



//     )
// }

// function FeatureCard({
//     icon,
//     title,
//     desc,
//     aos,
//     delay,
// }: {
//     icon: React.ReactNode
//     title: string
//     desc: string
//     aos?: string
//     delay?: number
// }) {
//     return (
//         <div
//             className="flex max-w-[250px] items-start gap-3 rounded-xl bg-white/70 p-4 shadow-md backdrop-blur"
//             data-aos={aos}
//             data-aos-delay={delay}
//         >
//             <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
//                 {icon}
//             </div>
//             <div>
//                 <h4 className="text-xl font-gotu font-semibold text-gray-900">{title}</h4>
//                 <p className="mt-1 text-sm text-gray-600">{desc}</p>
//             </div>
//         </div>
//     )
// }











////////////////// all working /////////////


// "use client"

// import { BadgeIcon, BoltIcon, RocketIcon, ShieldIcon } from "lucide-react"
// import Image from "next/image"
// import { useEffect, useRef, useState } from "react"

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

// // ✅ Default fallback phones
// const fallbackPhones = {
//     left: { src: "/image/84c0c7a4-0288-4ec5-adf6-b83387999873.png", alt: "Left phone" },
//     center: { src: "/image/84c0c7a4-0288-4ec5-adf6-b83387999873.png", alt: "Center phone" },
//     right: { src: "/image/84c0c7a4-0288-4ec5-adf6-b83387999873.png", alt: "Right phone" },
// }

// export default function HeroTech({
//     title,
//     highlight,
//     subtitle,
//     phones = fallbackPhones, // ✅ fallback if undefined
//     className,
// }: TriplePhoneHeroProps) {
//     const ref = useRef<HTMLDivElement | null>(null)
//     const [active, setActive] = useState(false)

//     useEffect(() => {
//         const el = ref.current
//         if (!el) return
//         const io = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) setActive(true)
//             },
//             { threshold: 0.45 },
//         )
//         io.observe(el)
//         return () => io.disconnect()
//     }, [])

//     return (

//         <section
//             ref={ref}
//             className={`relative isolate w-full overflow-hidden py-16 md:py-20 !lg:py-24 ${className || ""}`}
//         >
//             <h1
//                 className="mx-auto mt-6 max-w-4xl text-center font-gotu text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl"
//                 data-aos="fade-up"
//                 data-aos-delay="100"
//             >
//                 The Future of Digital
//                 <br className="hidden sm:block" />
//                 Networking & Smart Profiles
//             </h1>

//             <p
//                 className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-gray-600 sm:text-lg"
//                 data-aos="fade-up"
//                 data-aos-delay="250"
//             >
//                 ProfileXpert is your all-in-one solution for creating stunning, customizable digital profile cards with premium layouts and shareable QR codes. Enhance your personal or business identity effortlessly!
//             </p>






//             <div className="flex sm:flex-row sm:justify-center gap-x-4 mt-6">
//                 <a
//                     data-aos="fade-up"
//                     data-aos-delay="100"
//                     href="#"
//                     className="transition-transform hover:-translate-y-0.5"
//                 >
//                     <Image
//                         src="/icone/en-us.svg"
//                         alt="Download on the App Store"
//                         width={160}
//                         height={48}
//                         className="h-[42px] w-auto"
//                     />
//                 </a>

//                 <a
//                     data-aos="fade-up"
//                     data-aos-delay="100"
//                     href="#"
//                     className="transition-transform hover:-translate-y-0.5"
//                 >
//                     <Image
//                         src="/icone/googleplay.svg"
//                         alt="Get it on Google Play"
//                         width={160}
//                         height={48}
//                         className="h-[42px] w-auto"
//                     />
//                 </a>
//             </div>



//             {/* Phones + Side Features */}
//             <div className="relative mx-auto md:mt-0 h-[560px] w-full max-w-6xl flex items-center justify-center">
//                 {/* Background Rings */}
//                 <div
//                     aria-hidden
//                     className={`pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-1000 ease-out ${active ? "opacity-70 scale-100" : "opacity-0 scale-90"
//                         }`}
//                 >
//                     <div className="absolute h-[900px] w-[900px] rounded-full border border-gray-300/40 animate-pulse" />
//                     <div className="absolute h-[700px] w-[700px] rounded-full border border-gray-300/30 animate-pulse delay-150" />
//                     <div className="absolute h-[500px] w-[500px] rounded-full border border-gray-300/20 animate-pulse delay-300" />
//                     <div className="absolute h-[300px] w-[300px] rounded-full border border-gray-300/10 animate-pulse delay-500" />
//                 </div>

//                 {/* Left Features */}
//                 <div className="absolute max-lg:hidden  left-0 top-1/2 -translate-y-1/2 flex flex-col gap-6">
//                     <FeatureCard
//                         icon={<BoltIcon className="h-5 w-5 text-blue-600" />}
//                         title="Fast Delivery"
//                         desc="Launch campaigns quickly with our streamlined process."
//                         aos="fade-right"
//                         delay={100}
//                     />
//                     <FeatureCard
//                         icon={<ShieldIcon className="h-5 w-5 text-green-600" />}
//                         title="Trusted Security"
//                         desc="Your business data is always safe & protected."
//                         aos="fade-right"
//                         delay={250}
//                     />
//                 </div>

//                 {/* Right Features */}
//                 <div className="absolute max-lg:hidden  right-0 top-1/2 -translate-y-1/2 flex flex-col gap-6">
//                     <FeatureCard
//                         icon={<RocketIcon className="h-5 w-5 text-purple-600" />}
//                         title="Scalable Growth"
//                         desc="Designed to grow with your business seamlessly."
//                         aos="fade-left"
//                         delay={150}
//                     />
//                     <FeatureCard
//                         icon={<BadgeIcon className="h-5 w-5 text-orange-600" />}
//                         title="Proven Results"
//                         desc="Backed by success stories across industries."
//                         aos="fade-left"
//                         delay={300}
//                     />
//                 </div>

//                 {/* Phones */}
//                 <div className="relative flex h-[360px] sm:h-[480px] lg:h-[600px] w-full items-center justify-center">
//                     <PhoneFrame
//                         img={phones.left}
//                         className={`hidden sm:block absolute object-contain transition-all duration-700 ease-out translate-x-0 rotate-0 opacity-0 ${active
//                             ? "-translate-x-[32%] rotate-[-6deg] opacity-100 md:-translate-x-[36%] lg:-translate-x-[42%]"
//                             : ""
//                             }`}
//                         delayMs={120}
//                     />
//                     <PhoneFrame
//                         img={phones.right}
//                         className={`hidden md:block absolute transition-all duration-700 ease-out translate-x-0 rotate-0 opacity-0 ${active
//                             ? "translate-x-[32%] rotate-[6deg] opacity-100 md:translate-x-[36%] lg:translate-x-[42%]"
//                             : ""
//                             }`}
//                         delayMs={220}
//                     />
//                     <PhoneFrame
//                         img={phones.center}
//                         className={`relative z-10 transition-transform duration-700 ease-out ${active ? "scale-100" : "scale-95"
//                             }`}
//                         emphasis
//                     />
//                 </div>
//             </div>
//         </section>
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
//     return (
//         <div
//             className={`pointer-events-none h-[460px] w-[230px] sm:h-[400px] sm:w-[250px] lg:h-[500px] lg:w-[260px]  ${className || ""}`}
//             style={{ transitionDelay: `${delayMs}ms` }}
//         >

//             <div className="relative m-[10px] h-[calc(100%-20px)] w-[calc(100%-20px)] overflow-hidden rounded-[32px]">

//                 <Image
//                     src={img.src}
//                     alt={img.alt ?? "App preview"}
//                     height={1200}
//                     width={1200}
//                     sizes="(min-width: 1024px) 270px, (min-width: 640px) 250px, 230px"
//                     className={`h-full w-full object-cover ${emphasis ? "" : "opacity-90 saturate-[0.95]"}`}
//                     priority={emphasis}
//                 />


//             </div>
//         </div>



//     )
// }

// function FeatureCard({
//     icon,
//     title,
//     desc,
//     aos,
//     delay,
// }: {
//     icon: React.ReactNode
//     title: string
//     desc: string
//     aos?: string
//     delay?: number
// }) {
//     return (
//         <div
//             className="flex max-w-[250px] items-start gap-3 rounded-xl bg-white/70 p-4 shadow-md backdrop-blur"
//             data-aos={aos}
//             data-aos-delay={delay}
//         >
//             <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
//                 {icon}
//             </div>
//             <div>
//                 <h4 className="text-xl font-gotu font-semibold text-gray-900">{title}</h4>
//                 <p className="mt-1 text-sm text-gray-600">{desc}</p>
//             </div>
//         </div>
//     )
// }



// "use client"

// import { BadgeIcon, BoltIcon, RocketIcon, ShieldIcon } from "lucide-react"
// import Image from "next/image"
// import { useEffect, useRef, useState } from "react"

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

// const fallbackPhones = {
//     left: { src: "/image/84c0c7a4-0288-4ec5-adf6-b83387999873.png", alt: "Left phone" },
//     center: { src: "/image/84c0c7a4-0288-4ec5-adf6-b83387999873.png", alt: "Center phone" },
//     right: { src: "/image/84c0c7a4-0288-4ec5-adf6-b83387999873.png", alt: "Right phone" },
// }

// export default function HeroTech({
//     title,
//     highlight,
//     subtitle,
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
//         <section
//             ref={ref}
//             className={`relative isolate w-full overflow-hidden py-16 md:py-20 !lg:py-24 ${className || ""}`}
//         >
//             <h1
//                 className="mx-auto mt-6 max-w-4xl text-center font-gotu text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl"
//                 data-aos="fade-up"
//                 data-aos-delay="100"
//             >
//                 The Future of Digital
//                 <br className="hidden sm:block" />
//                 Networking & Smart Profiles
//             </h1>

//             <p
//                 className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-gray-600 sm:text-lg"
//                 data-aos="fade-up"
//                 data-aos-delay="250"
//             >
//                 ProfileXpert is your all-in-one solution for creating stunning, customizable digital profile cards with premium layouts and shareable QR codes. Enhance your personal or business identity effortlessly!
//             </p>

//             <div className="flex sm:flex-row sm:justify-center gap-x-4 mt-6">
//                 <a
//                     data-aos="fade-up"
//                     data-aos-delay="100"
//                     href="#"
//                     className="transition-transform hover:-translate-y-0.5"
//                 >
//                     <Image
//                         src="/icone/en-us.svg"
//                         alt="Download on the App Store"
//                         width={160}
//                         height={48}
//                         className="h-[42px] w-auto"
//                     />
//                 </a>

//                 <a
//                     data-aos="fade-up"
//                     data-aos-delay="100"
//                     href="#"
//                     className="transition-transform hover:-translate-y-0.5"
//                 >
//                     <Image
//                         src="/icone/googleplay.svg"
//                         alt="Get it on Google Play"
//                         width={160}
//                         height={48}
//                         className="h-[42px] w-auto"
//                     />
//                 </a>
//             </div>

//             <div className="relative mx-auto md:mt-0 h-[560px] w-full max-w-6xl flex items-center justify-center">
//                 {/* Background Rings */}
//                 <div
//                     aria-hidden
//                     className={`pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-1000 ease-out ${active ? "opacity-70 scale-100" : "opacity-0 scale-90"
//                         }`}
//                 >
//                     <div className="absolute h-[900px] w-[900px] rounded-full border border-gray-300/40 animate-pulse" />
//                     <div className="absolute h-[700px] w-[700px] rounded-full border border-gray-300/30 animate-pulse delay-150" />
//                     <div className="absolute h-[500px] w-[500px] rounded-full border border-gray-300/20 animate-pulse delay-300" />
//                     <div className="absolute h-[300px] w-[300px] rounded-full border border-gray-300/10 animate-pulse delay-500" />
//                 </div>

//                 {/* Left Features */}
//                 <div className="absolute max-lg:hidden  left-0 top-1/2 -translate-y-1/2 flex flex-col gap-6">
//                     <FeatureCard
//                         icon={<BoltIcon className="h-5 w-5 text-blue-600" />}
//                         title="Fast Delivery"
//                         desc="Launch campaigns quickly with our streamlined process."
//                         aos="fade-right"
//                         delay={100}
//                     />
//                     <FeatureCard
//                         icon={<ShieldIcon className="h-5 w-5 text-green-600" />}
//                         title="Trusted Security"
//                         desc="Your business data is always safe & protected."
//                         aos="fade-right"
//                         delay={250}
//                     />
//                 </div>

//                 {/* Right Features */}
//                 <div className="absolute max-lg:hidden  right-0 top-1/2 -translate-y-1/2 flex flex-col gap-6">
//                     <FeatureCard
//                         icon={<RocketIcon className="h-5 w-5 text-purple-600" />}
//                         title="Scalable Growth"
//                         desc="Designed to grow with your business seamlessly."
//                         aos="fade-left"
//                         delay={150}
//                     />
//                     <FeatureCard
//                         icon={<BadgeIcon className="h-5 w-5 text-orange-600" />}
//                         title="Proven Results"
//                         desc="Backed by success stories across industries."
//                         aos="fade-left"
//                         delay={300}
//                     />
//                 </div>

//                 {/* Phones */}
//                 <div className="relative flex h-[360px] sm:h-[480px] lg:h-[600px] w-full items-center justify-center">
//                     <PhoneFrame
//                         img={phones.left}
//                         className={`hidden sm:block absolute object-contain transition-all duration-700 ease-out translate-x-0 rotate-0 opacity-0 ${active
//                             ? "-translate-x-[32%] rotate-[-6deg] opacity-100 md:-translate-x-[36%] lg:-translate-x-[42%]"
//                             : ""
//                             }`}
//                         delayMs={120}
//                     />
//                     <PhoneFrame
//                         img={phones.right}
//                         className={`hidden md:block absolute transition-all duration-700 ease-out translate-x-0 rotate-0 opacity-0 ${active
//                             ? "translate-x-[32%] rotate-[6deg] opacity-100 md:translate-x-[36%] lg:translate-x-[42%]"
//                             : ""
//                             }`}
//                         delayMs={220}
//                     />
//                     <PhoneFrame
//                         img={phones.center}
//                         className={`relative z-10 transition-transform duration-700 ease-out ${active ? "scale-100" : "scale-95"
//                             }`}
//                         emphasis
//                     />
//                 </div>
//             </div>
//         </section>
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
//     return (
//         <div
//             className={`pointer-events-none h-[460px] w-[230px] sm:h-[400px] sm:w-[250px] lg:h-[500px] lg:w-[260px]  ${className || ""}`}
//             style={{ transitionDelay: `${delayMs}ms` }}
//         >
//             <div className="relative m-[10px] h-[calc(100%-20px)] w-[calc(100%-20px)] overflow-hidden rounded-[32px]">
//                 <Image
//                     src={img.src}
//                     alt={img.alt ?? "App preview"}
//                     height={1200}
//                     width={1200}
//                     sizes="(min-width: 1024px) 270px, (min-width: 640px) 250px, 230px"
//                     className={`h-full w-full object-cover ${emphasis ? "" : "opacity-90 saturate-[0.95]"}`}
//                     priority={emphasis}
//                 />
//             </div>
//         </div>
//     )
// }

// function FeatureCard({
//     icon,
//     title,
//     desc,
//     aos,
//     delay,
// }: {
//     icon: React.ReactNode
//     title: string
//     desc: string
//     aos?: string
//     delay?: number
// }) {
//     return (
//         <div
//             className="flex max-w-[250px] items-start gap-3 rounded-xl bg-white/70 p-4 shadow-md backdrop-blur"
//             data-aos={aos}
//             data-aos-delay={delay}
//         >
//             <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
//                 {icon}
//             </div>
//             <div>
//                 <h4 className="text-xl font-gotu font-semibold text-gray-900">{title}</h4>
//                 <p className="mt-1 text-sm text-gray-600">{desc}</p>
//             </div>
//         </div>
//     )
// }



// "use client"

// import { BadgeIcon, BoltIcon, RocketIcon, ShieldIcon } from "lucide-react"
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

// const fallbackPhones = {
//     left: { src: "/image/84c0c7a4-0288-4ec5-adf6-b83387999873.png", alt: "Left phone" },
//     center: { src: "/image/84c0c7a4-0288-4ec5-adf6-b83387999873.png", alt: "Center phone" },
//     right: { src: "/image/84c0c7a4-0288-4ec5-adf6-b83387999873.png", alt: "Right phone" },
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
//         <section
//             ref={ref}
//             className={`relative isolate w-full overflow-hidden py-16 md:py-20 !lg:py-24 ${className || ""}`}
//         >
//             <motion.h1
//                 className="mx-auto mt-6 max-w-4xl text-center font-gotu text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.1 }}
//                 viewport={{ once: true }}
//             >
//                 The Future of Digital
//                 <br className="hidden sm:block" />
//                 Networking & Smart Profiles
//             </motion.h1>

//             <motion.p
//                 className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-gray-600 sm:text-lg"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.25 }}
//                 viewport={{ once: true }}
//             >
//                 ProfileXpert is your all-in-one solution for creating stunning, customizable digital profile cards with premium layouts and shareable QR codes. Enhance your personal or business identity effortlessly!
//             </motion.p>

//             <div className="flex sm:flex-row sm:justify-center gap-x-4 mt-6">
//                 <motion.a
//                     href="#"
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: 0.4 }}
//                     viewport={{ once: true }}
//                     className="transition-transform hover:-translate-y-0.5"
//                 >
//                     <Image
//                         src="/icone/en-us.svg"
//                         alt="Download on the App Store"
//                         width={160}
//                         height={48}
//                         className="h-[42px] w-auto"
//                     />
//                 </motion.a>

//                 <motion.a
//                     href="#"
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: 0.5 }}
//                     viewport={{ once: true }}
//                     className="transition-transform hover:-translate-y-0.5"
//                 >
//                     <Image
//                         src="/icone/googleplay.svg"
//                         alt="Get it on Google Play"
//                         width={160}
//                         height={48}
//                         className="h-[42px] w-auto"
//                     />
//                 </motion.a>
//             </div>

//             <div className="relative mx-auto md:mt-0 h-[560px] w-full max-w-6xl flex items-center justify-center">
//                 {/* Background Rings */}
//                 <div
//                     aria-hidden
//                     className={`pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-1000 ease-out ${active ? "opacity-70 scale-100" : "opacity-0 scale-90"
//                         }`}
//                 >
//                     <div className="absolute h-[900px] w-[900px] rounded-full border border-gray-300/40 animate-pulse" />
//                     <div className="absolute h-[700px] w-[700px] rounded-full border border-gray-300/30 animate-pulse delay-150" />
//                     <div className="absolute h-[500px] w-[500px] rounded-full border border-gray-300/20 animate-pulse delay-300" />
//                     <div className="absolute h-[300px] w-[300px] rounded-full border border-gray-300/10 animate-pulse delay-500" />
//                 </div>

//                 {/* Left Features */}
//                 <div className="absolute max-lg:hidden  left-0 top-1/2 -translate-y-1/2 flex flex-col gap-6">
//                     <FeatureCard
//                         icon={<BoltIcon className="h-5 w-5 text-blue-600" />}
//                         title="Fast Delivery"
//                         desc="Launch campaigns quickly with our streamlined process."
//                         delay={0.1}
//                     />
//                     <FeatureCard
//                         icon={<ShieldIcon className="h-5 w-5 text-green-600" />}
//                         title="Trusted Security"
//                         desc="Your business data is always safe & protected."
//                         delay={0.25}
//                     />
//                 </div>

//                 {/* Right Features */}
//                 <div className="absolute max-lg:hidden  right-0 top-1/2 -translate-y-1/2 flex flex-col gap-6">
//                     <FeatureCard
//                         icon={<RocketIcon className="h-5 w-5 text-purple-600" />}
//                         title="Scalable Growth"
//                         desc="Designed to grow with your business seamlessly."
//                         delay={0.15}
//                     />
//                     <FeatureCard
//                         icon={<BadgeIcon className="h-5 w-5 text-orange-600" />}
//                         title="Proven Results"
//                         desc="Backed by success stories across industries."
//                         delay={0.3}
//                     />
//                 </div>

//                 {/* Phones */}
//                 <div className="relative flex h-[360px] sm:h-[480px] lg:h-[600px] w-full items-center justify-center">
//                     <PhoneFrame
//                         img={phones.left}
//                         className="left"
//                         delayMs={120}
//                     />
//                     <PhoneFrame
//                         img={phones.right}
//                         className="right"
//                         delayMs={220}
//                     />
//                     <PhoneFrame
//                         img={phones.center}
//                         emphasis
//                         delayMs={50}
//                     />
//                 </div>
//             </div>
//         </section>
//     )
// }

// // PHONE FRAME
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

//     return (
//         <motion.div
//             className={`pointer-events-none h-[460px] w-[230px] sm:h-[400px] sm:w-[250px] lg:h-[500px] lg:w-[260px] absolute ${className || ""}`}
//             initial={{ opacity: 0, x: 0, y: 0, rotate: 0, scale: 0.95 }}

//             whileInView={{
//                 opacity: 1,
//                 x: isLeft ? -175 : isRight ? 175 : 0,
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
//             style={{ zIndex: emphasis ? 10 : undefined }} // ensure zIndex applied on initial render
//         >
//             <div className="relative m-[10px] h-[calc(100%-20px)] w-[calc(100%-20px)] overflow-hidden rounded-[32px]">
//                 <Image
//                     src={img.src}
//                     alt={img.alt ?? "App preview"}
//                     height={1200}
//                     width={1200}
//                     sizes="(min-width: 1024px) 270px, (min-width: 640px) 250px, 230px"
//                     className={`h-full w-full object-cover ${emphasis ? "" : "opacity-90 saturate-[0.95]"}`}
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
//     const isLeft = title === "Fast Delivery" || title === "Trusted Security"

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
//                 <h4 className="text-xl font-gotu font-semibold text-gray-900">{title}</h4>
//                 <p className="mt-1 text-sm text-gray-600">{desc}</p>
//             </div>
//         </motion.div>
//     )
// }

//////////////// wo 
// D:\NewNextProject\web\app\component\HeroTech.tsx
// "use client"

// import { BadgeIcon, BoltIcon, RocketIcon, ShieldIcon } from "lucide-react"
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

// const fallbackPhones = {
//     left: { src: "/image/84c0c7a4-0288-4ec5-adf6-b83387999873.png", alt: "Left phone" },
//     center: { src: "/image/84c0c7a4-0288-4ec5-adf6-b83387999873.png", alt: "Center phone" },
//     right: { src: "/image/84c0c7a4-0288-4ec5-adf6-b83387999873.png", alt: "Right phone" },
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
//                 className={`relative isolate w-full overflow-hidden pt-20 md:py-20 !lg:py-24 ${className || ""}`}
//             >
//                 <motion.h1
//                     className="mx-auto mt-6 max-w-4xl text-center font-gotu text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl"
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     transition={{ duration: 0.6, delay: 0.1 }}
//                     viewport={{ once: true }}
//                 >
//                     The Future of Digital
//                     <br className="hidden sm:block" />
//                     Networking & Smart Profiles
//                 </motion.h1>

//                 <motion.p
//                     className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-gray-600 sm:text-lg"
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     transition={{ duration: 0.6, delay: 0.25 }}
//                     viewport={{ once: true }}
//                 >
//                     ProfileXpert is your all-in-one solution for creating stunning, customizable digital profile cards with premium layouts and shareable QR codes. Enhance your personal or business identity effortlessly!
//                 </motion.p>

//                 {/* <div className="flex sm:flex-row justify-center gap-x-4 mt-6">
//                     <motion.a
//                         href="https://apps.apple.com/in/app/profilexpert/id6747479661"
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         transition={{ duration: 0.5, delay: 0.4 }}
//                         viewport={{ once: true }}
//                         className="transition-transform hover:-translate-y-0.5"
//                     >
//                         <Image
//                             src="/icone/en-us.svg"
//                             alt="Download on the App Store"
//                             width={160}
//                             height={48}
//                             className="h-[42px] w-auto"
//                         />
//                     </motion.a>

//                     <motion.a
//                         href="https://play.google.com/store/apps/details?id=com.profile.expert&pli=1"
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         transition={{ duration: 0.5, delay: 0.5 }}
//                         viewport={{ once: true }}
//                         className="transition-transform hover:-translate-y-0.5"
//                     >
//                         <Image
//                             src="/icone/googleplay.svg"
//                             alt="Get it on Google Play"
//                             width={160}
//                             height={48}
//                             className="h-[42px] w-auto"
//                         />
//                     </motion.a>
//                 </div> */}
//                 {/* <div className="flex sm:flex-row justify-center gap-x-4 mt-6">
//                     <motion.a
//                         href="https://apps.apple.com/in/app/profilexpert/id6747479661"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         transition={{ duration: 0.5, delay: 0.4 }}
//                         viewport={{ once: true }}
//                         className="transition-transform hover:-translate-y-0.5"
//                     >
//                         <Image
//                             src="/icone/en-us.svg"
//                             alt="Download on the App Store"
//                             width={160}
//                             height={48}
//                             className="h-[42px] w-auto"
//                         />
//                     </motion.a>

//                     <motion.a
//                         href="https://play.google.com/store/apps/details?id=com.profile.expert&pli=1"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         transition={{ duration: 0.5, delay: 0.5 }}
//                         viewport={{ once: true }}
//                         className="transition-transform hover:-translate-y-0.5"
//                     >
//                         <Image
//                             src="/icone/googleplay.svg"
//                             alt="Get it on Google Play"
//                             width={160}
//                             height={48}
//                             className="h-[42px] w-auto"
//                         />
//                     </motion.a>
//                 </div> */}

//                 <div className="flex sm:flex-row justify-center gap-x-4 mt-6">
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
//                             icon={<BoltIcon className="h-5 w-5 text-blue-600" />}
//                             title="Fast Delivery"
//                             desc="Launch campaigns quickly with our streamlined process."
//                             delay={0.1}
//                         />
//                         <FeatureCard
//                             icon={<ShieldIcon className="h-5 w-5 text-green-600" />}
//                             title="Trusted Security"
//                             desc="Your business data is always safe & protected."
//                             delay={0.25}
//                         />
//                     </div>

//                     {/* Right Features */}
//                     <div className="absolute max-lg:hidden  right-0 top-1/2 -translate-y-1/2 flex flex-col gap-6">
//                         <FeatureCard
//                             icon={<RocketIcon className="h-5 w-5 text-purple-600" />}
//                             title="Scalable Growth"
//                             desc="Designed to grow with your business seamlessly."
//                             delay={0.15}
//                         />
//                         <FeatureCard
//                             icon={<BadgeIcon className="h-5 w-5 text-orange-600" />}
//                             title="Proven Results"
//                             desc="Backed by success stories across industries."
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

// // PHONE FRAME

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

//     return (
//         <motion.div
//             className={`pointer-events-none h-[460px] w-[230px] sm:h-[400px] sm:w-[250px] lg:h-[500px] lg:w-[260px] absolute ${className || ""}`}
//             initial={{ opacity: 0, x: 0, y: 0, rotate: 0, scale: 1 }}
//             whileInView={{
//                 opacity: 1,
//                 x: isLeft ? -175 : isRight ? 175 : 0,
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
//     const isLeft = title === "Fast Delivery" || title === "Trusted Security"

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
//                 <h4 className="text-xl font-gotu font-semibold text-gray-900">{title}</h4>
//                 <p className="mt-1 text-sm text-gray-600">{desc}</p>
//             </div>
//         </motion.div>
//     )
// }







"use client"

import { Palette, PenTool, QrCode, Layers } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

type PhoneImg = {
    src: string
    alt?: string
}

type TriplePhoneHeroProps = {
    title: string
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
        const checkScreen = () => setIsMobile(window.innerWidth < 768) // Tailwind's 'md'
        checkScreen()

        window.addEventListener("resize", checkScreen)
        return () => window.removeEventListener("resize", checkScreen)
    }, [])

    return isMobile
}
const fallbackPhones = {
    left: { src: "/newmockup/a66aec9c-585f-4237-abc5-da30b81a0598.png", alt: "Left phone" },
    center: { src: "/newmockup/a939bddf-942a-4914-9df6-df1c5a3601d2.png", alt: "Center phone" },
    right: { src: "/newmockup/27d940a5-e40c-491b-9f09-5b42b05162d7.png", alt: "Right phone" },
}

export default function HeroTech({

    phones = fallbackPhones,
    className,
}: TriplePhoneHeroProps) {
    const ref = useRef<HTMLDivElement | null>(null)
    const [active, setActive] = useState(false)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const alreadyVisible = el.getBoundingClientRect().top < window.innerHeight
        if (alreadyVisible) {
            setActive(true)
            return
        }

        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setActive(true)
                    io.disconnect()
                }
            },
            { threshold: 0.1 }
        )
        io.observe(el)
        return () => io.disconnect()
    }, [])

    return (
        <div className="templateContainer">
            <section
                ref={ref}
                className={`relative isolate w-full overflow-hidden pt-28 md:py-28 lg:py-28 ${className || ""}`}
            >
                <motion.h1
                    className="mx-auto mt-6 max-w-4xl text-center font-gotu text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    The Future of Digital
                    <br className="hidden sm:block" />
                    Networking & Smart Profiles
                </motion.h1>

                <motion.p
                    className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-gray-600 sm:text-lg"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.25 }}
                    viewport={{ once: true }}
                >
                    ProfileXpert is your all-in-one solution for creating stunning, customizable digital profile cards with premium layouts and shareable QR codes. Enhance your personal or business identity effortlessly!
                </motion.p>



                <div className="flex md:pb-10 sm:flex-row justify-center gap-x-4 mt-6">
                    <a
                        data-aos="fade-up" data-aos-delay="100"
                        href="https://apps.apple.com/in/app/profilexpert/id6747479661"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-transform hover:-translate-y-0.5"
                    >
                        <Image
                            src="/icone/en-us.svg"
                            alt="Download on the App Store"
                            width={160}
                            height={48}
                            className="h-[42px] w-auto"
                        />
                    </a>

                    <a
                        data-aos="fade-up" data-aos-delay="100"
                        href="https://play.google.com/store/apps/details?id=com.profile.expert&pli=1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-transform hover:-translate-y-0.5"
                    >
                        <Image
                            src="/icone/googleplay.svg"
                            alt="Get it on Google Play"
                            width={160}
                            height={48}
                            className="h-[42px] w-auto"
                        />
                    </a>
                </div>



                <div className="relative mx-auto md:mt-0 h-[560px] w-full max-w-6xl flex items-center justify-center">
                    {/* Background Rings */}
                    <div
                        aria-hidden
                        className={`pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-1000 ease-out ${active ? "opacity-70 scale-100" : "opacity-0 scale-90"
                            }`}
                    >
                        <div className="absolute h-[900px] w-[900px] rounded-full border border-gray-300/40 animate-pulse" />
                        <div className="absolute h-[700px] w-[700px] rounded-full border border-gray-300/30 animate-pulse delay-150" />
                        <div className="absolute h-[500px] w-[500px] rounded-full border border-gray-300/20 animate-pulse delay-300" />
                        <div className="absolute h-[300px] w-[300px] rounded-full border border-gray-300/10 animate-pulse delay-500" />
                    </div>

                    {/* Left Features */}
                    <div className="absolute max-lg:hidden  left-0 top-1/2 -translate-y-1/2 flex flex-col gap-6">
                        <FeatureCard
                            icon={<PenTool className="h-5 w-5 text-blue-600" />}
                            title="Create & Customize"
                            desc="Design your digital card your way — fast and easy."
                            delay={0.1}
                        />
                        <FeatureCard
                            icon={<Layers className="h-5 w-5 text-green-600" />}
                            title="Premium Layouts & Themes"
                            desc="Select from clean, modern, and pro-level designs."
                            delay={0.25}
                        />
                    </div>

                    {/* Right Features */}
                    <div className="absolute max-lg:hidden  right-0 top-1/2 -translate-y-1/2 flex flex-col gap-6">
                        <FeatureCard
                            icon={<QrCode className="h-5 w-5 text-purple-600" />}
                            title="QR Code Sharing"
                            desc="Share your card instantly with a smart QR code."
                            delay={0.15}
                        />
                        <FeatureCard
                            icon={<Palette className="h-5 w-5 text-orange-600" />}
                            title="Pick Your Style"
                            desc="Choose from sleek, professional themes and layouts."
                            delay={0.3}
                        />
                    </div>

                    {/* Phones */}
                    <div className="relative flex h-[360px] sm:h-[480px] lg:h-[600px] w-full items-center justify-center">
                        <PhoneFrame
                            img={phones.left}
                            className="left"
                            delayMs={120}
                        />
                        <PhoneFrame
                            img={phones.right}
                            className="right"
                            delayMs={220}
                        />
                        <PhoneFrame
                            img={phones.center}
                            emphasis
                            delayMs={50}
                        />
                    </div>
                </div>
            </section>
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

    const offsetX = isMobile ? 53 : 175 // <<< adjust this value to control gap on mobile

    return (
        <motion.div
            className={`pointer-events-none h-[460px] w-[230px] sm:h-[400px] sm:w-[250px] lg:h-[500px] lg:w-[260px] absolute ${className || ""}`}
            initial={{ opacity: 0, x: 0, y: 0, rotate: 0, scale: 1 }}
            whileInView={{
                opacity: 1,
                x: isLeft ? -offsetX : isRight ? offsetX : 0,
                y: emphasis ? -35 : 0,
                rotate: isLeft ? -6 : isRight ? 6 : 0,
                scale: 1,
                zIndex: emphasis ? 10 : "auto",
            }}
            transition={{
                duration: 0.7,
                delay: delayMs / 1000,
                ease: "easeOut",
            }}
            viewport={{ once: true }}
            style={{ zIndex: emphasis ? 10 : undefined }}
        >
            <div className="relative m-[10px] h-[calc(100%-20px)] w-[calc(100%-20px)] overflow-hidden rounded-[32px]">
                <Image
                    src={img.src}
                    alt={img.alt ?? "App preview"}
                    height={460}
                    width={230}
                    unoptimized
                    className="h-full w-full object-cover"
                    priority={emphasis}
                />
            </div>
        </motion.div>
    )
}


// FEATURE CARD
function FeatureCard({
    icon,
    title,
    desc,
    delay = 0,
}: {
    icon: React.ReactNode
    title: string
    desc: string
    delay?: number
}) {
    const isLeft = title === "Create & Customize" || title === "Premium Layouts & Themes"

    return (
        <motion.div
            className="flex max-w-[250px] items-start gap-3 rounded-xl bg-white/70 p-4 shadow-md backdrop-blur"
            initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: delay }}
            viewport={{ once: true }}
        >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                {icon}
            </div>
            <div>
                <h4 className="text-xl font-gotu text-gray-900">{title}</h4>
                <p className="mt-1 text-sm text-gray-600">{desc}</p>
            </div>
        </motion.div>
    )
}
