import React from "react";

const Contact = ({firstName, lastName, phone, gender, id}) => {
  return (
    <div className="container">
      <div className="contact">
      <div className="mainInfo"> 
        <span className="firstName">{firstName} </span>
        <span className="lastName">{lastName} </span>
        <span className="gender">  {gender === "male" ? iconMale : gender === "female" ? iconFemale : iconUndefined}</span>
      </div>
      <div className="phone"> {phone} </div>
      </div>
      <div className="call"><BiPhone/></div>
    </div>
  )
}

export default Contact;