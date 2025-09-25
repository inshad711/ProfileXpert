
// D:\Nextjs_SagarTech\sagar-tech-nextjs\src\components\AOS.tsx
"use client";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const AOS = () => {
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 500,
      offset: 100,
    });
  }, []);
  return null;
};

export default AOS;
