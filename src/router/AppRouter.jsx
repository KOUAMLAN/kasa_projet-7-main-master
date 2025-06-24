import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Error from "../pages/Error";
import HouseDetails from "../pages/HouseDetails";

const AppRouter = () => {
    return (
        <Router>
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
