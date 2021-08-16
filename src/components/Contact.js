import React from "react";



function Contact(user) {
  function getImg() {
    if (user.gender === "female") {
      return (
        <img
          className="avatar"
          src="https://image.flaticon.com/icons/png/512/2922/2922554.png"
          alt="female"
        />
      );
    } else if (user.gender === "male") {
      return (
        <img
          className="avatar"
          src="https://image.flaticon.com/icons/png/512/265/265674.png"
          alt="male"
        />
      );
    } else {
      return (
        <img
          className="avatar"
          src="https://image.flaticon.com/icons/png/512/1077/1077012.png"
          alt="?"
        />
      );
    }
  }

  return (
    <div className="contact">
      {getImg()}
      <div>
        <div className="fullname">
          <p>{user.firstName}</p>
          <p>{user.lastName}</p>
        </div>
        <a className="number" href="tel:{user.phone}">
          {user.phone}
        </a>
      </div>
    </div>
  );
}

export default Contact;
