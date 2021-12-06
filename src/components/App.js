import React, { useEffect, useState } from "react";
import {
  useHistory,
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

//Components
import LoginPage from "./login";
import RegisterPage from "./register";
import ContactsPage from "./contacts";
import ContactDetailsPage from "./contact-details";
import ContactCreatePage from "./contact-create";

//Utilities
import { getContacts, createContact, deleteContact } from "../utils/contacts";
import { login } from "../utils/auth";

const mockContacts = [
  {
    id: 1,
    firstName: "Culley",
    lastName: "Snelman",
    profilePic: "https://i.pravatar.cc/300?u=1",
    phoneNumber: "351-346-6140",
    email: "csnelman0@blog.com",
    address: "09 Eggendart Parkway",
  },
  {
    id: 2,
    firstName: "Tammara",
    lastName: "Allcorn",
    profilePic: "https://i.pravatar.cc/300?u=2",
    phoneNumber: "676-783-9239",
    email: "tallcorn1@senate.gov",
    address: "78145 Brentwood Court",
  },
  {
    id: 3,
    firstName: "Cassandry",
    lastName: "Roze",
    profilePic: "https://i.pravatar.cc/300?u=3",
    phoneNumber: "223-879-6692",
    email: "croze2@w3.org",
    address: "2079 Morrow Parkway",
  },
  {
    id: 4,
    firstName: "Koressa",
    lastName: "Galey",
    profilePic: "https://i.pravatar.cc/300?u=4",
    phoneNumber: "761-858-5580",
    email: "kgaley3@economist.com",
    address: "5 Hanover Alley",
  },
];

export const Contacts = React.createContext({});
export const AuthContext = React.createContext({});

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedContacts = getContacts();
    setContacts(storedContacts.length ? storedContacts : mockContacts);
  }, [contacts]);

  return (
    <div>
      <Contacts.Provider
        value={{
          contactsList: contacts,
          addContact: createContact,
          deleteContact: deleteContact,
        }}
      >
        <AuthContext.Provider value={{ user: setUser, login: login }}>
          <Router>
            <nav>
              <ul>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
                <li>
                  <Link to="/contacts">Contacts</Link>
                </li>
                <li>
                  <Link to="/contacts/add">Create Contact</Link>
                </li>
              </ul>
            </nav>
            <Route path="/">
              <ContactsPage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/register">
              <RegisterPage />
            </Route>
            <Route path="/contacts/:index">
              <ContactDetailsPage />
            </Route>
            <Route path="/contacts/add">
              <ContactCreatePage />
            </Route>
          </Router>
        </AuthContext.Provider>
      </Contacts.Provider>
    </div>
  );
};

export default App;
