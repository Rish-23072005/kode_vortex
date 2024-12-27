
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Training from "./Components/Training/Training";
import ServicesSection from "./Components/ServicesSection/ServicesSection";
import Navbar from "./Components/Navbar/Navbar";
import HeroPage from "./Components/HeroPage/HeroPage";
import AboutUsSectioon from "./Components/AboutUsSection/AboutUsSection"
import GradientColorRight from "./Components/GradientColor/GradientColorRight";
import {Routes , Route} from "react-router-dom";
import TrainingPage from "./pages/TrainingPage/TrainingPage";
import ServicePage from "./pages/ServicePage/ServicePage";

const App = () => {
  return (
    <div className="bg-black min-h-screen px-[10%] overflow-hidden">
        <Navbar/>

        <Routes>
          <Route index element={
            <>
            <HeroPage />
        
        <Training/>
      <ServicesSection/>
      <AboutUsSectioon/>
            </>
          } />


          <Route path="/training" element={<TrainingPage/>} />
          <Route path="/service" element={<ServicePage/>} />
        </Routes>
        
      <Footer />
    </div>
  );
};

export default App;