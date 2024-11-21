import React from 'react';
import "./about.css";
import About from '../../assets/avator-george1.png';
import AboutBox from './AboutBox';

const about = () => {
  return (
  <section className="about container section" id='about'>
    <h2 className="section__title">About Me</h2>

    <div className="about__container grid">
      <img src={About} alt="George Ondigo" className="about__img" />

      <div className="about__data grid">
        <div className="about__info">
          <p className="about_description">I'm George Ondigo , a passionate Computer Science and  web developer from Nairobi, Kenya. I have rich experience in web site design and building and customization, eager to collaborate on innovative tech projects. </p>
          <a href="/GEORGE ONDIGO-CV.docx" className="btn">Download CV</a>
        </div>

        <div className="about__skills grid">
          <div className="skills__data">
            <div className="skills__titles">
              <h3 className="skills__name">Development</h3>
              <span className=" skills__number">90%</span>
            </div>

            <div className="skills__bar">
              <span className="skills__percentage development"></span>
            </div>
          </div>

          <div className="skills__data">
            <div className="skills__titles">
              <h3 className="skills__name">UI/UX design</h3>
              <span className=" skills__number ">70%</span>
            </div>

            <div className="skills__bar">
              <span className="skills__percentage ui__design"></span>
            </div>
          </div>

          <div className="skills__data">
            <div className="skills__titles">
              <h3 className="skills__name">Cloud Computing</h3>
              <span className=" skills__number">80%</span>
            </div>

            <div className="skills__bar">
              <span className="skills__percentage cloud"></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <AboutBox/>
  </section>
  )
}

export default about
