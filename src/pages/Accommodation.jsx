import React from "react";
import { useParams, Navigate } from "react-router-dom";
import data from "../data/accommodations.json";
import Collapse from "../components/Collapse";
import Gallery from "../components/Gallery";
import Tag from "../components/Tag";
import Rating from "../components/Rating";
import "../styles/accommodation.scss";

function Accommodation() {
  const { id } = useParams();
  const accommodation = data.find(item => item.id === id);

  // Redirection vers la page 404 si le logement n'existe pas
  if (!accommodation) return <Navigate to="*" />;

  return (
    <section className="accommodation-detail">
      <Gallery pictures={accommodation.pictures} />

      <div className="accommodation-header">
        <div className="accommodation-main">
          <h1 className="accommodation-title">{accommodation.title}</h1>
          <p className="accommodation-location">{accommodation.location}</p>
          <div className="tags">
            {accommodation.tags.map((tag, idx) => (
              <Tag key={idx} tag={tag} />
            ))}
          </div>
        </div>
        <div className="host-rating">
          <div className="host">
            <span>{accommodation.host.name}</span>
            <img src={accommodation.host.picture} alt={accommodation.host.name} />
          </div>
          <Rating rating={parseInt(accommodation.rating, 10)} />
        </div>
      </div>

      <div className="accommodation-collapses">
        <Collapse title="Description">
          <p className="accommodation-description">{accommodation.description}</p>
        </Collapse>
        <Collapse title="Équipements">
          <ul className="accommodation-equipments">
            {accommodation.equipments.map((equip, idx) => (
              <li key={idx}>{equip}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </section>
  );
}

export default Accommodation;