import React from 'react'
import styles from "./ProfileInfo.module.css";
import logoBody from "./imagesProfileInfo/moone.jpg";
import imglogoBody from "./imagesProfileInfo/ayse.jpg";

export const ProfileInfo = () => {
  return (
      <>
      <div>
          <img className={styles.logoBody} src={logoBody} alt=''/></div>
    <div className={styles.logo1}>
        <img className={styles.imgLogoBody} src={imglogoBody} alt=''/>
        <ul>
            <li>Denis.P</li>
            <li>City: Minsk</li>
            <li>e-mail: denis.it-kamasutra@gmail.com</li>
        </ul>
    </div>
      </>
  )
}