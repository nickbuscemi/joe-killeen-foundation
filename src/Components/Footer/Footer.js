import ribbonlogo from '../../assets/images/ribbonlogo.jpg';

export const Footer = () => {
    return (
        <footer class="bg-carolina text-white">
            <div class="w-full max-w-screen-xl mx-auto md:py-20">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src={ribbonlogo} class="h-8"/>
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-gray">Joe Killeen</span>
                    </a>
                    <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray sm:mb-0">
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr class="my-6 border-gray sm:mx-auto dark:border-deepCarolina lg:my-8" />
                <span class="block text-sm text-gray sm:text-center dark:text-gray">© 2023 <a href="https://flowbite.com/" class="hover:underline">The Joe Killeen Memorial Foundation</a>. All Rights Reserved.</span>
            </div>
        </footer>
    )
}