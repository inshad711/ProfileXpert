// "use client"

// import Image from "next/image"
// import { useEffect, useRef, useState } from "react"
// import { PlayCircle } from 'lucide-react';

// type PhoneImg = {
//     src: string
//     alt?: string
// }

// type TriplePhoneHeroProps = {
//     title: string
//     highlight?: string
//     subtitle?: string
//     phoneSlides: {
//         center: PhoneImg
//         left: PhoneImg
//         right: PhoneImg
//     }[]
//     className?: string
// }

// export default function Appdevelopmentbanner({
//     title,
//     highlight,
//     subtitle,
//     phoneSlides,
//     className,
// }: TriplePhoneHeroProps) {
//     const ref = useRef<HTMLDivElement | null>(null)
//     const [active, setActive] = useState(false)
//     const [currentSlide, setCurrentSlide] = useState(0)

//     // Intersection Observer (first reveal)
//     useEffect(() => {
//         const el = ref.current
//         if (!el) return
//         const io = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) setActive(true)
//             },
//             { threshold: 0.45 }
//         )
//         io.observe(el)
//         return () => io.disconnect()
//     }, [])

//     // Auto switch slides every 5s
//     useEffect(() => {
//         if (!active) return
//         const timer = setInterval(() => {
//             nextSlide()
//         }, 3000)
//         return () => clearInterval(timer)
//     }, [active, currentSlide])

//     const nextSlide = () => {
//         setCurrentSlide((prev) => (prev + 1) % phoneSlides.length)
//     }

//     const phones = phoneSlides[currentSlide]

//     return (
//         <section
//             ref={ref}
//             className={`flex items-center justif isolate w-full overflow-hidden
//               bg-[url('https://img.freepik.com/free-vector/white-desktop-background-minimal-design-vector_53876-140224.jpg?t=st=1756987580~exp=1756991180~hmac=3212bc11f9569101b7ac999ed009566231b93cfc7c5228d8dfefeb3392ef771b&w=1060')]
//               bg-no-repeat bg-cover bg-center
//               py-16 md:py-2  -mt-14 ${className || ""}`}
//         >

//             {/* Heading section */}
//             <div className="px-4">
//                 <h1
//                     className="mx-auto mt-40 max-w-4xl font-gotu text-center text-balance  text-2xl  md:text-4xl leading-tight sm:text-5xl lg:text-5xl"
//                     data-aos="fade-up"
//                     data-aos-delay="100"
//                 >
//                     Your Digital Business Card
//                     Smarter, Faster, Professional
//                 </h1>

//                 <p
//                     className="mx-auto mt-6 max-w-2xl text-center text-pretty text-base leading-relaxed text-gray-600 sm:text-lg"
//                     data-aos="fade-up"
//                     data-aos-delay="250"
//                 >
//                     Create and share your profile instantly with NFC or WhatsApp.
//                 </p>

//                 {/* CTAs */}
//                 <div
//                     className="mt-8 flex w-full flex-col items-center justify-center gap-3 md:flex-row"
//                     data-aos="fade-up"
//                     data-aos-delay="400"
//                 >


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
//             </div>

//             {/* Phones Section */}
//             <div className="relative mx-auto md:mt-16 h-[600px]   max-w-6xl flex items-center justify-center overflow-hidden">
//                 {/* Animated Phones */}
//                 <div key={currentSlide} className="relative  ml-[30%] flex h-full w-full items-center justify-center">
//                     {/* Left phone */}
//                     <PhoneFrame
//                         img={phones.left}
//                         className={`hidden sm:block absolute opacity-0 translate-y-10 transition-all duration-700 ease-out ${active ? "opacity-100 translate-y-0 -translate-x-[10%] rotate-[-8deg]" : ""
//                             }`}
//                         delayMs={200}
//                     />

//                     {/* Right phone */}
//                     <PhoneFrame
//                         img={phones.right}
//                         className={`hidden md:block absolute opacity-0 translate-y-10 transition-all duration-700 ease-out ${active ? "opacity-100 translate-y-0 translate-x-[10%] rotate-[8deg]" : ""
//                             }`}
//                         delayMs={400}
//                     />

//                     {/* Center phone */}
//                     <PhoneFrame
//                         img={phones.center}
//                         className={`relative z-10 opacity-0 -translate-x-[150%] translate-y-10 transition-all duration-700 ease-out ${active ? "opacity-100 translate-y-0 scale-100" : "scale-95"
//                             }`}
//                         delayMs={100}
//                         emphasis
//                     />
//                 </div>
//             </div>

//         </section >
//     )
// }

// /* ------------------ Phone Component ------------------ */
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
//     const [loaded, setLoaded] = useState(false)

//     useEffect(() => {
//         // Reset on every image change
//         setLoaded(false)
//         const t = setTimeout(() => setLoaded(true), 50)
//         return () => clearTimeout(t)
//     }, [img.src])

//     return (
//         <div
//             className={`pointer-events-none relative h-[350px] w-[230px] sm:h-[400px] sm:w-[250px] lg:h-[400px] lg:w-[260px] rounded-[44px] border border-black/20 bg-black/80 ring-1 ring-white/10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.55)] ${className || ""}`}
//             style={{ transitionDelay: `${delayMs}ms` }}
//         >
//             {/* bezel shine */}
//             <div className="absolute inset-0 rounded-[44px] ring-1 ring-white/15" />

//             {/* screen */}
//             <div className="relative m-[10px] h-[calc(100%-20px)] w-[calc(100%-20px)] overflow-hidden rounded-[32px] bg-black">
//                 {/* circular reveal wrapper */}
//                 <div
//                     className="absolute inset-0 transition-[clip-path] duration-1000 ease-out"
//                     style={{
//                         clipPath: loaded
//                             ? "circle(150% at 50% 100%)" // fully open
//                             : "circle(0% at 50% 100%)", // start bottom center
//                     }}
//                 >
//                     <Image
//                         src={img.src || "/placeholder.svg"}
//                         alt={img.alt ?? "App preview"}
//                         fill
//                         sizes="(min-width: 1024px) 270px, (min-width: 640px) 250px, 230px"
//                         className={`object-cover ${emphasis ? "" : "opacity-90 saturate-[0.95]"}`}
//                         priority={emphasis}
//                     />
//                 </div>

//                 {/* notch */}
//                 <div className="absolute left-1/2 top-0 h-3 w-24 -translate-x-1/2 rounded-b-2xl bg-black/75" />
//             </div>
//         </div>
//     )
// }

