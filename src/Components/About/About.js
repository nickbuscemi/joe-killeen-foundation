import { Hero } from "../Hero/Hero"
import killeenpic4 from '../../assets/images/killeenpic4.jpeg'
import killeenpic3 from '../../assets/images/killeenpic3.jpg'

export const About = () => {
    return (
        <div className="aboutContainer">
        <div className="container w-full max-w-screen-xl mx-auto md:py-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-left mb-6">
                The Joe Killeen Memorial Foundation
            </h2>
            <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2">
                <img src={killeenpic3} alt="Fred's Team Event" />
                </div>
                <div className="lg:w-1/2 p-4 flex flex-col justify-center">
                <p>
                    JoeKilleenMemorialFoundation JoeKilleenMemorialFoundation JoeKilleenMemorialFoundation JoeKilleenMemorialFoundation JoeKilleenMemorialFoundation JoeKilleenMemorialFoundation JoeKilleenMemorialFoundation JoeKilleenMemorialFoundation JoeKilleenMemorialFoundation JoeKilleenMemorialFoundation JoeKilleenMemorialFoundation JoeKilleenMemorialFoundation JoeKilleenMemorialFoundation JoeKilleenMemorialFoundation JoeKilleenMemorialFoundation JoeKilleenMemorialFoundation JoeKilleenMemorialFoundation JoeKilleenMemorialFoundation JoeKilleenMemorialFoundation JoeKilleenMemorialFoundation JoeKilleenMemorialFoundation JoeKilleenMemorialFoundation JoeKilleenMemorialFoundation JoeKilleenMemorialFoundation JoeKilleenMemorialFoundation JoeKilleenMemorialFoundation JoeKilleenMemorialFoundation JoeKilleenMemorialFoundation JoeKilleenMemorialFoundation JoeKilleenMemorialFoundation 
                </p>
                {/* Add more paragraphs or content as needed */}
                </div>
            </div>
        </div>
        <div className="container w-full max-w-screen-xl mx-auto md:py-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-left mb-6">
                Joe Killeen
            </h2>
            <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-4 flex flex-col justify-center">
                <p>
                    JoeKilleenMemorialFoundation JoeKilleenMemorialFoundation JoeKilleenMemorialFoundation JoeKilleenMemorialFoundation JoeKilleenMemorialFoundation JoeKilleenMemorialFoundation JoeKilleenMemorialFoundation JoeKilleenMemorialFoundation JoeKilleenMemorialFoundation JoeKilleenMemorialFoundation JoeKilleenMemorialFoundation JoeKilleenMemorialFoundation JoeKilleenMemorialFoundation JoeKilleenMemorialFoundation JoeKilleenMemorialFoundation JoeKilleenMemorialFoundation JoeKilleenMemorialFoundation JoeKilleenMemorialFoundation JoeKilleenMemorialFoundation JoeKilleenMemorialFoundation JoeKilleenMemorialFoundation JoeKilleenMemorialFoundation JoeKilleenMemorialFoundation JoeKilleenMemorialFoundation JoeKilleenMemorialFoundation JoeKilleenMemorialFoundation JoeKilleenMemorialFoundation JoeKilleenMemorialFoundation JoeKilleenMemorialFoundation JoeKilleenMemorialFoundation 
                </p>
                {/* Add more paragraphs or content as needed */}
                </div>
                <div className="lg:w-1/2">
                <img src={killeenpic4} alt="Fred's Team Event" />
                </div>
            </div>
        </div>
        </div>
    )
}