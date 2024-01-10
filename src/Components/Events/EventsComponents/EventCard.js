import upcomingEvents from './EventCardData';
export const EventsCard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="border border-deepCarolina-200 overflow-hidden shadow-lg">
              <img src={event.image} alt={event.name} className="w-full h-64 object-cover"/>
              <div className="p-4 bg-white">
                <div className="mb-2 text-carolina text-sm uppercase tracking-wide font-semibold">{event.date}</div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">{event.name}</h3>
                <p className="mb-4 text-base text-gray-700">{event.location}</p>
                <a href={event.actionUrl} className="inline-block bg-carolina text-white px-4 py-2 rounded hover:bg-deepCarolina transition-colors">Sign Up!</a>
              </div>
            </div>
          ))}
        </div>
      );
};

