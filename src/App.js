import { BrowserRouter, Route, Routes } from "react-router-dom";
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

function App() {
  const isUnderMaintenance = false;

  if (isUnderMaintenance) {
    return <Maintenance />;
  }
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/partners-page" element={<PartnersPage />} />
          <Route path="/camp-structure" element={<CampStructure />} />
          <Route path="/initiatives-page" element={<InitiativesPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ScrollToTop />
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
