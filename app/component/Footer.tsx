// import Image from "next/image";
// import React from "react";
// import { MapPin, Mail } from 'lucide-react';
// const Footer: React.FC = () => {
//     return (
//         <footer className="">
//             <div className="max-w-screen-xl px-4 pt-16 pb-10 mx-auto sm:px-6 lg:px-8">
//                 <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
//                     <div>
//                         <Image height={150} width={200} src="/icone/logo-new.png" className="mr-5 w-36 h-18" alt="Company Logo" />
//                         <p className="max-w-xs mt-4 text-sm text-gray-600">
//                             ProfileXpert is a smart digital business card platform designed to help professionals and businesses create, share, and manage their online presence effortlessly.
//                         </p>
//                         <div className="flex sm:flex-row sm:justify-start gap-x-4 mt-6">
//                             <a

//                                 href="https://apps.apple.com/in/app/profilexpert/id6747479661"
//                                 className="transition-transform hover:-translate-y-0.5"
//                             >
//                                 <Image
//                                     src="/icone/en-us.svg"
//                                     alt="Download on the App Store"
//                                     width={160}
//                                     height={48}
//                                     className="h-[42px] w-auto"
//                                 />
//                             </a>

//                             <a

//                                 href="https://play.google.com/store/apps/details?id=com.profile.expert"
//                                 className="transition-transform hover:-translate-y-0.5"
//                             >
//                                 <Image
//                                     src="/icone/googleplay.svg"
//                                     alt="Get it on Google Play"
//                                     width={160}
//                                     height={48}
//                                     className="h-[42px] w-auto"
//                                 />
//                             </a>
//                         </div>
//                     </div>
//                     <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
//                         <div>
//                             <p className="font-medium font-gotu">Company</p>

//                             <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
//                                 <a className="hover:pl-2 transition-all duration-300 " href="#">
//                                     About
//                                 </a>
//                                 <a className="hover:pl-2 transition-all duration-300 " href="#">
//                                     Meet the Team
//                                 </a>
//                                 <a className="hover:pl-2 transition-all duration-300 " href="#">
//                                     History
//                                 </a>
//                                 <a className="hover:pl-2 transition-all duration-300 " href="#">
//                                     Careers
//                                 </a>
//                             </nav>

//                         </div>
//                         <div>
//                             <p className="font-medium font-gotu">Contact Info</p>

//                             <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
//                                 <a className="flex items-center hover:opacity-75 space-x-2" href="mailto:Techmobilize@gmail.com">
//                                     <Mail className="w-5 h-5 flex-shrink-0" />
//                                     <span>techmobilize@gmail.com</span>
//                                 </a>
//                                 <a className="flex items-start hover:opacity-75 space-x-2" href="#">
//                                     <MapPin className="w-5 h-5 flex-shrink-0" />
//                                     <span>
//                                         Techmobilize Innovations Pvt Ltd<br />
//                                         1904, D-1, Shreepati Castle,<br />
//                                         Khetwadi Back Road, Mumbai 400004
//                                     </span>
//                                 </a>

//                             </nav>
//                         </div>
//                         <div>
//                             <p className="font-medium font-gotu">Helpful Links</p>

//                             <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
//                                 <a className="hover:pl-2 transition-all duration-300 " href="#">
//                                     Contact
//                                 </a>
//                                 <a className="hover:pl-2 transition-all duration-300 " href="#">
//                                     FAQs
//                                 </a>
//                                 <a className="hover:pl-2 transition-all duration-300" href="#">
//                                     Live Chat
//                                 </a>
//                             </nav>

//                         </div>
//                         <div>
//                             <p className="font-medium font-gotu">Legal</p>

//                             <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
//                                 <a className="hover:pl-2 transition-all duration-300" href="#">
//                                     Privacy Policy
//                                 </a>
//                                 <a className="hover:pl-2 transition-all duration-300 " href="#">
//                                     Terms &amp; Conditions
//                                 </a>
//                                 <a className="hover:pl-2 transition-all duration-300 " href="#">
//                                     Returns Policy
//                                 </a>
//                                 <a className="hover:pl-2 transition-all duration-300" href="#">
//                                     Accessibility
//                                 </a>
//                             </nav>

//                         </div>
//                     </div>
//                 </div>
//                 <p className="mt-8 text-xs text-gray-800 font-gotu">© 2025 All Rights Reserved ProfileXpert</p>
//             </div>
//         </footer>
//     );
// };

// export default Footer;



import Image from "next/image";
import React from "react";
import { MapPin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="">
            <div className="max-w-screen-xl px-4 pt-16 pb-10 mx-auto sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div>
                        <Image height={150} width={200} src="/icone/logo-new.png" className="mr-5 w-36 h-18" alt="Company Logo" />
                        <p className="max-w-xs mt-4 text-sm text-gray-600">
                            ProfileXpert is a smart digital business card platform designed to help professionals and businesses create, share, and manage their online presence effortlessly.
                        </p>
                        {/* <div className="flex sm:flex-row sm:justify-start gap-x-4 mt-6">
                            <a
                                href="https://apps.apple.com/in/app/profilexpert/id6747479661"
                                className="transition-transform hover:-translate-y-0.5"
                            >
                                <Image
                                    src="/icone/en-us.svg"
                                    alt="Download on the App Store"
                                    width={160}
                                    height={48}
                                    className="h-[42px] w-auto"
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
                                    className="h-[42px] w-auto"
                                />
                            </a>
                        </div> */}
                        <div className="flex sm:flex-row sm:justify-start gap-x-4 mt-6">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
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
                                target="_blank"
                                rel="noopener noreferrer"
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

                    <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-3">
                        <div>
                            <p className="font-medium font-gotu">Company</p>
                            <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                                <a className="hover:pl-2 transition-all duration-300 " href="#process">
                                    Process
                                </a>
                                <a className="hover:pl-2 transition-all duration-300 " href="#about">
                                    About
                                </a>
                                <a className="hover:pl-2 transition-all duration-300 " href="#features">
                                    Features
                                </a>
                                <a className="hover:pl-2 transition-all duration-300 " href="#why-choose">
                                    Why Choose
                                </a>
                                <a className="hover:pl-2 transition-all duration-300 " href="#pricing">
                                    Pricing
                                </a>

                            </nav>
                        </div>
                        <div>
                            <p className="font-medium font-gotu">Legal</p>
                            <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                                <a className="hover:pl-2 transition-all duration-300" href="#contact">
                                    Contact Us
                                </a>
                                <a className="hover:pl-2 transition-all duration-300" href="#">
                                    Privacy Policy
                                </a>
                                <a className="hover:pl-2 transition-all duration-300 " href="#">
                                    Terms &amp; Conditions
                                </a>
                                <a className="hover:pl-2 transition-all duration-300 " href="#">
                                    Returns Policy
                                </a>

                            </nav>
                        </div>
                        <div>
                            <p className="font-medium font-gotu">Contact Info</p>
                            <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                                <a className="flex items-center hover:opacity-75 space-x-2" href="mailto:Techmobilize@gmail.com">
                                    <Mail className="w-5 h-5 flex-shrink-0" />
                                    <span>techmobilize@gmail.com</span>
                                </a>
                                <a className="flex items-start hover:opacity-75 space-x-2" href="#">
                                    <MapPin className="w-5 h-5 flex-shrink-0" />
                                    <span>
                                        Techmobilize Innovations Pvt Ltd<br />
                                        1904, D-1, Shreepati Castle,<br />
                                        Khetwadi Back Road, Mumbai 400004
                                    </span>
                                </a>
                            </nav>
                        </div>


                    </div>
                </div>
                <p className="mt-8 text-xs text-gray-800 font-gotu">© 2025 All Rights Reserved ProfileXpert</p>
            </div>
        </footer>
    );
};

export default Footer;
