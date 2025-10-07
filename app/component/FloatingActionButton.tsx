"use client";

import Image from "next/image";
import Link from "next/link";

const FloatingActionButton = () => {
    return (
        <div className="fixed bottom-8 lg:bottom-5 space-y-2 right-5 z-50">
            {/* Instagram */}
            {/* <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 hover:-translate-y-1 transition-all ease-in-out duration-300 flex items-center gap-0.5 rounded-xl"
            > */}
            <Link
                href="https://wa.me/8652885995"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 hover:-translate-y-1 transition-all ease-in-out duration-300 flex items-center gap-0.5 rounded-xl"
            >
                <Image
                    src="/hero-mockup/pngwing.png"
                    alt="whatsapp"
                    width={40}
                    height={40}
                    className="h-12 w-12 object-contain"
                />
            </Link>

            {/* Facebook */}
            {/* <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 hover:-translate-y-1 transition-all ease-in-out duration-300 flex items-center gap-0.5 rounded-xl"
            >
                <Image
                    src="/icone/facebook.png"
                    alt="facebook"
                    width={40}
                    height={40}
                    className="h-11 w-11 object-contain rounded-lg"
                />
            </Link> */}
        </div>
    );
};

export default FloatingActionButton;