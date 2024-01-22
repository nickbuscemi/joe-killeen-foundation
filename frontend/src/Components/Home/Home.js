import React from 'react';
import { DonationProgressBar } from './HomeComponents/DonationProgressBar';
import verticalIMG1 from '../../assets/images/592x822/verticalIMG1.jpg'
import verticalIMG3 from '../../assets/images/592x822/verticalIMG3.jpeg'
import upcomingEvents from '../Events/EventsComponents/EventCardData';
import { RenderStackedCard } from '../Events/EventsComponents/EventCardForHome';

// WILL IMPORT DATA FROM API TO UPDATE PROGRESS BAR IN REAL TIME

export const Home = () => {
    const currentDonation = 17583; // Example current donation amount
    const goal = 100000; // Example goal

    const mostRecentEvent = upcomingEvents[1];

    return (
        <div>
            <div className='pb-10 pt-6'>
            <h1 className='flex justify-center text-carolina lg:mb-8 mb-4 lg:text-3xl font-bold'>Help us reach our goal for the year!</h1>
            <DonationProgressBar currentDonation={currentDonation} goal={goal} />
            {/* Other content */}
            </div>
            <section class="dark:bg-white">
                <div class="flex flex-col lg:grid lg:grid-cols-2 grid-cols-1 gap-16 items-center justify-center py-8 px-8 lg:px-0 mx-auto max-w-screen-xl lg:pb-16 lg:px-6">
                    
                    <div class="order-2 lg:order-1">
                        <div class="grid grid-cols-1">
                            <RenderStackedCard event={mostRecentEvent} />
                        </div>
                    </div>
                    
                    <div class="order-1 lg:order-2 font-light text-deepCarolina sm:text-lg">
                        <h2 class="text-center lg:text-left mb-4 text-4xl tracking-tight font-extrabold text-carolina">Join us in {`${mostRecentEvent.date.split(' ')[0]}`} for our next event</h2>
                        <p className='text-center lg:text-left mb-4 text-2xl tracking-tight text-carolina'>{`${mostRecentEvent.name}`}</p>
                        <p class="text-center lg:text-left text-deepCarolina">Donec porttitor, enim ut dapibus lobortis, lectus sem tincidunt dui, eget ornare lectus ex non
                                        libero. Nam rhoncus diam ultrices porttitor laoreet. Ut mollis fermentum ex, vel viverra lorem
                                        volutpat sodales. In ornare porttitor odio sit amet laoreet. Sed laoreet, nulla a posuere
                                        ultrices, purus nulla tristique turpis, hendrerit rutrum augue quam ut est. Fusce malesuada
                                        posuere libero, vitae dapibus eros facilisis euismod. Sed sed lobortis justo, ut tincidunt
                                        velit. Mauris in maximus eros.
                        </p>
                    </div>
                </div>
            </section>
        </div>
      );
}