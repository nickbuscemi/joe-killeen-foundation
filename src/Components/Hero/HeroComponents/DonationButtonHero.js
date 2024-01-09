import React from "react";
//import "./styles.css";
//import "./styles/tailwind-pre-build.css";
//import { loadStripe } from "@stripe/stripe-js";
/*const stripePromise = loadStripe(
  ""
);*/
export const DonationButtonHero = ({ itemID, ammount }) => {
 /*const handleClick = async (event) => {
    const stripe = await stripePromise;
    stripe
      .redirectToCheckout({
        lineItems: [{ price: itemID, quantity: 1 }],
        mode: "payment",
        successUrl: window.location.protocol + "//localpdf.tech/merge",
        cancelUrl: window.location.protocol + "//localpdf.tech/merge",
        submitType: "donate",
      })
      .then(function (result) {
        if (result.error) {
          console.log(result);
        }
      });
  };*/
  return (
    <button
      className="text-white bg-carolina hover:bg-deepCarolina focus:outline-none focus:ring-4 focus:ring-carolina-300 font-extrabold rounded-full text-md px-5 py-2.5 text-center dark:bg-carolina dark:hover:bg-deepCarolina dark:focus:ring-carolina"
      
    >
      Donate now
    </button>
  );
};

/*onClick={handleClick*/