import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import backgroundImage from "../assets/images/backgroundImage.png";  // Arka plan resminizin yolunu belirtin

function Dashboard() {
    return (
        <div 
            className="relative min-h-screen bg-cover bg-center" 
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            {/* Overlay (renk katmanı) */}
            <div className="absolute inset-0 bg-black opacity-70"></div>

            {/* İçerik */}
            <div className="relative z-10">
                <Navbar/>
                <Hero/>
            </div>
        </div>
    );
}

export default Dashboard;