import ContactDetailsCard from "./ContactDetailsCard";

const ContactDetailsPage = ({ contact }) => {
  return (
    <div className="col-4 my-3">
      <ContactDetailsCard contact={contact} />
    </div>
  );
};

export default ContactDetailsPage;
