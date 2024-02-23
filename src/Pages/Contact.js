import React from "react";
import {Link} from 'react-router-dom';
import contact from "../Components/contact.css";

const Contact = () => {
    return (
        <div className="contact-container">  
          <form>
            <header>
              <h2>Contact me here</h2>
            </header>
            <div className="form-content">  
              <div className="form-position">  
                <input type="text" placeholder="Full name" />
                <input type="text" placeholder="Company name" /><br />
                <input type="text" placeholder="Phone number" />
                <input type="email" placeholder="Email" /><br /> 
              </div>
              <div className="form-position">  
                <textarea placeholder="Message" name="Message" id="Message" cols="30" rows="10"></textarea><br />
                <button type="submit">Send</button>
              </div>
            </div>
          </form>
        </div>
    )
}
export default Contact;
    