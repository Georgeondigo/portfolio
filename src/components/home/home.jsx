import React from 'react';
import "./home.css";
import Me from "../../assets/avator-george1.png";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
const home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">George Ondigo</h1>
        <span className="home__education"> I'm a Software Engineer</span>
        <HeaderSocials/>

        <a href="#contact" className="btn">Hire Me</a>

        <ScrollDown />
      </div>
    </section>
  )
}

export default home