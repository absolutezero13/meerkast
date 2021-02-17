import React, { useState } from "react";
import "./Contact.css";
import { firebase } from "../../firebase/firebase";
import { Redirect } from "react-router-dom";
const Contact: React.FC = () => {
  const [areInputsValid, setValid] = useState<boolean>(true);
  const [isMessageSent, setSent] = useState<boolean>(false);
  const submitHandler = (e: any) => {
    e.preventDefault();
    const form = document.querySelector(".contact-form")! as HTMLFormElement;
    const name = document.querySelector(".name")! as HTMLInputElement;
    const email = document.querySelector(".email")! as HTMLInputElement;
    const message = document.querySelector(".message")! as HTMLInputElement;
    if (name.value && email.value && message.value) {
      firebase.database().ref("messages").push({
        name: name.value,
        email: email.value,
        message: message.value,
      });
      form.reset();
      setValid(true);
      setSent(true);
    } else {
      setValid(false);
      setSent(false);
    }
  };

  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <form className="contact-form" onSubmit={submitHandler}>
        <label> Name</label>

        <input className="name" type="text" placeholder="name" />

        <label> E-mail</label>

        <input className="email" type="email" placeholder="E-mail" />

        <label>Message</label>

        <textarea
          className="message"
          name="Your message"
          placeholder="Your Message"
        ></textarea>

        <button type="submit"> Submit! </button>
      </form>
      {!areInputsValid && <p>Please insert some reasonable information.</p>}
      {isMessageSent && <p>Your message has been sent!</p>}
    </div>
  );
};

export default Contact;
