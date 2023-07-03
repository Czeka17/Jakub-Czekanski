import React, { useEffect, useState } from 'react';
import classes from "./header.module.css";
import meImage from "../../toja3-_1_.webp";

const Header = () => {

  return (
    <header className={classes.header} id='home'>
      <div className={classes.headerText}>
        <h2>ASPIRING FRONT END DEVELOPER</h2>
      </div>
      <div className={classes.headerName}>
        <h2>JAKUB <br/> CZEKAŃSKI</h2>
      </div>
      <div className={classes.headerImage}>
        <img src={meImage} alt="Jacob" />
      </div>
    </header>
  );
};

export default Header;
