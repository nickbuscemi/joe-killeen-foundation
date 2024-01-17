import { EventsCard } from "./EventsComponents/EventCard"
export const Events = () => {
    return (
        <div className="px-4 sm:px-10 md:px-20 lg:px-60 py-20"> {/* This applies the same horizontal padding as your footer */}
            <EventsCard />
        </div>
    )
}