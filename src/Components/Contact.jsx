import { useState } from "react";
import "./Contact.css";
function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent");
  };

  return (
    <div className="page">

      <h1>Contact Us</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <textarea placeholder="Message"></textarea>

        <button type="submit">Submit</button>

      </form>

    </div>
  );
}

export default Contact;