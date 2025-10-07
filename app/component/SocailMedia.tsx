// "use client"

// import { useState, useRef, useEffect } from "react"
// import { Play, ChevronRight, ChevronLeft } from "lucide-react"
// import { motion } from "framer-motion"
// import Socialslider from "./Socailslider"


// const videoUrls = [
//     "/video/WhatsApp Video 2025-09-26 at 15.33.54_c9e966bd.mp4",
//     "/video/WhatsApp Video 2025-09-26 at 15.33.54_c9e966bd.mp4",
//     "/video/WhatsApp Video 2025-09-26 at 15.33.54_c9e966bd.mp4",
// ]


// export default function SocailMedia() {
//     const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
//     const [isPlaying, setIsPlaying] = useState(true)
//     const videoRef = useRef<HTMLVideoElement>(null)
//     const [progress, setProgress] = useState(0)
//     // Toggle play/pause on video click
//     const togglePlayPause = async () => {
//         if (!videoRef.current) return

//         if (isPlaying) {
//             videoRef.current.pause()
//             setIsPlaying(false)
//         } else {
//             try {
//                 await videoRef.current.play()
//                 setIsPlaying(true)
//             } catch (err) {
//                 console.error("Video play failed:", err)
//             }
//         }
//     }

//     // Next video
//     const nextVideo = () => {
//         if (currentVideoIndex < videoUrls.length - 1) {
//             setCurrentVideoIndex((prev) => prev + 1)
//             setIsPlaying(true)
//         }
//     }

//     // Previous video
//     const prevVideo = () => {
//         if (currentVideoIndex > 0) {
//             setCurrentVideoIndex((prev) => prev - 1)
//             setIsPlaying(true)
//         }
//     }

//     // Auto-load new video
//     useEffect(() => {
//         const playNewVideo = async () => {
//             if (videoRef.current) {
//                 videoRef.current.load()
//                 try {
//                     await videoRef.current.play()
//                     setIsPlaying(true)
//                 } catch (err) {
//                     setIsPlaying(false)
//                 }
//             }
//         }
//         playNewVideo()
//     }, [currentVideoIndex])

//     return (
//         <section className="min-h-screen bg-gray-50 flex items-center justify-center p-8 mt-10 relative overflow-hidden">
//             <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

//                 {/* Left Content */}
//                 <div className=" z-10">
//                     {/* Social Icons */}
//                     <Socialslider />
//                     <div className="space-y-6">
//                         <h1 className="text-5xl lg:text-5xl font-bold font-gotu text-gray-900 leading-tight">
//                             Elevate Your Digital

//                             <br />

//                             Presence Effortlessly
//                         </h1>

//                         <p className="text-lg text-gray-600 max-w-md leading-relaxed">
//                             ProfileXpert is your go-to solution for digital business cards, customizable QR codes, and premium profile layouts. Create stunning profiles, share with a tap, and leave a lasting impression.
//                         </p>

//                         <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition">
//                             Get Started
//                         </button>
//                     </div>
//                 </div>

//                 {/* Right Content (Phone Mockup with Video) */}
//                 <div className="relative w-[250px] h-[500px] mx-auto">
//                     {/* Phone Frame */}
//                     <motion.div
//                         initial={{ scale: 0.9, opacity: 0 }}
//                         animate={{ scale: 1, opacity: 1 }}
//                         transition={{ duration: 0.6 }}
//                         className="absolute inset-0 rounded-[2.5rem] border-[12px] border-black shadow-xl bg-black overflow-hidden"
//                     >
//                         {/* Top Loader */}
//                         <div className="absolute top-0 left-0 w-full h-6 bg-black flex justify-between items-center px-3 text-white text-xs z-20">
//                             <span>9:41</span>
//                             <div className="flex space-x-1">
//                                 <div className="w-3 h-3 bg-white rounded-full"></div>
//                                 <div className="w-3 h-3 bg-white rounded-full"></div>
//                                 <div className="w-3 h-3 bg-white rounded-full"></div>
//                             </div>
//                         </div>
//                         {/* Progress Bars */}
//                         <div className="absolute top-12 left-4 right-4 z-20 flex gap-1">
//                             {videoUrls.map((_, index) => (
//                                 <div key={index} className="flex-1 h-0.5 bg-white/30 rounded-full overflow-hidden">
//                                     <div
//                                         className="h-full bg-white transition-all duration-300"
//                                         style={{
//                                             width:
//                                                 index < currentVideoIndex ? "100%" : index === currentVideoIndex ? `${progress}%` : "0%",
//                                         }}
//                                     />
//                                 </div>
//                             ))}
//                         </div>
//                         {/* Video */}
//                         <video
//                             ref={videoRef}
//                             className="w-full h-full object-cover cursor-pointer"
//                             autoPlay
//                             muted
//                             playsInline
//                             onEnded={nextVideo}
//                             onClick={togglePlayPause}
//                         >
//                             <source src={videoUrls[currentVideoIndex]} type="video/mp4" />
//                         </video>

//                         {/* Play overlay when paused */}
//                         {!isPlaying && (
//                             <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-30 pointer-events-none">
//                                 <Play size={64} className="text-white" />
//                             </div>
//                         )}

//                         {/* Left Arrow (hidden on first video) */}
//                         {currentVideoIndex > 0 && (
//                             <button
//                                 onClick={prevVideo}
//                                 className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black text-white p-2 rounded-full z-30"
//                             >
//                                 <ChevronLeft size={28} />
//                             </button>
//                         )}

//                         {/* Right Arrow (hidden on last video) */}
//                         {currentVideoIndex < videoUrls.length - 1 && (
//                             <button
//                                 onClick={nextVideo}
//                                 className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black text-white p-2 rounded-full z-30"
//                             >
//                                 <ChevronRight size={28} />
//                             </button>
//                         )}
//                     </motion.div>
//                 </div>
//             </div>
//         </section>
//     )
// }


// "use client"

// import { useState, useRef, useEffect } from "react"
// import { Play } from "lucide-react"
// import { motion } from "framer-motion"
// import Socialslider from "./Socailslider"

// const videoUrl = "/video/WhatsApp Video 2025-09-26 at 15.33.54_c9e966bd.mp4"

// export default function SocailMedia() {
//     const videoRef = useRef<HTMLVideoElement>(null)
//     const [isPlaying, setIsPlaying] = useState(true)

//     const togglePlayPause = async () => {
//         if (!videoRef.current) return

//         if (isPlaying) {
//             videoRef.current.pause()
//             setIsPlaying(false)
//         } else {
//             try {
//                 await videoRef.current.play()
//                 setIsPlaying(true)
//             } catch (err) {
//                 console.error("Video play failed:", err)
//             }
//         }
//     }

//     useEffect(() => {
//         const playVideo = async () => {
//             if (videoRef.current) {
//                 videoRef.current.load()
//                 try {
//                     await videoRef.current.play()
//                     setIsPlaying(true)
//                 } catch (err) {
//                     setIsPlaying(false)
//                 }
//             }
//         }
//         playVideo()
//     }, [])

//     return (
//         <section className="min-h-screen bg-gray-50 flex items-center justify-center p-8 mt-10 relative overflow-hidden">
//             <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

//                 {/* Left Content */}
//                 <div className="z-10">
//                     <Socialslider />
//                     <div className="space-y-6">
//                         <h1 className="text-5xl lg:text-5xl font-bold font-gotu text-gray-900 leading-tight">
//                             Elevate Your Digital
//                             <br />
//                             Presence Effortlessly
//                         </h1>
//                         <p className="text-lg text-gray-600 max-w-md leading-relaxed">
//                             ProfileXpert is your go-to solution for digital business cards, customizable QR codes, and premium profile layouts. Create stunning profiles, share with a tap, and leave a lasting impression.
//                         </p>
//                         <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition">
//                             Get Started
//                         </button>
//                     </div>
//                 </div>

//                 {/* Right Content - Phone with Single Video */}
//                 <div className="relative w-[250px] h-[500px] mx-auto">
//                     <motion.div
//                         initial={{ scale: 0.9, opacity: 0 }}
//                         animate={{ scale: 1, opacity: 1 }}
//                         transition={{ duration: 0.6 }}
//                         className="absolute inset-0 rounded-[2.5rem] border-[12px] border-black shadow-xl bg-black overflow-hidden"
//                     >
//                         {/* Top Loader */}
//                         <div className="absolute top-0 left-0 w-full h-6 bg-black flex justify-between items-center px-3 text-white text-xs z-20">
//                             <span>9:41</span>
//                             <div className="flex space-x-1">
//                                 <div className="w-3 h-3 bg-white rounded-full"></div>
//                                 <div className="w-3 h-3 bg-white rounded-full"></div>
//                                 <div className="w-3 h-3 bg-white rounded-full"></div>
//                             </div>
//                         </div>

//                         {/* Single Video */}
//                         <video
//                             ref={videoRef}
//                             className="w-full h-full object-cover cursor-pointer"
//                             autoPlay
//                             muted
//                             playsInline
//                             loop
//                             onClick={togglePlayPause}
//                         >
//                             <source src={videoUrl} type="video/mp4" />
//                         </video>

//                         {/* Play Overlay When Paused */}
//                         {!isPlaying && (
//                             <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-30 pointer-events-none">
//                                 <Play size={64} className="text-white" />
//                             </div>
//                         )}
//                     </motion.div>
//                 </div>
//             </div>
//         </section>
//     )
// }



// "use client"

// import { useState, useRef, useEffect } from "react"
// import { Play } from "lucide-react"
// import { motion } from "framer-motion"
// import Socialslider from "./Socailslider"

// const videoUrl = "/video/WhatsApp Video 2025-09-26 at 15.33.54_c9e966bd.mp4"

// export default function SocailMedia() {
//     const videoRef = useRef<HTMLVideoElement>(null)
//     const [isPlaying, setIsPlaying] = useState(true)

//     const togglePlayPause = async () => {
//         if (!videoRef.current) return

//         if (isPlaying) {
//             videoRef.current.pause()
//             setIsPlaying(false)
//         } else {
//             try {
//                 await videoRef.current.play()
//                 setIsPlaying(true)
//             } catch (err) {
//                 console.error("Video play failed:", err)
//             }
//         }
//     }

//     useEffect(() => {
//         const playVideo = async () => {
//             if (videoRef.current) {
//                 videoRef.current.load()
//                 try {
//                     await videoRef.current.play()
//                     setIsPlaying(true)
//                 } catch (err) {
//                     setIsPlaying(false)
//                 }
//             }
//         }
//         playVideo()
//     }, [])

//     return (
//         <section className="min-h-screen bg-gray-50 flex items-center justify-center p-8 mt-10 relative overflow-hidden">
//             <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

//                 {/* Left Content */}
//                 <div className="z-10">
//                     <Socialslider />
//                     <div className="space-y-6">
//                         <h1 className="text-5xl lg:text-5xl font-bold font-gotu text-gray-900 leading-tight">
//                             Elevate Your Digital
//                             <br />
//                             Presence Effortlessly
//                         </h1>
//                         <p className="text-lg text-gray-600 max-w-md leading-relaxed">
//                             ProfileXpert is your go-to solution for digital business cards, customizable QR codes, and premium profile layouts. Create stunning profiles, share with a tap, and leave a lasting impression.
//                         </p>
//                         <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition">
//                             Get Started
//                         </button>
//                     </div>
//                 </div>

//                 {/* Right Content - Phone with Single Video */}
//                 <div className="relative w-[240px] h-[427px] mx-auto sm:w-[270px] sm:h-[480px]">
//                     <motion.div
//                         initial={{ scale: 0.9, opacity: 0 }}
//                         animate={{ scale: 1, opacity: 1 }}
//                         transition={{ duration: 0.6 }}
//                         className="absolute inset-0 rounded-[2.5rem] border-[12px] border-black shadow-xl bg-black overflow-hidden"
//                     >
//                         {/* Top Loader */}
//                         <div className="absolute top-0 left-0 w-full h-6 bg-black flex justify-between items-center px-3 text-white text-xs z-20">
//                             <span>9:41</span>
//                             <div className="flex space-x-1">
//                                 <div className="w-3 h-3 bg-white rounded-full"></div>
//                                 <div className="w-3 h-3 bg-white rounded-full"></div>
//                                 <div className="w-3 h-3 bg-white rounded-full"></div>
//                             </div>
//                         </div>

//                         {/* Video Wrapper with Rounded Corners */}
//                         <div className="w-full h-full overflow-hidden rounded-[2rem]">
//                             <video
//                                 ref={videoRef}
//                                 className="w-full h-full cursor-pointer"
//                                 autoPlay
//                                 muted
//                                 playsInline
//                                 loop
//                                 onClick={togglePlayPause}
//                             >
//                                 <source src={videoUrl} type="video/mp4" />
//                             </video>
//                         </div>

//                         {/* Play Overlay When Paused */}
//                         {!isPlaying && (
//                             <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-30 pointer-events-none">
//                                 <Play size={64} className="text-white" />
//                             </div>
//                         )}
//                     </motion.div>
//                 </div>
//             </div>
//         </section>
//     )
// }

////////////// alll working ////////

// "use client"

// import { useState, useRef, useEffect } from "react"
// import { Play } from "lucide-react"
// import { motion } from "framer-motion"
// import Socialslider from "./Socailslider"

// const videoUrl = "/video/WhatsApp Video 2025-09-26 at 15.33.54_c9e966bd.mp4"

// export default function SocailMedia() {
//     const videoRef = useRef<HTMLVideoElement>(null)
//     const [isPlaying, setIsPlaying] = useState(true)

//     const togglePlayPause = async () => {
//         if (!videoRef.current) return

//         if (isPlaying) {
//             videoRef.current.pause()
//             setIsPlaying(false)
//         } else {
//             try {
//                 await videoRef.current.play()
//                 setIsPlaying(true)
//             } catch (err) {
//                 console.error("Video play failed:", err)
//             }
//         }
//     }

//     useEffect(() => {
//         const playVideo = async () => {
//             if (videoRef.current) {
//                 videoRef.current.load()
//                 try {
//                     await videoRef.current.play()
//                     setIsPlaying(true)
//                 } catch {
//                     setIsPlaying(false)
//                 }
//             }
//         }
//         playVideo()
//     }, [])

//     return (
//         <section className="min-h-screen bg-gray-50 flex items-center justify-center p-8 mt-10 relative overflow-hidden">
//             <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

//                 {/* Left Content */}
//                 <div className="z-10">
//                     <Socialslider />
//                     <div className="space-y-6">
//                         <h1 className="text-5xl lg:text-5xl font-bold font-gotu text-gray-900 leading-tight">
//                             Elevate Your Digital
//                             <br />
//                             Presence Effortlessly
//                         </h1>
//                         <p className="text-lg text-gray-600 max-w-md leading-relaxed">
//                             ProfileXpert is your go-to solution for digital business cards, customizable QR codes, and premium profile layouts. Create stunning profiles, share with a tap, and leave a lasting impression.
//                         </p>

//                         <motion.button
//                             className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-l from-purple-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300"
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                         >
//                             Learn More
//                             <motion.span
//                                 animate={{ x: [0, 4, 0] }}
//                                 transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
//                             >
//                                 →
//                             </motion.span>
//                         </motion.button>
//                     </div>
//                 </div>

//                 {/* Right Content - Phone with Single Video */}
//                 <div className="relative w-[240px] h-[427px] mx-auto sm:w-[270px] sm:h-[480px]">
//                     <motion.div
//                         initial={{ scale: 0.9, opacity: 0 }}
//                         animate={{ scale: 1, opacity: 1 }}
//                         transition={{ duration: 0.6 }}
//                         className="absolute inset-0 rounded-[2.5rem] border-[12px] border-black shadow-xl bg-black overflow-hidden"
//                     >
//                         {/* Top Loader */}
//                         <div className="absolute top-0 left-0 w-full h-6 bg-black flex justify-between items-center px-3 text-white text-xs z-20">
//                             <span>9:41</span>
//                             <div className="flex space-x-1">
//                                 <div className="w-3 h-3 bg-white rounded-full"></div>
//                                 <div className="w-3 h-3 bg-white rounded-full"></div>
//                                 <div className="w-3 h-3 bg-white rounded-full"></div>
//                             </div>
//                         </div>

//                         {/* Video Wrapper with Rounded Corners */}
//                         <div className="w-full h-full overflow-hidden rounded-[2rem]">
//                             <video
//                                 ref={videoRef}
//                                 className="w-full h-full cursor-pointer"
//                                 autoPlay
//                                 muted
//                                 playsInline
//                                 loop
//                                 onClick={togglePlayPause}
//                             >
//                                 <source src={videoUrl} type="video/mp4" />
//                             </video>
//                         </div>

//                         {/* Play Overlay When Paused */}
//                         {!isPlaying && (
//                             <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-30 pointer-events-none">
//                                 <Play size={64} className="text-white" />
//                             </div>
//                         )}
//                     </motion.div>
//                 </div>
//             </div>
//         </section>
//     )
// }



// "use client"

// import { useState, useRef, useEffect } from "react"
// import { Play } from "lucide-react"
// import { motion } from "framer-motion"
// import Socialslider from "./Socailslider"

// const videoUrl = "/video/WhatsApp Video 2025-09-26 at 15.33.54_c9e966bd.mp4"

// export default function SocailMedia() {
//     const videoRef = useRef<HTMLVideoElement>(null)
//     const [isPlaying, setIsPlaying] = useState(true)

//     const togglePlayPause = async () => {
//         if (!videoRef.current) return

//         if (isPlaying) {
//             videoRef.current.pause()
//             setIsPlaying(false)
//         } else {
//             try {
//                 await videoRef.current.play()
//                 setIsPlaying(true)
//             } catch (err) {
//                 console.error("Video play failed:", err)
//             }
//         }
//     }

//     useEffect(() => {
//         const playVideo = async () => {
//             if (videoRef.current) {
//                 videoRef.current.load()
//                 try {
//                     await videoRef.current.play()
//                     setIsPlaying(true)
//                 } catch {
//                     setIsPlaying(false)
//                 }
//             }
//         }
//         playVideo()
//     }, [])

//     return (
//         <section className="min-h-screen bg-gray-50 flex items-center justify-center p-8 mt-10 relative overflow-hidden">
//             <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4 sm:px-6 lg:px-8">

//                 {/* Left Content */}
//                 <div className="z-10">
//                     <Socialslider />
//                     <div className="space-y-6">
//                         <h1 className="text-2xl sm:text-4xl lg:text-5xl font-gotu text-gray-900 leading-tight">
//                             Elevate Your Digital
//                             <br />
//                             Presence Effortlessly
//                         </h1>
//                         <p className="text-base sm:text-lg text-gray-600 max-w-md leading-relaxed">
//                             ProfileXpert is your go-to solution for digital business cards, customizable QR codes, and premium profile layouts. Create stunning profiles, share with a tap, and leave a lasting impression.
//                         </p>

//                         <motion.button
//                             className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-l from-purple-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300"
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                         >
//                             Learn More
//                             <motion.span
//                                 animate={{ x: [0, 4, 0] }}
//                                 transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
//                             >
//                                 →
//                             </motion.span>
//                         </motion.button>
//                     </div>
//                 </div>

//                 {/* Right Content - Phone with Single Video */}
//                 {/* <div className="relative w-[220px] h-[390px] sm:w-[240px] sm:h-[427px] md:w-[250px] md:h-[520px] mx-auto">
//                     <motion.div
//                         initial={{ scale: 0.9, opacity: 0 }}
//                         animate={{ scale: 1, opacity: 1 }}
//                         transition={{ duration: 0.6 }}
//                         className="absolute inset-0 rounded-[2.5rem] border-[12px] border-black shadow-xl bg-black overflow-hidden"
//                     >

//                         <div className="absolute top-0 left-0 w-full h-6 bg-black flex justify-between items-center px-3 text-white text-xs z-20">
//                             <span>9:41</span>
//                             <div className="flex space-x-1">
//                                 <div className="w-3 h-3 bg-white rounded-full"></div>
//                                 <div className="w-3 h-3 bg-white rounded-full"></div>
//                                 <div className="w-3 h-3 bg-white rounded-full"></div>
//                             </div>
//                         </div>


//                         <div className="w-full h-full overflow-hidden rounded-[2rem]">
//                             <video
//                                 ref={videoRef}
//                                 className="w-full h-full object-cover cursor-pointer"
//                                 autoPlay
//                                 muted
//                                 playsInline
//                                 loop
//                                 onClick={togglePlayPause}
//                             >
//                                 <source src={videoUrl} type="video/mp4" />
//                             </video>
//                         </div>


//                         {!isPlaying && (
//                             <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-30 pointer-events-none">
//                                 <Play size={64} className="text-white" />
//                             </div>
//                         )}
//                     </motion.div>
//                 </div> */}

//                 <div className="relative w-[220px] h-[390px] sm:w-[240px] sm:h-[427px] md:w-[250px] md:h-[520px] mx-auto">
//                     <motion.div
//                         initial={{ scale: 0.9, opacity: 0 }}
//                         animate={{ scale: 1, opacity: 1 }}
//                         transition={{ duration: 0.6 }}
//                         className="absolute inset-0 rounded-[2.5rem] border-[12px] border-black shadow-xl bg-black overflow-hidden"
//                     >
//                         {/* Top Loader */}
//                         <div className="absolute top-0 left-0 w-full h-6 bg-black flex justify-between items-center px-3 text-white text-xs z-20">
//                             <span>9:41</span>
//                             <div className="flex space-x-1">
//                                 <div className="w-3 h-3 bg-white rounded-full"></div>
//                                 <div className="w-3 h-3 bg-white rounded-full"></div>
//                                 <div className="w-3 h-3 bg-white rounded-full"></div>
//                             </div>
//                         </div>

//                         {/* YouTube Shorts*/}
//                         <div className="w-full h-full overflow-hidden rounded-[2rem]">

//                             <iframe
//                                 className="w-full h-full"
//                                 src="/video/WhatsApp Video 2025-09-26 at 15.33.54_c9e966bd.mp4"
//                                 title="YouTube Shorts"
//                                 frameBorder="0"
//                                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                                 allowFullScreen
//                             ></iframe>

//                         </div>

//                         {/* You could still overlay play button etc. — though controlling iframe playback needs YouTube API */}
//                     </motion.div>
//                 </div>

//             </div>
//         </section>
//     )
// }



"use client"

import { useState, useRef, useEffect } from "react"
import { Play } from "lucide-react"
import { motion } from "framer-motion"
import Socialslider from "./Socailslider"

const videoUrl = "/hero-mockup/20251002_0937_New Video_simple_compose_01k6hhn555fn6a33ba00ry4e33.mp4"

export default function SocailMedia() {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isPlaying, setIsPlaying] = useState(true)

    const togglePlayPause = async () => {
        if (!videoRef.current) return

        if (isPlaying) {
            videoRef.current.pause()
            setIsPlaying(false)
        } else {
            try {
                await videoRef.current.play()
                setIsPlaying(true)
            } catch (err) {
                console.error("Video play failed:", err)
            }
        }
    }

    useEffect(() => {
        const playVideo = async () => {
            if (videoRef.current) {
                videoRef.current.load()
                try {
                    await videoRef.current.play()
                    setIsPlaying(true)
                } catch {
                    setIsPlaying(false)
                }
            }
        }
        playVideo()
    }, [])

    return (
        <section id="about" className="min-h-screen bg-gray-50 flex items-center justify-center p-8 mt-10 relative overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4 sm:px-6 lg:px-8">

                {/* Left Content */}
                {/* <div data-aos="fade-up"
                    className="z-10"
                > */}
                <div
                    data-aos="fade-up"
                    className="z-10 flex flex-col items-center text-center lg:items-start lg:text-left"
                >

                    <Socialslider />
                    <div className="space-y-6">
                        <h1 className="text-2xl sm:text-4xl lg:text-4xl font-gotu  text-gray-900 leading-tight">
                            Elevate Your Digital
                            <br />
                            Presence Effortlessly
                        </h1>
                        <p className="text-base sm:text-lg text-gray-600 max-w-md leading-relaxed">
                            ProfileXpert is your go-to solution for digital business cards, customizable QR codes, and premium profile layouts. Create stunning profiles, share with a tap, and leave a lasting impression.
                        </p>

                        <motion.a
                            href="#process"
                            className="inline-flex items-center cursor-pointer gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-r from-[#9112BC] to-[#9929EA] hover:bg-purple-700 text-white rounded-md font-medium hover:shadow-lg transition-all duration-300"
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
                        </motion.a>

                    </div>
                </div>

                {/* Right Content - Phone with Video */}
                <div data-aos="fade-up"
                    data-aos-delay="100" className="relative w-[220px] sm:w-[240px] h-[450px] md:w-[250px] md:h-[520px] mx-auto">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="absolute inset-0 rounded-[2.5rem] border-[12px] border-black shadow-xl bg-black overflow-hidden"
                    >
                        {/* Top Loader */}
                        <div className="absolute top-0 left-0 w-full h-6 bg-black flex justify-between items-center px-3 text-white text-xs z-20">
                            <span>9:41</span>
                            <div className="flex space-x-1">
                                <div className="w-3 h-3 bg-white rounded-full"></div>
                                <div className="w-3 h-3 bg-white rounded-full"></div>
                                <div className="w-3 h-3 bg-white rounded-full"></div>
                            </div>
                        </div>

                        {/* Video inside phone */}
                        {/* <div className="w-full h-full overflow-hidden rounded-[2rem]">
                            <video
                                ref={videoRef}
                                className="w-full h-full object-cover cursor-pointer"
                                autoPlay
                                muted
                                playsInline
                                loop
                                onClick={togglePlayPause}
                            >
                                <source src={videoUrl} type="video/mp4" />
                            </video>
                        </div> */}
                        <div className="w-full h-full overflow-hidden rounded-[2rem]">
                            <video
                                ref={videoRef}
                                className="w-full h-full object-contain cursor-pointer"
                                autoPlay
                                muted
                                playsInline
                                loop
                                onClick={togglePlayPause}
                            >
                                <source src={videoUrl} type="video/mp4" />
                            </video>
                        </div>


                        {!isPlaying && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-30 pointer-events-none">
                                <Play size={64} className="text-white" />
                            </div>
                        )}
                    </motion.div>
                </div>

            </div>
        </section>
    )
}
