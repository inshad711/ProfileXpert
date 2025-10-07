////////// full working ///////////

// "use client"

// import type React from "react"
// import { useMemo, useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import {
//     BadgePercent,
//     HeartPulse,
//     ShoppingBag,
//     PiggyBank,
//     ChevronRight,
//     Megaphone,
//     Star,
//     BarChart3,
//     ThumbsUp,
//     CurrencyIcon,
//     Globe2,
//     QrCode,
//     Layout,
//     // UserCircle,
//     UserCircle2,
// } from "lucide-react"
// import type { JSX } from "react/jsx-runtime"


// type Metric = { delta: string; label: string }
// type TabData = {
//     id: string
//     label: string
//     icon: JSX.Element
//     product: string
//     client: string
//     subtitle: string
//     description: string
//     image: string
//     metrics: Metric[]
// }

// // const TABS: TabData[] = [
// //     {
// //         id: "sales",
// //         label: "Effortless Digital Identity Creation",
// //         icon: <BadgePercent className="h-4 w-4 text-purple-600" aria-hidden="true" />,
// //         product: "Management",
// //         client: "Google / Maps",
// //         subtitle: "Effortless Digital Identity Creation",
// //         description:
// //             "ProfileXpert enables users to easily create and customize digital business cards, helping individuals and professionals enhance their personal or brand identity with minimal effort.",
// //         image: "/image/undefined_i_want_to_use_in_bac.png",
// //         metrics: [
// //             { delta: "+ 75%", label: "Increase in local impressions" },
// //             { delta: "+ 60%", label: "Growth in calls & directions" },
// //         ],
// //     },
// //     {
// //         id: "creative",
// //         label: "Premium Layouts & Themes",
// //         icon: <ShoppingBag className="h-4 w-4 text-purple-600" aria-hidden="true" />,
// //         product: "Management",
// //         client: "Community Reach",
// //         subtitle: "Premium Layouts & Themes",
// //         description:
// //             "Choose from a wide selection of professionally designed layouts and themes to make your digital profile stand out. Perfect for any industry or personal style.",
// //         image: "/image/undefined_i_want_to_use_in_bac.png",
// //         metrics: [
// //             { delta: "+ 40%", label: "Conversion rate uplift" },
// //             { delta: "+ 25%", label: "More store walk-ins" },
// //         ],
// //     },
// //     {
// //         id: "health",
// //         label: "Instant Sharing with QR Codes",
// //         icon: <HeartPulse className="h-4 w-4 text-purple-600" aria-hidden="true" />,
// //         product: "Management",
// //         client: "Community Reach",
// //         subtitle: "Instant Sharing with QR Codes",
// //         description:
// //             "Generate unique, shareable QR codes for each profile card, allowing for fast and seamless networking online or in person—no app downloads required.",
// //         image: "/image/undefined_i_want_to_use_in_bac.png",
// //         metrics: [
// //             { delta: "+ 50%", label: "Clicks from map pack" },
// //             { delta: "+ 35%", label: "Profile engagement" },
// //         ],
// //     },
// //     {
// //         id: "commerce",
// //         label: "The Future of Digital Networking",
// //         icon: <Megaphone className="h-4 w-4 text-purple-600" aria-hidden="true" />,
// //         product: "Management",
// //         client: "Community Reach",
// //         subtitle: "The Future of Digital Networking",
// //         description:
// //             "ProfileXpert redefines how people connect by offering a smart, centralized platform for digital networking that adapts to modern business and personal branding needs.",
// //         image: "/image/undefined_i_want_to_use_in_bac.png",
// //         metrics: [
// //             { delta: "+ 65%", label: "Brand searches increase" },
// //             { delta: "+ 30%", label: "Repeat local customers" },
// //         ],
// //     },
// //     {
// //         id: "finance",
// //         label: "Cost-Effectiveness",
// //         icon: <PiggyBank className="h-4 w-4 text-purple-600" aria-hidden="true" />,
// //         product: "Management",
// //         client: "Community Reach",
// //         subtitle: "High impact, low spend",
// //         description:
// //             "Local SEO is a cost-effective marketing strategy, especially for small and local businesses. It offers a higher return on investment compared to traditional advertising methods, reaching a targeted audience without the high costs.",
// //         image: "/image/undefined_i_want_to_use_in_bac.png",
// //         metrics: [
// //             { delta: "- 50%", label: "Reduction in ad spend" },
// //             { delta: "x4 ROI", label: "Return on investment" },
// //         ],
// //     },
// //     {
// //         id: "reputation",
// //         label: "Positive Online Reputation",
// //         icon: <Star className="h-4 w-4 text-purple-600" aria-hidden="true" />,
// //         product: "Management",
// //         client: "Community Reach",
// //         subtitle: "Earn trust with reviews",
// //         description:
// //             "Local SEO involves managing online reviews and ensuring a positive online reputation. Positive reviews and ratings on platforms like Google make your business more trustworthy and attractive to potential customers.",
// //         image: "/image/undefined_i_want_to_use_in_bac.png",
// //         metrics: [
// //             { delta: "+ 90%", label: "Increase in positive reviews" },
// //             { delta: "- 40%", label: "Drop in negative feedback" },
// //         ],
// //     },

// // ]

// const TABS: TabData[] = [
//     {
//         id: "sales",
//         label: "Effortless Digital Identity Creation",
//         icon: <UserCircle2 className="h-4 w-4 text-purple-600" aria-hidden="true" />,
//         product: "Digital Profiles",
//         client: "Business Professionals",
//         subtitle: "Your Digital Business Card — Smarter, Faster, Professional",
//         description:
//             "Create and share your profile instantly with NFC or WhatsApp. ProfileXpert simplifies digital identity creation for busy professionals.",
//         image: "/image/undefined_i_want_to_use_in_bac.png",
//         metrics: [
//             { delta: "+ 85%", label: "Faster profile sharing" },
//             { delta: "+ 70%", label: "Increase in direct contacts" },
//         ],
//     },
//     {
//         id: "creative",
//         label: "Premium Layouts & Themes",
//         icon: <Layout className="h-4 w-4 text-purple-600" aria-hidden="true" />,
//         product: "Design Toolkit",
//         client: "Creative Professionals",
//         subtitle: "Elevate Your Digital Presence Effortlessly",
//         description:
//             "ProfileXpert offers premium layouts and customization options to help you stand out. Make your profile look professional, stylish, and unique.",
//         image: "/image/undefined_i_want_to_use_in_bac.png",
//         metrics: [
//             { delta: "+ 60%", label: "Profile views increase" },
//             { delta: "+ 45%", label: "Improved aesthetic appeal" },
//         ],
//     },
//     {
//         id: "health",
//         label: "Instant Sharing with QR Codes",
//         icon: <QrCode className="h-4 w-4 text-purple-600" aria-hidden="true" />,
//         product: "Smart Share",
//         client: "Event Attendees",
//         subtitle: "Tap or Scan — Share Instantly",
//         description:
//             "Seamlessly share your profile via QR code or NFC. No app needed — just one tap or scan to connect and impress.",
//         image: "/image/undefined_i_want_to_use_in_bac.png",
//         metrics: [
//             { delta: "+ 90%", label: "QR code scan engagement" },
//             { delta: "- 50%", label: "Drop in sharing friction" },
//         ],
//     },
//     {
//         id: "commerce",
//         label: "The Future of Digital Networking",
//         icon: <Globe2 className="h-4 w-4 text-purple-600" aria-hidden="true" />,
//         product: "Networking Tools",
//         client: "Modern Professionals",
//         subtitle: "Networking That Moves at Your Speed",
//         description:
//             "With ProfileXpert, the way you connect evolves — smart digital cards, instant sharing, and cross-platform compatibility all in one.",
//         image: "/image/undefined_i_want_to_use_in_bac.png",
//         metrics: [
//             { delta: "+ 75%", label: "Networking efficiency" },
//             { delta: "+ 50%", label: "New leads generated" },
//         ],
//     },
//     {
//         id: "finance",
//         label: "Cost-Effectiveness",
//         icon: <CurrencyIcon className="h-4 w-4 text-purple-600" aria-hidden="true" />,
//         product: "Value Tools",
//         client: "Startups / SMBs",
//         subtitle: "High Value, Low Cost",
//         description:
//             "Forget printing costs. ProfileXpert gives you a sleek digital solution that costs less and delivers more — ideal for startups and small businesses.",
//         image: "/image/undefined_i_want_to_use_in_bac.png",
//         metrics: [
//             { delta: "- 70%", label: "Reduction in traditional spend" },
//             { delta: "x5 ROI", label: "Better marketing return" },
//         ],
//     },
//     {
//         id: "reputation",
//         label: "Positive Online Reputation",
//         icon: <ThumbsUp className="h-4 w-4 text-purple-600" aria-hidden="true" />,
//         product: "Trust Engine",
//         client: "Freelancers / Agencies",
//         subtitle: "Build Trust Through Reviews & Presence",
//         description:
//             "Boost your digital reputation with verified profiles, clean layouts, and seamless sharing. More trust = more conversions.",
//         image: "/image/undefined_i_want_to_use_in_bac.png",
//         metrics: [
//             { delta: "+ 95%", label: "Customer trust rating" },
//             { delta: "- 30%", label: "Drop in negative perception" },
//         ],
//     },
// ];


// function Pill({ children }: { children: React.ReactNode }) {
//     return (
//         <span className="inline-flex items-center rounded-full bg-purple-50 px-2.5 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-200">
//             {children}
//         </span>
//     )
// }

// function MetricRow({ m }: { m: Metric }) {
//     return (
//         <div
//             className="flex items-center gap-3 rounded-xl bg-white p-3 ring-1 ring-gray-200/70 shadow-sm"
//             data-aos="fade-up"
//             data-aos-delay="200"
//         >
//             <Pill>{m.delta}</Pill>
//             <p className="text-sm text-gray-700">{m.label}</p>
//         </div>
//     )
// }

// export default function Advantages() {
//     const [activeId, setActiveId] = useState<string>(TABS[0].id)
//     const active = useMemo(() => TABS.find((t) => t.id === activeId) ?? TABS[0], [activeId])


//     return (
//         // <section className="w-full  py-12 bg-gradient-to-b from-red-50 to-white">
//         <section id="services" className="w-full py-12 bg-gradient-to-b from-purple-50 to-white">

//             {/* Header */}
//             <div className="templateContainer">
//                 <header
//                     className="mx-auto max-w-5xl font-gotu text-center px-6 pb-8"
//                     data-aos="fade-up"
//                 >

//                     <h2
//                         data-aos="fade-up"
//                         data-aos-delay="100"
//                         className="text-2xl md:text-4xl font-gotu mt-4 text-center"
//                     >
//                         Get started with our {' '}
//                         <br className="hidden md:inline" />
//                         Services

//                     </h2>
//                     {/* </div> */}

//                 </header>

//                 <div className="lg:flex gap-5">
//                     {/* Left: Tabs */}
//                     <div
//                         role="tablist"
//                         aria-label="Automation categories"
//                         className="lg:sticky lg:w-[400px] flex-wrap max-lg:flex top-4 z-10 flex gap-2 overflow-x-auto pb-1 md:block md:overflow-visible md:pb-0"
//                         data-aos="fade-right"
//                     >
//                         {TABS.map((t) => {
//                             const selected = t.id === activeId
//                             return (
//                                 <button
//                                     key={t.id}
//                                     role="tab"
//                                     aria-selected={selected}
//                                     onClick={() => setActiveId(t.id)}
//                                     className={[
//                                         "group relative my-1.5 cursor-pointer inline-flex shrink-0 items-center gap-3 rounded-2xl lg:px-4 px-2 py-2 text-left w-[150px] lg:w-full ring-1 transition-all",
//                                         selected
//                                             ? "bg-white ring-purple-400 shadow-sm"
//                                             : "bg-purple-200/70 hover:bg-white/80 ring-purple-200",
//                                     ].join(" ")}
//                                     data-aos="fade-up"
//                                 >
//                                     <span
//                                         className={[
//                                             "grid h-8 w-8 place-items-center rounded-xl ring-1",
//                                             selected
//                                                 ? "bg-purple-50 text-purple-700 ring-purple-200"
//                                                 : "bg-white text-gray-600 ring-gray-200",
//                                         ].join(" ")}
//                                         aria-hidden="true"
//                                     >
//                                         {t.icon}
//                                     </span>
//                                     <span
//                                         className={[
//                                             " text-xs lg:text-base",
//                                             selected ? "text-gray-900" : "text-gray-700",
//                                         ].join(" ")}
//                                     >
//                                         {t.label}
//                                     </span>
//                                     {selected && (
//                                         <span className="ml-auto hidden text-purple-600 md:inline-flex">
//                                             <ChevronRight className="h-4 w-4" />
//                                         </span>
//                                     )}
//                                 </button>
//                             )
//                         })}
//                     </div>

//                     {/* Right: Content + Image */}
//                     <div
//                         key={active.id}
//                         className=" max-lg:mt-6  md:flex flex-col md:flex-row gap-6 w-full"
//                     // data-aos="fade-left"
//                     >
//                         {/* Image card with circular transition */}
//                         <div
//                             className=" md:w-[40%] flex-shrink-0 overflow-hidden rounded-3xl shadow-lg ring-1 ring-gray-200 relative"
//                         // data-aos="zoom-in"
//                         >
//                             <AnimatePresence mode="wait">
//                                 <motion.img
//                                     key={active.image}
//                                     src={active.image}
//                                     alt={`${active.product} visual`}
//                                     initial={{ clipPath: "circle(0% at 0% 0%)" }}
//                                     animate={{ clipPath: "circle(150% at 100% 100%)" }}
//                                     exit={{ clipPath: "circle(0% at 0% 0%)" }}
//                                     transition={{ duration: 0.7, ease: "easeInOut" }}
//                                     className="h-full max-md:h-[300px] w-full object-cover md:absolute inset-0"
//                                 />
//                             </AnimatePresence>
//                         </div>

//                         {/* Content card */}
//                         <div
//                             className="flex-1 rounded-3xl bg-white p-6 shadow-lg ring-1 ring-gray-200"
//                             data-aos="fade-up"
//                         >
//                             <div className="mb-2 flex items-center justify-between gap-3">
//                                 <h3 className="text-xl font-gotu font-semibold text-purple-700 md:text-2xl">
//                                     {active.product}
//                                 </h3>
//                                 <span className="rounded-md bg-purple-50 px-2 py-1 text-xs font-semibold tracking-wider text-purple-600 ring-1 ring-purple-200">
//                                     {active.client}
//                                 </span>
//                             </div>

//                             <p className="text-sm font-medium text-gray-900 md:text-base">
//                                 {active.subtitle}
//                             </p>
//                             <p className="mt-2 text-sm leading-6 text-gray-600 md:text-[15px]">
//                                 {active.description}
//                             </p>

//                             <div className="mt-5 grid grid-cols-1 gap-3">
//                                 {active.metrics.map((m, i) => (
//                                     <MetricRow key={i} m={m} />
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//             </div>

//         </section>
//     )
// }





"use client"

import type React from "react"
import { useMemo, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {

    ChevronRight,



    Briefcase,
    BadgeCheck,
    Users,
    Send,
    Cpu,
    DollarSign,
} from "lucide-react"
import type { JSX } from "react/jsx-runtime"


type Metric = { delta: string; label: string }
type TabData = {
    id: string
    label: string
    icon: JSX.Element
    product: string
    client: string
    subtitle: string
    description: string
    image: string
    metrics: Metric[]
}



const TABS: TabData[] = [
    {
        id: "sales",
        label: "Affordable (Starting Free)",
        icon: <DollarSign className="h-4 w-4 text-green-600" aria-hidden="true" />,
        product: "Starter Digital Card",
        client: "Entrepreneurs & Freelancers",
        subtitle: "Your Digital Business Card — Smarter, Faster, Professional",
        description:
            "Create and share your profile instantly with NFC or WhatsApp. ProfileXpert makes it easy to start building your professional identity at no cost.",
        image: "/hero-mockup/Untitleddesign(11).webp",
        metrics: [
            { delta: "+85%", label: "Faster profile sharing" },
            { delta: "+70%", label: "Increase in direct contacts" },
        ],
    },
    {
        id: "creative",
        label: "Works Office with NFC",
        icon: <Cpu className="h-4 w-4 text-indigo-600" aria-hidden="true" />,
        product: "NFC Office Integration",
        client: "Office Teams & Admins",
        subtitle: "Elevate Your Digital Presence Effortlessly",
        description:
            "ProfileXpert supports office-ready NFC profiles for smart desks, receptions, and shared workspaces — enabling easy, instant sharing.",
        image: "/hero-mockup/238361420_f39eafee-af75-41fc-aa67-bcc9a789ae8e.jpg",
        metrics: [
            { delta: "+60%", label: "Profile views increase" },
            { delta: "+45%", label: "Improved aesthetic appeal" },
        ],
    },
    {
        id: "health",
        label: "Share via WhatsApp in 1 Click",
        icon: <Send className="h-4 w-4 text-blue-600" aria-hidden="true" />,
        product: "1-Click Share",
        client: "On-the-Go Networkers",
        subtitle: "Tap or Scan — Share Instantly",
        description:
            "Create stunning profiles, share with a tap or QR scan, and impress instantly — no apps or installs required.",
        image: "/hero-mockup/Untitleddesign12).webp",
        metrics: [
            { delta: "+90%", label: "QR code scan engagement" },
            { delta: "-50%", label: "Drop in sharing friction" },
        ],
    },
    {
        id: "commerce",
        label: "Trusted by 2000+ Professionals",
        icon: <Users className="h-4 w-4 text-purple-600" aria-hidden="true" />,
        product: "Pro Networking Suite",
        client: "Modern Professionals & Teams",
        subtitle: "Networking That Moves at Your Speed",
        description:
            "ProfileXpert is your go-to solution for digital business cards, customizable QR codes, and premium profile layouts — trusted by 2000+ users.",
        image: "/hero-mockup/2982.jpg",
        metrics: [
            { delta: "+75%", label: "Networking efficiency" },
            { delta: "+50%", label: "New leads generated" },
        ],
    },
    {
        id: "marketing",
        label: "Perfect for Events & Expos",
        icon: <BadgeCheck className="h-4 w-4 text-orange-600" aria-hidden="true" />,
        product: "Event Mode",
        client: "Exhibitors & Attendees",
        subtitle: "Maximize Impact at Every Interaction",
        description:
            "ProfileXpert Event Mode lets you share contact details, brochures, and offers instantly via NFC or QR — no printing, no fuss.",
        image: "/hero-mockup/2149304774.jpg",
        metrics: [
            { delta: "+120%", label: "Lead capture rate" },
            { delta: "-75%", label: "Paper usage at events" },
        ],
    },
    {
        id: "enterprise",
        label: "Enterprise-Ready Solutions",
        icon: <Briefcase className="h-4 w-4 text-teal-600" aria-hidden="true" />,
        product: "Enterprise Suite",
        client: "Corporates & Large Teams",
        subtitle: "Smart Digital Identity at Scale",
        description:
            "Manage hundreds of digital profiles, analytics, and sharing options with centralized control. Ideal for HR, sales, and corporate teams.",
        image: "/hero-mockup/2150041850.jpg",
        metrics: [
            { delta: "+90%", label: "Team onboarding speed" },
            { delta: "+65%", label: "Brand consistency across teams" },
        ],
    }

];



function Pill({ children }: { children: React.ReactNode }) {
    return (
        <span className="inline-flex items-center rounded-full bg-purple-50 px-2.5 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-200">
            {children}
        </span>
    )
}

function MetricRow({ m }: { m: Metric }) {
    return (
        <div
            className="flex items-center gap-3 rounded-xl bg-white p-3 ring-1 ring-gray-200/70 shadow-sm"
            data-aos="fade-up"
            data-aos-delay="200"
        >
            <Pill>{m.delta}</Pill>
            <p className="text-sm text-gray-700">{m.label}</p>
        </div>
    )
}

export default function Advantages() {
    const [activeId, setActiveId] = useState<string>(TABS[0].id)
    const active = useMemo(() => TABS.find((t) => t.id === activeId) ?? TABS[0], [activeId])


    return (
        // <section className="w-full  py-12 bg-gradient-to-b from-red-50 to-white">
        <section id='why-choose' className="w-full py-12 bg-gradient-to-b from-purple-50 to-white">

            {/* Header */}
            <div className="templateContainer">
                <header
                    className="mx-auto max-w-5xl font-gotu text-center px-6 pb-8"
                    data-aos="fade-up"
                >

                    <h2
                        data-aos="fade-up"
                        data-aos-delay="100"
                        className="text-2xl md:text-4xl font-gotu mt-4 text-center"
                    >
                        Why Choose {' '}
                        {/* <br className="hidden md:inline" /> */}
                        ProfileXpert

                    </h2>
                    {/* </div> */}

                </header>

                <div className="lg:flex gap-5">
                    {/* Left: Tabs */}
                    {/* <div
                        role="tablist"
                        aria-label="Automation categories"
                        className="lg:sticky lg:w-[400px] flex-wrap max-lg:flex top-4 z-10 flex gap-2 overflow-x-auto pb-1 md:block md:overflow-visible md:pb-0"
                        data-aos="fade-right"
                    > */}
                    <div
                        role="tablist"
                        aria-label="Automation categories"
                        className="lg:sticky lg:w-[400px] top-4 z-10 
             flex flex-wrap justify-center gap-2 overflow-hidden pb-1 
             md:block md:overflow-visible md:pb-0"
                        data-aos="fade-right"
                    >

                        {TABS.map((t) => {
                            const selected = t.id === activeId
                            return (
                                <button
                                    key={t.id}
                                    role="tab"
                                    aria-selected={selected}
                                    onClick={() => setActiveId(t.id)}
                                    className={[
                                        "group relative my-1.5 cursor-pointer inline-flex shrink-0 items-center gap-3 rounded-2xl lg:px-4 px-2 py-2 text-left w-[150px] lg:w-full ring-1 transition-all",
                                        selected
                                            ? "bg-white ring-purple-400 shadow-sm"
                                            : "bg-purple-100/70 hover:bg-white/80 ring-purple-200",
                                    ].join(" ")}
                                    data-aos="fade-up"
                                >
                                    <span
                                        className={[
                                            "grid h-8 w-8 place-items-center rounded-xl ring-1",
                                            selected
                                                ? "bg-purple-50 text-purple-700 ring-purple-200"
                                                : "bg-white text-gray-600 ring-gray-200",
                                        ].join(" ")}
                                        aria-hidden="true"
                                    >
                                        {t.icon}
                                    </span>
                                    <span
                                        className={[
                                            " text-xs lg:text-base",
                                            selected ? "text-gray-900" : "text-gray-700",
                                        ].join(" ")}
                                    >
                                        {t.label}
                                    </span>
                                    {selected && (
                                        <span className="ml-auto hidden text-purple-600 md:inline-flex">
                                            <ChevronRight className="h-4 w-4" />
                                        </span>
                                    )}
                                </button>
                            )
                        })}
                    </div>

                    {/* Right: Content + Image */}
                    <div
                        key={active.id}
                        className=" max-lg:mt-6  md:flex flex-col md:flex-row gap-6 w-full"
                    // data-aos="fade-left"
                    >
                        {/* Image card with circular transition */}
                        <div
                            className=" md:w-[40%] flex-shrink-0 overflow-hidden rounded-3xl shadow-lg ring-1 ring-gray-200 relative"
                        // data-aos="zoom-in"
                        >
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={active.image}
                                    src={active.image}
                                    alt={`${active.product} visual`}
                                    initial={{ clipPath: "circle(0% at 0% 0%)" }}
                                    animate={{ clipPath: "circle(150% at 100% 100%)" }}
                                    exit={{ clipPath: "circle(0% at 0% 0%)" }}
                                    transition={{ duration: 0.7, ease: "easeInOut" }}
                                    className="h-full max-md:h-[300px] w-full object-cover md:absolute inset-0"
                                />
                            </AnimatePresence>
                        </div>

                        {/* Content card */}
                        <div
                            className="flex-1 mt-8 lg:mt-0 rounded-3xl bg-white p-6 shadow-lg ring-1 ring-gray-200"
                            data-aos="fade-up"
                        >
                            <div className="mb-2 flex items-center justify-between gap-3">
                                <h3 className="text-xl font-gotu font-semibold text-purple-700 md:text-2xl">
                                    {active.product}
                                </h3>
                                <span className="rounded-md bg-purple-50 px-2 py-1 text-xs font-semibold tracking-wider text-purple-600 ring-1 ring-purple-200">
                                    {active.client}
                                </span>
                            </div>

                            <p className="text-sm font-medium text-gray-900 md:text-base">
                                {active.subtitle}
                            </p>
                            <p className="mt-2 text-sm leading-6 text-gray-600 md:text-[15px]">
                                {active.description}
                            </p>

                            <div className="mt-5 grid grid-cols-1 gap-3">
                                {active.metrics.map((m, i) => (
                                    <MetricRow key={i} m={m} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}



///////////////////////////////// wor working /////////

// "use client"

// import type React from "react"
// import { useMemo, useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import {
//     BadgePercent,
//     HeartPulse,
//     ShoppingBag,
//     PiggyBank,
//     ChevronRight,
//     Megaphone,
//     Star,
//     BarChart3,
// } from "lucide-react"
// import type { JSX } from "react/jsx-runtime"


// type Metric = { delta: string; label: string }
// type TabData = {
//     id: string
//     label: string
//     icon: JSX.Element
//     product: string
//     client: string
//     subtitle: string
//     description: string
//     // image: string
//     metrics: Metric[]
// }

// const TABS: TabData[] = [
//     {
//         id: "sales",
//         label: "Effortless Digital Identity Creation",
//         icon: <BadgePercent className="h-4 w-4 text-purple-600" aria-hidden="true" />,
//         product: "Management",
//         client: "Google / Maps",
//         subtitle: "Effortless Digital Identity Creation",
//         description:
//             "ProfileXpert enables users to easily create and customize digital business cards, helping individuals and professionals enhance their personal or brand identity with minimal effort.",
//         // image: "/image/undefined_i_want_to_use_in_bac.png",
//         metrics: [
//             { delta: "+ 75%", label: "Increase in local impressions" },
//             { delta: "+ 60%", label: "Growth in calls & directions" },
//         ],
//     },
//     {
//         id: "creative",
//         label: "Premium Layouts & Themes",
//         icon: <ShoppingBag className="h-4 w-4 text-purple-600" aria-hidden="true" />,
//         product: "Management",
//         client: "Community Reach",
//         subtitle: "Premium Layouts & Themes",
//         description:
//             "Choose from a wide selection of professionally designed layouts and themes to make your digital profile stand out. Perfect for any industry or personal style.",
//         // image: "/image/undefined_i_want_to_use_in_bac.png",
//         metrics: [
//             { delta: "+ 40%", label: "Conversion rate uplift" },
//             { delta: "+ 25%", label: "More store walk-ins" },
//         ],
//     },
//     {
//         id: "health",
//         label: "Instant Sharing with QR Codes",
//         icon: <HeartPulse className="h-4 w-4 text-purple-600" aria-hidden="true" />,
//         product: "Management",
//         client: "Community Reach",
//         subtitle: "Instant Sharing with QR Codes",
//         description:
//             "Generate unique, shareable QR codes for each profile card, allowing for fast and seamless networking online or in person—no app downloads required.",
//         // image: "/image/undefined_i_want_to_use_in_bac.png",
//         metrics: [
//             { delta: "+ 50%", label: "Clicks from map pack" },
//             { delta: "+ 35%", label: "Profile engagement" },
//         ],
//     },
//     {
//         id: "commerce",
//         label: "The Future of Digital Networking",
//         icon: <Megaphone className="h-4 w-4 text-purple-600" aria-hidden="true" />,
//         product: "Management",
//         client: "Community Reach",
//         subtitle: "The Future of Digital Networking",
//         description:
//             "ProfileXpert redefines how people connect by offering a smart, centralized platform for digital networking that adapts to modern business and personal branding needs.",
//         // image: "/image/undefined_i_want_to_use_in_bac.png",
//         metrics: [
//             { delta: "+ 65%", label: "Brand searches increase" },
//             { delta: "+ 30%", label: "Repeat local customers" },
//         ],
//     },
//     {
//         id: "finance",
//         label: "Cost-Effectiveness",
//         icon: <PiggyBank className="h-4 w-4 text-purple-600" aria-hidden="true" />,
//         product: "Management",
//         client: "Community Reach",
//         subtitle: "High impact, low spend",
//         description:
//             "Local SEO is a cost-effective marketing strategy, especially for small and local businesses. It offers a higher return on investment compared to traditional advertising methods, reaching a targeted audience without the high costs.",
//         // image: "/image/undefined_i_want_to_use_in_bac.png",
//         metrics: [
//             { delta: "- 50%", label: "Reduction in ad spend" },
//             { delta: "x4 ROI", label: "Return on investment" },
//         ],
//     },
//     {
//         id: "reputation",
//         label: "Positive Online Reputation",
//         icon: <Star className="h-4 w-4 text-purple-600" aria-hidden="true" />,
//         product: "Management",
//         client: "Community Reach",
//         subtitle: "Earn trust with reviews",
//         description:
//             "Local SEO involves managing online reviews and ensuring a positive online reputation. Positive reviews and ratings on platforms like Google make your business more trustworthy and attractive to potential customers.",
//         // image: "/image/undefined_i_want_to_use_in_bac.png",
//         metrics: [
//             { delta: "+ 90%", label: "Increase in positive reviews" },
//             { delta: "- 40%", label: "Drop in negative feedback" },
//         ],
//     },
//     {
//         id: "analytics",
//         label: "Insights and Analytics",
//         icon: <BarChart3 className="h-4 w-4 text-purple-600" aria-hidden="true" />,
//         product: "Management",
//         client: "Community Reach",
//         subtitle: "Measure what matters",
//         description:
//             "Local SEO provides valuable insights and analytics. By tracking performance metrics, businesses can understand customer behaviour, measure the effectiveness of their strategies, and make informed decisions to optimise their local online presence further.",

//         metrics: [
//             { delta: "+ 55%", label: "Better decision-making speed" },
//             { delta: "24/7", label: "Performance tracking" },
//         ],
//     },
// ]

// function Pill({ children }: { children: React.ReactNode }) {
//     return (
//         <span className="inline-flex items-center rounded-full bg-purple-50 px-2.5 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-200">
//             {children}
//         </span>
//     )
// }

// function MetricRow({ m }: { m: Metric }) {
//     return (
//         <div
//             className="flex items-center gap-3 rounded-xl bg-white p-3 ring-1 ring-gray-200/70 shadow-sm"
//             data-aos="fade-up"
//             data-aos-delay="200"
//         >
//             <Pill>{m.delta}</Pill>
//             <p className="text-sm text-gray-700">{m.label}</p>
//         </div>
//     )
// }

// export default function Advantages() {
//     const [activeId, setActiveId] = useState<string>(TABS[0].id)
//     const active = useMemo(() => TABS.find((t) => t.id === activeId) ?? TABS[0], [activeId])


//     return (
//         // <section className="w-full  py-12 bg-gradient-to-b from-red-50 to-white">
//         <section className="w-full py-12 bg-gradient-to-b from-purple-50 to-white">

//             {/* Header */}
//             <div className="templateContainer">
//                 <header
//                     className="mx-auto max-w-5xl font-gotu text-center px-6 pb-8"
//                     data-aos="fade-up"
//                 >
//                     {/* <h1 className="text-pretty text-3xl font-semibold tracking-tight md:text-4xl">
//                         Get started with our <br /><span className="text-red-700">   simple
//                             Services</span>

//                     </h1> */}
//                     {/* <div className="flex justify-center"> */}
//                     <h2
//                         data-aos="fade-up"
//                         data-aos-delay="100"
//                         className="text-2xl md:text-4xl font-gotu mt-4 text-center"
//                     >
//                         Get started with our {' '}
//                         <br className="hidden md:inline" />
//                         Services

//                     </h2>
//                     {/* </div> */}

//                 </header>

//                 <div className="lg:flex gap-5">
//                     {/* Left: Tabs */}
//                     <div
//                         role="tablist"
//                         aria-label="Automation categories"
//                         className="lg:sticky lg:w-[400px] flex-wrap max-lg:flex top-4 z-10 flex gap-2 overflow-x-auto pb-1 md:block md:overflow-visible md:pb-0"
//                         data-aos="fade-right"
//                     >
//                         {TABS.map((t) => {
//                             const selected = t.id === activeId
//                             return (
//                                 <button
//                                     key={t.id}
//                                     role="tab"
//                                     aria-selected={selected}
//                                     onClick={() => setActiveId(t.id)}
//                                     className={[
//                                         "group relative my-1.5 cursor-pointer inline-flex shrink-0 items-center gap-3 rounded-2xl lg:px-4 px-2 py-2 text-left w-[150px] lg:w-full ring-1 transition-all",
//                                         selected
//                                             ? "bg-white ring-purple-400 shadow-sm"
//                                             : "bg-purple-100/70 hover:bg-white/80 ring-gray-200",
//                                     ].join(" ")}
//                                     data-aos="fade-up"
//                                 >
//                                     <span
//                                         className={[
//                                             "grid h-8 w-8 place-items-center rounded-xl ring-1",
//                                             selected
//                                                 ? "bg-purple-50 text-purple-700 ring-purple-200"
//                                                 : "bg-white text-gray-600 ring-gray-200",
//                                         ].join(" ")}
//                                         aria-hidden="true"
//                                     >
//                                         {t.icon}
//                                     </span>
//                                     <span
//                                         className={[
//                                             " text-xs lg:text-base font-medium",
//                                             selected ? "text-gray-900" : "text-gray-700",
//                                         ].join(" ")}
//                                     >
//                                         {t.label}
//                                     </span>
//                                     {selected && (
//                                         <span className="ml-auto hidden text-purple-600 md:inline-flex">
//                                             <ChevronRight className="h-4 w-4" />
//                                         </span>
//                                     )}
//                                 </button>
//                             )
//                         })}
//                     </div>

//                     {/* Right: Content + Image */}
//                     <div
//                         key={active.id}
//                         className=" max-lg:mt-6  md:flex flex-col md:flex-row gap-6 w-full"
//                     // data-aos="fade-left"
//                     >
//                         {/* Image card with circular transition */}
//                         {/* <div
//                             className=" md:w-[40%] flex-shrink-0 overflow-hidden rounded-3xl shadow-lg ring-1 ring-gray-200 relative"

//                         >
//                             <AnimatePresence mode="wait">
//                                 <motion.img
//                                     key={active.image}
//                                     src={active.image}
//                                     alt={`${active.product} visual`}
//                                     initial={{ clipPath: "circle(0% at 0% 0%)" }}
//                                     animate={{ clipPath: "circle(150% at 100% 100%)" }}
//                                     exit={{ clipPath: "circle(0% at 0% 0%)" }}
//                                     transition={{ duration: 0.7, ease: "easeInOut" }}
//                                     className="h-full max-md:h-[300px] w-full object-cover md:absolute inset-0"
//                                 />
//                             </AnimatePresence>
//                         </div> */}

//                         <div
//                             className="md:w-[40%] flex-shrink-0 overflow-hidden rounded-3xl shadow-lg ring-1 ring-gray-200 relative"
//                         >
//                             <AnimatePresence mode="wait">
//                                 <motion.img
//                                     key="static-image"
//                                     src="/image/undefined_i_want_to_use_in_bac.png" // 👈 Use your real image path here
//                                     alt="Static visual"
//                                     // initial={{ clipPath: "circle(0% at 0% 0%)" }}
//                                     // animate={{ clipPath: "circle(150% at 100% 100%)" }}
//                                     // exit={{ clipPath: "circle(0% at 0% 0%)" }}
//                                     // transition={{ duration: 0.7, ease: "easeInOut" }}
//                                     className="h-full max-md:h-[300px] w-full object-cover md:absolute inset-0"
//                                 />
//                             </AnimatePresence>
//                         </div>

//                         {/* Content card */}
//                         <div
//                             className="flex-1 rounded-3xl bg-white p-6 shadow-lg ring-1 ring-gray-200"
//                             data-aos="fade-up"
//                         >
//                             <div className="mb-2 flex items-center justify-between gap-3">
//                                 <h3 className="text-xl font-gotu font-semibold text-purple-700 md:text-2xl">
//                                     {active.product}
//                                 </h3>
//                                 <span className="rounded-md bg-purple-50 px-2 py-1 text-xs font-semibold tracking-wider text-purple-600 ring-1 ring-purple-200">
//                                     {active.client}
//                                 </span>
//                             </div>

//                             <p className="text-sm font-medium text-gray-900 md:text-base">
//                                 {active.subtitle}
//                             </p>
//                             <p className="mt-2 text-sm leading-6 text-gray-600 md:text-[15px]">
//                                 {active.description}
//                             </p>

//                             <div className="mt-5 grid grid-cols-1 gap-3">
//                                 {active.metrics.map((m, i) => (
//                                     <MetricRow key={i} m={m} />
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//             </div>

//         </section>
//     )
// }
