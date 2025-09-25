// "use client";

// import React, { useEffect, useRef } from 'react';
// import { Github, Play } from 'lucide-react';

// const companies = [
//     { name: 'Shopify', image: 'https://placehold.co/150x50/1d1e21/9ca3af?text=shopify' },
//     { name: 'Philips', image: 'https://placehold.co/150x50/1d1e21/9ca3af?text=PHILIPS' },
//     { name: 'Societe Generale', image: 'https://placehold.co/150x50/1d1e21/9ca3af?text=SOCIETE_GENERALE' },
//     { name: 'Spotify', image: 'https://placehold.co/150x50/1d1e21/9ca3af?text=Spotify' },
//     { name: 'Vodafone', image: 'https://placehold.co/150x50/1d1e21/9ca3af?text=vodafone' },
// ];

// export default function ScrollHero() {
//     const heroRef = useRef<HTMLDivElement>(null);
//     const contentRef = useRef<HTMLDivElement>(null);
//     const diagramRef = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//         // Dynamically load GSAP and ScrollTrigger from CDN
//         const loadGSAP = async () => {
//             if (typeof window.gsap === 'undefined' || typeof window.ScrollTrigger === 'undefined') {
//                 const gsapScript = document.createElement('script');
//                 gsapScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js';
//                 document.head.appendChild(gsapScript);

//                 const scrollTriggerScript = document.createElement('script');
//                 scrollTriggerScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js';
//                 scrollTriggerScript.onload = () => {
//                     initializeGSAP();
//                 };
//                 document.head.appendChild(scrollTriggerScript);
//             } else {
//                 initializeGSAP();
//             }
//         };

//         const initializeGSAP = () => {
//             const hero = heroRef.current;
//             const content = contentRef.current;
//             const diagram = diagramRef.current;

//             if (!hero || !content || !diagram || !window.gsap || !window.ScrollTrigger) return;

//             window.gsap.registerPlugin(window.ScrollTrigger);

//             // Set the initial state of the diagram with GSAP
//             window.gsap.set(diagram, { opacity: 0, y: '90%' });

//             // Create a master timeline for the scroll effect
//             const masterTl = window.gsap.timeline({
//                 scrollTrigger: {
//                     trigger: hero,
//                     start: 'top top',
//                     end: '+=800',
//                     scrub: true,
//                     pin: true,
//                     markers: true,
//                 },
//             });


//             masterTl.to(content, {
//                 scale: 0.85,
//                 opacity: 0,
//                 ease: 'power2.in',
//             });


//             masterTl.to(diagram, {
//                 opacity: 1,
//                 y: '0%',
//                 ease: 'power2.out',
//             }, '>-0.5');


//             masterTl.to(hero, {
//                 backgroundSize: '110%',
//                 ease: 'power1.inOut',
//             }, '<');


//             return () => {
//                 if (window.ScrollTrigger) {
//                     window.ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//                 }
//             };
//         };

//         loadGSAP();

//     }, []);

//     return (
//         <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
//             <main className="relative w-full overflow-hidden">
//                 {/* Hero Section */}
//                 <div
//                     ref={heroRef}
//                     className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-br from-blue-950 via-purple-950 to-pink-950 p-4"
//                     style={{ backgroundSize: '100%' }}
//                 >
//                     <div ref={contentRef} className="z-10 text-center">
//                         <h1 className="mb-4 text-4xl font-bold md:text-6xl lg:text-7xl">
//                             Build and ship software on a <br /> single, collaborative platform
//                         </h1>
//                         <p className="mb-8 text-lg text-gray-400">
//                             Join the world most widely adopted AI-powered developer platform
//                         </p>
//                         <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
//                             <input
//                                 type="email"
//                                 placeholder="Enter your email"
//                                 className="w-full max-w-xs rounded-lg border border-gray-600 bg-gray-800 p-3 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 sm:w-auto"
//                             />
//                             <button className="flex items-center gap-2 rounded-lg bg-green-500 px-6 py-3 font-semibold text-gray-900 transition-all duration-300 ease-in-out hover:bg-green-400 hover:shadow-lg">
//                                 <Github size={20} />
//                                 Sign up for GitHub
//                             </button>
//                             <button className="flex items-center gap-2 rounded-lg border border-gray-600 px-6 py-3 font-semibold text-white transition-all duration-300 ease-in-out hover:bg-gray-700 hover:border-gray-500">
//                                 <Play size={20} />
//                                 Try GitHub Copilot
//                             </button>
//                         </div>
//                     </div>

//                     {/* Faux CI/CD flow image - animated on scroll */}
//                     <div
//                         ref={diagramRef}
//                         className="absolute left-1/2 top-1/2 z-0 hidden h-screen w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-white/10 p-6 shadow-lg backdrop-blur-md md:block"
//                     >
//                         <p className="text-center font-mono text-lg text-gray-300">
//                             <span className="text-purple-400">matrix-build-deploy.yml</span> <br />
//                             <span className="text-gray-500">on: push</span>
//                         </p>
//                         <div className="mt-8 flex items-center justify-around gap-4 text-sm font-semibold">
//                             <div className="flex flex-col items-center gap-2">
//                                 <div className="flex items-center gap-2 rounded-full bg-green-500 px-4 py-1 text-gray-900">
//                                     <span className="text-green-900">•</span>
//                                     Build
//                                 </div>
//                                 <div className="text-gray-400">1m 42s</div>
//                             </div>
//                             <div className="flex flex-col items-center gap-2">
//                                 <div className="flex items-center gap-2 rounded-full bg-gray-600 px-4 py-1 text-white">
//                                     <span className="text-gray-400">•</span>
//                                     Test
//                                 </div>
//                                 <div className="text-gray-400">...</div>
//                             </div>
//                             <div className="flex flex-col items-center gap-2">
//                                 <div className="flex items-center gap-2 rounded-full bg-gray-600 px-4 py-1 text-white">
//                                     <span className="text-gray-400">•</span>
//                                     Publish
//                                 </div>
//                                 <div className="text-gray-400">...</div>
//                             </div>
//                         </div>
//                     </div>

//                 </div>

//                 {/* Brand Logos Section */}
//                 <section className="bg-black py-16">
//                     <div className="container mx-auto px-4">
//                         <div className="flex flex-wrap items-center justify-center gap-8">
//                             {companies.map((company, index) => (
//                                 <div key={index} className="flex-shrink-0">
//                                     <img src={company.image} alt={company.name} className="h-10 w-auto opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0" />
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </section>

//                 {/* Second section to show the effect */}
//                 <section className="min-h-screen bg-gray-950 p-8">
//                     <div className="container mx-auto">
//                         <h2 className="text-center text-4xl font-bold text-white md:text-5xl">
//                             Collaborate and automate with ease
//                         </h2>
//                         <p className="mt-4 text-center text-lg text-gray-400">
//                             Streamline your workflows with automated CI/CD, testing, planning, and project management.
//                         </p>
//                         <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
//                             {/* Feature Cards */}
//                             {['Code', 'Plan', 'Collaborate', 'Automate', 'Secure'].map((feature, index) => (
//                                 <div key={index} className="rounded-lg bg-gray-800 p-6 text-center shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gray-700">
//                                     <h3 className="text-xl font-semibold text-white">{feature}</h3>
//                                     <p className="mt-2 text-sm text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </section>
//             </main>
//         </div>
//     );
// }



// "use client";

// import React, { useEffect, useRef } from 'react';
// import { Github, Play } from 'lucide-react';

// // Dynamically load GSAP and ScrollTrigger from a CDN.
// // This is a common practice to avoid bundling them if they are only used for specific animations.
// const loadGSAP = async () => {
//     // Check if GSAP and ScrollTrigger are already loaded on the window object.
//     if (typeof window.gsap === 'undefined' || typeof window.ScrollTrigger === 'undefined') {
//         // Create a promise to handle script loading.
//         return new Promise<void>((resolve, reject) => {
//             const gsapScript = document.createElement('script');
//             gsapScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js';
//             gsapScript.onload = () => {
//                 const scrollTriggerScript = document.createElement('script');
//                 scrollTriggerScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js';
//                 scrollTriggerScript.onload = () => {
//                     // Register the plugin after both scripts are loaded.
//                     if (window.gsap && window.ScrollTrigger) {
//                         window.gsap.registerPlugin(window.ScrollTrigger);
//                         resolve();
//                     } else {
//                         reject('GSAP or ScrollTrigger failed to load.');
//                     }
//                 };
//                 document.head.appendChild(scrollTriggerScript);
//             };
//             gsapScript.onerror = () => reject('GSAP failed to load.');
//             document.head.appendChild(gsapScript);
//         });
//     } else {
//         // If already loaded, just register the plugin and resolve.
//         if (window.gsap && window.ScrollTrigger) {
//             window.gsap.registerPlugin(window.ScrollTrigger);
//         }
//         return Promise.resolve();
//     }
// };

// const companies = [
//     { name: 'Shopify', image: 'https://placehold.co/150x50/1d1e21/9ca3af?text=shopify' },
//     { name: 'Philips', image: 'https://placehold.co/150x50/1d1e21/9ca3af?text=PHILIPS' },
//     { name: 'Societe Generale', image: 'https://placehold.co/150x50/1d1e21/9ca3af?text=SOCIETE_GENERALE' },
//     { name: 'Spotify', image: 'https://placehold.co/150x50/1d1e21/9ca3af?text=Spotify' },
//     { name: 'Vodafone', image: 'https://placehold.co/150x50/1d1e21/9ca3af?text=vodafone' },
// ];

// const FeatureCard = ({ title, description }: { title: string; description: string }) => (
//     <div className="rounded-lg bg-gray-800 p-6 text-center shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gray-700">
//         <h3 className="text-xl font-semibold text-white">{title}</h3>
//         <p className="mt-2 text-sm text-gray-400">{description}</p>
//     </div>
// );

// export default function ScrollHero() {
//     const heroRef = useRef<HTMLDivElement>(null);
//     const contentRef = useRef<HTMLDivElement>(null);
//     const diagramRef = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//         const initializeGSAP = async () => {
//             try {
//                 // Wait for scripts to load and plugins to be registered.
//                 await loadGSAP();

//                 const hero = heroRef.current;
//                 const content = contentRef.current;
//                 const diagram = diagramRef.current;

//                 if (!hero || !content || !diagram || !window.gsap || !window.ScrollTrigger) return;

//                 // Kill any existing ScrollTrigger instances to prevent conflicts on re-render.
//                 window.ScrollTrigger.getAll().forEach(trigger => trigger.kill());

//                 // Set the initial state of the diagram with GSAP.
//                 // This ensures it starts invisible and positioned correctly before the animation.
//                 window.gsap.set(diagram, { opacity: 0, y: '90%' });

//                 // Create a master timeline for the scroll effect.
//                 const masterTl = window.gsap.timeline({
//                     scrollTrigger: {
//                         trigger: hero,
//                         start: 'top top',
//                         end: '+=800',
//                         scrub: true,
//                         pin: true,
//                     },
//                 });

//                 // First tween: Animate the main content to fade out and scale down.
//                 masterTl.to(content, {
//                     scale: 0.85,
//                     opacity: 0,
//                     ease: 'power2.in',
//                 });

//                 // Second tween: Animate the diagram to fade in and move up.
//                 // The '<' syntax places this animation at the start of the previous one.
//                 masterTl.to(diagram, {
//                     opacity: 1,
//                     y: '0%',
//                     ease: 'power2.out',
//                 }, '<');

//                 // Third tween: Animate the hero background to slightly zoom in.
//                 masterTl.to(hero, {
//                     backgroundSize: '110%',
//                     ease: 'power1.inOut',
//                 }, '<');

//             } catch (error) {
//                 console.error("Failed to load GSAP or initialize animation:", error);
//             }
//         };

//         initializeGSAP();

//         // Cleanup function to kill all ScrollTriggers when the component unmounts.
//         return () => {
//             if (window.ScrollTrigger) {
//                 window.ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//             }
//         };
//     }, []);

//     return (
//         <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
//             <main className="relative w-full overflow-hidden">
//                 {/* Hero Section */}
//                 <div
//                     ref={heroRef}
//                     className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-br from-blue-950 via-purple-950 to-pink-950 p-4"
//                     style={{ backgroundSize: '100%' }}
//                 >
//                     <div ref={contentRef} className="z-10 text-center">
//                         <h1 className="mb-4 text-4xl font-bold md:text-6xl lg:text-7xl">
//                             Build and ship software on a <br /> single, collaborative platform
//                         </h1>
//                         <p className="mb-8 text-lg text-gray-400">
//                             Join the world most widely adopted AI-powered developer platform
//                         </p>
//                         <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
//                             <input
//                                 type="email"
//                                 placeholder="Enter your email"
//                                 className="w-full max-w-xs rounded-lg border border-gray-600 bg-gray-800 p-3 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 sm:w-auto"
//                             />
//                             <button className="flex items-center gap-2 rounded-lg bg-green-500 px-6 py-3 font-semibold text-gray-900 transition-all duration-300 ease-in-out hover:bg-green-400 hover:shadow-lg">
//                                 <Github size={20} />
//                                 Sign up for GitHub
//                             </button>
//                             <button className="flex items-center gap-2 rounded-lg border border-gray-600 px-6 py-3 font-semibold text-white transition-all duration-300 ease-in-out hover:bg-gray-700 hover:border-gray-500">
//                                 <Play size={20} />
//                                 Try GitHub Copilot
//                             </button>
//                         </div>
//                     </div>

//                     {/* Faux CI/CD flow image - animated on scroll */}
//                     <div
//                         ref={diagramRef}
//                         className="absolute left-1/2 top-1/2 z-10 max-w-7xl hidden h-screen w-full -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-white/10 p-6 shadow-lg backdrop-blur-md md:block"
//                     >
//                         <p className="text-center font-mono text-lg text-gray-300">
//                             <span className="text-purple-400">matrix-build-deploy.yml</span> <br />
//                             <span className="text-gray-500">on: push</span>
//                         </p>
//                         <div className="mt-8 flex items-center justify-around gap-4 text-sm font-semibold">
//                             {/* Diagram elements (simplified) */}
//                             <div className="flex flex-col items-center gap-2">
//                                 <div className="flex items-center gap-2 rounded-full bg-green-500 px-4 py-1 text-gray-900">
//                                     <span className="text-green-900">•</span>
//                                     Build
//                                 </div>
//                                 <div className="text-gray-400">1m 42s</div>
//                             </div>
//                             <div className="flex flex-col items-center gap-2">
//                                 <div className="flex items-center gap-2 rounded-full bg-gray-600 px-4 py-1 text-white">
//                                     <span className="text-gray-400">•</span>
//                                     Test
//                                 </div>
//                                 <div className="text-gray-400">...</div>
//                             </div>
//                             <div className="flex flex-col items-center gap-2">
//                                 <div className="flex items-center gap-2 rounded-full bg-gray-600 px-4 py-1 text-white">
//                                     <span className="text-gray-400">•</span>
//                                     Publish
//                                 </div>
//                                 <div className="text-gray-400">...</div>
//                             </div>
//                         </div>
//                     </div>

//                 </div>

//                 {/* Brand Logos Section */}
//                 <section className="bg-black py-16">
//                     <div className="container mx-auto px-4">
//                         <div className="flex flex-wrap items-center justify-center gap-8">
//                             {companies.map((company, index) => (
//                                 <div key={index} className="flex-shrink-0">
//                                     <img src={company.image} alt={company.name} className="h-10 w-auto opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0" />
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </section>

//                 {/* Second section to show the effect */}
//                 <section className="min-h-screen bg-gray-950 p-8">
//                     <div className="container mx-auto">
//                         <h2 className="text-center text-4xl font-bold text-white md:text-5xl">
//                             Collaborate and automate with ease
//                         </h2>
//                         <p className="mt-4 text-center text-lg text-gray-400">
//                             Streamline your workflows with automated CI/CD, testing, planning, and project management.
//                         </p>
//                         <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
//                             {/* Feature Cards */}
//                             {['Code', 'Plan', 'Collaborate', 'Automate', 'Secure'].map((feature, index) => (
//                                 <FeatureCard
//                                     key={index}
//                                     title={feature}
//                                     description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
//                                 />
//                             ))}
//                         </div>
//                     </div>
//                 </section>
//             </main>
//         </div>
//     );
// }


// "use client";

// import React, { useEffect, useRef } from 'react';
// import { Github, Play } from 'lucide-react';

// const loadGSAP = async () => {
//     if (typeof window.gsap === 'undefined' || typeof window.ScrollTrigger === 'undefined') {
//         return new Promise<void>((resolve, reject) => {
//             const gsapScript = document.createElement('script');
//             gsapScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js';
//             gsapScript.onload = () => {
//                 const scrollTriggerScript = document.createElement('script');
//                 scrollTriggerScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js';
//                 scrollTriggerScript.onload = () => {
//                     if (window.gsap && window.ScrollTrigger) {
//                         window.gsap.registerPlugin(window.ScrollTrigger);
//                         resolve();
//                     } else {
//                         reject('GSAP or ScrollTrigger failed to load.');
//                     }
//                 };
//                 document.head.appendChild(scrollTriggerScript);
//             };
//             gsapScript.onerror = () => reject('GSAP failed to load.');
//             document.head.appendChild(gsapScript);
//         });
//     } else {
//         if (window.gsap && window.ScrollTrigger) {
//             window.gsap.registerPlugin(window.ScrollTrigger);
//         }
//         return Promise.resolve();
//     }
// };

// const companies = [
//     { name: 'Shopify', image: 'https://placehold.co/150x50/1d1e21/9ca3af?text=shopify' },
//     { name: 'Philips', image: 'https://placehold.co/150x50/1d1e21/9ca3af?text=PHILIPS' },
//     { name: 'Societe Generale', image: 'https://placehold.co/150x50/1d1e21/9ca3af?text=SOCIETE_GENERALE' },
//     { name: 'Spotify', image: 'https://placehold.co/150x50/1d1e21/9ca3af?text=Spotify' },
//     { name: 'Vodafone', image: 'https://placehold.co/150x50/1d1e21/9ca3af?text=vodafone' },
// ];

// const FeatureCard = ({ title, description }: { title: string; description: string }) => (
//     <div className="rounded-lg bg-gray-800 p-6 text-center shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gray-700">
//         <h3 className="text-xl font-semibold text-white">{title}</h3>
//         <p className="mt-2 text-sm text-gray-400">{description}</p>
//     </div>
// );

// export default function ScrollHero() {
//     const heroRef = useRef<HTMLDivElement>(null);
//     const contentRef = useRef<HTMLDivElement>(null);
//     const diagramRef = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//         const initializeGSAP = async () => {
//             try {
//                 await loadGSAP();

//                 const hero = heroRef.current;
//                 const content = contentRef.current;
//                 const diagram = diagramRef.current;

//                 if (!hero || !content || !diagram || !window.gsap || !window.ScrollTrigger) return;

//                 window.ScrollTrigger.getAll().forEach(trigger => trigger.kill());

//                 window.gsap.set(diagram, { opacity: 0, y: '90%' });

//                 const masterTl = window.gsap.timeline({
//                     scrollTrigger: {
//                         trigger: hero,
//                         start: 'top top',
//                         end: '+=800',
//                         scrub: true,
//                         pin: true,
//                     },
//                 });

//                 masterTl.to(content, {
//                     scale: 0.85,
//                     opacity: 0,
//                     ease: 'power2.in',
//                 });

//                 masterTl.to(diagram, {
//                     opacity: 1,
//                     y: '0%',
//                     ease: 'power2.out',
//                 }, '<');

//                 masterTl.to(hero, {
//                     backgroundSize: '110%',
//                     ease: 'power1.inOut',
//                 }, '<');

//             } catch (error) {
//                 console.error("Failed to load GSAP or initialize animation:", error);
//             }
//         };

//         initializeGSAP();

//         return () => {
//             if (window.ScrollTrigger) {
//                 window.ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//             }
//         };
//     }, []);

//     return (
//         <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
//             <main className="relative w-full overflow-hidden">
//                 <div
//                     ref={heroRef}
//                     className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-br from-blue-950 via-purple-950 to-pink-950 p-4"
//                     style={{ backgroundSize: '100%' }}
//                 >
//                     <div ref={contentRef} className="z-10 text-center">
//                         <h1 className="mb-4 text-4xl font-bold md:text-6xl lg:text-7xl">
//                             Build and ship software on a <br /> single, collaborative platform
//                         </h1>
//                         <p className="mb-8 text-lg text-gray-400">
//                             Join the world most widely adopted AI-powered developer platform
//                         </p>
//                         <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
//                             <input
//                                 type="email"
//                                 placeholder="Enter your email"
//                                 className="w-full max-w-xs rounded-lg border border-gray-600 bg-gray-800 p-3 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 sm:w-auto"
//                             />
//                             <button className="flex items-center gap-2 rounded-lg bg-green-500 px-6 py-3 font-semibold text-gray-900 transition-all duration-300 ease-in-out hover:bg-green-400 hover:shadow-lg">
//                                 <Github size={20} />
//                                 Sign up for GitHub
//                             </button>
//                             <button className="flex items-center gap-2 rounded-lg border border-gray-600 px-6 py-3 font-semibold text-white transition-all duration-300 ease-in-out hover:bg-gray-700 hover:border-gray-500">
//                                 <Play size={20} />
//                                 Try GitHub Copilot
//                             </button>
//                         </div>
//                     </div>

//                     <div
//                         ref={diagramRef}
//                         className="absolute left-1/2 top-1/2 z-10 max-w-7xl hidden h-screen w-full -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-white/10 p-6 shadow-lg backdrop-blur-md md:block"
//                     >
//                         <p className="text-center font-mono text-lg text-gray-300">
//                             <span className="text-purple-400">matrix-build-deploy.yml</span> <br />
//                             <span className="text-gray-500">on: push</span>
//                         </p>
//                         <div className="mt-8 flex items-center justify-around gap-4 text-sm font-semibold">
//                             <div className="flex flex-col items-center gap-2">
//                                 <div className="flex items-center gap-2 rounded-full bg-green-500 px-4 py-1 text-gray-900">
//                                     <span className="text-green-900">•</span>
//                                     Build
//                                 </div>
//                                 <div className="text-gray-400">1m 42s</div>
//                             </div>
//                             <div className="flex flex-col items-center gap-2">
//                                 <div className="flex items-center gap-2 rounded-full bg-gray-600 px-4 py-1 text-white">
//                                     <span className="text-gray-400">•</span>
//                                     Test
//                                 </div>
//                                 <div className="text-gray-400">...</div>
//                             </div>
//                             <div className="flex flex-col items-center gap-2">
//                                 <div className="flex items-center gap-2 rounded-full bg-gray-600 px-4 py-1 text-white">
//                                     <span className="text-gray-400">•</span>
//                                     Publish
//                                 </div>
//                                 <div className="text-gray-400">...</div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <section className="bg-black py-16">
//                     <div className="container mx-auto px-4">
//                         <div className="flex flex-wrap items-center justify-center gap-8">
//                             {companies.map((company, index) => (
//                                 <div key={index} className="flex-shrink-0">
//                                     <img src={company.image} alt={company.name} className="h-10 w-auto opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0" />
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </section>

//                 <section className="min-h-screen bg-gray-950 p-8">
//                     <div className="container mx-auto">
//                         <h2 className="text-center text-4xl font-bold text-white md:text-5xl">
//                             Collaborate and automate with ease
//                         </h2>
//                         <p className="mt-4 text-center text-lg text-gray-400">
//                             Streamline your workflows with automated CI/CD, testing, planning, and project management.
//                         </p>
//                         <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
//                             {['Code', 'Plan', 'Collaborate', 'Automate', 'Secure'].map((feature, index) => (
//                                 <FeatureCard
//                                     key={index}
//                                     title={feature}
//                                     description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
//                                 />
//                             ))}
//                         </div>
//                     </div>
//                 </section>
//             </main>
//         </div>
//     );
// }



// "use client";

// import React, { useEffect, useRef } from 'react';
// import { Github, Play } from 'lucide-react';


// const loadGSAP = async () => {
//     if (typeof window.gsap === 'undefined' || typeof window.ScrollTrigger === 'undefined') {
//         return new Promise<void>((resolve, reject) => {
//             const gsapScript = document.createElement('script');
//             gsapScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js';
//             gsapScript.onload = () => {
//                 const scrollTriggerScript = document.createElement('script');
//                 scrollTriggerScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js';
//                 scrollTriggerScript.onload = () => {
//                     if (window.gsap && window.ScrollTrigger) {
//                         window.gsap.registerPlugin(window.ScrollTrigger);
//                         resolve();
//                     } else {
//                         reject('GSAP or ScrollTrigger failed to load.');
//                     }
//                 };
//                 document.head.appendChild(scrollTriggerScript);
//             };
//             gsapScript.onerror = () => reject('GSAP failed to load.');
//             document.head.appendChild(gsapScript);
//         });
//     } else {
//         if (window.gsap && window.ScrollTrigger) {
//             window.gsap.registerPlugin(window.ScrollTrigger);
//         }
//         return Promise.resolve();
//     }
// };

// const companies = [
//     { name: 'Shopify', image: 'https://placehold.co/150x50/1d1e21/9ca3af?text=shopify' },
//     { name: 'Philips', image: 'https://placehold.co/150x50/1d1e21/9ca3af?text=PHILIPS' },
//     { name: 'Societe Generale', image: 'https://placehold.co/150x50/1d1e21/9ca3af?text=SOCIETE_GENERALE' },
//     { name: 'Spotify', image: 'https://placehold.co/150x50/1d1e21/9ca3af?text=Spotify' },
//     { name: 'Vodafone', image: 'https://placehold.co/150x50/1d1e21/9ca3af?text=vodafone' },
// ];

// const FeatureCard = ({ title, description }: { title: string; description: string }) => (
//     <div className="rounded-lg bg-gray-800 p-6 text-center shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gray-700">
//         <h3 className="text-xl font-semibold text-white">{title}</h3>
//         <p className="mt-2 text-sm text-gray-400">{description}</p>
//     </div>
// );

// export default function ScrollHero() {
//     const heroRef = useRef<HTMLDivElement>(null);
//     const contentRef = useRef<HTMLDivElement>(null);
//     const diagramRef = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//         const initializeGSAP = async () => {
//             try {
//                 await loadGSAP();

//                 const hero = heroRef.current;
//                 const content = contentRef.current;
//                 const diagram = diagramRef.current;


//                 window.gsap.set(diagram, { opacity: 0, y: '90%' });

//                 const masterTl = window.gsap.timeline({
//                     scrollTrigger: {
//                         trigger: hero,
//                         start: 'top top',
//                         end: '+=800',
//                         scrub: true,
//                         pin: true,
//                     },
//                 });

//                 masterTl.to(content, {
//                     scale: 0.85,
//                     opacity: 0,
//                     ease: 'power2.in',
//                 });

//                 masterTl.to(diagram, {
//                     opacity: 1,
//                     y: '0%',
//                     ease: 'power2.out',
//                 }, '<');

//                 masterTl.to(hero, {
//                     backgroundSize: '40%',
//                     ease: 'power1.inOut',
//                 }, '<');

//             } catch (error) {
//                 console.error("Failed to load GSAP or initialize animation:", error);
//             }
//         };

//         initializeGSAP();


//     }, []);

//     return (
//         <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
//             <main className="relative w-full overflow-hidden">
//                 <div
//                     ref={heroRef}
//                     className="relative flex min-h-screen w-full items-center justify-center overflow-hidden  p-4"
//                     style={{ backgroundSize: '100%' }}
//                 >
//                     <div ref={contentRef} className="z-10 text-center">
//                         <h1 className="mb-4 text-4xl font-semibold md:text-6xl lg:text-7xl">
//                             Build and ship software on a <br /> single, collaborative platform
//                         </h1>
//                         <p className="mb-8 text-lg text-gray-400">
//                             Join the world most widely adopted AI-powered developer platform
//                         </p>
//                         <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
//                             <input
//                                 type="email"
//                                 placeholder="Enter your email"
//                                 className="w-full max-w-xs rounded-lg border border-gray-600 bg-gray-800 p-3 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 sm:w-auto"
//                             />
//                             <button className="flex items-center gap-2 rounded-lg bg-green-500 px-6 py-3 font-semibold text-gray-900 transition-all duration-300 ease-in-out hover:bg-green-400 hover:shadow-lg">
//                                 <Github size={20} />
//                                 Sign up for GitHub
//                             </button>
//                             <button className="flex items-center gap-2 rounded-lg border border-gray-600 px-6 py-3 font-semibold text-white transition-all duration-300 ease-in-out hover:bg-gray-700 hover:border-gray-500">
//                                 <Play size={20} />
//                                 Try GitHub Copilot
//                             </button>
//                         </div>
//                     </div>

//                     {/* transition  */}
//                     <div
//                         ref={diagramRef}
//                         className="absolute left-1/2 top-1/2 z-10 max-w-7xl hidden  w-full -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-white/40 p-16 shadow-lg backdrop-blur-md md:block"
//                     >
//                         <div className="bg-white h-screen rounded-lg">
//                             <p className="text-center font-mono text-lg text-gray-300">
//                                 <span className="text-purple-400">matrix-build-deploy.yml</span> <br />
//                                 <span className="text-gray-500">on: push</span>
//                             </p>
//                             <div className="mt-8 flex items-center justify-around gap-4 text-sm font-semibold">
//                                 <div className="flex flex-col items-center gap-2">
//                                     <div className="flex items-center gap-2 rounded-full bg-green-500 px-4 py-1 text-gray-900">
//                                         <span className="text-green-900">•</span>
//                                         Build
//                                     </div>
//                                     <div className="text-gray-400">1m 42s</div>
//                                 </div>
//                                 <div className="flex flex-col items-center gap-2">
//                                     <div className="flex items-center gap-2 rounded-full bg-gray-600 px-4 py-1 text-white">
//                                         <span className="text-gray-400">•</span>
//                                         Test
//                                     </div>
//                                     <div className="text-gray-400">...</div>
//                                 </div>
//                                 <div className="flex flex-col items-center gap-2">
//                                     <div className="flex items-center gap-2 rounded-full bg-gray-600 px-4 py-1 text-white">
//                                         <span className="text-gray-400">•</span>
//                                         Publish
//                                     </div>
//                                     <div className="text-gray-400">...</div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </main>
//         </div>
//     );
// }






// "use client";

// import React, { useEffect, useRef } from 'react';
// import { Github, Play } from 'lucide-react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);





// // New method to initialize GSAP animations
// const initGSAPAnimations = (hero: HTMLDivElement, content: HTMLDivElement, diagram: HTMLDivElement) => {
//     gsap.set(diagram, { opacity: '50%', y: '100%' });

//     const masterTl = gsap.timeline({
//         scrollTrigger: {
//             trigger: hero,
//             start: 'top top',
//             end: '+=800',
//             scrub: true,
//             pin: true,
//         },
//     });

//     masterTl.to(content, {
//         scale: 0.85,
//         opacity: 0,
//         ease: 'power2.in',
//     });

//     masterTl.to(diagram, {
//         opacity: 1,
//         y: '0%',
//         ease: 'power2.out',
//     }, '<');

//     masterTl.to(hero, {
//         backgroundSize: '70%',
//         ease: 'power1.inOut',
//     }, '<');
// };

// export default function ScrollHero() {
//     const heroRef = useRef<HTMLDivElement>(null);
//     const contentRef = useRef<HTMLDivElement>(null);
//     const diagramRef = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//         const hero = heroRef.current;
//         const content = contentRef.current;
//         const diagram = diagramRef.current;

//         if (hero && content && diagram) {
//             initGSAPAnimations(hero, content, diagram);
//         }
//     }, []);

//     return (
//         <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
//             <main className="relative w-full overflow-hidden">
//                 <div
//                     ref={heroRef}
//                     className="relative flex min-h-screen w-full items-center justify-center overflow-hidden  p-4"
//                     style={{ backgroundSize: '100%' }}
//                 >
//                     {/* Hero content  */}
//                     <div ref={contentRef} className="z-10 text-center">
//                         <h1 className="mb-4 text-4xl font-semibold md:text-6xl lg:text-7xl">
//                             Build and ship software on a <br /> single, collaborative platform
//                         </h1>
//                         <p className="mb-8 text-lg text-gray-400">
//                             Join the world most widely adopted AI-powered developer platform
//                         </p>
//                         <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
//                             <input
//                                 type="email"
//                                 placeholder="Enter your email"
//                                 className="w-full max-w-xs rounded-lg border border-gray-600 bg-gray-800 p-3 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 sm:w-auto"
//                             />
//                             <button className="flex items-center gap-2 rounded-lg bg-green-500 px-6 py-3 font-semibold text-gray-900 transition-all duration-300 ease-in-out hover:bg-green-400 hover:shadow-lg">
//                                 <Github size={20} />
//                                 Sign up for GitHub
//                             </button>
//                             <button className="flex items-center gap-2 rounded-lg border border-gray-600 px-6 py-3 font-semibold text-white transition-all duration-300 ease-in-out hover:bg-gray-700 hover:border-gray-500">
//                                 <Play size={20} />
//                                 Try GitHub Copilot
//                             </button>
//                         </div>
//                     </div>

//                     {/* transition  */}
//                     <div
//                         ref={diagramRef}
//                         className="absolute left-1/2 top-1/2 z-10 max-w-7xl hidden opacity-0  w-full -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-white/40 p-16 shadow-lg backdrop-blur-md md:block"
//                     >
//                         <div className="bg-white h-screen rounded-lg">
//                             <p className="text-center font-mono text-lg text-gray-300">
//                                 <span className="text-purple-400">matrix-build-deploy.yml</span> <br />
//                                 <span className="text-gray-500">on: push</span>
//                             </p>
//                             <div className="mt-8 flex items-center justify-around gap-4 text-sm font-semibold">
//                                 <div className="flex flex-col items-center gap-2">
//                                     <div className="flex items-center gap-2 rounded-full bg-green-500 px-4 py-1 text-gray-900">
//                                         <span className="text-green-900">•</span>
//                                         Build
//                                     </div>
//                                     <div className="text-gray-400">1m 42s</div>
//                                 </div>
//                                 <div className="flex flex-col items-center gap-2">
//                                     <div className="flex items-center gap-2 rounded-full bg-gray-600 px-4 py-1 text-white">
//                                         <span className="text-gray-400">•</span>
//                                         Test
//                                     </div>
//                                     <div className="text-gray-400">...</div>
//                                 </div>
//                                 <div className="flex flex-col items-center gap-2">
//                                     <div className="flex items-center gap-2 rounded-full bg-gray-600 px-4 py-1 text-white">
//                                         <span className="text-gray-400">•</span>
//                                         Publish
//                                     </div>
//                                     <div className="text-gray-400">...</div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </main>
//         </div>
//     );
// }



"use client";
import React, { useEffect, useRef } from 'react';
import { Github, Play } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// GSAP animation initializer
const initGSAPAnimations = (
    hero: HTMLDivElement,
    content: HTMLDivElement,
    diagram: HTMLDivElement,
    heading: HTMLHeadingElement
) => {
    gsap.set(diagram, { opacity: '100%', y: '100%' });

    const masterTl = gsap.timeline({
        scrollTrigger: {
            trigger: hero,
            start: 'top top',
            end: '+=800',
            scrub: true,
            // markers: true,
            pin: true,
        },
    });

    masterTl.to(content, {
        scale: -1.25,
        opacity: 0,
        ease: 'power2.in',
    });

    masterTl.to(diagram, {
        opacity: 1,
        y: '0%',
        ease: 'power2.out',
    }, '<');

    masterTl.to(hero, {
        backgroundSize: '20%',
        ease: 'power2.inOut',
    }, '<');

    // Shrink heading at bottom 10%
    gsap.to(heading, {
        scrollTrigger: {
            trigger: document.body,
            start: 'bottom bottom',
            toggleActions: 'play none none reverse',
        },
        scale: -2.7,
        duration: 1.5,
        ease: 'power2.inOut',
    });
};

export default function ScrollHero() {
    const heroRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const diagramRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const hero = heroRef.current;
        const content = contentRef.current;
        const diagram = diagramRef.current;
        const heading = headingRef.current;

        if (hero && content && diagram && heading) {
            initGSAPAnimations(hero, content, diagram, heading);
        }
    }, []);

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
            <main className="relative w-full overflow-hidden">
                <div
                    ref={heroRef}
                    className="relative flex min-h-screen w-full items-center justify-center overflow-hidden p-4"
                    style={{ backgroundSize: '100%' }}
                >
                    {/* Hero content */}
                    <div ref={contentRef} className="z-10 text-center">
                        <h1
                            ref={headingRef}
                            className="mb-4 text-4xl font-semibold md:text-6xl lg:text-7xl transition-transform"
                        >
                            Build and ship software on a <br /> single, collaborative platform
                        </h1>
                        <p className="mb-8 text-lg text-gray-400">
                            Join the world most widely adopted AI-powered developer platform
                        </p>
                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">

                            <button className="flex items-center gap-2 rounded-lg bg-green-500 px-6 py-3 font-semibold text-gray-900 transition-all duration-300 ease-in-out hover:bg-green-400 hover:shadow-lg">
                                <Github size={20} />
                                Sign up for GitHub
                            </button>
                            <button className="flex items-center gap-2 rounded-lg border border-gray-600 px-6 py-3 font-semibold text-white transition-all duration-300 ease-in-out hover:bg-gray-700 hover:border-gray-500">
                                <Play size={20} />
                                Try GitHub Copilot
                            </button>
                        </div>
                    </div>

                    {/* Transition diagram */}
                    <div
                        ref={diagramRef}
                        className="absolute left-1/2 top-1/2 z-10 max-w-7xl hidden opacity-0 w-full -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-white/40 p-9 shadow-lg backdrop-blur-md md:block"
                    >
                        <div className="bg-white h-screen rounded-lg">
                            <p className="text-center font-mono text-lg text-gray-700">
                                <span className="text-purple-600">New section </span> <br />
                                <span className="text-gray-800">on: push</span>
                            </p>
                            <div className="mt-8 flex items-center justify-around gap-4 text-sm font-semibold">
                                <div className="flex flex-col items-center gap-2">
                                    <div className="flex items-center gap-2 rounded-full bg-green-500 px-4 py-1 text-gray-900">
                                        <span className="text-green-900">•</span>
                                        Build
                                    </div>
                                    <div className="text-gray-700">1m 42s</div>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <div className="flex items-center gap-2 rounded-full bg-gray-700 px-4 py-1 text-white">
                                        <span className="text-gray-300">•</span>
                                        Test
                                    </div>
                                    <div className="text-gray-700">...</div>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <div className="flex items-center gap-2 rounded-full bg-gray-700 px-4 py-1 text-white">
                                        <span className="text-gray-300">•</span>
                                        Publish
                                    </div>
                                    <div className="text-gray-700">...</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
