import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section>
      <h1>404 - Page non trouvée</h1>
      <Link to="/">Retour à l’accueil</Link>
    </section>
  );
}

export default NotFound;