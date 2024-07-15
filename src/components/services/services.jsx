import React from 'react';
import "./services.css";
import Image1 from '../../assets/service-1.svg';
import Image2 from '../../assets/service-2.svg';
import Image3 from '../../assets/cloud.svg';

const data = [
  {
    id: 1,
    image: Image1,
    title: "UI/UX design",
    description:
      "Enhance your digital experience with my UI/UX design services. I create user-friendly and visually appealing interfaces through in-depth research and prototyping.",
  },
  {
    id: 2,
    image: Image2,
    title: "Web Development",
    description:
      "Bring your vision to life with my web development services. I build robust, scalable, and secure websites using the latest technologies and best practices ",
  },
  {
    id: 3,
    image: Image3,
    title: "Cloud Computing",
    description:
      "Optimize your business with my cloud computing services. I offer customized cloud solutions for efficiency, scalability, and security, including migration and infrastructure management.",
  },
];

const services = () => {
  return (
   <section className="services container section" id="services">
    <h2 className="section__title">Services</h2>

    <div className="service__container grid">
      {data.map(({id, image, title, description}) =>{
        return(
          <div className="services__card" key={id}>
            <img src={image} alt="" className="services__img" />

            <h3 className="services__title">{title}</h3>
            <p className="services__description">{description}</p>
          </div>
        )
      })}
    </div>
   </section>
  )
}

export default services