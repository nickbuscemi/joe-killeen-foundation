import React from "react";
import { Link } from "react-router-dom";

export const DonationButton = () => {
  return (
    <Link
      to="https://donate.stripe.com/test_3cseYab8TgzAgrC289"
      className="text-white bg-carolina hover:bg-deepCarolina focus:outline-none focus:ring-4 focus:ring-carolina-300 font-extrabold rounded-full text-md px-5 py-2.5 text-center dark:bg-carolina dark:hover:bg-deepCarolina dark:focus:ring-carolina"
    >
      Donate now
    </Link>
  );
};
