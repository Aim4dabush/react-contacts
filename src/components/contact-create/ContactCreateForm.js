import React, { useContext, useState } from "react";
import { Contacts } from "../App";

const ContactCreateForm = () => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    address: "",
    profilePic: "",
  });

  const { addContact } = useContext(Contacts);

  const handleInputChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addContact(state);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="row">
        <div className="col-2">
          <img
            className="img-fluid rounded-circle"
            src={state.profilePic}
            alt="Profile preview."
          />
        </div>
        <div className="col-10">
          <div className="row">
            <div className="col-12">
              <input
                className="form-control"
                type="text"
                placeholder="First Name"
                name="firstName"
                value={state.firstName}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-12 mt-2">
              <input
                className="form-control"
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={state.lastName}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-12 mt-2">
              <input
                className="form-control"
                type="tel"
                placeholder="Phone Number"
                name="phoneNumber"
                value={state.phoneNumber}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-12 mt-2">
              <input
                className="form-control"
                type="email"
                placeholder="Email"
                name="email"
                value={state.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-12 mt-2">
              <input
                className="form-control"
                type="text"
                placeholder="Address"
                name="address"
                value={state.address}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-12 mt-2">
              <input
                className="form-control"
                type="text"
                placeholder="Profile Picture Url"
                name="profilePic"
                value={state.profilePic}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-12 mt-2">
              <button type="submit" className="btn btn-secondary text-black">
                Add Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactCreateForm;
