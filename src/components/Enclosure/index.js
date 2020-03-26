import React, { useEffect } from 'react';
import styles from './Enclosure.css';
import AllPhotos from '../AllFotos';

const Enclosure = () => {

  return(
    <>
      <AllPhotos
        classname1={styles.list}
        classname2={styles.listItem}
      />
    </>
  );
}

export default Enclosure;
