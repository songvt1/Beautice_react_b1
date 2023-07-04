import ContactImg from "../../assets/img/Contact.png";
import "./contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <div className="image-contact">
        <img src={ContactImg} />
      </div>
      <div className="container-content">
        <div className="content">
          <p className="contact-us">Contact Us</p>
          <div className="title ">Send your inquiry to our expert team</div>
          <div className="description">
            Lorem ipsum dolor sit amet nulla turapis tellus.
          </div>
        </div>
        <div className="contact-form">
          <div className="input-name">
            <input className="input" type="text" placeholder="First name" />
            <input className="input" type="text" placeholder="Last name" />
          </div>
          <input className="input" type="text" placeholder="Email address" />
          <input className="input" type="text" placeholder="Subject message" />
          <textarea className="textarea" placeholder="Your inquiry here" />
          <button className="send-message">Send Message</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
