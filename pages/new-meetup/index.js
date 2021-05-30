import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import Layout from "../../components/layout/Layout";

function NewMeetupPage() {
  function addmeetuphandler(enteredMeetupData) {
    console.log(enteredMeetupData);
  }

  return (
    <Layout>
      <NewMeetupForm onAddMeetup={addmeetuphandler} />
    </Layout>
  );
}

export default NewMeetupPage;
