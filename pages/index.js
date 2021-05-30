import { useEffect } from "react";
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

function HomePage (props) {

  return(
    <MeetupList meetups={props.meetups} />
  )
}

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS
    },
    revalidate: 10
  }
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   }
// }

export default HomePage;