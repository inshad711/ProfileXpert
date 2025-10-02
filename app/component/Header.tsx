
// // D:\NewNextProject\web\app\component\Header.tsx
// "use client";

// import Image from 'next/image';
// import Link from 'next/link';
// import { useState, useEffect, useRef } from 'react';

// const Header = () => {
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//     const [lastScrollY, setLastScrollY] = useState(0);
//     const [isHeaderVisible, setIsHeaderVisible] = useState(true);

//     const menuRef = useRef<HTMLDivElement>(null);

//     const toggleMobileMenu = () => {
//         setIsMobileMenuOpen((prev) => !prev);
//     };

//     const closeMobileMenu = () => {
//         setIsMobileMenuOpen(false);
//     };


//     useEffect(() => {
//         const handleScroll = () => {
//             const currentScrollY = window.scrollY;

//             if (!isMobileMenuOpen) {
//                 if (currentScrollY > lastScrollY && currentScrollY > 50) {
//                     setIsHeaderVisible(false);
//                 } else {
//                     setIsHeaderVisible(true);
//                 }
//             }

//             setLastScrollY(currentScrollY);
//         };

//         window.addEventListener("scroll", handleScroll);

//         return () => window.removeEventListener("scroll", handleScroll);
//     }, [lastScrollY, isMobileMenuOpen]);

//     // Disable background scroll when menu is open
//     useEffect(() => {
//         if (isMobileMenuOpen) {
//             document.body.style.overflow = 'hidden';
//         } else {
//             document.body.style.overflow = '';
//         }

//         return () => {
//             document.body.style.overflow = '';
//         };
//     }, [isMobileMenuOpen]);

//     // Close mobile menu on click outside
//     useEffect(() => {
//         const handleClickOutside = (event: MouseEvent) => {
//             if (
//                 isMobileMenuOpen &&
//                 menuRef.current &&
//                 !menuRef.current.contains(event.target as Node)
//             ) {
//                 closeMobileMenu();
//             }
//         };

//         document.addEventListener('mousedown', handleClickOutside);
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, [isMobileMenuOpen]);

//     return (
//         <>
//             {/* ✅ Overlay covers entire screen, above header, below menu */}
//             {isMobileMenuOpen && (
//                 <div className="fixed inset-0  bg-black/25 z-[55] md:hidden" />
//             )}

//             <header
//                 className={`bg-white font-gotu  fixed top-0 w-full z-50 transition-transform duration-300 ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
//                     }`}
//             >
//                 <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
//                     <div className="flex h-16 items-center justify-between">
//                         {/* Logo Section */}
//                         <div className="md:flex md:items-center">
//                             <Link href="/">
//                                 <Image
//                                     src="/icone/logo-new.png"
//                                     alt="Logo"
//                                     width={100}
//                                     height={70}
//                                     className="w-[110px] h-[60px]"
//                                 />
//                             </Link>
//                         </div>

//                         {/* Desktop Navigation */}
//                         <div className="hidden md:block">
//                             <nav aria-label="Global">
//                                 <ul className="flex items-center gap-6 text-sm">

//                                     {[
//                                         { name: 'About', href: '#about' },
//                                         { name: 'Features', href: '#features' },
//                                         { name: 'Why Choose', href: '#why-choose' },
//                                         { name: 'Services', href: '#services' },
//                                         { name: 'Process', href: '#process' },
//                                         { name: 'Contact', href: '#contact' },
//                                     ].map(({ name, href }) => (
//                                         <li key={name}>

//                                             <Link
//                                                 href={href}
//                                                 className="relative group text-black transition-all duration-300 hover:text-gray-700"
//                                             >
//                                                 {name}
//                                                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#9112BC] to-[#9929EA] transition-all duration-300 group-hover:w-full" />
//                                             </Link>
//                                         </li>
//                                     ))}

//                                 </ul>
//                             </nav>
//                         </div>

//                         {/* Actions */}
//                         <div className="flex items-center gap-4">
//                             <div className="hidden sm:flex sm:gap-4">

//                                 <Link
//                                     href="#contact"
//                                     className="rounded-md bg-gradient-to-r from-[#9112BC] to-[#9929EA] px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:opacity-90 transition"
//                                 >
//                                     Get Quotes
//                                 </Link>

//                             </div>

//                             {/* Mobile Menu Button */}
//                             <div className="block md:hidden">
//                                 <button
//                                     onClick={toggleMobileMenu}
//                                     className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
//                                 >
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         className="size-5"
//                                         fill="none"
//                                         viewBox="0 0 24 24"
//                                         stroke="currentColor"
//                                         strokeWidth="2"
//                                     >
//                                         <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
//                                     </svg>
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </header>

//             {/* ✅ Mobile Menu on top of everything */}
//             <div
//                 ref={menuRef}
//                 className={`fixed top-0 left-0 h-full min-h-screen w-64 bg-white font-gotu  shadow-lg transform transition-transform duration-300 ease-in-out z-60 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}
//             >
//                 <div className="flex items-center justify-between p-4 border-b border-gray-200 ">
//                     <Link href="/">
//                         <Image
//                             src="/icone/logo-new.png"
//                             alt="Logo"
//                             width={80}
//                             height={40}
//                         />
//                     </Link>
//                     <button
//                         onClick={closeMobileMenu}
//                         className="text-gray-600  hover:text-gray-900 "
//                     >
//                         ✕
//                     </button>
//                 </div>

//                 <nav className="px-4 py-6 bg-white ">
//                     <ul className="space-y-4 text-sm">


//                         {[
//                             { name: 'About', href: '#about' },
//                             { name: 'Features', href: '#features' },
//                             { name: 'Why Choose', href: '#why-choose' },
//                             { name: 'Services', href: '#services' },
//                             { name: 'Process', href: '#process' },
//                             { name: 'Contact', href: '#contact' },
//                         ].map(({ name, href }) => (
//                             <li key={name}>
//                                 <Link
//                                     href={href}
//                                     onClick={closeMobileMenu}
//                                     className="block text-gray-700 hover:text-teal-600"
//                                 >
//                                     {name}
//                                 </Link>
//                             </li>
//                         ))}

//                     </ul>

//                     <div className="mt-6">

//                         <Link
//                             href="#contact"
//                             onClick={closeMobileMenu}
//                             className="block w-full rounded-md bg-gradient-to-r from-[#9112BC] to-[#9929EA] px-4 py-2.5 text-sm text-center font-medium text-white hover:opacity-90 transition"
//                         >
//                             Get Quotes
//                         </Link>

//                     </div>
//                 </nav>
//             </div>
//         </>
//     );
// };

// export default Header;



// D:\NewNextProject\web\app\component\Header.tsx
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);

    const menuRef = useRef<HTMLDivElement>(null);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (!isMobileMenuOpen) {
                if (currentScrollY > lastScrollY && currentScrollY > 50) {
                    setIsHeaderVisible(false);
                } else {
                    setIsHeaderVisible(true);
                }
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY, isMobileMenuOpen]);

    // ✅ Disable background scroll when mobile menu is open (mobile only)
    useEffect(() => {
        if (isMobileMenuOpen && window.innerWidth < 768) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    // ✅ Close mobile menu on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                isMobileMenuOpen &&
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                closeMobileMenu();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMobileMenuOpen]);

    // ✅ Close mobile menu if window resized to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768 && isMobileMenuOpen) {
                closeMobileMenu();
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            {/* ✅ Overlay covers entire screen, above header, below menu */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 bg-black/25 z-[55] md:hidden" />
            )}

            <header
                className={`bg-white font-gotu fixed top-0 w-full z-50 transition-transform duration-300 ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'}`}
            >
                <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        {/* Logo Section */}
                        <div className="md:flex md:items-center">
                            <Link href="/">
                                <Image
                                    src="/icone/logo-new.png"
                                    alt="Logo"
                                    width={100}
                                    height={70}
                                    className="w-[110px] h-[60px]"
                                />
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:block">
                            <nav aria-label="Global">
                                <ul className="flex items-center gap-6 text-sm">
                                    {[
                                        { name: 'About Us', href: '#about' },
                                        { name: 'Process', href: '#process' },
                                        { name: 'Features', href: '#features' },

                                        { name: 'Why Choose', href: '#why-choose' },
                                        { name: 'Pricing', href: '#pricing' },
                                        { name: 'Contact Us', href: '#contact' },
                                    ].map(({ name, href }) => (
                                        <li key={name}>
                                            <Link
                                                href={href}
                                                className="relative group text-black transition-all duration-300 hover:text-gray-700"
                                            >
                                                {name}
                                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#9112BC] to-[#9929EA] transition-all duration-300 group-hover:w-full" />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-4">
                            <div className="hidden sm:flex sm:gap-4">
                                <Link
                                    href="#quotes"
                                    className="rounded-md bg-gradient-to-r from-[#9112BC] to-[#9929EA] px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:opacity-90 transition"
                                >
                                    Get Quotes
                                </Link>
                            </div>

                            {/* Mobile Menu Button */}
                            <div className="block md:hidden">
                                <button
                                    onClick={toggleMobileMenu}
                                    className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="size-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* ✅ Mobile Menu on top of everything */}
            <div
                ref={menuRef}
                className={`fixed top-0 left-0 h-full min-h-screen w-64 bg-white font-gotu shadow-lg transform transition-transform duration-300 ease-in-out z-60 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}
            >
                <div className="flex items-center justify-between p-4 border-b border-gray-200 ">
                    <Link href="/">
                        <Image
                            src="/icone/logo-new.png"
                            alt="Logo"
                            width={80}
                            height={40}
                        />
                    </Link>
                    <button
                        onClick={closeMobileMenu}
                        className="text-gray-600 hover:text-gray-900"
                    >
                        ✕
                    </button>
                </div>

                <nav className="px-4 py-6 bg-white">
                    <ul className="space-y-4 text-sm">
                        {[
                            // { name: 'About', href: '#about' },
                            // { name: 'Features', href: '#features' },
                            // { name: 'Why Choose', href: '#why-choose' },
                            // { name: 'Services', href: '#services' },
                            // { name: 'Process', href: '#process' },
                            // { name: 'Contact', href: '#contact' },
                            { name: 'About Us', href: '#about' },
                            { name: 'Process', href: '#process' },
                            { name: 'Features', href: '#features' },

                            { name: 'Why Choose', href: '#why-choose' },
                            { name: 'Pricing', href: '#pricing' },
                            { name: 'Contact Us', href: '#contact' },
                        ].map(({ name, href }) => (
                            <li key={name}>
                                <Link
                                    href={href}
                                    onClick={closeMobileMenu}
                                    className="block text-gray-700 hover:text-teal-600"
                                >
                                    {name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-6">
                        <Link
                            href="#contact"
                            onClick={closeMobileMenu}
                            className="block w-full rounded-md bg-gradient-to-r from-[#9112BC] to-[#9929EA] px-4 py-2.5 text-sm text-center font-medium text-white hover:opacity-90 transition"
                        >
                            Get Quotes
                        </Link>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Header;
