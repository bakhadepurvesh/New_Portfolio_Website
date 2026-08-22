
import { useState } from 'react';
import '../css_File/ContactForm.css'
import {FaGithub,FaPhoneAlt,FaInstagram, FaLinkedin} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactForm = () => {

    const [userInputName,setUserInputName] = useState(" ");
    const [userInputEmail,setUserInputEmail] = useState(" ");
    const [userInputMsg,setUserInputMsg] = useState(" ");

    const [successMsg, setSuccessMsg] = useState("");

    const handleSubmit = (e) =>{
    e.preventDefault();

    // New user object
    const userData = {
            name:userInputName,
            email:userInputEmail,
            message:userInputMsg,
        };

    // Get old data
    const oldData = JSON.parse(
        localStorage.getItem("contactUsers") || "[]"
    );

    // Add new data
    oldData.push(userData);

    localStorage.setItem("contactUsers" ,JSON.stringify(oldData));


    // Clear form
    setUserInputName("");
    setUserInputEmail("");
    setUserInputMsg("");

    setSuccessMsg("Your message has been saved successfully!");

    setTimeout(() =>{
        setSuccessMsg("");
    },3000);

    }

  return (
    <div className='contact-session'>

        <div className='contact-container'>

            <div className='contact-left'>

               <h2>Contact Us</h2>
                <p>
                    Lorem ipsum consectetur adipisicing elit.
                    <br />
                    possimus quod aliquam repudiandae nam
                    <br />
                    sit perspiciatis laboriosam enim
                    <br />
                    aliquid odio, ipsa nisi magnam!
                </p>
                <p>
                    <MdEmail /> purveshbakhade@2378gmail.com
                </p>
                <p>
                    <FaPhoneAlt /> +91 7010101010
                </p>

                <FaGithub />
                <FaInstagram />
                <FaLinkedin />
            </div>
            <div className='contact-right'>

                <form onSubmit={handleSubmit}>
                        <label className='name' >Name:</label>
                        <input type="text" value={userInputName} onChange={(e) => setUserInputName(e.target.value)} required></input>
                        <label className='email'>Email:</label>
                        <input
                            type="email"
                            value={userInputEmail}
                            onChange={(e) => setUserInputEmail(e.target.value)}
                            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                            title="Please enter a valid email address"
                            required
                        />
                    
                        <label className='msg'>Message:</label>
                        <input type="text" value={userInputMsg} onChange={(e) => setUserInputMsg(e.target.value)} required></input>
                    
                    <button className='btn' type="submit">
                        Submit
                    </button>
                    <p className="form-note">
                        Note: Form submitted data is stored in local storage.
                    </p>

                </form>
                {successMsg && <p className="success-msg">{successMsg}</p>}
            </div>
        </div>
    </div>
  )
}

export default ContactForm