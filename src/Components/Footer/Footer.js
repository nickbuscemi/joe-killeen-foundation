import ribbonlogo from '../../assets/images/ribbonlogo.jpg';
import killeenlogolight from '../../assets/images/northcarolina.png'

export const Footer = () => {
    return (
        <footer class="bg-deepCarolina text-white">
            <div class="w-full max-w-screen-xl mx-auto md:py-20">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <a href="/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src={killeenlogolight} class="h-8"/>
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-gray">Joe Killeen</span>
                    </a>
                    <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray sm:mb-0">
                        <li>
                            <a href="/about" class="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                        </li>
                        <li>
                            <a href="/contact" class="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr class="my-6 border-gray sm:mx-auto dark:border-carolina lg:my-8" />
                <span class="block text-sm text-gray sm:text-center dark:text-gray">© 2023 <a href="https://flowbite.com/" class="hover:underline">The Joe Killeen Memorial Foundation</a>. All Rights Reserved.</span>
            </div>
        </footer>
    )
}