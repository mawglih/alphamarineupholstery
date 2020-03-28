import React, { useState, useEffect } from 'react';
import Map from '../Map';
import Upholstery from '../Upholstery';
import styles from './home.css';
import Modal from '../Modal';

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  useEffect(() =>{
    setOpenModal(false);
  },[]);
  console.log('modalopen: ', openModal);
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.header}>Alphamarineupholstery - your best boat renovation shop</h1>
        <div className={styles.hero}></div>
        <div className={styles.row}>
          <div className={styles.image} onClick={() => setOpenModal(true)}>
            <img src="https://amu-images.s3.us-east-2.amazonaws.com/front/enc_main.png" alt="awning"/>
          </div>
          <div className={styles.image}>
            <img src="https://amu-images.s3.us-east-2.amazonaws.com/front/otf_main.png" alt="enclosure"/>
          </div>
          <div className={styles.image}>
            <img src="https://amu-images.s3.us-east-2.amazonaws.com/front/uph_main.png" alt="upholstery"/>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.map}>
            <Map
              value={17}
              shop="AlphaMarineUpholstery"
            />
          </div>
        </div>
      </div>
      <Modal 
        title='Test Modal'
        size='big'
        text='This is test text'
        open={openModal}
        showCloseButton
        modalDismiss={() => setOpenModal(false)}
      />
    </>
  );
}

export default Home;
