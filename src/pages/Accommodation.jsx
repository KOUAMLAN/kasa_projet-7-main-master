import React, { useState } from "react";
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

  if (!accommodation) return <Navigate to="/404" replace />;

  const { host } = accommodation;
  const hostFullName = host.firstName && host.lastName
    ? `${host.firstName} ${host.lastName}`
    : host.name || "";

  const [openCollapse, setOpenCollapse] = useState(null);

  return (
    <section className="accommodation-detail">
      <Gallery pictures={accommodation.pictures} />

      <div className="accommodation-header">
        <div className="top-row">
          <div className="title-location">
            <h1 className="accommodation-title">{accommodation.title}</h1>
            <p className="accommodation-location">{accommodation.location}</p>
          </div>
          <div className="host-block">
            <span className="host-name">{hostFullName}</span>
            <img src={host.picture} alt={hostFullName} className="host-img" />
          </div>
        </div>
        <div className="tags-rating-row">
          <div className="tags">
            {accommodation.tags.map((tag, idx) => (
              <Tag key={idx} tag={tag} />
            ))}
          </div>
          <div className="rating-block">
            <Rating rating={parseInt(accommodation.rating, 10)} />
          </div>
        </div>
      </div>

      <div className="accommodation-collapses">
        <Collapse
          title="Description"
          isOpen={openCollapse === 0}
          onClick={() => setOpenCollapse(openCollapse === 0 ? null : 0)}
        >
          <p className="accommodation-description">{accommodation.description}</p>
        </Collapse>
        <Collapse
          title="Équipements"
          isOpen={openCollapse === 1}
          onClick={() => setOpenCollapse(openCollapse === 1 ? null : 1)}
        >
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