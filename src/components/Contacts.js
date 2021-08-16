import "./Contacts.css";
import React, { useState, useEffect } from "react";
import Contact from "./Contact";

export default function Contacts() {
  const contacts = [
    {
      firstName: "Барней",
      lastName: "Стинсовський",
      phone: "+380956319521",
      gender: "male",
      mail: "I am usually the one to help them fix things",
    },
    {
      firstName: "Робін",
      lastName: "Щербатська",
      phone: "+380931460123",
      gender: "female",
      mail: "They always come to me for advice",
    },
    {
      firstName: "Анонімний",
      lastName: "Анонімус",
      phone: "+380666666666",
      mail: "Work out? Are you serious right now?",
    },
    {
      firstName: "Лілія",
      lastName: "Олдровна",
      phone: "+380504691254",
      gender: "female",
      mail: "My car is very mindboggingly stupid !",
    },
    {
      firstName: "Маршен",
      lastName: "Еріксонян",
      phone: "+380739432123",
      gender: "male",
      mail: "Good question - I am still trying to figure that out!",
    },
    {
      firstName: "Теодор",
      lastName: "Мотсбес",
      phone: "+380956319521",
      gender: "male",
      mail: "I tend to be the peacemaker between friends",
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
  const match = useRouteMatch();
  function ContactInfo(user) {
    const params = useParams();
    const info = (
      <div
        className={
          params.id === `${user.firstName}-${user.lastName}`
            ? "contact-info"
            : "none"
        }
      >
        <div className="header-mail">📨 Message</div>
        <div className="contact-info-main">
          <div>{user.firstName}</div>
          <div>{user.lastName}</div>
          <a className="number phone-info" href="tel:{user.phone}">
            {user.phone}
          </a>
        </div>
        <div className="mail">{user.mail}</div>
        <Link to={`${match.url}`} className="back-btn">
          Back
        </Link>
      </div>
    );
    return info;
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
              key={item.id}
              defaultChecked={true}
              onChange={getGender}
            />
            <p>{item.label}</p>
          </div>
        ))}
      </div>
      <div className="contacts-list">
        {users.map((user) => (
          <>
            <Link
              key={user.firstName}
              className="contact-link"
              to={`${match.url}/${user.firstName}-${user.lastName}`}
            >
              <Contact {...user} key={user.lastName} />
            </Link>
            <Switch>
              <Route path={`${match.path}/:id`}>
                <ContactInfo {...user} />
              </Route>
            </Switch>
          </>
        ))}
      </div>
    </div>
  );
}