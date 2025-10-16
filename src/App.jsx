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
import Footer2 from "./Components/Footer2";
import AboutWhyMain from "./Components/AboutComponents/SubPages/Why/AboutWhyMain";
import FaqMain from "./Components/FAQComponents/FaqMain";
import JapanMain from "./Components/StudyComponents/Japan/JapanMain";
import AusMain from "./Components/StudyComponents/Australia/AusMain";
import UkMain from "./Components/StudyComponents/UK/UkMain";
import CadMain from "./Components/StudyComponents/Canada/CadMain";
import UsMain from "./Components/StudyComponents/USA/UsMain";
import TestsMain from "./Components/TestsComponents/TestsMain";
import ContactMain from "./Components/ContactComponents/ContactMain";

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
        <Route element={<AboutWhyMain />} path="/about/why-choose-us" />

        <Route element={<ServicesPage />} path="/services" />

        <Route element={<StudyPage />} path="/study" />
        <Route element={<JapanMain />} path="/study/japan" />
        <Route element={<AusMain />} path="/study/australia" />
        <Route element={<UkMain />} path="/study/uk" />
        <Route element={<CadMain />} path="/study/canada" />
        <Route element={<UsMain />} path="/study/usa" />

        <Route element={<FaqMain />} path="/faq" />

        <Route element={<TestsMain />} path="/tests" />

        <Route element={<ContactPage />} path="/contact" />
      </Routes>
      {/* <Footer /> */}
      <Footer2 />
    </>
  );
}

export default App;
