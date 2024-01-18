import verticalIMG1 from '../../assets/images/592x822/verticalIMG1.jpg'
import verticalIMG2 from '../../assets/images/592x822/verticalIMG2.jpeg'
import verticalIMG3 from '../../assets/images/592x822/verticalIMG3.jpeg'
import verticalIMG4 from '../../assets/images/592x822/verticalIMG4.jpg'

export const Impact = () => {
    return (
        <div>
            <section class="dark:bg-deepCarolina">
                <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:pb-16 lg:px-6">
                    <div class="font-light text-white sm:text-lg">
                        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Scholarships for highschool seniors</h2>
                        <p class="mb-4">Donec porttitor, enim ut dapibus lobortis, lectus sem tincidunt dui, eget ornare lectus ex non
                                        libero. Nam rhoncus diam ultrices porttitor laoreet. Ut mollis fermentum ex, vel viverra lorem
                                        volutpat sodales. In ornare porttitor odio sit amet laoreet. Sed laoreet, nulla a posuere
                                        ultrices, purus nulla tristique turpis, hendrerit rutrum augue quam ut est. Fusce malesuada
                                        posuere libero, vitae dapibus eros facilisis euismod. Sed sed lobortis justo, ut tincidunt
                                        velit. Mauris in maximus eros.
                        </p>
                        <p>Donec porttitor, enim ut dapibus lobortis, lectus sem tincidunt dui, eget ornare lectus ex non
                                        libero.
                        </p>
                    </div>
                    <div class="grid grid-cols-2 gap-4 mt-8">
                        <img class="w-full rounded-lg" src={verticalIMG4} alt="office content 1" />
                        <img class="mt-4 w-full lg:mt-10 rounded-lg" src={verticalIMG2} alt="office content 2" />
                    </div>
                </div>
            </section>

            <section class="dark:bg-white">
                <div class="flex flex-col lg:grid lg:grid-cols-2 gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:pb-16 lg:px-6">
                    
                    <div class="order-2 lg:order-1">
                        <div class="grid grid-cols-2 gap-4 lg:mt-8">
                            <img class="w-full rounded-lg" src={verticalIMG1} alt="content 1" />
                            <img class="mt-4 w-full lg:mt-10 rounded-lg" src={verticalIMG3} alt="content 2" />
                        </div>
                    </div>
                    
                    <div class="order-1 lg:order-2 font-light text-deepCarolina sm:text-lg">
                        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-carolina">Supporting youth involvement in sports</h2>
                        <p class="mb-4">Donec porttitor, enim ut dapibus lobortis, lectus sem tincidunt dui, eget ornare lectus ex non
                                        libero. Nam rhoncus diam ultrices porttitor laoreet. Ut mollis fermentum ex, vel viverra lorem
                                        volutpat sodales. In ornare porttitor odio sit amet laoreet. Sed laoreet, nulla a posuere
                                        ultrices, purus nulla tristique turpis, hendrerit rutrum augue quam ut est. Fusce malesuada
                                        posuere libero, vitae dapibus eros facilisis euismod. Sed sed lobortis justo, ut tincidunt
                                        velit. Mauris in maximus eros.
                        </p>
                        <p>Donec porttitor, enim ut dapibus lobortis, lectus sem tincidunt dui, eget ornare lectus ex non
                                        libero.
                        </p>
                    </div>
                </div>
            </section>

            <section class="dark:bg-deepCarolina">
                <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:pb-16 lg:px-6">
                    <div class="font-light text-white sm:text-lg">
                        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Supporting cancer research</h2>
                        <p class="mb-4">Donec porttitor, enim ut dapibus lobortis, lectus sem tincidunt dui, eget ornare lectus ex non
                                        libero. Nam rhoncus diam ultrices porttitor laoreet. Ut mollis fermentum ex, vel viverra lorem
                                        volutpat sodales. In ornare porttitor odio sit amet laoreet. Sed laoreet, nulla a posuere
                                        ultrices, purus nulla tristique turpis, hendrerit rutrum augue quam ut est. Fusce malesuada
                                        posuere libero, vitae dapibus eros facilisis euismod. Sed sed lobortis justo, ut tincidunt
                                        velit. Mauris in maximus eros.
                        </p>
                        <p>Donec porttitor, enim ut dapibus lobortis, lectus sem tincidunt dui, eget ornare lectus ex non
                                        libero.
                        </p>
                    </div>
                    <div class="grid grid-cols-2 gap-4 mt-8">
                        <img class="w-full rounded-lg" src={verticalIMG4} alt="office content 1" />
                        <img class="mt-4 w-full lg:mt-10 rounded-lg" src={verticalIMG2} alt="office content 2" />
                    </div>
                </div>
            </section>

        </div>
    )
}