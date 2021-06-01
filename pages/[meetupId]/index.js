import { Fragment } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props) {
  useRouter;
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta
          name="description"
          content={props.meetupData.description}
        />
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </Fragment>
  );
}

export default MeetupDetails;

export const getStaticPaths = async () => {
  const clinet = await MongoClient.connect(
    "mmongodb://admin:admin@cluster0-shard-00-00.itefi.mongodb.net:27017,cluster0-shard-00-01.itefi.mongodb.net:27017,cluster0-shard-00-02.itefi.mongodb.net:27017/meetups?ssl=true&replicaSet=atlas-9ft1h1-shard-0&authSource=admin&retryWrites=true&w=majority"
  );
  const db = clinet.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  clinet.close();

  return {
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;

  const clinet = await MongoClient.connect(
    "mmongodb://admin:admin@cluster0-shard-00-00.itefi.mongodb.net:27017,cluster0-shard-00-01.itefi.mongodb.net:27017,cluster0-shard-00-02.itefi.mongodb.net:27017/meetups?ssl=true&replicaSet=atlas-9ft1h1-shard-0&authSource=admin&retryWrites=true&w=majority"
  );
  const db = clinet.db();

  const meetupsCollection = db.collection("meetups");

  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });

  clinet.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        image: selectedMeetup.image,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
      },
    },
  };
};
