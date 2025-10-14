import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import ServicesPage from "./Pages/ServicesPage";
import Form from "./Components/HelperComponents/Form";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import StudyPage from "./Pages/StudyPage";
import Team from "./Components/AboutComponents/SubPages/Team/Team";
import VisionIndex from "./Components/AboutComponents/SubPages/Vision/VisionIndex";
import ScrollToTop from "./Components/HelperComponents/ScrollToTop";
import TestimonialsMain from "./Components/AboutComponents/SubPages/Testimonials/TestimonialsMain";
import SuccessStories from "./Components/AboutComponents/SubPages/SuccessStories/SuccessStories";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Form />
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<AboutPage />} path="/about" />
        <Route element={<Team />} path="/about/team" />
        <Route element={<VisionIndex />} path="/about/vision" />
        <Route element={<TestimonialsMain />} path="/about/testimonials" />
        <Route element={<SuccessStories />} path="/about/success-stories" />

        <Route element={<ServicesPage />} path="/services" />
        <Route element={<ContactPage />} path="/contact" />
        <Route element={<StudyPage />} path="/study" />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
