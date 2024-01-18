import React from 'react';
import { DonationProgressBar } from '../Home/HomeComponents/DonationProgressBar';

// WILL IMPORT DATA FROM API TO UPDATE PROGRESS BAR IN REAL TIME

export const Home = () => {
    const currentDonation = 14257; // Example current donation amount
    const goal = 100000; // Example goal

    return (
        <div>
            <div className='pb-10 pt-6'>
            <h1 className='flex justify-center text-carolina lg:mb-8 mb-4 lg:text-3xl font-bold'>Help us reach our goal for the year!</h1>
            <DonationProgressBar currentDonation={currentDonation} goal={goal} />
            {/* Other content */}
            </div>
        </div>
      );
}