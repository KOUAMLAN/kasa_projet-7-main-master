import Header from "../components/Header";
import TaglineSection from "../components/Tagline";
import taglineImg from "../assets/imgs/about-tagline.png";
import Footer from "../components/Footer";
import Collapsible from "../components/Collapsible";

const data = [
    {
        title: "Fiabilité",
        content:
            "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    },
    {
        title: "Respect",
        content:
            "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
        title: "Service",
        content:
            "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
        title: "Sécurité",
        content:
            "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services.",
    },
];

const About = () => {
    return (
        <>
            <div className="container">
                <Header />

                <TaglineSection
                    imgSrc={taglineImg}
              
                />

                <section>
                    {data.map((item, index) => (
                        <div className="panelAbout" key={index}>
                            <Collapsible title={item.title}>
                                <p>{item.content}</p>
                            </Collapsible>
                        </div>
                    ))}
                </section>
            </div>

            <Footer></Footer>
        </>
    );
};

export default About;
