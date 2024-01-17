
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
    <div>
    {/*<section className="hero-section bg-fixed lg:h-screen">
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
        </section>*/}
  <section>
    <div className="hero min-h-screen flex justify-center items-center text-white md:animate-backgroundPanning" style={{
      backgroundImage: `url(${window.innerWidth <= 640 ? currentItem.mobileSrc : currentItem.src})`,
      backgroundSize: 'cover', 
      backgroundRepeat: 'no-repeat',
      }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content flex flex-col justify-center items-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{currentItem.title}</h1>
          <p className="mb-5">{currentItem.caption}</p>
          {isHomePage && (
            <div className="flex flex-col items-center space-y-1 sm:space-y-2">
              <DonationButtonHero />
            </div>
          )}
        </div>
      </div>
    </div>
  </section>

  </div>
  );
};