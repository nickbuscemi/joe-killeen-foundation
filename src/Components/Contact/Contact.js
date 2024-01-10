import React from 'react';

export const Contact = () => {
    return (
        <div className="p-12 mt-40 flex flex-col md:flex-row justify-center items-start md:items-center">
            <div className="w-full max-w-[550px]">
                <div className="mb-8 text-center">
                    <h2 className="text-3xl font-bold text-carolina">Contact Us!</h2>
                </div>
                <form action="https://formbold.com/s/FORM_ID" method="POST">
                    <div className="mb-5">
                        <label htmlFor="firstName" className="mb-3 block text-base font-medium text-deepCarolina">First Name</label>
                        <input type="text" name="firstName" id="firstName" placeholder="First Name" className="w-full rounded-md border border-carolina bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-deepCarolina focus:shadow-md" />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="lastName" className="mb-3 block text-base font-medium text-deepCarolina">Last Name</label>
                        <input type="text" name="lastName" id="lastName" placeholder="Last Name" className="w-full rounded-md border border-carolina bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-deepCarolina focus:shadow-md" />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email" className="mb-3 block text-base font-medium text-deepCarolina">Email Address</label>
                        <input type="email" name="email" id="email" placeholder="example@domain.com" className="w-full rounded-md border border-carolina bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-deepCarolina focus:shadow-md" />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="subject" className="mb-3 block text-base font-medium text-deepCarolina">Subject</label>
                        <input type="text" name="subject" id="subject" placeholder="Enter your subject" className="w-full rounded-md border border-carolina bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-deepCarolina focus:shadow-md" />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="message" className="mb-3 block text-base font-medium text-deepCarolina">Message</label>
                        <textarea rows="4" name="message" id="message" placeholder="Type your message" className="w-full resize-none rounded-md border border-carolina bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-deepCarolina focus:shadow-md"></textarea>
                    </div>
                    <div>
                        <button type="submit" className="whitespace-nowrap overflow-hidden text-overflow-ellipsis text-white bg-carolina hover:bg-deepCarolina focus:outline-none focus:ring-4 focus:ring-carolina-300 font-extrabold rounded-full text-md px-5 py-2.5 text-center dark:bg-carolina dark:hover:bg-deepCarolina dark:focus:ring-carolina">Submit</button>
                    </div>
                </form>
            </div>
            <div className="mt-8 md:mt-0 max-w-[550px] w-full flex flex-col items-center justify-center">
                <h3 className="text-2xl font-bold mb-4 text-center">Contact Information</h3>
                <p className="text-center">Address: 123 Example Street</p>
                <p className="text-center">Email: contact@example.com</p>
                <p className="text-center">Phone: (123) 456-7890</p>
                {/* More contact information */}
            </div>
        </div>
    );
};
