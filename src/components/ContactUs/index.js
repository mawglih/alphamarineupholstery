import React, { useEffect, useMemo } from 'react';
import ContactForm from '../ContactForm';
import Map from '../Map';
import styles from './ContactUs.css';


const ContactUs = () => {
 

  return(
    <div className={styles.container}>
      {/* <MailchimpSubscribe url={url}/> */}
      <ContactForm/>
      <div className={styles.map}>
        <Map value={15} shop="We are here"/>
      </div> 
    </div>
  );
}

export default ContactUs;
