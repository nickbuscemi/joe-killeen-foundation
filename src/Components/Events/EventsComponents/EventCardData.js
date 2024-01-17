import killeenpic4 from '../../../assets/images/killeenpic4.jpeg'
import killeenpic1 from '../../../assets/images/killeenpic1.jpg'
import killeenpic2 from '../../../assets/images/killeenpic2.jpg'


class Event {
  constructor(id, name, date, location, image) {
    this.id = id;
    this.name = name;
    this.date = date;
    this.location = location;
    this.image = image;
    this.link = this.createSlug();
  }

  createSlug() {
    return `/events/${this.name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '').replace(/\-\-+/g, '-')}`;
  }
}

const upcomingEvents = [
  new Event(1, 'Annual Golf Tournament', 'September 2024', 'Farmingdale', killeenpic4),
  new Event(2, 'NYC Marathon', 'November 2024', 'New York City', killeenpic1),
  new Event(3, 'Block Party And Sports Tournament', 'June 2024', 'Islip', killeenpic2),
  // Add more events
];

export default upcomingEvents;

