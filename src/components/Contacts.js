import React from "react";
import Contact from Contact.js;
import React, { useState, useEffect } from "react";


const contacts = [
  {
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male",
  },
  {
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female",
  },
  {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666",
  },
  {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female",
  },
  {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male",
  },
  {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male",
  },
];

const inputItems = [
  {
    id: "female",
    label: "👩",
  },
  {
    id: "male",
    label: "👨",
  },
  {
    id: "other",
    label: "?",
  },
];

const [users, setUsers] = useState(contacts);
const [searchTerm, setSearchTerm] = useState(contacts);

useEffect(getFiltered, []);
useEffect(getGender, [searchTerm]);

function getGender() {
  let filteredFemale = [];
  let filteredMale = [];
  let filteredOther = [];
  if (document.getElementById("female").checked) {
    filteredFemale = filteredFemale.concat(
      searchTerm.filter((el) => el.gender === "female")
    );
  }
  if (document.getElementById("male").checked) {
    filteredMale = filteredMale.concat(
      searchTerm.filter((el) => el.gender === "male")
    );
  }
  if (document.getElementById("other").checked) {
    filteredOther = filteredOther.concat(
      searchTerm.filter((el) => el.gender != "male" && el.gender != "female")
    );
  }
  setUsers([
    ...new Set(filteredFemale.concat(filteredMale).concat(filteredOther)),
  ]);
}

function getFiltered() {
  let input = document.getElementById("search").value;
  const filteredLastName = contacts.filter(
    (el) => el.lastName.toLowerCase().indexOf(input.toLowerCase()) !== -1
  );
  const filteredFistName = contacts.filter(
    (el) => el.firstName.toLowerCase().indexOf(input.toLowerCase()) !== -1
  );
  const filteredPhone = contacts.filter(
    (el) => el.phone.toLowerCase().indexOf(input.toLowerCase()) !== -1
  );
  let filtered = [
    ...new Set(
      filteredLastName.concat(filteredFistName).concat(filteredPhone)
    ),
  ];

  setSearchTerm(filtered);
}

return (
  <div className="phone">
    <input
      type="text"
      placeholder="🔍 Пошук..."
      id="search"
      onChange={getFiltered}
    />
    <div className="filter">
      {inputItems.map((item) => (
        <div className="check">
          <input
            type="checkbox"
            id={item.id}
            key = {item.id}
            defaultChecked={true}
            onChange={getGender}
          />
          <p>{item.label}</p>
        </div>
      ))}
    </div>
    <div className="contacts-list">
      {users.map((user) => (
        <Contact {...user} key={user.id} />
          
      ))}
    </div>
  </div>
);
export default contacts;