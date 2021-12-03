import { useContext } from "react";
import ContactCard from "./ContactCard";
import { ContactsArr } from "../App";

const ContactList = ({ contacts = [] }) => {
  contacts = useContext(ContactsArr);

  return (
    <div className="col-5 bg-secondary bg-opacity-25 px-5 py-5 my-3">
      {contacts.map((contact) => (
        <ContactCard
          key={contact.id}
          firstName={contact.firstName}
          lastName={contact.lastName}
          phoneNumber={contact.phoneNumber}
          profilePic={contact.profilePic}
          id={contact.id}
        />
      ))}
    </div>
  );
};

export default ContactList;
