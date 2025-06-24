import TaglineSection from "../components/Tagline";
import taglineImg from "../assets/imgs/home-tagline.png";
import Houses from "../components/Houses";
import Footer from "../components/Footer";
import data from "../data/data.json";

const houseData = data;

function Home() {
    return (
        <>
            <div className="container">
                <TaglineSection
                    imgSrc={taglineImg}
                    text="Chez vous, partout et ailleurs"
                />
                <Houses houses={houseData} />
            </div>
            <Footer />
        </>
    );
}

export default Home;
