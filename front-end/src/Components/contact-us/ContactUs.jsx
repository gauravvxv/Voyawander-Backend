import React, { useState } from "react";
import styles from "./ContactUs.module.css";
import axios from "axios";

function ContactUs() {
  const [isLoading, setIsLoading] = useState(false);
  const [email,setEmail] = useState('');
  const [mobile,setMobile] = useState();
  const [message,setMeassage] = useState('');
  
    const handleOnChange = async (e) => {
     e.preventDefault();
  
     const data = {
      email: email,
      mobile: mobile,
      message: message
     }
  
    try {
      const api = await axios.post(`https://zany-cyan-bullfrog-cap.cyclic.app/contactus`,data);
      console.log(api);
      alert(api.data)
    } catch (error) {
  console.log(error)    
    }
  
  }

  return (
    <div className={`${styles.third_section} ${styles.fifth_section}`}>
      {isLoading && (
        <div
          className={styles.loadingscreen}
          style={{
            backgroundColor: "rgb(0,0,0, 0)",
          }}>
          <img
            src={
              "https://cdn.pixabay.com/animation/2022/07/29/03/42/03-42-05-37_512.gif"
            }
          />
        </div>
      )}
      <h1>Get in touch</h1>
      <p>
        Don't wait, reach out to us now and let us help your plan your next
        vacation. Our dedicated team is always here to answer your question and
        make your travelk dreams a reality.
      </p>
      <div className={styles.contact_form}>
        <form onSubmit={handleOnChange}>
          <div>
            <input
              onChange={(e)=>setEmail(e.target.value)}
              type="email"
              value={email}
              name="email"
              placeholder="Email"
            />
            <input
              onChange={(e)=>setMobile(e.target.value)}
              name="phone"
              type="phone"
              placeholder="Mobile"
            />
          </div>
          <input
            onChange={(e)=>setMeassage(e.target.value)}
            name="message"
            type="text"
            placeholder="Message"
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
