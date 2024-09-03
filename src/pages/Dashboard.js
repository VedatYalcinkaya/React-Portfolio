import backgroundImage from "../assets/images/backgroundImage.png";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import HomePage from "./HomePage";
import Footer from "../components/Footer";
import About from "./About";
import Projects from "./Projects";
import Navbar2 from "../components/Navbar2";

function Dashboard() {
    return (

        <div
            className="relative min-h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            {/* Overlay (renk katmanı) */}
            <div className="absolute inset-0 bg-black opacity-70"></div>

            <Navbar2 />
            <div className="relative z-10">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<About />} /> 
                    <Route path="/projects" element={<Projects />} />
                    {/* <Route path="/skills" element={<SkillsPage />} /> */}
                    {/* <Route path="/contact" element={<ContactPage />} /> */}
                </Routes>
            </div>
            {/* <Footer/> */}
        </div>
    );
}

export default Dashboard;
