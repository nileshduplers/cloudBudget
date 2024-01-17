import React from "react";
import "../Contact/Contact.css";

const Form = () => {
  const [inputs] = React.useState({
    name: "",
    phone: "",
  });

  const sendMessage = (e) => {
    if (e) e.preventDefault();
    const message = inputs.message;
    const messageEnter = message
      .replace(/\r\n|\r|\n/g, "%0D%0A")
      .replace(" ", "%20");
    const request =
      "mailto:YOUREMAIL?subject=Email%20from%20" +
      inputs.name +
      "/" +
      inputs.email +
      "&body=" +
      messageEnter;
    document.location = request;
  };
  return (
    <form onSubmit={(e) => sendMessage(e)}>
      <div className="d-flex">
        <div className="half-input">
          <input
            type="text"
            name="name"
            placeholder="First Name"
            title="First name"
            maxLength="50"
          />
        </div>
        <div className="half-input">
          <input
            type="text"
            name="lname"
            placeholder="Last Name"
            title="Last name"
            maxLength="50"
          />
        </div>
        <div className="full-input">
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            title="phone"
            maxLength="10"
            required
          />
        </div>
        <div className="full-input">
          <select>
            <option value="">Select Service</option>
            <option value="Select Service 1">Select Service 1</option>
          </select>
        </div>
      </div>

      <input type="submit" value="Submit Now" />
    </form>
  );
};

function Contact() {
  return (
    <section className="contact">
      <div className="container">
        <div className="d-flex">
          <div className="contact-content">
            <h2>Contact</h2>
            <p>
              Questions or concerns? Just fill out the form below and our
              support team will get back to you within 24 hours
            </p>
          </div>
          <div className="contact-form">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
