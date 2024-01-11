import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import upcomingEvents from './EventCardData';

export const EventsCard = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {upcomingEvents.map((event) => (
        <Link to={event.actionUrl} key={event.id} style={{ width: '400px' }}>
          <motion.div whileHover={{ scale: 1.05, transition: { duration: 0.3 } }} className="block border border-deepCarolina-200 overflow-hidden shadow-lg">
            <img src={event.image} alt={event.name} className="w-full h-64 object-cover"/>
            <div className="p-4 bg-white">
              <div className="mb-2 text-carolina text-sm uppercase tracking-wide font-semibold">{event.date}</div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">{event.name}</h3>
              <p className="mb-4 text-base text-gray-700">{event.location}</p>
              <span className="whitespace-nowrap overflow-hidden text-overflow-ellipsis text-white bg-carolina hover:bg-deepCarolina focus:outline-none focus:ring-4 focus:ring-carolina-300 font-extrabold rounded-full text-md px-5 py-2.5 text-center dark:bg-carolina dark:hover:bg-deepCarolina dark:focus:ring-carolina">Sign Up!</span>
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  );
};


