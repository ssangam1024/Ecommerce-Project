import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/Home/Homepage";
import { AboutPage } from "./pages/About/AboutPage";
import { ServicesPage } from "./pages/Services/Servicespage";
import { CareerPage } from "./pages/Career/Careerpage";
import { ContactPage } from "./pages/Contact/ContactPage";

export function PageContent() {
  return ( 
<Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/careers" element={<CareerPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
  );
}