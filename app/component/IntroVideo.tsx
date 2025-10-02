// "use client";

// import { useState, useEffect, useRef, useCallback, memo } from "react";
// import Image from "next/image";

// const IntroVideo = memo(() => {
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const modalRef = useRef<HTMLDivElement>(null);

//     const handleClickOutside = useCallback((event: MouseEvent) => {
//         if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
//             setIsModalOpen(false);
//         }
//     }, []);

//     useEffect(() => {
//         if (isModalOpen) {
//             document.addEventListener("mousedown", handleClickOutside);
//         }
//         return () => document.removeEventListener("mousedown", handleClickOutside);
//     }, [isModalOpen, handleClickOutside]);

//     return (
//         <section className="md:py-8 max-w-7xl mx-auto px-4">
//             <div className="container mx-auto px-4 flex flex-col items-center">
//                 <div
//                     data-aos="fade-up"
//                     data-aos-delay="300"
//                     className="w-full max-w-4xl relative"
//                 >
//                     <Image
//                         src="https://www.pabbly.com/wp-content/uploads/2025/04/Chatflow-Banner-2-3.png"
//                         alt="Pabbly"
//                         width={800}
//                         height={450}
//                         className="w-full h-auto"
//                         loading="lazy"
//                     />
//                     <div
//                         className="absolute inset-0 flex items-center justify-center cursor-pointer"
//                         onClick={() => setIsModalOpen(true)}
//                         role="button"
//                         aria-label="Play Video"
//                     >
//                         <span
//                             className="absolute h-16 w-16 md:h-20 md:w-20 rounded-full"
//                             style={{
//                                 backgroundColor: "rgb(222,84,72)",
//                                 opacity: 0.7,
//                                 animation: "pulseEffect 2s infinite",
//                             }}
//                         ></span>
//                         <div className="relative z-10 h-16 w-16 md:h-20 md:w-20 rounded-full bg-[rgb(222,84,72)] flex items-center justify-center">
//                             <svg
//                                 className="w-6 h-6 md:w-10 md:h-10 text-white"
//                                 viewBox="0 0 24 24"
//                                 fill="currentColor"
//                             >
//                                 <path d="M8 5v14l11-7z" />
//                             </svg>
//                         </div>
//                         <style jsx>{`
//               @keyframes pulseEffect {
//                 0% {
//                   transform: scale(0.85);
//                   box-shadow: 0 0 0 0 rgba(222, 94, 72, 0.9);
//                 }
//                 70% {
//                   transform: scale(1);
//                   box-shadow: 0 0 0 15px rgba(222, 94, 72, 0);
//                 }
//                 100% {
//                   transform: scale(0.85);
//                   box-shadow: 0 0 0 0 rgba(222, 94, 72, 0);
//                 }
//               }
//             `}</style>
//                     </div>
//                 </div>
//                 {isModalOpen && (
//                     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
//                         <div
//                             ref={modalRef}
//                             className="relative bg-white p-4 rounded-lg max-w-4xl w-full shadow-lg"
//                         >
//                             <div className="relative" style={{ paddingBottom: "56.25%" }}>
//                                 <iframe
//                                     className="absolute inset-0 w-full h-full"
//                                     src="https://www.youtube.com/embed/u8G_2f5lbEw?rel=0&autoplay=1&modestbranding=1&controls=1&vq=hd1080"
//                                     title="Pabbly Video"
//                                     allow="autoplay; encrypted-media"
//                                     allowFullScreen
//                                 ></iframe>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </section>
//     );
// });

// export default IntroVideo;


"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

const IntroVideo = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = useCallback((event: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
            setIsModalOpen(false);
        }
    }, []);

    useEffect(() => {
        if (isModalOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isModalOpen, handleClickOutside]);

    return (
        <section className="md:py-8 max-w-7xl mx-auto px-4">
            <div className="container mx-auto px-4 flex flex-col items-center">
                <div
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="w-full max-w-4xl relative"
                >
                    <Image
                        src="https://www.pabbly.com/wp-content/uploads/2025/04/Chatflow-Banner-2-3.png"
                        alt="Pabbly"
                        width={800}
                        height={450}
                        className="w-full h-auto"
                        loading="lazy"
                    />
                    <div
                        className="absolute inset-0 flex items-center justify-center cursor-pointer"
                        onClick={() => setIsModalOpen(true)}
                        role="button"
                        aria-label="Play Video"
                    >
                        <span
                            className="absolute h-16 w-16 md:h-20 md:w-20 rounded-full"
                            style={{
                                backgroundColor: "rgb(222,84,72)",
                                opacity: 0.7,
                                animation: "pulseEffect 2s infinite",
                            }}
                        ></span>
                        <div className="relative z-10 h-16 w-16 md:h-20 md:w-20 rounded-full bg-[rgb(222,84,72)] flex items-center justify-center">
                            <svg
                                className="w-6 h-6 md:w-10 md:h-10 text-white"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                        <style jsx>{`
                            @keyframes pulseEffect {
                                0% {
                                    transform: scale(0.85);
                                    box-shadow: 0 0 0 0 rgba(222, 94, 72, 0.9);
                                }
                                70% {
                                    transform: scale(1);
                                    box-shadow: 0 0 0 15px rgba(222, 94, 72, 0);
                                }
                                100% {
                                    transform: scale(0.85);
                                    box-shadow: 0 0 0 0 rgba(222, 94, 72, 0);
                                }
                            }
                        `}</style>
                    </div>
                </div>
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                        <div
                            ref={modalRef}
                            className="relative bg-white p-4 rounded-lg max-w-4xl w-full shadow-lg"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl font-bold"
                                aria-label="Close modal"
                            >
                                ×
                            </button>

                            <div className="relative" style={{ paddingBottom: "56.25%" }}>
                                <iframe
                                    className="absolute inset-0 w-full h-full"
                                    src="https://www.youtube.com/embed/u8G_2f5lbEw?rel=0&autoplay=1&modestbranding=1&controls=1&vq=hd1080"
                                    title="Pabbly Video"
                                    allow="autoplay; encrypted-media; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default IntroVideo;
