
import { useState, useEffect } from "react";
import { DonationButtonHero } from "../Hero/HeroComponents/DonationButtonHero";
import { HeroCarouselObj } from '../Hero/HeroComponents/HeroAssets';
import { useLocation } from 'react-router-dom';
import './Hero.css'

export const Hero = () => {

  const location = useLocation();
  const path = location.pathname;

  console.log('Current path:', path); // Debugging line


  let currentItem;

  const pathToIndexMap = {
    '/': 0,
    '/about': 1,  
    '/impact': 2,  
    '/events': 3, 
  };

  const index = pathToIndexMap[path];

  if (index !== undefined) {
    currentItem = HeroCarouselObj[index];
  } else {
    // Default content if path doesn't match
    currentItem = HeroCarouselObj[0]; // You can choose another default or create a new default object
  }

  const isHomePage = currentItem === HeroCarouselObj[0];

  return (
    <section className="hero-section bg-fixed lg:h-screen">
    <div className="backgroundIMG w-full h-full bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${currentItem.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 5%',
          backgroundRepeat: 'no-repeat',
          
        }}
      >
      <div className="mt-8 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-16 w-full flex flex-col items-center text-center text-white px-4 sm:px-8 py-32 sm:py-32 md:py-52 lg:py-96 xl:py-96">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-2xl font-bold">
          {currentItem.title}
        </h1>
        <p className="text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl font-bold max-w-2xl my-1 sm:my-2 md:my-3">
          {currentItem.caption}
        </p>

        {isHomePage && (
          <div className="flex flex-col items-center space-y-1 sm:space-y-2">
            <DonationButtonHero />
          </div>
        )}
      </div>
    </div>
  </section>
  );
};



/*
const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeOut(true); // Start fading out
      setTimeout(() => {
        setCurrentIndex(prevIndex =>
          prevIndex === HeroCarouselObj.length - 1 ? 0 : prevIndex + 1
        );
        setFadeOut(false); // Reset fade out for next cycle
      }, 500); // The timeout should be less than the interval
    }, 7000); // Changes every 5 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  const currentItem = HeroCarouselObj[currentIndex];

  const handleDotClick = (index) => {
    if (index !== currentIndex) {
      setFadeOut(true); // Start fading out
      setTimeout(() => {
        setCurrentIndex(index);
        setFadeOut(false); // Reset fade out
      }, 500); // This duration should match the transition duration
    }
  };
  */












/*const TranslateWrapper = ({ children, reverse }) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      className="flex gap-4 px-2"
    >
      {children}
    </motion.div>
  );
};

const LogoItem = ({ Icon }) => {
  return (
    <a
      href="/"
      rel="nofollow"
      target="_blank"
      className="w-16 md:w-24 h-16 md:h-24 flex justify-center items-center hover:bg-slate-200 text-white transition-colors"
    >
      <Icon className="text-4xl md:text-5xl" />
    </a>
  );
};

const LogoItemsTop = () => (
  <>
    <LogoItem Icon={SiNike} />
    <LogoItem Icon={Si3M} />
    <LogoItem Icon={SiAbstract} />
    <LogoItem Icon={SiAdobe} />
    <LogoItem Icon={SiAirtable} />
    <LogoItem Icon={SiAmazon} />
    <LogoItem Icon={SiBox} />
    <LogoItem Icon={SiBytedance} />
    <LogoItem Icon={SiChase} />
    <LogoItem Icon={SiCloudbees} />
  </>
);

const LogoItemsBottom = () => (
  <>
    <LogoItem Icon={SiBmw} />
    <LogoItem Icon={SiBurton} />
    <LogoItem Icon={SiBuildkite} />
    <LogoItem Icon={SiCouchbase} />
    <LogoItem Icon={SiDailymotion} />
    <LogoItem Icon={SiDeliveroo} />
    <LogoItem Icon={SiEpicgames} />
    <LogoItem Icon={SiGenius} />
    <LogoItem Icon={SiGodaddy} />
    <LogoItem Icon={SiHeroku} />
  </>
);*/





//* stuff for logos if needed later (add to last part of <section></section>)
// imports at the top*
/*import { motion } from "framer-motion";
import {
  SiNike,
  Si3M,
  SiAbstract,
  SiAdobe,
  SiAirtable,
  SiAmazon,
  SiBox,
  SiBytedance,
  SiChase,
  SiCloudbees,
  SiBurton,
  SiBmw,
  SiHeroku,
  SiBuildkite,
  SiCouchbase,
  SiDailymotion,
  SiDeliveroo,
  SiEpicgames,
  SiGenius,
  SiGodaddy,
} from "react-icons/si";*/

{/*
      <div className="flex overflow-hidden">
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
      </div>
      <div className="flex overflow-hidden mt-4">
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
      </div>*/}
