import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first meetup",
    image: "",
    address: "some address 5, 12345 some city",
    description: "This the first meetup"
  },
  {
    id: "m2",
    title: "A second meetup",
    image: "",
    address: "some address 10, 12345 some city",
    description: "This the second meetup"
  },
  {
    id: "m3",
    title: "A third meetup",
    image: "",
    address: "some address 15, 12345 some city",
    description: "This the third meetup"
  },
];

function HomePage () {
  return(
    <MeetupList meetups={DUMMY_MEETUPS} />
  )
}

export default HomePage;