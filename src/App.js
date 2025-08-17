import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import HomePage from "./pages/home/HomePage";
import NotFound from "./pages/notFound/NotFound";
import Contact from "./pages/contact/Contact";
import NavBar from "./components/navBar/navBar";
import Footer from "./components/footer/Footer";
import PartnersPage from "./pages/partnersPage/PartnersPage";
import CampStructure from "./pages/campStructure/CampStructure";
import InitiativesPage from "./pages/initiativesPage/InitiativesPage";
import Maintenance from "./pages/maintenancPage/Maintenance";
import { useEffect } from "react";
import { initGA, logPageView } from "./analytics";

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    initGA(); // تشغيل GA عند أول تحميل
  }, []);

  useEffect(() => {
    logPageView(location.pathname + location.search); // تسجيل أي تغيير بالصفحة
  }, [location]);

  const isUnderMaintenance = false;

  if (isUnderMaintenance) {
    return <Maintenance />;
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/partners-page" element={<PartnersPage />} />
        <Route path="/camp-structure" element={<CampStructure />} />
        <Route path="/initiatives-page" element={<InitiativesPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollToTop />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
