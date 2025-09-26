

'use client';

// import Image from 'next/image';
import { CircleCheckBig, MoveRight } from 'lucide-react';

const CustomeHero = () => {


    return (
        <section id='about' className="bg-gray-50 py-20">
            <div className="templateContainer px-6  flex flex-col lg:flex-row items-start gap-12">


                {/* Left: Text */}
                <div className="w-full lg:w-1/2">


                    <span>Why ProfileXpert?</span>
                    <h1
                        data-aos="fade-up"
                        className="text-[30px] font-gotu lg:text-[36px] tracking-normal leading-[41px] lg:leading-[50px]"
                    >
                        Elevate Your Digital <br className="hidden md:inline" />
                        {" "}
                        <span className="text-primary ">
                            Presence Effortlessly
                        </span>{" "}

                    </h1>
                    <p data-aos="fade-up" data-aos-delay="300" className="text-gray-700 pt-4 mb-4">
                        ProfileXpert is your go-to solution for digital business cards, customizable QR codes, and premium profile layouts. Create stunning profiles, share with a tap, and leave a lasting impression.
                    </p>
                    <ul data-aos="fade-up" data-aos-delay="400" className="text-gray-500 list-disc list-inside pt-2 mb-4">

                        <li className="flex items-start gap-2">
                            <CircleCheckBig size={18} color="#3338A0" /> {/* Tailwind green-500 */}
                            <span>Customizable QR Codes</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CircleCheckBig size={18} color="#3338A0" />
                            <span>Predefined Profile Templates</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CircleCheckBig size={18} color="#3338A0" />
                            <span>One-Tap Digital Card Sharing</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CircleCheckBig size={18} color="#3338A0" />
                            <span>Seamless Cloud Sync</span>
                        </li>

                    </ul>

                    {/* <button data-aos="fade-up" data-aos-delay="500"
                        className="bg-gradient-to-l from-[#6F00FF] to-[#3338A0] text-white px-6 py-3 flex items-center gap-3 uppercase font-medium text-sm hover:opacity-90 transition rounded-md"
                    >
                        Get Start

                        <MoveRight />
                    </button> */}
                    <a
                        href="#contact"
                        data-aos="fade-up"
                        data-aos-delay="500"
                        className="bg-gradient-to-r from-[#6F00FF] to-[#9929EA] text-white px-6 py-3 items-center gap-3 uppercase font-medium text-sm hover:opacity-90 transition rounded-md inline-flex"
                    >
                        Get Start
                        <MoveRight />
                    </a>


                </div>
                {/* Middle: Vertical Line with Icon */}



                {/* Middle: Vertical Line with Icon */}
                <div className="hidden lg:flex flex-col items-center justify-center px-4 relative self-center">
                    <div className="w-px h-24 bg-gray-300" />
                    <div className="w-6 h-6 bg-white rounded-full border-2 border-[#6E7754] flex items-center justify-center my-2">
                        <svg width="16" height="16" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M128 0C57.3 0 0 57.3 0 128s57.3 128 128 128 128-57.3 128-128S198.7 0 128 0Zm0 224c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96Zm0-32c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64Z" fill="#6E7754" />
                        </svg>
                    </div>
                    <div className="w-px h-24 bg-gray-300" />
                </div>



                {/* Right: Image */}
                {/* <div data-aos="fade-up" data-aos-delay="100" className="w-full lg:w-1/2 relative">
                    <Image
                        src="/icone/Untitled design (9).png"
                        alt="1NUL8 cadeaubon"
                        width={720}
                        height={540}
                        className="rounded-lg shadow-lg"
                    />
                </div> */}
                <div data-aos="fade-up" data-aos-delay="100" className="w-full lg:w-1/2 relative">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        className="rounded-lg shadow-lg w-full h-auto"
                        poster="https://cdn.prod.website-files.com/617ac0d059899a9a3c8216e9/681211e03b16ff8ed7b59a01_01%20New%20Create%20a%20card%20-Final-poster-00001.jpg"
                    >
                        <source
                            src="https://cdn.prod.website-files.com/617ac0d059899a9a3c8216e9/681211e03b16ff8ed7b59a01_01%20New%20Create%20a%20card%20-Final-transcode.mp4"
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
                </div>

            </div>
        </section>
    );
};

export default CustomeHero;
