// // components/ContactForm.tsx

// import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
// import Link from "next/link";

// const Contact = () => {
//     return (
//         <div className="bg-gray-50">


// <div className="text-center  pt-10">
//     <Link data-aos="fade-up"
//         href="#"
//         className="inline-flex items-center border border-blue-600 rounded-full px-2 py-1 mb-4 hover:bg-blue-50 transition"
//     >
//         <span className="bg-gradient-to-r from-blue-200 via-blue-800 to-blue-600 text-white text-xs font-semibold rounded-full px-3 py-1">
//             Contact Us
//         </span>

//     </Link>
//     <h2 data-aos="fade-up" data-aos-delay="100" className="text-2xl md:text-4xl font-gotu mt-4">
//         We help you {' '}
//         <br className="hidden md:inline" />
//         better connections
//     </h2>


// </div>
//             <div className="relative templateContainer w-full p-6 flex items-center justify-center ">

//                 <div className="py-7 w-full bg-white rounded-xl shadow-lg grid md:grid-cols-2 overflow-hidden">

//                     {/* Contact Info */}
//                     <div data-aos="fade-up" className="p-8 space-y-6">
//                         <h3 className="text-2xl font-semibold font-gotu text-[#3338A0]">Lets get in touch</h3>
//                         <p className="text-gray-600">
//                             If you wish to become a channel partner.
//                         </p>

//                         <div className="space-y-4">
//                             <div className="flex items-start text-gray-700">
//                                 <MapPin className="text-[#3338A0] w-5 h-5 mr-3 mt-1" />
//                                 <p>92 Cherry Drive Uniondale, NY 11553</p>
//                             </div>
//                             <div className="flex items-start text-gray-700">
//                                 <Mail className="text-[#3338A0] w-5 h-5 mr-3 mt-1" />
//                                 <p>lorem@ipsum.com</p>
//                             </div>
//                             <div className="flex items-start text-gray-700">
//                                 <Phone className="text-[#3338A0] w-5 h-5 mr-3 mt-1" />
//                                 <p>123-456-789</p>
//                             </div>
//                         </div>


//                         <div>
//                             <p className="text-gray-700 font-gotu mb-2">Connect with us:</p>
//                             <div className="flex space-x-3">
//                                 <a href="#" className="bg-gradient-to-l from-[#6F00FF] to-[#3338A0] hover:opacity-90 text-white p-2 rounded transition">
//                                     <Facebook size={16} />
//                                 </a>
//                                 <a href="#" className="bg-gradient-to-l from-[#6F00FF] to-[#3338A0] hover:opacity-90 text-white p-2 rounded transition">
//                                     <Twitter size={16} />
//                                 </a>
//                                 <a href="#" className="bg-gradient-to-l from-[#6F00FF] to-[#3338A0] hover:opacity-90 text-white p-2 rounded transition">
//                                     <Instagram size={16} />
//                                 </a>
//                                 <a href="#" className="bg-gradient-to-l from-[#6F00FF] to-[#3338A0] hover:opacity-90 text-white p-2 rounded transition">
//                                     <Linkedin size={16} />
//                                 </a>
//                             </div>
//                         </div>

//                     </div>

//                     {/* Form */}

//                     <div data-aos="fade-up" data-aos-delay="100" className="relative p-8">
//                         <h3 className="text-black text-2xl font-gotu font-semibold mb-6">Contact us</h3>
//                         <form className="space-y-4">
//                             <div>
//                                 <input
//                                     type="text"
//                                     name="name"
//                                     placeholder="Username"
//                                     className="w-full p-3 rounded text-black placeholder-gray-600 border border-black focus:outline-none focus:ring-2 focus:ring-black"
//                                 />
//                             </div>
//                             <div>
//                                 <input
//                                     type="email"
//                                     name="email"
//                                     placeholder="Email"
//                                     className="w-full p-3 rounded text-black placeholder-gray-600 border border-black focus:outline-none focus:ring-2 focus:ring-black"
//                                 />
//                             </div>
//                             <div>
//                                 <input
//                                     type="tel"
//                                     name="phone"
//                                     placeholder="Phone"
//                                     className="w-full p-3 rounded text-black placeholder-gray-600 border border-black focus:outline-none focus:ring-2 focus:ring-black"
//                                 />
//                             </div>
//                             <div>
//                                 <textarea
//                                     name="message"
//                                     placeholder="Message"
//                                     className="w-full p-3 h-32 rounded text-black placeholder-gray-600 border border-black focus:outline-none focus:ring-2 focus:ring-black resize-none"
//                                 ></textarea>
//                             </div>
//                             <div>
//                                 {/* <button
//                                     type="submit"
//                                     className="w-full py-3 font-gotu bg-white text-black font-semibold rounded hover:bg-transparent hover:text-white border border-black transition"
//                                 >
//                                     Send
//                                 </button> */}
//                                 <button
//                                     type="submit"
//                                     className="w-full py-3 font-gotu text-white font-semibold rounded bg-gradient-to-l from-[#6F00FF] to-[#3338A0] hover:opacity-90 transition"
//                                 >
//                                     Send
//                                 </button>

//                             </div>
//                         </form>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Contact;



// import React from 'react'

// export default function Contact() {
//     return (
//         <form>
//             <section className="py-24">
//                 <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//                     <div className="grid lg:grid-cols-2 grid-cols-1">
//                         {/* Left side image section */}
//                         <div className="lg:mb-0 mb-10">
//                             <div className="group w-full h-full">
//                                 <div className="relative h-full">
//                                     <img
//                                         src="https://pagedone.io/asset/uploads/1696488602.png"
//                                         alt="Contact Us"
//                                         className="w-full h-full lg:rounded-l-2xl rounded-2xl bg-blend-multiply bg-indigo-700"
//                                     />
//                                     <h1 className="font-manrope text-white text-4xl font-bold leading-10 absolute top-11 left-11">
//                                         Contact us
//                                     </h1>
//                                     <div className="absolute bottom-0 w-full lg:p-11 p-5">
//                                         <div className="bg-white rounded-lg p-6 block">
//                                             {/* Phone */}
//                                             <a href="tel:470-601-1911" className="flex items-center mb-6">
//                                                 <svg
//                                                     width="30"
//                                                     height="30"
//                                                     viewBox="0 0 30 30"
//                                                     fill="none"
//                                                     xmlns="http://www.w3.org/2000/svg"
//                                                 >
//                                                     {/* PHONE ICON */}
//                                                     <path
//                                                         d="M22.3092 18.3098C..."
//                                                         stroke="#4F46E5"
//                                                         strokeWidth="2"
//                                                         strokeLinecap="round"
//                                                         strokeLinejoin="round"
//                                                     />
//                                                 </svg>
//                                                 <h5 className="text-black text-base font-normal leading-6 ml-5">
//                                                     470-601-1911
//                                                 </h5>
//                                             </a>

//                                             {/* Email */}
//                                             <a href="https://veilmail.io/irish-geoff" className="flex items-center mb-6">
//                                                 <svg
//                                                     width="30"
//                                                     height="30"
//                                                     viewBox="0 0 30 30"
//                                                     fill="none"
//                                                     xmlns="http://www.w3.org/2000/svg"
//                                                 >
//                                                     {/* EMAIL ICON */}
//                                                     <path
//                                                         d="M2.81501 8.75L10.1985 13.6191..."
//                                                         stroke="#4F46E5"
//                                                         strokeWidth="2"
//                                                         strokeLinecap="round"
//                                                     />
//                                                 </svg>
//                                                 <h5 className="text-black text-base font-normal leading-6 ml-5">
//                                                     veilmail.io/irish-geoff
//                                                 </h5>
//                                             </a>

//                                             {/* Address */}
//                                             <a href="#" className="flex items-center">
//                                                 <svg
//                                                     width="30"
//                                                     height="30"
//                                                     viewBox="0 0 30 30"
//                                                     fill="none"
//                                                     xmlns="http://www.w3.org/2000/svg"
//                                                 >
//                                                     {/* MAP ICON */}
//                                                     <path
//                                                         d="M25 12.9169C..."
//                                                         stroke="#4F46E5"
//                                                         strokeWidth="2"
//                                                     />
//                                                 </svg>
//                                                 <h5 className="text-black text-base font-normal leading-6 ml-5">
//                                                     654 Sycamore Avenue, Meadowville, WA 76543
//                                                 </h5>
//                                             </a>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Right side form section */}
//                         <div className="bg-gray-50 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl">
//                             <h2 className="text-indigo-600 font-manrope text-4xl font-semibold leading-10 mb-11">
//                                 Send Us A Message
//                             </h2>

//                             {/* Name */}
//                             <input
//                                 name="name"
//                                 type="text"
//                                 placeholder="Name"
//                                 required
//                                 className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
//                             />

//                             {/* Email */}
//                             <input
//                                 name="email"
//                                 type="email"
//                                 placeholder="Email"
//                                 required
//                                 className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
//                             />

//                             {/* Phone */}
//                             <input
//                                 name="phone"
//                                 type="tel"
//                                 placeholder="Phone"
//                                 className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
//                             />



//                             {/* Message */}
//                             <textarea
//                                 name="message"
//                                 placeholder="Message"
//                                 required
//                                 className="w-full h-32 text-gray-600 placeholder-gray-400 bg-transparent text-lg shadow-sm font-normal leading-7 rounded-xl border border-gray-200 focus:outline-none p-4 mb-10 resize-none"
//                             ></textarea>

//                             {/* Submit Button */}
//                             <button
//                                 type="submit"
//                                 className="w-full h-12 text-white text-base font-semibold leading-6 rounded-full transition-all duration-700 hover:bg-indigo-800 bg-indigo-600 shadow-sm"
//                             >
//                                 Send
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </form>
//     )
// }


// D:\NewNextProject\web\app\component\Contact.tsx
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
// import Link from 'next/link';
import Image from 'next/image';

export default function Contact() {
    return (
        <form>
            <section id="contact" className="py-6 templateContainer">
                <div className="text-center  py-10 ">

                    {/* <Link data-aos="fade-up"
                        href="#"
                        className="inline-flex items-center border border-blue-600 rounded-full px-2 py-1 mb-4 hover:bg-blue-50 transition"
                    >
                        <span className="bg-gradient-to-r from-blue-200 via-blue-800 to-blue-600 text-white text-xs font-semibold rounded-full px-3 py-1">
                            Contact Us
                        </span>

                    </Link> */}
                    <div
                        data-aos="fade-up"
                        className="inline-flex items-center border border-blue-600 rounded-full px-2 py-1 mb-4 hover:bg-blue-50 transition"
                    >
                        <span className="bg-gradient-to-r from-blue-200 via-blue-800 to-blue-600 text-white text-xs font-semibold rounded-full px-3 py-1">
                            Contact Us
                        </span>
                    </div>

                    <h2 data-aos="fade-up" data-aos-delay="100" className="text-2xl md:text-4xl font-gotu mt-4">
                        We help you better {' '}
                        <br className="hidden md:inline" />
                        connections
                    </h2>


                </div>
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 grid-cols-1">
                        {/* Left side image section */}
                        <div className="lg:mb-0 mb-4">
                            <div className="group w-full">
                                <div className="relative" style={{ height: '620px' }}>
                                    <Image
                                        width={800}
                                        height={800}
                                        src="/image/undefined_i_want_to_use_in_bac.png"
                                        alt="Contact Us"
                                        className="w-full h-full object-cover lg:rounded-l-2xl rounded-2xl"
                                    />

                                    <div className="absolute bottom-0 w-full lg:p-6 p-4">

                                        <div className="bg-white/90 font-gotu rounded-lg p-4 block">
                                            {/* Phone */}
                                            <a href="tel:470-601-1911" data-aos="fade-up" data-aos-delay="100" className="flex items-center mb-4">
                                                <Phone size={30} strokeWidth={2} className="text-indigo-600" />
                                                <h5 className="text-black text-base font-normal leading-6 ml-5">
                                                    +91 8652885995
                                                </h5>
                                            </a>

                                            {/* Email */}
                                            <a href="https://veilmail.io/irish-geoff" data-aos="fade-up" data-aos-delay="200" className="flex items-center mb-4">
                                                <Mail size={30} strokeWidth={2} className="text-indigo-600" />
                                                <h5 className="text-black text-base font-normal leading-6 ml-5">
                                                    techmobilize@gmail.com
                                                </h5>
                                            </a>

                                            {/* Address */}
                                            <a href="#" data-aos="fade-up" data-aos-delay="300" className="flex items-center">
                                                <MapPin size={30} strokeWidth={2} className="text-indigo-600 flex-shrink-0" />
                                                <h5 className="text-black max-w-md text-base font-normal leading-6 ml-5">
                                                    Techmobilize Innovations Pvt Ltd
                                                    1904, D-1, Shreepati Castle,
                                                    Khetwadi Back Road, Mumbai 400004
                                                </h5>
                                            </a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right side form section */}
                        <div data-aos="fade-up" data-aos-delay="300" className="bg-gray-50 p-4 lg:px-6 lg:rounded-r-2xl rounded-2xl">
                            <h2 className=" font-gotu text-2xl md:text-4xl leading-10 mb-6">
                                If You Wish To Become A Channel Partner
                            </h2>

                            {/* Name */}
                            <input
                                name="name"
                                type="text"
                                placeholder="Name"
                                required
                                className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-md font-normal leading-7 rounded-md border border-gray-200 focus:outline-none pl-4 mb-6"
                            />

                            {/* Email */}
                            <input
                                name="email"
                                type="email"
                                placeholder="Email"
                                required
                                className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-md font-normal leading-7 rounded-md  border border-gray-200 focus:outline-none pl-4 mb-6"
                            />

                            {/* Phone */}
                            <input
                                name="phone"
                                type="tel"
                                placeholder="Phone"
                                className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-md font-normal leading-7 rounded-md  border border-gray-200 focus:outline-none pl-4 mb-6"
                            />

                            {/* Phone */}
                            <input
                                name="address"
                                type="text"
                                placeholder="Address"
                                className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-md font-normal leading-7 rounded-md  border border-gray-200 focus:outline-none pl-4 mb-6"
                            />

                            {/* Message */}
                            <textarea
                                name="message"
                                placeholder="Message"
                                required
                                className="w-full h-32 text-gray-600 placeholder-gray-400 bg-transparent text-md shadow-sm font-normal leading-7 rounded-xl border border-gray-200 focus:outline-none p-4 mb-6 resize-none"
                            ></textarea>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full h-12 text-white text-base font-semibold leading-6 rounded-full transition-all duration-700 hover:bg-indigo-800 bg-indigo-600 shadow-sm"
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </form>
    );
}
