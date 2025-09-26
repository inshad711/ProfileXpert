// "use client";

// import { Check, X } from "lucide-react";
// import { useEffect, useState } from "react";

// interface Feature {
//     name: string;
//     free: string | boolean;
//     premium: string | boolean;
// }

// const features: Feature[] = [
//     { name: "Images", free: "20", premium: "100 (20 folders)" },
//     { name: "Certificates", free: "10", premium: "10" },
//     { name: "Design Templates", free: "3", premium: "20" },
//     { name: "Digital Visiting Cards (WhatsApp)", free: "20", premium: "20" },
//     { name: "Videos", free: false, premium: "2 (50MB each) + YouTube Video Gallery (50)" },
//     { name: "Font Customization", free: false, premium: true },
//     {
//         name: "QR Code Color Customization",
//         free: "Auto Black/White",
//         premium: "Logo auto-inserted + color customization",
//     },
//     { name: "Contact Numbers & WhatsApp", free: "2 Contacts, 1 WhatsApp", premium: "2 Contacts, 1 Whatsapp" },
//     { name: "Email IDs", free: "2", premium: "2" },
//     { name: "Google Map Linked Addresses", free: "Yes (Multiple)", premium: "Yes (Multiple)" },
//     { name: "Team Members", free: false, premium: "Add extra users (₹99/year per user)" },
//     { name: "Social Media Links", free: true, premium: true },
//     { name: "Views Counter", free: true, premium: true },
//     { name: "Bio / About", free: "Multi-paragraph", premium: "Multi paragraph" },
//     { name: "Color Customization", free: true, premium: true },
//     { name: "Website URL & GST", free: true, premium: true },
//     { name: "Logo on QR", free: "Yes (auto)", premium: "Yes (auto + custom option)" },
//     { name: "Banner for PC & Mobile", free: true, premium: true },
//     { name: "Working Hours", free: true, premium: true },
//     { name: "Google Review Link", free: false, premium: true },
//     { name: "Custom Visiting Card Design", free: false, premium: "Upload own design (one at a time)" },
// ];

// export default function PricingFeature() {
//     const [isVisible, setIsVisible] = useState<boolean>(false);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) {
//                     setIsVisible(true);
//                 }
//             },
//             { threshold: 0.1 }
//         );

//         const element = document.getElementById("comparison-table");
//         if (element) observer.observe(element);

//         return () => observer.disconnect();
//     }, []);

//     return (
//         <section id="comparison-table" className="py-20 px-4 bg-gray-100">
//             <div className="container mx-auto max-w-6xl">
//                 <div className={`text-center mb-12 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
//                     <h2 className="text-3xl lg:text-4xl font-bold mb-4">Free vs Premium Plan Comparison</h2>
//                 </div>

//                 <div className="grid lg:grid-cols-3 gap-8">
//                     <div className="lg:col-span-1">
//                         <div
//                             className={`sticky top-8 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl bg-white rounded-lg shadow-lg ${isVisible ? "animate-slide-in-left" : "opacity-0"
//                                 }`}
//                         >
//                             <div className="p-6 border-b">
//                                 <h3 className="text-center text-xl font-semibold">Choose Your Plan</h3>
//                             </div>
//                             <div className="p-6 space-y-4">
//                                 <div className="text-center space-y-2 p-4 rounded-lg transition-all duration-300 hover:bg-gray-50">
//                                     <h3 className="text-2xl font-bold">Free</h3>
//                                     <p className="text-3xl font-bold text-blue-600">₹0</p>
//                                     <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg">
//                                         Get Started Free
//                                     </button>
//                                 </div>
//                                 <div className="text-center space-y-2 p-4 rounded-lg transition-all duration-300 hover:bg-blue-50 border-2 border-transparent hover:border-blue-200">
//                                     <h3 className="text-2xl font-bold">Premium</h3>
//                                     <p className="text-3xl font-bold text-blue-600">
//                                         ₹49<span className="text-sm font-normal">/month</span>
//                                     </p>
//                                     <p className="text-sm text-gray-500">OR ₹399/year</p>
//                                     <button className="w-full bg-transparent border border-blue-600 text-blue-600 py-2 rounded-md hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg">
//                                         Get Premium Plan
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="lg:col-span-2 overflow-x-hidden">
//                         <div
//                             className={`bg-white rounded-lg shadow-lg transform transition-all duration-500 hover:shadow-xl ${isVisible ? "animate-slide-in-right animate-delay-200" : "opacity-0"
//                                 }`}
//                         >
//                             <div className="overflow-x-auto">
//                                 <table className="w-full">
//                                     <thead>
//                                         <tr className="border-b bg-gray-50">
//                                             <th className="text-left p-4 font-semibold">Feature</th>
//                                             <th className="text-center p-4 font-semibold">Free</th>
//                                             <th className="text-center p-4 font-semibold">Premium</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         {features.map((feature, index) => (
//                                             <tr
//                                                 key={index}
//                                                 className="border-b transition-all duration-300 hover:bg-gray-50 hover:scale-[1.02] transform"
//                                                 style={{ animationDelay: `${index * 0.05}s` }}
//                                             >
//                                                 <td className="p-4 font-medium">{feature.name}</td>
//                                                 <td className="p-4 text-center">
//                                                     {typeof feature.free === "boolean" ? (
//                                                         feature.free ? (
//                                                             <Check className="w-5 h-5 text-green-500 mx-auto transform transition-all duration-300 hover:scale-125" />
//                                                         ) : (
//                                                             <X className="w-5 h-5 text-red-500 mx-auto transform transition-all duration-300 hover:scale-125" />
//                                                         )
//                                                     ) : (
//                                                         <span className="text-sm">{feature.free}</span>
//                                                     )}
//                                                 </td>
//                                                 <td className="p-4 text-center">
//                                                     {typeof feature.premium === "boolean" ? (
//                                                         feature.premium ? (
//                                                             <Check className="w-5 h-5 text-green-500 mx-auto transform transition-all duration-300 hover:scale-125" />
//                                                         ) : (
//                                                             <X className="w-5 h-5 text-red-500 mx-auto transform transition-all duration-300 hover:scale-125" />
//                                                         )
//                                                     ) : (
//                                                         <span className="text-sm">{feature.premium}</span>
//                                                     )}
//                                                 </td>
//                                             </tr>
//                                         ))}
//                                     </tbody>
//                                 </table>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className={`text-center mt-8 ${isVisible ? "animate-slide-up animate-delay-400" : "opacity-0"}`}>
//                     <p className="text-sm text-gray-500 mb-4">
//                         ⭐ Start free. Upgrade anytime <a href="#" className="text-blue-600 hover:underline">Get Premium Plan</a>
//                     </p>
//                 </div>
//             </div>
//         </section>
//     );
// }

"use client";

import { Check, X } from "lucide-react";
import { useEffect, useState } from "react";

interface Feature {
    name: string;
    free: string | boolean;
    premium: string | boolean;
}

const features: Feature[] = [
    { name: "Images", free: "20", premium: "100 (20 folders)" },
    { name: "Certificates", free: "10", premium: "10" },
    { name: "Design Templates", free: "3", premium: "20" },
    { name: "Digital Visiting Cards (WhatsApp)", free: "20", premium: "20" },
    { name: "Videos", free: false, premium: "2 (50MB each) + YouTube Video Gallery (50)" },
    { name: "Font Customization", free: false, premium: true },
    {
        name: "QR Code Color Customization",
        free: "Auto Black/White",
        premium: "Logo auto-inserted + color customization",
    },
    { name: "Contact Numbers & WhatsApp", free: "2 Contacts, 1 WhatsApp", premium: "2 Contacts, 1 Whatsapp" },
    { name: "Email IDs", free: "2", premium: "2" },
    { name: "Google Map Linked Addresses", free: "Yes (Multiple)", premium: "Yes (Multiple)" },
    { name: "Team Members", free: false, premium: "Add extra users (₹99/year per user)" },
    { name: "Social Media Links", free: true, premium: true },
    { name: "Views Counter", free: true, premium: true },
    { name: "Bio / About", free: "Multi-paragraph", premium: "Multi paragraph" },
    { name: "Color Customization", free: true, premium: true },
    { name: "Website URL & GST", free: true, premium: true },
    { name: "Logo on QR", free: "Yes (auto)", premium: "Yes (auto + custom option)" },
    { name: "Banner for PC & Mobile", free: true, premium: true },
    { name: "Working Hours", free: true, premium: true },
    { name: "Google Review Link", free: false, premium: true },
    { name: "Custom Visiting Card Design", free: false, premium: "Upload own design (one at a time)" },
];

export default function PricingFeature() {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const element = document.getElementById("comparison-table");
        if (element) observer.observe(element);

        return () => observer.disconnect();
    }, []);

    return (
        <section id="comparison-table" className="py-20 px-4 bg-gray-100">
            <div className="container mx-auto max-w-6xl">
                <div className={`text-center mb-12 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
                    <h2 className="text-3xl font-gotu lg:text-4xl font-bold mb-4">Free vs Premium Plan Comparison</h2>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1">
                        <div
                            className={`sticky top-8 transform transition-all duration-500 hover:shadow-2xl bg-white rounded-lg shadow-lg ${isVisible ? "animate-slide-in-left" : "opacity-0"
                                }`}
                        >
                            <div className="p-6 border-b">
                                <h3 className="text-center font-gotu text-xl font-semibold">Choose Your Plan</h3>
                            </div>
                            <div className="p-6 font-gotu space-y-4">
                                <div className="text-center space-y-2 p-4 rounded-lg transition-all duration-300 hover:bg-gray-50">
                                    <h3 className="text-2xl font-bold">Free</h3>
                                    <p className="text-3xl font-bold text-purple-600">₹0</p>
                                    <button className="w-full bg-gradient-to-r from-[#6F00FF] to-[#9929EA] text-white py-2 rounded-md hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                                        Get Started Free
                                    </button>
                                </div>
                                <div className="text-center space-y-2 p-4 rounded-lg transition-all duration-300 hover:bg-blue-50 border-2 border-transparent hover:border-blue-200">
                                    <h3 className="text-2xl font-bold">Premium</h3>
                                    <p className="text-3xl font-bold text-purple-600">
                                        ₹49<span className="text-sm font-normal">/month</span>
                                    </p>
                                    <p className="text-sm text-gray-500">OR ₹399/year</p>
                                    <button className="w-full bg-transparent border border-blue-600 text-purple-600 py-2 rounded-md hover:bg-gradient-to-r from-[#6F00FF] to-[#9929EA] hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg">
                                        Get Premium Plan
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-2  overflow-x-hidden">
                        <div
                            className={`bg-white rounded-lg shadow-lg  transform transition-all duration-500 hover:shadow-xl ${isVisible ? "animate-slide-in-right animate-delay-200" : "opacity-0"
                                }`}
                        >
                            <div className="overflow-x-hidden">
                                <table className="w-full max-w-full table-auto">
                                    <thead>
                                        <tr className="border-b font-gotu bg-gray-50">
                                            <th className="text-left p-4 font-semibold">Feature</th>
                                            <th className="text-center p-4 font-semibold">Free</th>
                                            <th className="text-center p-4 font-semibold">Premium</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {features.map((feature, index) => (
                                            <tr
                                                key={index}
                                                className="border-b transition-all duration-300 hover:bg-gray-50 hover:scale-[1.02] transform"
                                                style={{ animationDelay: `${index * 0.05}s` }}
                                            >
                                                <td className="p-4 font-medium">{feature.name}</td>
                                                <td className="p-4 text-center">
                                                    {typeof feature.free === "boolean" ? (
                                                        feature.free ? (
                                                            <Check className="w-5 h-5 text-green-500 mx-auto transform transition-all duration-300 hover:scale-125" />
                                                        ) : (
                                                            <X className="w-5 h-5 text-red-500 mx-auto transform transition-all duration-300 hover:scale-125" />
                                                        )
                                                    ) : (
                                                        <span className="text-sm">{feature.free}</span>
                                                    )}
                                                </td>
                                                <td className="p-4 text-center">
                                                    {typeof feature.premium === "boolean" ? (
                                                        feature.premium ? (
                                                            <Check className="w-5 h-5 text-green-500 mx-auto transform transition-all duration-300 hover:scale-125" />
                                                        ) : (
                                                            <X className="w-5 h-5 text-red-500 mx-auto transform transition-all duration-300 hover:scale-125" />
                                                        )
                                                    ) : (
                                                        <span className="text-sm">{feature.premium}</span>
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`text-center mt-8 ${isVisible ? "animate-slide-up animate-delay-400" : "opacity-0"}`}>
                    <p className="text-sm text-gray-500 mb-4">
                        ⭐ Start free. Upgrade anytime <a href="#" className="text-purple-600 hover:underline">Get Premium Plan</a>
                    </p>
                </div>
            </div>
        </section>
    );
}
