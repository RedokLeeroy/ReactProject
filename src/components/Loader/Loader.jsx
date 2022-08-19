import React from 'react';
import { Circles } from 'react-loader-spinner';
import styles from './Loader.module.css';

export const Loader = () => (
  <div className={styles.loader}>
    <Circles
      height="80"
      width="80"
      color="#ff751d"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass="Loader"
    />
  </div>
);
