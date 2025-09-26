

// import React from 'react';

// import Image from 'next/image';

// const CTA: React.FC = () => {
//     return (
//         <div>
//             <div className="templateContainer pt-20">
//                 <div className="w-full bg-cyan-100 border border-gray-200 px-8 lg:px-16 rounded-3xl">
//                     <div className="grid lg:grid-cols-5 relative  items-center">
//                         {/* Left Text Section */}
//                         <div className="lg:col-span-2 w-full pb-2 lg:py-2 text-center lg:text-left">
//                             <h2 className="text-slate-900 capitalize text-3xl md:text-4xl font-gotu leading-tight">
//                                 Unlock a Special Deal, Available in the App
//                             </h2>
//                             <p className="text-slate-900 capitalize text-lg leading-relaxed mt-4">
//                                 Your Business Deserve to be Remembered. Create Your Free Profile Today!
//                             </p>



//                             <div className="flex sm:flex-row sm:justify-start gap-x-4 mt-6">
//                                 <a

//                                     href="https://apps.apple.com/in/app/profilexpert/id6747479661"
//                                     className="transition-transform hover:-translate-y-0.5"
//                                 >
//                                     <Image
//                                         src="/icone/en-us.svg"
//                                         alt="Download on the App Store"
//                                         width={160}
//                                         height={48}
//                                         className="h-[42px] w-auto"
//                                     />
//                                 </a>

//                                 <a

//                                     href="https://play.google.com/store/apps/details?id=com.profile.expert"
//                                     className="transition-transform hover:-translate-y-0.5"
//                                 >
//                                     <Image
//                                         src="/icone/googleplay.svg"
//                                         alt="Get it on Google Play"
//                                         width={160}
//                                         height={48}
//                                         className="h-[42px] w-auto"
//                                     />
//                                 </a>
//                             </div>
//                         </div>

//                         {/* Right side for image or empty */}
//                         <div className="lg:col-span-3 flex items-center justify-center py-1">
//                             <div className="relative w-full h-[400px] lg:h-[500px]">
//                                 {/* Left image (slightly lower) */}
//                                 <Image
//                                     src="/newmockup/a66aec9c-585f-4237-abc5-da30b81a0598.png"
//                                     alt="Mobile App Preview Left"
//                                     width={400}
//                                     height={400}
//                                     className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 object-contain -rotate-[10deg]"
//                                     style={{ zIndex: 1, left: '40%', top: '30%' }}
//                                 />

//                                 {/* Right image (slightly higher) */}
//                                 <Image
//                                     src="/newmockup/a66aec9c-585f-4237-abc5-da30b81a0598.png"
//                                     alt="Mobile App Preview Right"
//                                     width={400}
//                                     height={400}
//                                     className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 object-contain rotate-[10deg]"
//                                     style={{ zIndex: 2, left: '70%', top: '30%' }}
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CTA;


import React from 'react';
import Image from 'next/image';

const CTA: React.FC = () => {
    return (
        <div>
            <div className="templateContainer pt-20">
                <div className="w-full bg-gray-100 border border-gray-200 px-8 lg:px-8 rounded-3xl">
                    <div className="grid lg:grid-cols-5 relative items-center">
                        {/* Left Text Section - give it an order of 2 on small screens */}
                        <div className="order-2 lg:order-none lg:col-span-2 w-full pb-2 lg:py-2 text-center lg:text-left">
                            <h2 className="text-slate-900 capitalize text-3xl md:text-4xl font-gotu leading-tight">
                                Unlock a Special Deal, Available in the App
                            </h2>
                            <p className="text-slate-900 capitalize text-lg leading-relaxed mt-4">
                                Your Business Deserve to be Remembered. Create Your Free Profile Today!
                            </p>
                            <div className="flex flex-row justify-center sm:justify-start pb-12 md:pb-0 gap-x-4 mt-6">
                                <a
                                    href="https://apps.apple.com/in/app/profilexpert/id6747479661"
                                    className="transition-transform hover:-translate-y-0.5"
                                >
                                    <Image
                                        src="/icone/en-us.svg"
                                        alt="Download on the App Store"
                                        width={160}
                                        height={48}
                                        className="h-[42px] w-auto rounded-lg"
                                    />
                                </a>

                                <a
                                    href="https://play.google.com/store/apps/details?id=com.profile.expert"
                                    className="transition-transform hover:-translate-y-0.5"
                                >
                                    <Image
                                        src="/icone/googleplay.svg"
                                        alt="Get it on Google Play"
                                        width={160}
                                        height={48}
                                        className="h-[42px] w-auto rounded-lg"
                                    />
                                </a>
                            </div>
                        </div>

                        {/* Right side for image - give it an order of 1 on small screens */}
                        <div className="order-1 lg:order-none lg:col-span-3 flex items-center justify-center py-1">
                            <div className="relative w-full h-[400px] lg:h-[500px]">
                                {/* Left image (slightly lower) */}
                                {/* <Image
                                    src="/newmockup/a66aec9c-585f-4237-abc5-da30b81a0598.png"
                                    alt="Mobile App Preview Left"
                                    width={400}
                                    height={400}
                                    className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 object-contain -rotate-[10deg]"
                                    style={{ zIndex: 1, left: '40%', top: '30%' }}
                                />
                              
                                <Image
                                    src="/newmockup/a66aec9c-585f-4237-abc5-da30b81a0598.png"
                                    alt="Mobile App Preview Right"
                                    width={400}
                                    height={400}
                                    className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 object-contain rotate-[10deg]"
                                    style={{ zIndex: 2, left: '70%', top: '30%' }}
                                /> */}
                                {/* Left image (slightly lower) */}
                                <Image
                                    src="/WebMockup/mockup  double phone.png"
                                    alt="Mobile App Preview Left"
                                    width={400}
                                    height={400}
                                    className="
        absolute 
        left-1/2 -translate-x-1/2 
        top-1/2 -translate-y-1/2 
        object-contain 
       
        w-[250px] sm:w-[240px] md:w-[280px] lg:w-[450px]"
                                    style={{ zIndex: 1, top: '30%' }}
                                />

                                {/* Right image (slightly higher) */}
                                {/* <Image
                                    src="/newmockup/a66aec9c-585f-4237-abc5-da30b81a0598.png"
                                    alt="Mobile App Preview Right"
                                    width={400}
                                    height={400}
                                    className="
        absolute 
        left-1/2 -translate-x-1/2 
        top-1/2 -translate-y-1/2 
        object-contain 
        rotate-[10deg] 
        w-[250px] sm:w-[240px] md:w-[280px] lg:w-[350px]"
                                    style={{ zIndex: 2, left: '70%', top: '30%' }}
                                /> */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CTA;