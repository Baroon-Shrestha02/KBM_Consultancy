import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  X,
  BookOpen,
  Grid,
  Code,
  Users,
  Newspaper,
  Building2,
  Target,
  MessageCircle,
} from "lucide-react";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="w-full  bg-white text-primary px-6 ">
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
                className=" font-medium transition"
                onClick={closeDropdown}
              >
                Home
              </Link>

              {/* About Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("about")}
                  className="flex items-center gap-1 font-medium transition"
                >
                  About Us
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      activeDropdown === "about" ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              <Link
                to="/services"
                className="font-medium transition"
                onClick={closeDropdown}
              >
                Services
              </Link>

              {/* Study Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("study")}
                  className="flex items-center gap-1 font-medium transition"
                >
                  Study Abroad
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      activeDropdown === "study" ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {/* More Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("more")}
                  className="flex items-center gap-1 font-medium transition"
                >
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
                <button className="bg-primary text-white px-6 py-2.5 rounded-lg transition font-medium">
                  Contact Us
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-[#1a5f3f] p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Grid size={24} />}
            </button>
          </div>

          {/* Desktop Dropdown - About */}
          {activeDropdown === "about" && (
            <div className="hidden lg:block absolute left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
              <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="grid grid-cols-2 gap-8">
                  {/* Left Side - Featured */}
                  <div className="bg-gradient-to-br from-[#c8e6a0] to-[#a8d680] p-6 rounded-xl">
                    <div className="flex items-center gap-4">
                      <div className="bg-[#1a5f3f] p-3 rounded-lg flex-shrink-0">
                        <Building2 className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#1a5f3f] mb-2">
                          About KBM
                        </h3>
                        <p className="text-[#2a5f4f] mb-4">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Consectetur nemo consequatur nesciunt in dicta
                          labore?
                        </p>
                        <Link to="/about" onClick={closeDropdown}>
                          <button className="text-[#1a5f3f] font-semibold hover:underline flex items-center gap-1">
                            Learn More →
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Links */}
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-[#1a5f3f] mb-4 flex items-center gap-2">
                        <Building2 className="w-5 h-5" />
                        Company
                      </h4>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            to="/about"
                            className="text-gray-700 hover:text-[#1a5f3f] transition block"
                            onClick={closeDropdown}
                          >
                            About Us
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/about/team"
                            className="text-gray-700 hover:text-[#1a5f3f] transition block"
                            onClick={closeDropdown}
                          >
                            Our Team
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/about/vision"
                            className="text-gray-700 hover:text-[#1a5f3f] transition block"
                            onClick={closeDropdown}
                          >
                            Mission & Vision
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/about/history"
                            className="text-gray-700 hover:text-[#1a5f3f] transition block"
                            onClick={closeDropdown}
                          >
                            Our History
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-[#1a5f3f] mb-4 flex items-center gap-2">
                        <Target className="w-5 h-5" />
                        Why Choose Us
                      </h4>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            to="/about/why-choose-us"
                            className="text-gray-700 hover:text-[#1a5f3f] transition block"
                            onClick={closeDropdown}
                          >
                            Why Choose Us
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/about/success-stories"
                            className="text-gray-700 hover:text-[#1a5f3f] transition block"
                            onClick={closeDropdown}
                          >
                            Success Stories
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/about/testimonials"
                            className="text-gray-700 hover:text-[#1a5f3f] transition block"
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
            </div>
          )}

          {/* Desktop Dropdown - Study */}
          {activeDropdown === "study" && (
            <div className="hidden lg:block absolute left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
              <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="grid grid-cols-2 gap-8">
                  {/* Left Side - Featured */}
                  <div className="bg-gradient-to-br from-[#c8e6a0] to-[#a8d680] p-6 rounded-xl">
                    <div className="flex items-center  gap-4">
                      <div className="bg-[#1a5f3f] p-3 rounded-lg flex-shrink-0">
                        <BookOpen className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#1a5f3f] mb-2">
                          Start Your Future In Abroad
                        </h3>
                        <p className="text-[#2a5f4f] mb-4">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Temporibus exercitationem recusandae voluptatem
                        </p>
                        <Link to="/study" onClick={closeDropdown}>
                          <button className="text-[#1a5f3f] font-semibold hover:underline flex items-center gap-1">
                            Learn More →
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Links */}
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-[#1a5f3f] mb-4 flex items-center gap-2">
                        <BookOpen className="w-5 h-5" />
                        Study In
                      </h4>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            to="/study/japan"
                            className="text-gray-700 hover:text-[#1a5f3f] transition block"
                            onClick={closeDropdown}
                          >
                            Study In Japan
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/study/korea"
                            className="text-gray-700 hover:text-[#1a5f3f] transition block"
                            onClick={closeDropdown}
                          >
                            Study in Korea
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/study/australia"
                            className="text-gray-700 hover:text-[#1a5f3f] transition block"
                            onClick={closeDropdown}
                          >
                            Study in Australia
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/study/uk"
                            className="text-gray-700 hover:text-[#1a5f3f] transition block"
                            onClick={closeDropdown}
                          >
                            Study in United Kingdom
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/study/usa"
                            className="text-gray-700 hover:text-[#1a5f3f] transition block"
                            onClick={closeDropdown}
                          >
                            Study in USA
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/study/canada"
                            className="text-gray-700 hover:text-[#1a5f3f] transition block"
                            onClick={closeDropdown}
                          >
                            Study in Canada
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-[#1a5f3f] mb-4 flex items-center gap-2">
                        <Newspaper className="w-5 h-5" />
                        Test preperation
                      </h4>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            to="/study/ielts-pte"
                            className="text-gray-700 hover:text-[#1a5f3f] transition block"
                            onClick={closeDropdown}
                          >
                            IELTS/PTE
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/study/sat"
                            className="text-gray-700 hover:text-[#1a5f3f] transition block"
                            onClick={closeDropdown}
                          >
                            SAT
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/study/jlpt"
                            className="text-gray-700 hover:text-[#1a5f3f] transition block"
                            onClick={closeDropdown}
                          >
                            JLPT
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/study/interview-prep"
                            className="text-gray-700 hover:text-[#1a5f3f] transition block"
                            onClick={closeDropdown}
                          >
                            Interview Preparation
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Desktop Dropdown - More */}
          {activeDropdown === "more" && (
            <div className="hidden lg:block absolute left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
              <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="grid grid-cols-2 gap-8">
                  {/* Left Side - Featured */}
                  <div className="bg-gradient-to-br from-[#c8e6a0] to-[#a8d680] p-6 rounded-xl">
                    <div className="flex items-center gap-4">
                      <div className="bg-[#1a5f3f] p-3 rounded-lg flex-shrink-0">
                        <Grid className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#1a5f3f] mb-2">
                          Explore more
                        </h3>
                        <p className="text-[#2a5f4f] mb-4">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Nihil, odio? Autem itaque ratione nesciunt!
                          Voluptatibus?
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Links */}
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-[#1a5f3f] mb-4">Company</h4>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            to="/about"
                            className="text-gray-700 hover:text-[#1a5f3f] transition block"
                            onClick={closeDropdown}
                          >
                            About Us
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/careers"
                            className="text-gray-700 hover:text-[#1a5f3f] transition block"
                            onClick={closeDropdown}
                          >
                            Careers
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/blog"
                            className="text-gray-700 hover:text-[#1a5f3f] transition block"
                            onClick={closeDropdown}
                          >
                            Blog
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/press"
                            className="text-gray-700 hover:text-[#1a5f3f] transition block"
                            onClick={closeDropdown}
                          >
                            Press Kit
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-[#1a5f3f] mb-4">Support</h4>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            to="/help"
                            className="text-gray-700 hover:text-[#1a5f3f] transition block"
                            onClick={closeDropdown}
                          >
                            Help Center
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/faq"
                            className="text-gray-700 hover:text-[#1a5f3f] transition block"
                            onClick={closeDropdown}
                          >
                            FAQ
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/contact"
                            className="text-gray-700 hover:text-[#1a5f3f] transition block"
                            onClick={closeDropdown}
                          >
                            Contact Support
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/terms"
                            className="text-gray-700 hover:text-[#1a5f3f] transition block"
                            onClick={closeDropdown}
                          >
                            Terms of Service
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 max-h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="px-6 py-4 space-y-4">
              <Link
                to="/"
                className="block text-[#1a5f3f] hover:text-[#2a7f5f] font-medium py-2"
                onClick={closeDropdown}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block text-[#1a5f3f] hover:text-[#2a7f5f] font-medium py-2"
                onClick={closeDropdown}
              >
                About Us
              </Link>
              <Link
                to="/services"
                className="block text-[#1a5f3f] hover:text-[#2a7f5f] font-medium py-2"
                onClick={closeDropdown}
              >
                Services
              </Link>

              {/* Study Section */}
              <div className="border-t pt-4">
                <h4 className="font-bold text-[#1a5f3f] mb-3">Study</h4>
                <div className="space-y-2 pl-4">
                  <Link
                    to="/study/japan"
                    className="block text-gray-700 hover:text-[#1a5f3f] py-1"
                    onClick={closeDropdown}
                  >
                    Study in Japan
                  </Link>
                  <Link
                    to="/study/korea"
                    className="block text-gray-700 hover:text-[#1a5f3f] py-1"
                    onClick={closeDropdown}
                  >
                    Study in Korea
                  </Link>
                  <Link
                    to="/study/australia"
                    className="block text-gray-700 hover:text-[#1a5f3f] py-1"
                    onClick={closeDropdown}
                  >
                    Study in Australia
                  </Link>
                  <Link
                    to="/study/uk"
                    className="block text-gray-700 hover:text-[#1a5f3f] py-1"
                    onClick={closeDropdown}
                  >
                    Study in UK
                  </Link>
                </div>
              </div>

              {/* More Section */}
              <div className="border-t pt-4">
                <h4 className="font-bold text-[#1a5f3f] mb-3">More</h4>
                <div className="space-y-2 pl-4">
                  <Link
                    to="/blog"
                    className="block text-gray-700 hover:text-[#1a5f3f] py-1"
                    onClick={closeDropdown}
                  >
                    Blog
                  </Link>
                  <Link
                    to="/careers"
                    className="block text-gray-700 hover:text-[#1a5f3f] py-1"
                    onClick={closeDropdown}
                  >
                    Careers
                  </Link>
                  <Link
                    to="/help"
                    className="block text-gray-700 hover:text-[#1a5f3f] py-1"
                    onClick={closeDropdown}
                  >
                    Help Center
                  </Link>
                  <Link
                    to="/faq"
                    className="block text-gray-700 hover:text-[#1a5f3f] py-1"
                    onClick={closeDropdown}
                  >
                    FAQ
                  </Link>
                </div>
              </div>

              <Link to="/contact" onClick={closeDropdown}>
                <button className="w-full bg-primary text-white px-6 py-3 rounded-lg transition font-medium mt-4">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Overlay to close dropdown when clicking outside */}
      {activeDropdown && (
        <div
          className="fixed inset-0 z-40 bg-black/70 bg-opacity-20"
          onClick={closeDropdown}
        />
      )}

      {/* Spacer for fixed navbar */}
      <div className="h-20" />
    </>
  );
}
