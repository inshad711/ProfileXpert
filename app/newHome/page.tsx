import React from 'react'
import CTA from '../component/CTA';
// import CustomeHero from '../component/CustomeHero';
import Contact from '../component/Contact';
// import { Pricing } from '../component/Pricing';
import PricingFeature from '../component/PricingFeature';
import WhyChoose from '../component/WhyChoose';
// import Appdevelopmentbanner from '../component/Appdevelopmentbanner';
import WhyChooseFeatures from '../component/WhyChooseFeatures';
import SocailMedia from '../component/SocailMedia';
import Advantages from '../component/Advantages';
import HeroTech from '../component/HeroTech';

const NewHome = () => {
    return (
        <div>
            {/* <Appdevelopmentbanner /> */}
            {/* <Appdevelopmentbanner title="Meet"
                title="World-Class Design And Marketing"
                subtitle="We craft high-performing websites..."
                phoneSlides={[
                    {
                        center: { src: "/featuress/Screenshot_2025-09-26-11-54-11-93_1eb6d83787edde0541c617b24fdda0e6.jpg", alt: "App 1 center" },
                        left: { src: "/featuress/Screenshot_2025-09-26-11-54-11-93_1eb6d83787edde0541c617b24fdda0e6.jpg", alt: "App 1 left" },
                        right: { src: "/featuress/Screenshot_2025-09-26-11-54-11-93_1eb6d83787edde0541c617b24fdda0e6.jpg", alt: "App 1 right" },
                    },
                    {
                        center: { src: "/featuress/Screenshot_2025-09-26-11-54-11-93_1eb6d83787edde0541c617b24fdda0e6.jpg", alt: "App 2 center" },
                        left: { src: "/featuress/Screenshot_2025-09-26-11-54-11-93_1eb6d83787edde0541c617b24fdda0e6.jpg", alt: "App 2 left" },
                        right: { src: "/featuress/Screenshot_2025-09-26-11-54-11-93_1eb6d83787edde0541c617b24fdda0e6.jpg", alt: "App 2 right" },
                    },
                    {
                        center: { src: "/featuress/Screenshot_2025-09-26-11-54-11-93_1eb6d83787edde0541c617b24fdda0e6.jpg", alt: "App 3 center" },
                        left: { src: "/featuress/Screenshot_2025-09-26-11-54-11-93_1eb6d83787edde0541c617b24fdda0e6.jpg", alt: "App 3 left" },
                        right: { src: "/featuress/Screenshot_2025-09-26-11-54-11-93_1eb6d83787edde0541c617b24fdda0e6.jpg", alt: "App 3 right" },
                    },
                ]}
            /> */}

            <HeroTech title="The Future of Digital Networking" />
            <SocailMedia />
            <WhyChoose />
            <WhyChooseFeatures />
            <Advantages />
            {/* <CustomeHero /> */}
            {/* <Pricing /> */}
            <PricingFeature />
            <CTA />
            <Contact />

        </div>
    )
}

export default NewHome;