import Image from "next/image";
import Link from "next/link";
import React from "react";
import WavyUnderline from "./WavyUnderline";
// import { Sparkles } from "lucide-react"


interface FeatureItemData {
    id: number;
    imageUrl: string;
    title: string;
    subtitle: string;
    description: string;
    reverse?: boolean;
    buttonText: string;
    href: string;
}


// const features: FeatureItemData[] = [

//     {
//         id: 1,
//         imageUrl: "/image/dfsf.png",
//         title: "We're Not Reinventing the Wheel",
//         subtitle: "Join, it's free",
//         description:
//             "ProfileXpert builds on what already works — business cards, networking, and identity — and takes them into the digital future with zero friction. Sign up and start creating in seconds.",
//         buttonText: "Get Started",
//         reverse: false,
//     },
//     {
//         id: 2,
//         imageUrl: "/image/580dfb8e-fea5-43d8-bb6a-4bdd6f3d362f.png",
//         title: "Built for Developers",
//         subtitle: "Try it today",
//         description:
//             "Whether you're integrating profile features into your app or customizing layouts via code, ProfileXpert is developer-ready with clean APIs and flexible components.",
//         buttonText: "Get Started",
//         reverse: true,
//     },
//     {
//         id: 3,
//         imageUrl: "/image/13ba2b22-08e0-4db2-bc12-96b7181bb121.png",
//         title: "Scale with Confidence",
//         subtitle: "Free to start",
//         description:
//             "From individuals to teams, ProfileXpert grows with your needs. Enjoy powerful customization, seamless collaboration, and scalable tools — all starting at zero cost.",
//         buttonText: "Learn More",
//         reverse: false,
//     },

// ];

const features: FeatureItemData[] = [
    {
        id: 1,
        imageUrl: "/image/dfsf.png",
        title: "NFC Tap & Share",
        subtitle: "Connect Instantly – The Modern Way",
        description: "Ditch the old paper business cards. With our NFC-enabled smart cards, you can share your digital profile instantly by simply tapping your card to any smartphone — no app installation or setup required. It’s fast, seamless, and makes a lasting first impression.",
        buttonText: "Get Started",
        reverse: false,
        href: "#contact",
    },
    {
        id: 2,
        imageUrl: "/image/580dfb8e-fea5-43d8-bb6a-4bdd6f3d362f.png",
        title: "20+ Templates & Full Customization",
        subtitle: "Design That Reflects Your True Identity",
        description: "Choose from a growing library of 20+ professionally crafted templates, each optimized for visual appeal and performance. Customize colors, fonts, layouts, and content to create a unique profile that truly represents your personal brand or business identity — all with zero design skills needed.",
        buttonText: "Get Started",
        reverse: true,
        href: "#contact",
    },
    {
        id: 3,
        imageUrl: "/image/13ba2b22-08e0-4db2-bc12-96b7181bb121.png",
        title: "Multimedia-Ready Profiles",
        subtitle: "Tell Your Story, Your Way",
        description: "Go beyond plain text. Upload high-resolution images, videos, portfolios, certifications, and more to create a dynamic and interactive profile. Whether you’re an entrepreneur, artist, freelancer, or professional, show off your work and achievements in the most engaging way possible.",
        buttonText: "Learn More",
        reverse: false,
        href: "#contact",
    },
    {
        id: 4,
        imageUrl: "/image/580dfb8e-fea5-43d8-bb6a-4bdd6f3d362f.png",
        title: "Share Anywhere, Anytime",
        subtitle: "One Link. Infinite Possibilities.",
        description: "Your profile lives on a single, easy-to-share link that works across all platforms — from WhatsApp and LinkedIn to Instagram, email signatures, and even QR codes. Whether you’re networking in person or online, your digital presence is always just a tap or click away.",
        buttonText: "Get Started",
        reverse: true,
        href: "#contact",
    },
];


// Reusable feature item component
const FeatureItem: React.FC<FeatureItemData> = ({
    imageUrl,
    title,
    subtitle,
    description,
    buttonText,
    reverse,
    href,
}) => {
    return (
        <div
            className={`flex flex-col overflow-hidden rounded-md shadow-sm ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
        >

            <Image
                data-aos="fade-up"
                data-aos-delay="100"
                src={imageUrl}
                alt={title}
                width={550}
                height={400}
                className="w-[550px] h-[400px] object-contain"
            />

            <div data-aos="fade-up" data-aos-delay="200" className="flex flex-col justify-center flex-1 p-6">
                <span className="text-xs font-gotu uppercase">{subtitle}</span>
                <h3 className="text-3xl font-gotu">{title}</h3>
                <p className="my-6">{description}</p>

                {/* <button type="button" className="self-start border px-3 py-1.5 border-black">
                    {buttonText}
                </button> */}
                <Link
                    href={href}
                    type="button"
                    className="self-start border px-3 py-1.5 border-black inline-block text-center"
                >
                    {buttonText}
                </Link>

            </div>
        </div>
    );
};

// Main section component
const Features: React.FC = () => {
    return (
        <section id="features" className="p-4 templateContainer lg:p-8">

            {/* <div className="text-center mb-10">
                <div
                    data-aos="fade-up"
                    className="inline-flex items-center border border-blue-600 rounded-full px-2 py-1 mb-4"
                >
                    <Sparkles className="w-4 h-4" />
                    <span className="text-black text-xs font-semibold rounded-full px-3 py-1">
                        Features
                    </span>
                </div>

                <h2 data-aos="fade-up" data-aos-delay="100" className="text-2xl md:text-4xl font-gotu mt-4">
                    Get started with our simple{' '}
                    <br className="hidden md:inline" />
                    Feature
                </h2>


            </div> */}

            {/* <div className="text-center mb-10">
                <div data-aos="fade-up" className="inline-flex items-center border border-blue-600 rounded-full px-2 py-1 mb-4 hover:bg-blue-50 transition">
                    <span className="bg-gradient-to-r from-blue-200 via-blue-800 to-blue-600 text-white text-xs font-semibold rounded-full px-3 py-1 mr-2">
                        Our
                    </span>
                    <span className="text-sm text-gray-900">Features</span>
                </div>

                <h2 data-aos="fade-up" data-aos-delay="100" className="text-2xl md:text-4xl font-gotu mt-4">
                    Get started with our key{' '}
                    <br className="hidden md:inline" />
                    Features
                </h2>


            </div> */}

            <div className="text-center mb-1 md:mb-8">
                {/* <h2
          data-aos="fade-up"
          className="text-2xl sm:text-3xl md:text-4xl mb-2"
        >
          Contact Us
        </h2> */}
                <h2
                    data-aos="fade-up"
                    className="text-center text-[32px] lg:text-[48px] leading-[1.2] tracking-normal"
                >
                    <span className="relative font-gotu inline-block text-[#B13BFF] mb-2">
                        Our Features
                        <WavyUnderline />
                    </span>
                </h2>
                <p
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className="text-center text-gray-800 text-[16px] lg:text-[15px] leading-[1.4] tracking-wide"
                >
                    Your guide to smarter business communication with WhatsApp
                </p>
            </div>
            <div className="container mx-auto space-y-12">
                {features.map((feature) => (
                    <FeatureItem key={feature.id} {...feature} />
                ))}
            </div>
        </section>
    );
};

export default Features;
