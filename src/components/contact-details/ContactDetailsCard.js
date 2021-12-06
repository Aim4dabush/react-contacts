import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Contacts } from "../App";

const ContactDetailsCard = () => {
  const { index } = useParams();
  const { contactsList } = useContext(Contacts);
  const contact = contactsList.find((contact) => {
    return contact.id === Number(index);
  });
  return (
    <div className="card">
      <div className="row">
        <div className="col-12 d-flex justify-content-center my-5">
          <img
            className="img-fluid rounded-circle"
            src={contact?.profilePic}
            alt={`Profile of ${contact?.firstName}${contact?.lastName}.`}
          />
        </div>
        <div className="col-12 d-flex justify-content-center mb-3">
          <h2>
            {contact?.firstName} {contact?.lastName}
          </h2>
        </div>
        <div className="col-12 d-flex justify-content-center mb-5">
          <dl>
            <dt>Phone Number</dt>
            <dd className="ps-5 text-secondary fw-bold">
              {contact?.phoneNumber}
            </dd>

            <dt>Email</dt>
            <dd className="ps-5 text-secondary fw-bold">{contact?.email}</dd>

            <dt>Address</dt>
            <dd className="ps-5 text-secondary fw-bold">{contact?.address}</dd>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default ContactDetailsCard;
