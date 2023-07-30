import React from "react";
import Card from "./card";
import Contacts from "../contact";
function createCard(Contacts) {
  return (
    <Card
      key={Contacts.id}
      name={Contacts.name}
      imageURL={Contacts.imageURL}
      phoneNumber={Contacts.phoneNumber}
      email={Contacts.email}
    />
  );
}
function App(props) {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {Contacts.map(createCard)}
    </div>
  );
}

export default App;
