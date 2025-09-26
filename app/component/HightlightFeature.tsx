// // components/HighlightedFeatures.tsx
// import React from "react";
// import Image from "next/image";

// const HightlightFeature: React.FC = () => {
//     return (
//         <section className="max-w-screen-xl mx-auto py-8 px-4 lg:py-16 lg:px-6">
//             <div className="text-center mb-10">
//                 <h2 className="text-4xl tracking-tight font-bold text-primary-800">
//                     Highlighted Features
//                 </h2>
//             </div>

//             <div className="flex flex-col md:flex-row">
//                 {/* Image section */}
//                 <div className="mr-0 md:mr-8 mb-6 md:mb-0">
// <Image
//     className="w-1/2 md:w-full mx-auto"
//     src="/image/Untitled design (8).png"
//     alt="can_help_banner"
//     width={400}
//     height={300}
// />
//                 </div>

//                 {/* Features section */}
//                 <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
//                     {/* Feature Item */}
//                     <FeatureBox
//                         title="Dynamic Personalization:"
//                         description="Our platform leverages user data and behavior to provide a highly personalized experience, with dynamic content and product recommendations that change in real-time."
//                     />

//                     <FeatureBox
//                         title="Mobile-Optimized Interface"
//                         description="Our website is designed with a mobile-first approach, offering a seamless browsing experience across all devices, including smartphones and tablets."
//                     />

//                     <FeatureBox
//                         title="24/7 Customer Support"
//                         description="Our U.S.-based customer support team is available around the clock to answer any questions, resolve any issues, and provide helpful solutions. Whether it's through email, phone, or live chat, we're always here to support you."
//                     />

//                     <FeatureBox
//                         title="Secure Payment Processing"
//                         description="We use cutting-edge security measures to protect our customers' sensitive information and ensure the safety of all transactions made on our site."
//                     />
//                 </div>
//             </div>
//         </section>
//     );
// };

// type FeatureBoxProps = {
//     title: string;
//     description: string;
// };

// const FeatureBox: React.FC<FeatureBoxProps> = ({ title, description }) => (
//     <div className="w-full sm:w-1/2 mb-4 px-2">
//         <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
//             <h3 className="text-2xl font-bold text-md mb-6">{title}</h3>
//             <p className="text-sm">{description}</p>
//         </div>
//     </div>
// );

// export default HightlightFeature;



'use client';

import Image from 'next/image';
// import Link from 'next/link';

const HightlightFeature = () => {
    return (
        <div id='services' className='bg-white'>
            <section className="templateContainer  mx-auto py-8 px-4 lg:py-16 lg:px-6">
                {/* <div className="text-center mb-10">
                <h2 className="text-4xl tracking-tight font-gotu font-bold text-primary-800">Highlighted Features</h2>
            </div> */}
                {/* Header */}
                <div className="text-center mb-10">
                    <div data-aos="fade-up" className="inline-flex items-center border border-blue-600 rounded-full px-2 py-1 mb-4 hover:bg-blue-50 transition">
                        <span className="bg-gradient-to-r from-blue-200 via-blue-800 to-blue-600 text-white text-xs font-semibold rounded-full px-3 py-1 mr-2">
                            Highlighted
                        </span>
                        <span className="text-sm text-gray-900">Services</span>
                    </div>

                    <h2 data-aos="fade-up" data-aos-delay="100" className="text-2xl md:text-4xl font-gotu mt-4">
                        Get started with our simple{' '}
                        <br className="hidden md:inline" />
                        Services
                    </h2>


                </div>

                <div className="flex flex-col md:flex-row">
                    {/* Image Section */}

                    <div data-aos="fade-up" data-aos-delay="200" className="mr-0 md:mr-8 mb-6 md:mb-0">
                        <Image
                            height={500}
                            width={400}
                            className="w-full md:w-[380px] md:h-full mx-auto"
                            src="/image/ProfileXpertsd.png"
                            alt="can_help_banner"
                        />
                    </div>


                    {/* Features List */}
                    <div data-aos="fade-up" data-aos-delay="200" className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
                        {features.map(({ title, description }, index) => (
                            <div key={index} className="w-full sm:w-1/2 mb-4 px-2">
                                <div className="h-full py-4 px-6 border  border-[#6F00FF] border-t-0 border-l-0 rounded-br-xl">
                                    <h3 className="text-2xl font-gotu text-md mb-6">{title}</h3>
                                    <p className="text-sm">{description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HightlightFeature;

const features = [
    {
        title: 'Effortless Digital Identity Creation',
        description:
            'ProfileXpert enables users to easily create and customize digital business cards, helping individuals and professionals enhance their personal or brand identity with minimal effort.',
    },
    {
        title: 'Premium Layouts & Themes',
        description:
            'Choose from a wide selection of professionally designed layouts and themes to make your digital profile stand out. Perfect for any industry or personal style.',
    },
    {
        title: 'Instant Sharing with QR Codes',
        description:
            'Generate unique, shareable QR codes for each profile card, allowing for fast and seamless networking online or in person—no app downloads required.',
    },
    {
        title: 'The Future of Digital Networking',
        description:
            'ProfileXpert redefines how people connect by offering a smart, centralized platform for digital networking that adapts to modern business and personal branding needs.',
    }

];
