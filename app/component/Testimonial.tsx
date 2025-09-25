
// 'use client';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import Image from 'next/image';

// const testimonials = [
//     {
//         name: 'Maria Davis',
//         role: 'Artist',
//         image: '/image/Untitled design (8).png',
//         testimonial:
//             "PureGlamy transformed my look for my wedding, and I’ve never felt more beautiful! The attention to detail and the calm atmosphere make every visit to PureGlamy a luxury. I trust the team at PureGlamy with all my beauty needs—they truly know what they’re doing.",
//     },
//     {
//         name: 'Luna Park',
//         role: 'Artist',
//         image: '/image/Untitled design (8).png',
//         testimonial:
//             'With our expert team, we provide services to our guests in order to provide an environment where they feel comfort and safe, not judged, and most importantly, they can be understood. We would like to meet with you in order to solve the problems, desperation.',
//     },
//     {
//         name: 'Sophia Lane',
//         role: 'Model',
//         image: '/image/Untitled design (8).png',
//         testimonial:
//             'PureGlamy is my go-to place before any event. Their team is exceptionally talented and always makes me feel confident and glamorous. Highly recommended!',
//     },
// ];

// export default function Testimonial() {
//     return (
//         <section
//             id="d2c_testimonial"
//             className="bg-[url('/assets/images/flower-right.png')] templateContainer bg-no-repeat bg-[position:100%_15%] py-16"
//         >
//             <div className="">
//                 <div className="text-center mb-10">
//                     <h3 className="text-lg text-gray-500">Our Client</h3>
//                     <h2 className="text-3xl font-semibold">Testimonials</h2>
//                 </div>

//                 <div className="relative">
//                     {/* Left background block */}
//                     <div className="bg-[#b9aa8f] w-[370px] h-full absolute left-0 top-0 -z-10 hidden md:block" />

//                     <Swiper
//                         modules={[Pagination, Autoplay]}
//                         pagination={{ clickable: true }}
//                         autoplay={{ delay: 3000, disableOnInteraction: false }}
//                         loop={true}
//                         spaceBetween={20}
//                         slidesPerView={1}
//                         className="py-10 md:max-w-[90%] xl:max-w-[85%] mx-auto"
//                     >
//                         {testimonials.map((t, index) => (
//                             <SwiperSlide key={index}>
//                                 <div className="flex flex-wrap md:h-[280px] lg:h-[350px] xl:h-[440px] items-center">
//                                     <div className="md:w-1/3 mb-6 md:mb-0">
//                                         <Image
//                                             height={400}
//                                             width={400}
//                                             src={t.image}
//                                             alt={t.name}
//                                             className="block w-full  rounded-md object-contain"
//                                         />
//                                     </div>
//                                     <div className="w-full md:w-2/3 md:px-10 lg:px-20 mt-6 md:mt-0">

//                                         <div className="flex items-center space-x-4">
//                                             <Image
//                                                 height={400}
//                                                 width={400}
//                                                 src="/image/Untitled design (8).png"
//                                                 alt="Quote"
//                                                 className="w-9 h-9 rounded-full object-cover"
//                                             />
//                                             <p className="text-gray-600">{t.role}</p>
//                                         </div>

//                                         <h3 className="text-xl font-semibold">{t.name}</h3>
//                                         <p className="mt-6 text-base xl:text-lg text-gray-800">{t.testimonial}</p>
//                                     </div>
//                                 </div>
//                             </SwiperSlide>
//                         ))}
//                     </Swiper>


//                 </div>
//             </div>
//         </section>
//     );
// }



// 'use client';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import Image from 'next/image';

// const testimonials = [
//     {
//         name: 'Maria Davis',
//         role: 'Artist',
//         image: '/image/Untitled design (8).png',
//         testimonial:
//             "PureGlamy transformed my look for my wedding, and I’ve never felt more beautiful! The attention to detail and the calm atmosphere make every visit to PureGlamy a luxury. I trust the team at PureGlamy with all my beauty needs—they truly know what they’re doing.",
//     },
//     {
//         name: 'Luna Park',
//         role: 'Artist',
//         image: '/image/Untitled design (8).png',
//         testimonial:
//             'With our expert team, we provide services to our guests in order to provide an environment where they feel comfort and safe, not judged, and most importantly, they can be understood. We would like to meet with you in order to solve the problems, desperation.',
//     },
//     {
//         name: 'Sophia Lane',
//         role: 'Model',
//         image: '/image/Untitled design (8).png',
//         testimonial:
//             'PureGlamy is my go-to place before any event. Their team is exceptionally talented and always makes me feel confident and glamorous. Highly recommended!',
//     },
// ];

// export default function Testimonial() {
//     return (
//         <section
//             id="d2c_testimonial"
//             className="bg-[url('/assets/images/flower-right.png')] templateContainer bg-no-repeat bg-[position:100%_15%] py-16"
//         >
//             <div className="">
//                 <div className="text-center mb-10">
//                     <h3 className="text-lg text-gray-500">Our Client</h3>
//                     <h2 className="text-3xl font-semibold">Testimonials</h2>
//                 </div>

//                 <div className="relative">
//                     {/* Left background block */}
//                     <div className="bg-[#b9aa8f] w-[370px] h-full absolute left-0 top-0 -z-10 hidden md:block" />

//                     <Swiper
//                         modules={[Pagination, Autoplay]}
//                         pagination={{ clickable: true }}
//                         autoplay={{ delay: 3000, disableOnInteraction: false }}
//                         loop={true}
//                         spaceBetween={20}
//                         slidesPerView={1}
//                         className="py-10 md:max-w-[90%] xl:max-w-[85%] mx-auto"
//                     >
//                         {testimonials.map((t, index) => (
//                             <SwiperSlide key={index}>
//                                 <div className="flex flex-wrap md:h-[280px] lg:h-[350px] xl:h-[440px] items-center">
//                                     <div className="md:w-1/3 mb-6 md:mb-0">
//                                         <Image
//                                             height={400}
//                                             width={400}
//                                             src={t.image}
//                                             alt={t.name}
//                                             className="block w-full  rounded-md object-contain"
//                                         />
//                                     </div>
//                                     <div className="w-full md:w-2/3 md:px-10 lg:px-20 mt-6 md:mt-0">
//                                         <div className="flex items-center space-x-4">
//                                             <Image
//                                                 height={400}
//                                                 width={400}
//                                                 src="/image/Untitled design (8).png"
//                                                 alt="Quote"
//                                                 className="w-9 h-9 rounded-full object-cover"
//                                             />
//                                             <p className="text-gray-600">{t.role}</p>
//                                         </div>

//                                         <h3 className="text-xl font-semibold">{t.name}</h3>
//                                         <p className="mt-6 text-base xl:text-lg text-gray-800">{t.testimonial}</p>
//                                     </div>
//                                 </div>
//                             </SwiperSlide>
//                         ))}
//                     </Swiper>
//                 </div>
//             </div>

//             {/* Custom Swiper Pagination Style */}
//             <style jsx>{`
//                 :global(.swiper-pagination-bullet) {
//                     width: 12px;
//                     height: 12px;
//                     background-color: black !important;
//                     border-radius: 0 !important; /* Make it square */
//                     opacity: 0.3;
//                     margin: 0 6px !important;
//                     transition: background-color 0.3s ease;
//                 }

//                 :global(.swiper-pagination-bullet-active) {
//                     background-color: black !important;
//                     opacity: 1;
//                 }
//             `}</style>
//         </section>
//     );
// }



// 'use client';

// import { useState, useEffect } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import Image from 'next/image';
// import Link from 'next/link';


// const testimonials = [
//     {
//         name: 'Maria Davis',
//         role: 'Entrepreneur',
//         image: '/image/Untitled design (8).png',
//         testimonial:
//             "ProfileXpert completely changed how I network professionally. Creating my digital profile card was so easy, and sharing it via QR code has helped me connect instantly at events. It's sleek, customizable, and impressive!",
//     },
//     {
//         name: 'Luna Park',
//         role: 'Freelance Designer',
//         image: '/image/Untitled design (8).png',
//         testimonial:
//             'I love how ProfileXpert lets me showcase my portfolio and contact info all in one place. The premium layouts make my profile stand out, and the QR code sharing is a game-changer for quick, hassle-free introductions.',
//     },
//     {
//         name: 'Sophia Lane',
//         role: 'Marketing Specialist',
//         image: '/image/Untitled design (8).png',
//         testimonial:
//             'Using ProfileXpert has made networking at conferences so much simpler. The customizable themes fit my personal brand perfectly, and the instant QR code sharing saves time and leaves a great impression.',
//     },
// ];


// export default function Testimonial() {
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//     // ✅ Close mobile menu and restore scroll on desktop resize
//     useEffect(() => {
//         const handleResize = () => {
//             if (window.innerWidth >= 768) {
//                 setIsMobileMenuOpen(false);
//                 document.body.style.overflow = 'auto'; // Restore scroll
//             }
//         };

//         window.addEventListener('resize', handleResize);
//         return () => window.removeEventListener('resize', handleResize);
//     }, []);

//     return (
//         <section
//             id="d2c_testimonial"
//             className=" templateContainer  py-16"
//         >
//             <div className="">
//                 {/* <div className="text-center mb-10">
//                     <h3 className="text-lg font-gotu text-gray-500">Our Client</h3>
//                     <h2 className="text-3xl font-gotu font-semibold">Testimonials</h2>
//                 </div> */}


//                 <div className="text-center mb-10">
//                     <Link data-aos="fade-up"
//                         href="#"
//                         className="inline-flex items-center border border-blue-600 rounded-full px-2 py-1 mb-4 hover:bg-blue-50 transition"
//                     >
//                         <span className="bg-gradient-to-r from-blue-200 via-blue-800 to-blue-600 text-white text-xs font-semibold rounded-full px-3 py-1">
//                             Our Clients
//                         </span>
//                         {/* <span className="text-sm text-gray-900"> Client</span> */}
//                     </Link>
//                     <h2 data-aos="fade-up" data-aos-delay="100" className="text-2xl md:text-4xl font-gotu mt-4">
//                         Testimonials{' '}
//                         <br className="hidden md:inline" />
//                         designed to help you grow across all platforms.
//                     </h2>


//                 </div>

//                 <div className="relative">
//                     {/* Left background block */}
//                     <div className="bg-gray-100 w-[370px] h-full absolute left-0 top-0 -z-10 hidden md:block" />

//                     <Swiper
//                         modules={[Pagination, Autoplay]}
//                         pagination={{ clickable: true }}
//                         autoplay={{ delay: 3000, disableOnInteraction: false }}
//                         loop={true}
//                         spaceBetween={20}
//                         slidesPerView={1}
//                         className="py-10 md:max-w-[90%] xl:max-w-[85%] mx-auto"
//                     >
//                         {testimonials.map((t, index) => (
//                             <SwiperSlide key={index}>
//                                 <div className="flex flex-wrap md:h-[280px] lg:h-[350px] xl:h-[440px] items-center">
//                                     <div className="md:w-1/3 mb-6 md:mb-0">
//                                         <Image
//                                             height={400}
//                                             width={400}
//                                             src={t.image}
//                                             alt={t.name}
//                                             className="block w-full  rounded-md object-contain"
//                                         />
//                                     </div>
//                                     <div className="w-full md:w-2/3 md:px-10 lg:px-20 mt-6 md:mt-0">
//                                         <div className="flex items-center space-x-4">
//                                             <Image
//                                                 height={400}
//                                                 width={400}
//                                                 src="/image/Untitled design (8).png"
//                                                 alt="Quote"
//                                                 className="w-9 h-9 rounded-full object-cover"
//                                             />
//                                             <p className="text-gray-600 font-gotu">{t.role}</p>
//                                         </div>

//                                         <h3 className="text-xl font-gotu pt-3">{t.name}</h3>
//                                         <p className="mt-3 text-base xl:text-lg text-gray-800">{t.testimonial}</p>
//                                     </div>
//                                 </div>
//                             </SwiperSlide>
//                         ))}
//                     </Swiper>
//                 </div>
//             </div>

//             {/* Custom Swiper Pagination Style */}
//             <style jsx>{`
//                 :global(.swiper-pagination-bullet) {
//                     width: 12px;
//                     height: 12px;
//                     background-color: black !important;
//                     border-radius: 0 !important; /* Make it square */
//                     opacity: 0.3;
//                     margin: 0 6px !important;
//                     transition: background-color 0.3s ease;
//                 }

//                 :global(.swiper-pagination-bullet-active) {
//                     background-color: black !important;
//                     opacity: 1;
//                 }
//             `}</style>
//         </section>
//     );
// }



'use client';

import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import Link from 'next/link';

const testimonials = [
    {
        name: 'Maria Davis',
        role: 'Entrepreneur',
        image: '/image/Untitled design (8).png',
        testimonial:
            "ProfileXpert completely changed how I network professionally. Creating my digital profile card was so easy, and sharing it via QR code has helped me connect instantly at events. It's sleek, customizable, and impressive!",
    },
    {
        name: 'Luna Park',
        role: 'Freelance Designer',
        image: '/image/Untitled design (8).png',
        testimonial:
            'I love how ProfileXpert lets me showcase my portfolio and contact info all in one place. The premium layouts make my profile stand out, and the QR code sharing is a game-changer for quick, hassle-free introductions.',
    },
    {
        name: 'Sophia Lane',
        role: 'Marketing Specialist',
        image: '/image/Untitled design (8).png',
        testimonial:
            'Using ProfileXpert has made networking at conferences so much simpler. The customizable themes fit my personal brand perfectly, and the instant QR code sharing saves time and leaves a great impression.',
    },
];

export default function Testimonial() {
    // ✅ Removed unused isMobileMenuOpen state
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                document.body.style.overflow = 'auto'; // Restore scroll
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section
            id="d2c_testimonial"
            className=" templateContainer  py-16"
        >
            <div className="">
                <div className="text-center mb-10">
                    <Link
                        data-aos="fade-up"
                        href="#"
                        className="inline-flex items-center border border-blue-600 rounded-full px-2 py-1 mb-4 hover:bg-blue-50 transition"
                    >
                        <span className="bg-gradient-to-r from-blue-200 via-blue-800 to-blue-600 text-white text-xs font-semibold rounded-full px-3 py-1">
                            Our Clients
                        </span>
                    </Link>
                    <h2 data-aos="fade-up" data-aos-delay="100" className="text-2xl md:text-4xl font-gotu mt-4">
                        Testimonials{' '}
                        <br className="hidden md:inline" />
                        designed to help you grow across all platforms.
                    </h2>
                </div>

                <div className="relative">
                    {/* Left background block */}
                    <div className="bg-gray-100 w-[370px] h-full absolute left-0 top-0 -z-10 hidden md:block" />

                    <Swiper
                        modules={[Pagination, Autoplay]}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        loop={true}
                        spaceBetween={20}
                        slidesPerView={1}
                        className="py-10 md:max-w-[90%] xl:max-w-[85%] mx-auto"
                    >
                        {testimonials.map((t, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex flex-wrap md:h-[280px] lg:h-[350px] xl:h-[440px] items-center">
                                    <div className="md:w-1/3 mb-6 md:mb-0">
                                        <Image
                                            height={400}
                                            width={400}
                                            src={t.image}
                                            alt={t.name}
                                            className="block w-full  rounded-md object-contain"
                                        />
                                    </div>
                                    <div className="w-full md:w-2/3 md:px-10 lg:px-20 mt-6 md:mt-0">
                                        <div className="flex items-center space-x-4">
                                            <Image
                                                height={400}
                                                width={400}
                                                src="/image/Untitled design (8).png"
                                                alt="Quote"
                                                className="w-9 h-9 rounded-full object-cover"
                                            />
                                            <p className="text-gray-600 font-gotu">{t.role}</p>
                                        </div>

                                        <h3 className="text-xl font-gotu pt-3">{t.name}</h3>
                                        <p className="mt-3 text-base xl:text-lg text-gray-800">{t.testimonial}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {/* Custom Swiper Pagination Style */}
            <style jsx>{`
                :global(.swiper-pagination-bullet) {
                    width: 12px;
                    height: 12px;
                    background-color: black !important;
                    border-radius: 0 !important; /* Make it square */
                    opacity: 0.3;
                    margin: 0 6px !important;
                    transition: background-color 0.3s ease;
                }

                :global(.swiper-pagination-bullet-active) {
                    background-color: black !important;
                    opacity: 1;
                }
            `}</style>
        </section>
    );
}
