<<<<<<< HEAD
import React, { useState } from "react";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";

const aboutSections = [
  {
    title: "Fiabilité",
    content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
  },
  {
    title: "Respect",
    content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
  },
  {
    title: "Service",
    content: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
  },
  {
    title: "Sécurité",
    content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services."
  }
];

function About() {
  // Accordéon exclusif : un seul menu ouvert à la fois
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

=======
import React from "react";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";

function About() {
>>>>>>> 069167fab8c3c5c7255dfa778312a27b0ce27949
  return (
    <section>
      <Banner
        image="/images/home-banner.png"
        altText="Bannière À propos"
<<<<<<< HEAD
      />
      <div className="about-collapses">
        {aboutSections.map((section, idx) => (
          <Collapse
            key={section.title}
            title={section.title}
            isOpen={openIndex === idx}
            onClick={() => handleToggle(idx)}
          >
            {section.content}
          </Collapse>
        ))}
=======
       
      />
      <div className="about-collapses">
        <Collapse title="Fiabilité">
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
        </Collapse>
        <Collapse title="Respect">
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
        </Collapse>
        <Collapse title="Service">
          Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
        </Collapse>
        <Collapse title="Sécurité">
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services.
        </Collapse>
>>>>>>> 069167fab8c3c5c7255dfa778312a27b0ce27949
      </div>
    </section>
  );
}

export default About;