

"use client";

import Image from 'next/image';
// import Link from 'next/link';
import React from 'react';

const GetStart: React.FC = () => {
    const logos = [
        "/icone/ee1ry99Oe0d2WUki7jk9Ku9YR1s.svg",
        "/icone/5897d5b7-601a-4661-aa87-89dd05c0e897.png",
        "/icone/gqEG0tU9xNMvVckKKE5Sm4A.svg",
        "/icone/JX2KZJ17m51NYxf4Mdb4ihe7DHw.svg",
        "/icone/UnrpcnMBquT6dk4kGEYRrsniV8.svg",
        "/icone/WcS7OGKZjwMrGZg5tPQjVvfls8.svg",
    ];

    return (
        <section id='process' className="py-20 bg-white text-center overflow-x-hidden">
            <div className="max-w-5xl mx-auto px-4">
                {/* Header */}
                <div className="mb-16">
                    {/* <Link data-aos="fade-up"
                        href="https://www.framer.com/updates"
                        className="inline-flex items-center border border-blue-600 rounded-full px-2 py-1 mb-4 hover:bg-blue-50 transition"
                    >
                        <span className="bg-gradient-to-r from-blue-200 via-blue-800 to-blue-600 text-white text-xs font-semibold rounded-full px-3 py-1 mr-2">
                            How
                        </span>
                        <span className="text-sm text-gray-900">It Works </span>
                    </Link> */}
                    <span data-aos="fade-up" className="inline-flex items-center border border-blue-600 rounded-full px-2 py-1 mb-4 hover:bg-blue-50 transition">
                        <span className="bg-gradient-to-r from-blue-200 via-blue-800 to-blue-600 text-white text-xs font-semibold rounded-full px-3 py-1 mr-2">
                            How
                        </span>
                        <span className="text-sm text-gray-900">It Works </span>
                    </span>

                    <h2 className="text-2xl md:text-4xl font-gotu mt-4">
                        Create & Share Your {' '}
                        <br className="hidden md:inline" />
                        Digital Identity Seamlessly!
                    </h2>


                </div>

                {/* Cards */}
                <div className="flex flex-col pt-10 md:flex-row justify-around items-start md:items-stretch gap-8 relative">

                    {/* Step One */}
                    <div className="relative bg-gray-100 p-3 rounded-2xl shadow-lg border border-blue-100 w-full md:w-1/3">
                        <Image
                            width={1200}
                            height={1200}
                            src="/icone/4BdF0AE6FOGdEty3aBkUq5U6c.svg"
                            alt="Step One"
                            className="hidden md:block absolute -top-20 left-1/2 transform -translate-x-1/2 w-20 h-20 object-contain"
                        />


                        {/* <div data-aos="zoom-in" className="space-y-2 bg-white p-3 rounded-2xl">
                            <div data-aos="fade-up" data-aos-delay="100" className="flex items-center bg-gray-50 p-2 rounded-lg">
                                <span className="w-5 h-5 mr-2 text-gray-500">👤</span>
                                <input type="text" placeholder="Your name" className="bg-transparent w-full focus:outline-none" />
                            </div>
                            <div data-aos="fade-up" data-aos-delay="200" className="flex items-center bg-gray-50 p-2 rounded-lg">
                                <span className="w-5 h-5 mr-2 text-gray-500">📧</span>
                                <input type="email" placeholder="Email address" className="bg-transparent w-full focus:outline-none" />
                            </div>
                            <div data-aos="fade-up" data-aos-delay="300" className="flex items-center bg-gray-50 p-2 rounded-lg">
                                <span className="w-5 h-5 mr-2 text-gray-500">🔒</span>
                                <input type="password" placeholder="Password" className="bg-transparent w-full focus:outline-none" />
                            </div>
                            <div data-aos="fade-up" data-aos-delay="400" className="flex items-center bg-gray-50 p-2 rounded-lg">
                                <span className="w-5 h-5 mr-2 text-gray-500">🔒</span>
                                <input type="password" placeholder="Retype password" className="bg-transparent w-full focus:outline-none" />
                            </div>
                            <button data-aos="zoom-in" data-aos-delay="100" className="w-full bg-gray-900 text-white py-2 rounded-full mt-4 hover:bg-gray-800 transition">
                                Sign In
                            </button>
                        </div> */}
                        <div
                            data-aos="zoom-in"
                            className="mb-2 relative flex justify-center items-center"
                            style={{ height: '290px' }}
                        >
                            <Image
                                src="/image/WhatsApp Image 2025-09-25 at 10.51.44_dac06862.jpg"
                                alt="Step Two"
                                className='rounded-2xl '
                                width={1200}
                                height={1200}
                                style={{
                                    maxHeight: '100%',
                                    maxWidth: '100%',
                                    objectFit: 'contain'
                                }}
                            />
                        </div>

                        <h3 className="text-lg text-gray-900 mb-2">Download ProfileXpert</h3>
                        <p className="text-gray-600 text-center mb-4">Get started by downloading the ProfileXpert app on your device.</p>
                    </div>

                    {/* Step Two - Elevated Center */}


                    <div className="relative bg-gray-100 p-3 rounded-2xl shadow-xl border border-blue-100 w-full md:w-1/3 transform md:-translate-y-10 z-10">
                        {/* {[
                                { icon: '🎮', title: 'Game Controller', price: '$85.45/2.000' },
                                { icon: '🌍', title: 'Tour & Travels', price: '$85.45/2.000' },
                                { icon: '🍽️', title: 'Dining & Drinking', price: '$85.45/2.000' },
                            ].map((item, idx) => (
                                <div key={idx} data-aos="fade-up" data-aos-delay="100" className="flex items-center bg-gray-50 p-2 rounded-lg">
                                    <span className="w-5 h-5 mr-2 text-gray-500">{item.icon}</span>
                                    <div>
                                        <h4 className="text-sm font-medium text-gray-900">{item.title}</h4>
                                        <p className="text-xs text-gray-600">{item.price}</p>
                                    </div>
                                </div>
                            ))} */}
                        {/* <div data-aos="zoom-in" className="space-y-4 bg-white p-3 rounded-2xl mb-4">

                            <Image
                                width={1200}
                                height={1200}
                                src="/icone/Eq7bZLtxdRsbjbeOdCJCwKZAr3s.svg"
                                alt="Step Two"
                                className="hidden md:block absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-auto h-12"
                            />

                        </div> */}
                        {/* <div data-aos="zoom-in" className=" bg-white rounded-2xl mb-4 relative" style={{ height: '100px' }}>
                            <Image
                                width={1200}
                                height={1200}
                                src="/image/WhatsApp Image 2025-09-25 at 10.40.44_d36ec3d1.jpg"
                                alt="Step Two"
                                className="w-auto h-12"
                            />
                        </div> */}
                        <div
                            data-aos="zoom-in"
                            className="mb-2 relative flex justify-center items-center"
                            style={{ height: '190px' }}
                        >
                            <Image
                                src="/image/WhatsApp Image 2025-09-25 at 10.40.44_d36ec3d1.jpg"
                                alt="Step Two"
                                className='rounded-2xl '
                                width={1200}
                                height={1200}
                                style={{
                                    maxHeight: '100%',
                                    maxWidth: '100%',
                                    objectFit: 'contain'
                                }}
                            />
                        </div>


                        <Image
                            width={1200}
                            height={1200}
                            src="/icone/Eq7bZLtxdRsbjbeOdCJCwKZAr3s.svg"
                            alt="Step Two"
                            className="hidden md:block absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-auto h-12"
                        />
                        <h3 className="text-xl text-gray-900 pt-6 mb-2">Create Your Digital Card</h3>
                        <p className="text-gray-600 text-center mb-4">Customize your profile with stunning layouts, templates, and QR codes.</p>

                        {/* Inline style for marquee animation */}
                        <style jsx>{`
                            @keyframes marquee {
                                0% {
                                    transform: translateX(0%);
                                }
                                100% {
                                    transform: translateX(-40%);
                                }
                            }
                            .animate-marquee {
                                animation: marquee 20s linear infinite;
                            }
                        `}</style>

                    </div>

                    {/* Step Three */}
                    <div className="relative bg-gray-100 p-3 rounded-2xl shadow-lg border border-blue-100 w-full md:w-1/3">
                        <Image
                            width={1200}
                            height={1200}
                            src="/icone/3lKS2Wc6Okdyq40yC6xhu4iIu4.svg"
                            alt="Step Three"
                            className="hidden md:block absolute -top-18 left-1/2 transform -translate-x-1/2 w-auto h-12"
                        />

                        {/* <div data-aos="zoom-in" className="space-y-4 bg-white p-3 rounded-2xl mb-4">
                            {[
                                { icon: '🎮', title: 'Game Controller', price: '$85.45/2.000' },
                                { icon: '🌍', title: 'Tour & Travels', price: '$85.45/2.000' },
                                { icon: '🍽️', title: 'Dining & Drinking', price: '$85.45/2.000' },
                            ].map((item, idx) => (
                                <div key={idx} data-aos="fade-up" data-aos-delay="100" className="flex items-center bg-gray-50 p-2 rounded-lg">
                                    <span className="w-5 h-5 mr-2 text-gray-500">{item.icon}</span>
                                    <div>
                                        <h4 className="text-sm font-medium text-gray-900">{item.title}</h4>
                                        <p className="text-xs text-gray-600">{item.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div> */}

                        <div data-aos="zoom-in" className="bg-white p-3 rounded-2xl">

                            {/* Icon/Image */}
                            <div className="flex justify-center mb-16 relative">
                                <div className="w-20 h-20 rounded-full flex items-center justify-center">
                                    <Image
                                        width={1200}
                                        height={1200} src="/icone/XX9NQlXfHuwaOfdjFYjycneQh4.svg" alt="0" className="h-18 w-18" />
                                </div>

                                <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-96 h-24 opacity-70 pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100" className="w-full h-full">
                                        {/* Static base path with all lines slightly shortened and rounded */}
                                        <path
                                            d="M200 0 
               V30 
               Q200 34 192 34 
               H128 
               Q120 34 120 38 
               V64
               M200 30 
               Q200 34 208 34 
               H272 
               Q280 34 280 38 
               V64"
                                            stroke="#E8EBF0"
                                            strokeWidth="1.5"
                                            fill="none"
                                            strokeLinecap="round"
                                        />

                                        {/* Animated left branch */}
                                        <path
                                            d="M200 0 
               V30 
               Q200 34 192 34 
               H128 
               Q120 34 120 38 
               V64"
                                            stroke="rgb(55, 88, 249)"
                                            strokeWidth="1.5"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeDasharray="20 100"
                                            pathLength="100"
                                        >
                                            <animate
                                                attributeName="stroke-dashoffset"
                                                values="100;0"
                                                dur="2s"
                                                repeatCount="indefinite"
                                            />
                                        </path>

                                        {/* Animated right branch */}
                                        <path
                                            d="M200 0 
               V30 
               Q200 34 208 34 
               H272 
               Q280 34 280 38 
               V64"
                                            stroke="rgb(55, 88, 249)"
                                            strokeWidth="1.5"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeDasharray="20 100"
                                            pathLength="100"
                                        >
                                            <animate
                                                attributeName="stroke-dashoffset"
                                                values="100;0"
                                                dur="2s"
                                                repeatCount="indefinite"
                                            />
                                        </path>
                                    </svg>
                                </div>



                            </div>

                            {/* Marquee of logos */}

                            <div className="overflow-hidden w-full">
                                <div className="flex w-max animate-marquee whitespace-nowrap gap-6">
                                    {[...logos, ...logos].map((logo, index) => (
                                        <Image
                                            key={index}
                                            src={logo}
                                            alt={`logo-${index}`}
                                            width={40}  // Corresponds to w-10 (10 * 4px = 40px)
                                            height={40} // Corresponds to h-10
                                            className="inline-block"
                                            unoptimized={false} // Optional: remove if you want optimization
                                        />
                                    ))}
                                </div>
                            </div>
                            <style jsx>{`
                            @keyframes marquee {
                                0% {
                                    transform: translateX(0%);
                                }
                                100% {
                                    transform: translateX(-40%);
                                }
                            }
                            .animate-marquee {
                                animation: marquee 20s linear infinite;
                            }
                        `}</style>
                        </div>
                        <h3 className="text-xl text-gray-900 pt-6 mb-2">Share & Connect Instantly</h3>
                        <p className="text-gray-600 text-md text-center">Effortlessly share your digital card and expand your professional network.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetStart;
