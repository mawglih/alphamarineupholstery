import React from 'react';
import Map from '../Map';
import styles from './home.css';

const index = () => (
  <div className={styles.container}>
    <h1 className={styles.header}>Alphamarineupholstery - your boat renovation shop</h1>
    <div className={styles.hero}></div>
    <div className={styles.row}>
      <div className={styles.image}>
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
        <Map/>
      </div>
    </div>
  </div>
);

export default index;
