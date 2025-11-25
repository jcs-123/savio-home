import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./Components/Header";
import About from "./pages/About";
import Children from "./pages/Children";
import GalleryPage from "./pages/Gallerypage";
import FullGalleryPage from "./pages/FullGalleryPage";
import LeadershipLineage from "./pages/LeadershipLineage";
import Contact from "./pages/Contact";
import { useState } from "react";
import DonateModal from "./Components/DonateModal";
import VolunteerModal from "./Components/VolunteerModal";
import OfferMealModal from "./Components/OfferMealModal";
export default function App() {
    const [modal, setModal] = useState(null);
  return (
    <>
    
      <Header openModal={setModal} />

      {/* All Sections in Home */}
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="leadership Lineage"
><LeadershipLineage/></section>
      <section id="children"><Children /></section>
      <section id="gallery"><GalleryPage /></section>
    
      {/* Full Gallery Route */}
      <Routes>
        <Route path="/gallery" element={<FullGalleryPage />} />
      </Routes>
        <section id="contact"><Contact /></section>

  {/* 🎉 Render Modal Dynamically */}
      {modal === "donate" && <DonateModal close={() => setModal(null)} />}
      {modal === "volunteer" && <VolunteerModal close={() => setModal(null)} />}
      {modal === "meal" && <OfferMealModal close={() => setModal(null)} />}
      </>
  );
}
