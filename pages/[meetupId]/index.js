import { useRouter } from "next/router";
import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";


function MeetupDetails(props) {
  useRouter
  return (
    <MeetupDetail
      image=""
      title="A first meetup"
      address="Some street 5, some City"
      description="The meetup descrption"
    />
  );
}

export default MeetupDetails;

export const getStaticPaths = async () => {
  return {
    paths: [
      { 
        params: {
          meetupId: 'm1'
        },
      },
      { 
        params: {
          meetupId: 'm2'
        },
      }
    ],
    fallback: true
  }
}


export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;
  
  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image: "",
        id: "m1",
        title: "A first meetup",
        address: "Some street 5, some City",
        description: "The meetup descrption"
      }
    }
  }
}
