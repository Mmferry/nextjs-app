import Head from "next/head";
import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";
import { Fragment } from "react";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React meetups</title>
        <meta name="description" content="Browse a huge list of highly active react meetups!" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const clinet = await MongoClient.connect(
    "mmongodb://admin:admin@cluster0-shard-00-00.itefi.mongodb.net:27017,cluster0-shard-00-01.itefi.mongodb.net:27017,cluster0-shard-00-02.itefi.mongodb.net:27017/meetups?ssl=true&replicaSet=atlas-9ft1h1-shard-0&authSource=admin&retryWrites=true&w=majority"
  );
  const db = clinet.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  clinet.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10,
  };
}

export default HomePage;
