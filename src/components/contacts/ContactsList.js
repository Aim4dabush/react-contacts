import ContactCard from "./ContactCard";

const ContactList = ({ contacts = [] }) => {
  return (
    <div className="col-6 bg-secondary bg-opacity-25 px-5 py-5">
      {contacts.map((contact) => (
        <ContactCard
          key={contact.id}
          firstName={contact.firstName}
          lastName={contact.lastName}
          phoneNumber={contact.phoneNumber}
          profilePic={contact.profilePic}
        />
      ))}
    </div>
  );
};

export default ContactList;
