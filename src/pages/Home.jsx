import React from "react";
import Banner from "../components/Banner"; // Utilise Banner si tu veux une vraie bannière
import bannerImg from "../assets/imgs/home-tagline.png";
import Houses from "../components/Houses";
import Footer from "../components/Footer";
import data from "../data/data.json";

function Home() {
    return (
        <>
            <div className="container">
                <Banner
                    image={bannerImg}
                    altText="Bannière d'accueil"
                    text="Chez vous, partout et ailleurs"
                />
                <Houses houses={data} />
            </div>
            <Footer />
        </>
    );
}

export default Home;