import React from "react";
import { Link } from "react-router-dom";

export const DonationButtonHero = () => {
  return (
    <Link
      to="/donate"
      className="text-white bg-carolina hover:bg-deepCarolina focus:outline-none focus:ring-4 focus:ring-carolina-300 font-extrabold rounded-full text-md px-5 py-2.5 text-center dark:bg-carolina dark:hover:bg-deepCarolina dark:focus:ring-carolina"
    >
      Donate now
    </Link>
  );
};


/*onClick={handleClick*/