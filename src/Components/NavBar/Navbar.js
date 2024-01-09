import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { FiMenu, FiArrowRight } from "react-icons/fi";
import { DonationButton } from "./NarBarComponents/DonationButton";
import ribbonlogo from '../../assets/images/ribbonlogo.jpg';
import northcarolina from '../../assets/images/northcarolina.png';
import facebookIcon from '../../assets/images/svgIcons/facebook.svg';
import instagramIcon from '../../assets/images/svgIcons/instagram.svg';
import twitterIcon from '../../assets/images/svgIcons/twitter.svg';
import '../NavBar/NavBar.css';

export const FlipNavWrapper = () => {
  return (
    <div className="bg-transparent">
      <FlipNav />
    </div>
  );
};

const FlipNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMouseNearTop, setIsMouseNearTop] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const handleMouseMove = (e) => {
    setIsMouseNearTop(e.clientY < 100);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <nav className={`navbar-fixed ${!isScrolled || isMouseNearTop ? 'visible' : 'hidden'}`}>
      <nav className={`flex justify-between items-center bg-transparent w-full max-w-screen-xl mx-auto py-4 md:py-6 lg:py-11 ${isScrolled ? 'scrolled-nav' : ''}`}>

        <div className="flex-1 flex justify-start gap-20">
          <Link to="/" className="sm:pl-6 hidden lg:block">
            <img src={northcarolina} style={{ width: '100px', height: 'auto' }} alt="Ribbon Logo" />
          </Link>
          <NavLeft setIsOpen={setIsOpen} />
          <NavMenu isOpen={isOpen} />
        </div>      
        {/*<div className="flex flex-col items-center">
          <NavLeft setIsOpen={setIsOpen} />
          <NavMenu isOpen={isOpen} />
        </div>*/}
        <div className="flex-1 flex justify-end items-center gap-8">
          <NavLink text="Contact" href="/contact" />
          <div className="pr-6 sm:pr-6 md:pr-6"> 
            <DonationButton />
          </div>
        </div>
      </nav>
    </nav>
  );
};

const NavLinks = ({ isMenu = false }) => {
  // Apply "hidden sm:flex" classes if it's in the menu, else "hidden lg:flex" for the main navbar
  const linkClass = isMenu ? "block" : "hidden lg:block";
  const homeLinkClass = `${isMenu ? "block" : "hidden lg:hidden"}`;
  return (
    <>
      <NavLink text="Home" href="/" className={homeLinkClass} />
      <NavLink text="About" href="/about" className={linkClass} />
      <NavLink text="Impact" href="/impact" className={linkClass} />
      <NavLink text="Events" href="/events" className={linkClass} />
    </>
  );
};

const NavLeft = ({ setIsOpen }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-20">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="pl-6 block lg:hidden text-gray-950 text-2xl"
        onClick={() => setIsOpen((pv) => !pv)}
      >
      <FiMenu />
      </motion.button>
      <NavLinks isMenu={false}/>
    </div>
  );
};

const NavLink = ({ text, href ,className, isMenu }) => {
  return (
    <a
      href={href}
      rel="nofollow"
      className={`${className} h-[30px] overflow-hidden font-extrabold`}
    >
      {isMenu ? (
        <span className="flex items-center h-[30px]">{text}</span>
      ) : (
        <motion.div whileHover={{ y: -30 }}>
          <span className="flex items-center h-[30px] text-purple-500">{text}</span>
          <span className="flex items-center h-[30px] text-purple-600">{text}</span>
        </motion.div>
      )}
    </a>
  );
};

const NavMenu = ({ isOpen }) => {
  return (
    <motion.div
      variants={menuVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      className="fixed top-20 left-0 right-0 bg-white shadow-lg z-50 flex flex-col overflow-hidden"
      style={{ width: '100%' }} // Ensure the menu is full width
    >
      <NavLinks isMenu={true}/>
    </motion.div>
  );
};

const MenuLink = ({ text }) => {
  return (
    <motion.a
      variants={menuLinkVariants}
      rel="nofollow"
      href="#"
      className="h-[30px] overflow-hidden font-medium text-lg flex items-start gap-2"
    >
      <motion.span variants={menuLinkArrowVariants}>
        <FiArrowRight className="h-[30px] text-gray-950" />
      </motion.span>
      <motion.div whileHover={{ y: -30 }}>
        <span className="flex items-center h-[30px] text-gray-500">{text}</span>
        <span className="flex items-center h-[30px] text-indigo-600">
          {text}
        </span>
      </motion.div>
    </motion.a>
  );
};

/*const menuVariants = {
  open: {
    scaleY: 1,
    originY: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    originY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};*/
const menuVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.3
    },
    display: "block",
  },
  closed: {
    opacity: 0,
    y: -20,
    transition: {
      type: "tween",
      ease: "easeIn",
      duration: 0.3
    },
    transitionEnd: {
      display: "none",
    },
  }
};


const menuLinkVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: -10,
    opacity: 0,
  },
};

const menuLinkArrowVariants = {
  open: {
    x: 0,
  },
  closed: {
    x: -4,
  },
};