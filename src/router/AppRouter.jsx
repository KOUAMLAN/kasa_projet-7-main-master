import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Error from "../pages/Error";
import HouseDetails from "../pages/HouseDetails";
import Header from "../components/Header";

const AppRouter = () => {
    return (
        <Router>
            <Header /> {/* Le Header s'affiche sur toutes les pages */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/a-propos" element={<About />} />
                <Route path="/house/:id" element={<HouseDetails />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
