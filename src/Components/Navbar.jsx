import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  X,
  BookOpen,
  Grid,
  Users,
  Newspaper,
  Building2,
  Target,
  Briefcase,
  GraduationCap,
  FileText,
} from "lucide-react";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const dropdownTimeout = useRef(null);

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        // Always show at top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
        setActiveDropdown(null);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Prevent background scroll when dropdown or mobile menu is open
  useEffect(() => {
    if (activeDropdown || mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeDropdown, mobileMenuOpen]);

  const handleMouseEnter = (dropdown) => {
    if (dropdownTimeout.current) {
      clearTimeout(dropdownTimeout.current);
    }
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md"
      >
        <div className="w-full bg-white text-primary px-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold">
                Logo
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <Link
                to="/"
                className="font-medium transition hover:text-text"
                onClick={closeDropdown}
              >
                Home
              </Link>

              {/* About Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("about")}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center gap-1 font-medium transition hover:text-text">
                  About Us
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      activeDropdown === "about" ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("services")}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center gap-1 font-medium transition hover:text-text">
                  Services
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      activeDropdown === "services" ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {/* Study Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("study")}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center gap-1 font-medium transition hover:text-text">
                  Study Abroad
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      activeDropdown === "study" ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {/* More Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("more")}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center gap-1 font-medium transition hover:text-text">
                  More
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      activeDropdown === "more" ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Contact Button */}
            <div className="hidden lg:block">
              <Link to="/contact">
                <button className="bg-text text-white px-6 py-2.5 rounded-lg transition font-medium ">
                  Contact Us
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-primary p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Grid size={24} />}
            </button>
          </div>

          {/* Desktop Dropdown - About */}
          <AnimatePresence>
            {activeDropdown === "about" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="hidden lg:block absolute left-0 right-0 bg-white border-t border-gray-200 shadow-lg"
                onMouseEnter={() => handleMouseEnter("about")}
                onMouseLeave={handleMouseLeave}
              >
                <div className="max-w-7xl mx-auto px-6 py-8">
                  <div className="grid grid-cols-2 gap-8">
                    {/* Left Side - Featured */}
                    <div className="bg-background p-6 rounded-xl">
                      <div className="flex items-center gap-4">
                        <div className="bg-text p-3 rounded-lg flex-shrink-0">
                          <Building2 className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-text mb-2">
                            About KBM
                          </h3>
                          <p className="text-text mb-4">
                            Learn about our mission, vision, and the team that
                            makes it all possible.
                          </p>
                          <Link to="/about" onClick={closeDropdown}>
                            <button className="text-text font-semibold hover:underline flex items-center gap-1">
                              Learn More →
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Right Side - Links */}
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                          <Building2 className="w-5 h-5" />
                          Company
                        </h4>
                        <ul className="space-y-2">
                          <li>
                            <Link
                              to="/about"
                              className="text-gray-700 hover:text-text transition block"
                              onClick={closeDropdown}
                            >
                              About Us
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/about/team"
                              className="text-gray-700 hover:text-text transition block"
                              onClick={closeDropdown}
                            >
                              Our Team
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/about/vision"
                              className="text-gray-700 hover:text-text transition block"
                              onClick={closeDropdown}
                            >
                              Mission & Vision
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                          <Target className="w-5 h-5" />
                          Why Choose Us
                        </h4>
                        <ul className="space-y-2">
                          <li>
                            <Link
                              to="/about/why-choose-us"
                              className="text-gray-700 hover:text-text transition block"
                              onClick={closeDropdown}
                            >
                              Why Choose Us
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/about/success-stories"
                              className="text-gray-700 hover:text-text transition block"
                              onClick={closeDropdown}
                            >
                              Success Stories
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/about/testimonials"
                              className="text-gray-700 hover:text-text transition block"
                              onClick={closeDropdown}
                            >
                              Testimonials
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Desktop Dropdown - Services */}
          <AnimatePresence>
            {activeDropdown === "services" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="hidden lg:block absolute left-0 right-0 bg-white border-t border-gray-200 shadow-lg"
                onMouseEnter={() => handleMouseEnter("services")}
                onMouseLeave={handleMouseLeave}
              >
                <div className="max-w-7xl mx-auto px-6 py-8">
                  <div className="grid grid-cols-2 gap-8">
                    {/* Left Side - Featured */}
                    <div className="bg-background p-6 rounded-xl">
                      <div className="flex items-center gap-4">
                        <div className="bg-text p-3 rounded-lg flex-shrink-0">
                          <Briefcase className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-text mb-2">
                            Our Services
                          </h3>
                          <p className="text-text mb-4">
                            Comprehensive solutions to help you achieve your
                            academic and career goals abroad.
                          </p>
                          <Link to="/services" onClick={closeDropdown}>
                            <button className="text-text font-semibold hover:underline flex items-center gap-1">
                              View All Services →
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Right Side - Links */}
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                          <GraduationCap className="w-5 h-5" />
                          Counseling
                        </h4>
                        <ul className="space-y-2">
                          <li>
                            <Link
                              to="/services/career-counseling"
                              className="text-gray-700 hover:text-text transition block"
                              onClick={closeDropdown}
                            >
                              Career Counseling
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/services/university-selection"
                              className="text-gray-700 hover:text-text transition block"
                              onClick={closeDropdown}
                            >
                              University Selection
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/services/course-guidance"
                              className="text-gray-700 hover:text-text transition block"
                              onClick={closeDropdown}
                            >
                              Course Guidance
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                          <FileText className="w-5 h-5" />
                          Application Support
                        </h4>
                        <ul className="space-y-2">
                          <li>
                            <Link
                              to="/services/visa-assistance"
                              className="text-gray-700 hover:text-text transition block"
                              onClick={closeDropdown}
                            >
                              Visa Assistance
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/services/documentation"
                              className="text-gray-700 hover:text-text transition block"
                              onClick={closeDropdown}
                            >
                              Documentation Help
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/services/scholarship"
                              className="text-gray-700 hover:text-text transition block"
                              onClick={closeDropdown}
                            >
                              Scholarship Guidance
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Desktop Dropdown - Study */}
          <AnimatePresence>
            {activeDropdown === "study" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="hidden lg:block absolute left-0 right-0 bg-white border-t border-gray-200 shadow-lg"
                onMouseEnter={() => handleMouseEnter("study")}
                onMouseLeave={handleMouseLeave}
              >
                <div className="max-w-7xl mx-auto px-6 py-8">
                  <div className="grid grid-cols-2 gap-8">
                    {/* Left Side - Featured */}
                    <div className="bg-background p-6 rounded-xl">
                      <div className="flex items-center gap-4">
                        <div className="bg-text p-3 rounded-lg flex-shrink-0">
                          <BookOpen className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-text mb-2">
                            Start Your Future Abroad
                          </h3>
                          <p className="text-text mb-4">
                            Explore study opportunities in top destinations
                            worldwide with expert guidance.
                          </p>
                          <Link to="/study" onClick={closeDropdown}>
                            <button className="text-text font-semibold hover:underline flex items-center gap-1">
                              Learn More →
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Right Side - Links */}
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                          <BookOpen className="w-5 h-5" />
                          Study In
                        </h4>
                        <ul className="space-y-2">
                          <li>
                            <Link
                              to="/study/japan"
                              className="text-gray-700 hover:text-text transition block"
                              onClick={closeDropdown}
                            >
                              Study In Japan
                            </Link>
                          </li>

                          <li>
                            <Link
                              to="/study/australia"
                              className="text-gray-700 hover:text-text transition block"
                              onClick={closeDropdown}
                            >
                              Study in Australia
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/study/uk"
                              className="text-gray-700 hover:text-text transition block"
                              onClick={closeDropdown}
                            >
                              Study in United Kingdom
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/study/usa"
                              className="text-gray-700 hover:text-text transition block"
                              onClick={closeDropdown}
                            >
                              Study in USA
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/study/canada"
                              className="text-gray-700 hover:text-text transition block"
                              onClick={closeDropdown}
                            >
                              Study in Canada
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/study"
                              className="text-gray-700 hover:text-text transition block underline"
                              onClick={closeDropdown}
                            >
                              View All
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                          <Newspaper className="w-5 h-5" />
                          Test Preparation
                        </h4>
                        <ul className="space-y-2">
                          <li>
                            <Link
                              to="/study/ielts-pte"
                              className="text-gray-700 hover:text-text transition block"
                              onClick={closeDropdown}
                            >
                              IELTS/PTE
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/study/sat"
                              className="text-gray-700 hover:text-text transition block"
                              onClick={closeDropdown}
                            >
                              SAT
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/study/jlpt"
                              className="text-gray-700 hover:text-text transition block"
                              onClick={closeDropdown}
                            >
                              JLPT
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/study/interview-prep"
                              className="text-gray-700 hover:text-text transition block"
                              onClick={closeDropdown}
                            >
                              Interview Preparation
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/tests"
                              className="text-gray-700 hover:text-text transition block underline"
                              onClick={closeDropdown}
                            >
                              View All
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Desktop Dropdown - More */}
          <AnimatePresence>
            {activeDropdown === "more" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="hidden lg:block absolute left-0 right-0 bg-white border-t border-gray-200 shadow-lg"
                onMouseEnter={() => handleMouseEnter("more")}
                onMouseLeave={handleMouseLeave}
              >
                <div className="max-w-7xl mx-auto px-6 py-8">
                  <div className="grid grid-cols-2 gap-8">
                    {/* Left Side - Featured */}
                    <div className="bg-background p-6 rounded-xl">
                      <div className="flex items-center gap-4">
                        <div className="bg-text p-3 rounded-lg flex-shrink-0">
                          <Grid className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 mb-2">
                            Explore More
                          </h3>
                          <p className="text-gray-700 mb-4">
                            Discover additional resources, support, and
                            information to help you succeed.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Right Side - Links */}
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-gray-800 mb-4">
                          Resources
                        </h4>
                        <ul className="space-y-2">
                          <li>
                            <Link
                              to="/gallery"
                              className="text-gray-700 hover:text-text transition block"
                              onClick={closeDropdown}
                            >
                              Gallery
                            </Link>
                          </li>

                          <li>
                            <Link
                              to="/faq"
                              className="text-gray-700 hover:text-text transition block"
                              onClick={closeDropdown}
                            >
                              FAQ
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800 mb-4">
                          Support
                        </h4>
                        <ul className="space-y-2">
                          <li>
                            <Link
                              to="/contact"
                              className="text-gray-700 hover:text-text transition block"
                              onClick={closeDropdown}
                            >
                              Contact Support
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-gray-200 max-h-[calc(100vh-5rem)] overflow-y-auto"
            >
              <div className="px-6 py-4 space-y-2">
                <Link
                  to="/"
                  className="block text-gray-800 hover:text-text font-medium py-2"
                  onClick={closeDropdown}
                >
                  Home
                </Link>

                {/* About Accordion */}
                <div className="border-t pt-2">
                  <button
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === "about-mobile"
                          ? null
                          : "about-mobile"
                      )
                    }
                    className="flex items-center justify-between w-full text-gray-800 hover:text-text font-medium py-2"
                  >
                    About Us
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        activeDropdown === "about-mobile" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === "about-mobile" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 space-y-2 pt-2 pb-2">
                          <Link
                            to="/about"
                            className="block text-gray-700 hover:text-text py-1"
                            onClick={closeDropdown}
                          >
                            About Us
                          </Link>
                          <Link
                            to="/about/team"
                            className="block text-gray-700 hover:text-text py-1"
                            onClick={closeDropdown}
                          >
                            Our Team
                          </Link>
                          <Link
                            to="/about/vision"
                            className="block text-gray-700 hover:text-text py-1"
                            onClick={closeDropdown}
                          >
                            Mission & Vision
                          </Link>
                          <Link
                            to="/about/why-choose-us"
                            className="block text-gray-700 hover:text-text py-1"
                            onClick={closeDropdown}
                          >
                            Why Choose Us
                          </Link>
                          <Link
                            to="/about/success-stories"
                            className="block text-gray-700 hover:text-text py-1"
                            onClick={closeDropdown}
                          >
                            Success Stories
                          </Link>
                          <Link
                            to="/about/testimonials"
                            className="block text-gray-700 hover:text-text py-1"
                            onClick={closeDropdown}
                          >
                            Testimonials
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Study Abroad Accordion */}
                <div className="border-t pt-2">
                  <button
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === "study-mobile"
                          ? null
                          : "study-mobile"
                      )
                    }
                    className="flex items-center justify-between w-full text-gray-800 hover:text-text font-medium py-2"
                  >
                    Study Abroad
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        activeDropdown === "study-mobile" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === "study-mobile" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 space-y-2 pt-2 pb-2">
                          <Link
                            to="/study"
                            className="block text-gray-700 hover:text-text py-1 font-medium"
                            onClick={closeDropdown}
                          >
                            Study Abroad Overview
                          </Link>
                          <Link
                            to="/study/japan"
                            className="block text-gray-700 hover:text-text py-1"
                            onClick={closeDropdown}
                          >
                            Study in Japan
                          </Link>

                          <Link
                            to="/study/australia"
                            className="block text-gray-700 hover:text-text py-1"
                            onClick={closeDropdown}
                          >
                            Study in Australia
                          </Link>
                          <Link
                            to="/study/uk"
                            className="block text-gray-700 hover:text-text py-1"
                            onClick={closeDropdown}
                          >
                            Study in UK
                          </Link>
                          <Link
                            to="/study/usa"
                            className="block text-gray-700 hover:text-text py-1"
                            onClick={closeDropdown}
                          >
                            Study in USA
                          </Link>
                          <Link
                            to="/study/canada"
                            className="block text-gray-700 hover:text-text py-1"
                            onClick={closeDropdown}
                          >
                            Study in Canada
                          </Link>
                          <Link
                            to="/study/ielts-pte"
                            className="block text-gray-700 hover:text-text py-1"
                            onClick={closeDropdown}
                          >
                            IELTS/PTE
                          </Link>
                          <Link
                            to="/study/sat"
                            className="block text-gray-700 hover:text-text py-1"
                            onClick={closeDropdown}
                          >
                            SAT
                          </Link>
                          <Link
                            to="/study/jlpt"
                            className="block text-gray-700 hover:text-text py-1"
                            onClick={closeDropdown}
                          >
                            JLPT
                          </Link>
                          <Link
                            to="/study/interview-prep"
                            className="block text-gray-700 hover:text-text py-1"
                            onClick={closeDropdown}
                          >
                            Interview Preparation
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* More Accordion */}
                <div className="border-t pt-2">
                  <button
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === "more-mobile" ? null : "more-mobile"
                      )
                    }
                    className="flex items-center justify-between w-full text-gray-800 hover:text-text font-medium py-2"
                  >
                    More
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        activeDropdown === "more-mobile" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === "more-mobile" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 space-y-2 pt-2 pb-2">
                          <Link
                            to="/gallery"
                            className="block text-gray-700 hover:text-text py-1"
                            onClick={closeDropdown}
                          >
                            Gallery
                          </Link>
                          <Link
                            to="/faq"
                            className="block text-gray-700 hover:text-text py-1"
                            onClick={closeDropdown}
                          >
                            FAQ
                          </Link>
                          <Link
                            to="/contact"
                            className="block text-gray-700 hover:text-text py-1"
                            onClick={closeDropdown}
                          >
                            Contact Support
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link to="/contact" onClick={closeDropdown}>
                  <button className="w-full bg-text text-white px-6 py-3 rounded-lg transition font-medium mt-4">
                    Contact Us
                  </button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Overlay to close dropdown when clicking outside */}
      <AnimatePresence>
        {activeDropdown && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/20"
            onClick={closeDropdown}
          />
        )}
      </AnimatePresence>
    </>
  );
}
