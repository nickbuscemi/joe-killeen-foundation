import { EventsCard } from "./EventsComponents/EventCard"
import randomstock1 from '../../assets/images/randomstock1.png'
export const Events = () => {
    return (
        <div>
            <div className=" bg-white px-4 sm:px-10 md:px-20 lg:px-60 py-16"> {/* This applies the same horizontal padding as your footer */}
                <h2 class="flex justify-center mb-4 mt-[-20px] text-4xl tracking-tight font-extrabold text-carolina">Upcoming Events</h2>
                <EventsCard />
            </div>
            <section class="dark:bg-deepCarolina p-16">
                <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:pb-16 lg:px-6">
                    <div class="font-light text-white sm:text-lg">
                        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Help us fundraise your way!</h2>
                        <p class="mb-4"> Do you have an idea about how you can help our cause?
                        </p>
                        <p> Please reach out to us to set up your own event with the Joe Killeen Memorial Foundation. We would love to hear from you!
                        </p>
                    </div>
                    <form action="https://formbold.com/s/FORM_ID" method="POST">
                        <div className="md:flex md:flex-wrap -mx-2">
                            <div className="px-2 mb-5 md:w-1/2">
                                <label htmlFor="firstName" className="mb-3 block text-base font-medium text-white">First Name</label>
                                <input type="text" name="firstName" id="firstName" placeholder="First Name" className="w-full rounded-md border border-carolina bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-deepCarolina focus:shadow-md" />
                            </div>
                            <div className="px-2 mb-5 md:w-1/2">
                                <label htmlFor="lastName" className="mb-3 block text-base font-medium text-white">Last Name</label>
                                <input type="text" name="lastName" id="lastName" placeholder="Last Name" className="w-full rounded-md border border-carolina bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-deepCarolina focus:shadow-md" />
                            </div>
                        </div>
                        <div className="md:flex md:flex-wrap -mx-2">
                            <div className="px-2 mb-5 md:w-1/2">
                                <label htmlFor="email" className="mb-3 block text-base font-medium text-white">Email Address</label>
                                <input type="email" name="email" id="email" placeholder="example@domain.com" className="w-full rounded-md border border-carolina bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-deepCarolina focus:shadow-md" />
                            </div>
                            <div className="px-2 mb-5 md:w-1/2">
                                <label htmlFor="subject" className="mb-3 block text-base font-medium text-white">Subject</label>
                                <input type="text" name="subject" id="subject" placeholder="Enter your subject" className="w-full rounded-md border border-carolina bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-deepCarolina focus:shadow-md" />
                            </div>
                        </div>
                        <div className="mb-5">
                            <label htmlFor="message" className="mb-3 block text-base font-medium text-white">Message</label>
                            <textarea rows="4" name="message" id="message" placeholder="Tell Us Your Idea! Please include date, time , and desired location of your event" className="w-full resize-none rounded-md border border-carolina bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-deepCarolina focus:shadow-md"></textarea>
                        </div>
                        <div className='flex justify-center items-center mb-5'>
                            <button type="submit" className="whitespace-nowrap overflow-hidden text-overflow-ellipsis text-white dark:hover:text-deepCarolina bg-carolina hover:bg-white focus:outline-none focus:ring-4 focus:ring-carolina-300 font-extrabold rounded-full text-md px-5 py-2.5 text-center dark:bg-carolina dark:hover:bg-white dark:focus:ring-carolina">Submit</button>
                        </div>
                    </form>

                </div>
        </section>
        </div>
    )
}