import React from 'react';
import { motion } from 'framer-motion';
import {
  FaMapMarkerAlt, FaPhone, FaFax, FaEnvelope,
  FaClock, FaPrescriptionBottleAlt, FaSyringe,
  FaTruck, FaUserMd, FaNotesMedical, FaPills,
  FaMoneyBillWave, FaLanguage, FaWheelchair,
  FaFilePrescription, FaBoxOpen, FaSearch, FaStethoscope, FaTablets
} from 'react-icons/fa';
import { MdLocalPharmacy, MdHealthAndSafety, MdVaccines, MdBloodtype } from 'react-icons/md';
import VaccinationForm from './VaccinationForm';
import RefillForm from './RefillForm';
import heroBg from '../assets/hero-bg.png';

const HomePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="Pharmacy Interior" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-800/85 to-blue-900/90 mix-blend-multiply" />
        </div>

        <div className="container relative z-10 px-4 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight drop-shadow-lg">
              LEFF PRESCRIPTION CENTER
            </h1>
            <p className="text-xl md:text-2xl font-medium text-yellow-400 mb-4 drop-shadow-md">
              Your Bronx Home-Team Pharmacy: Champions in Patient Care.
            </p>
            <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl mx-auto font-light">
              Right by the Stadium. Right for Your Health.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Leff Pharmacy?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fast, friendly, and reliable service with a personal touch that you can trust.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: FaClock, title: "Fast Service", desc: "Most prescriptions ready in 10-15 minutes. Walk-ins welcome!", color: "text-blue-600" },
              { icon: FaTruck, title: "Free Delivery", desc: "Complimentary home delivery every day for your convenience", color: "text-green-600" },
              { icon: FaNotesMedical, title: "Insurance Accepted", desc: "We accept Medicaid, Medicare Part D, and most private insurances", color: "text-purple-600" },
              { icon: FaUserMd, title: "Expert Counseling", desc: "Free medication consultations by licensed pharmacists", color: "text-indigo-600" },
              { icon: FaSyringe, title: "Immunizations", desc: "Flu, COVID-19, RSV, Shingles, Pneumonia vaccines available", color: "text-red-500" },
              { icon: FaFilePrescription, title: "Easy Transfers", desc: "Hassle-free prescription transfers from any pharmacy", color: "text-orange-500" },
              { icon: MdHealthAndSafety, title: "Community Focused", desc: "Family-owned pharmacy serving the neighborhood for many years", color: "text-teal-600" },
              { icon: FaMoneyBillWave, title: "Competitive Pricing", desc: "Lowest possible copays with discount programs available", color: "text-emerald-600" },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className={`w-14 h-14 rounded-full bg-gray-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${item.color.replace('text-', 'bg-').replace('600', '100').replace('500', '100')}`}>
                  <item.icon className={`text-3xl ${item.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Comprehensive Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">
              More than just a pharmacy - your complete health & convenience center
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Clinical Services */}
            <div className="bg-blue-50 rounded-3xl p-8 border border-blue-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-600 p-3 rounded-xl text-white">
                  <MdVaccines className="text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900">Clinical Services</h3>
              </div>
              <ul className="space-y-3">
                {['Immunizations', 'COVID-19 Vaccines', 'Flu Shots', 'RSV Vaccines', 'Shingles Vaccines', 'Pneumonia Vaccines'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pharmacy Services */}
            <div className="bg-green-50 rounded-3xl p-8 border border-green-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-green-600 p-3 rounded-xl text-white">
                  <MdLocalPharmacy className="text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-green-900">Pharmacy Services</h3>
              </div>
              <ul className="space-y-3">
                {['Fast Prescription Filling', 'Free Home Delivery', 'Prescription Transfers', 'Medication Synchronization', 'Automatic Refill Reminders', 'Blister Packaging'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Health Services */}
            <div className="bg-purple-50 rounded-3xl p-8 border border-purple-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-purple-600 p-3 rounded-xl text-white">
                  <MdBloodtype className="text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-purple-900">Health Services</h3>
              </div>
              <ul className="space-y-3">
                {['Blood Pressure Checks', 'Diabetes Counseling', 'Glucose Monitoring', 'DMV Vision Testing', 'Free Medication Consultations'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Convenience Services */}
            <div className="bg-orange-50 rounded-3xl p-8 border border-orange-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-orange-500 p-3 rounded-xl text-white">
                  <FaBoxOpen className="text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-orange-900">Convenience</h3>
              </div>
              <ul className="space-y-3">
                {['LOTTO', 'UPS Drop-off', 'Email Printing', 'FAX Services', 'Passport Pictures', 'ATM Available', 'DMV Vision Testing'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Insurance & Payments */}
            <div className="bg-teal-50 rounded-3xl p-8 border border-teal-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-teal-600 p-3 rounded-xl text-white">
                  <FaMoneyBillWave className="text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-teal-900">Insurance</h3>
              </div>
              <ul className="space-y-3">
                {['We Accept OTC', 'Medicaid Accepted', 'Medicare Part D', 'Most Private Insurance', 'Discount Programs'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <span className="w-2 h-2 bg-teal-400 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Additional Services */}
            <div className="bg-indigo-50 rounded-3xl p-8 border border-indigo-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-indigo-600 p-3 rounded-xl text-white">
                  <FaLanguage className="text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-indigo-900">More</h3>
              </div>
              <ul className="space-y-3">
                {['Spanish Products', 'Household Products', 'Walk-ins Welcome', 'Multilingual Staff', 'Senior-Friendly Services'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Forms Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Online Services</h2>
            <p className="text-xl text-gray-600">
              Schedule appointments and request refills from the comfort of your home
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200 transition-transform hover:scale-[1.02]">
              <div className="bg-blue-600 p-6 text-white text-center">
                <h3 className="text-2xl font-bold flex items-center justify-center gap-3">
                  <FaSyringe /> Vaccination Appointment
                </h3>
              </div>
              <div className="p-6">
                <VaccinationForm />
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200 transition-transform hover:scale-[1.02]">
              <div className="bg-green-600 p-6 text-white text-center">
                <h3 className="text-2xl font-bold flex items-center justify-center gap-3">
                  <FaPrescriptionBottleAlt /> Prescription Refill
                </h3>
              </div>
              <div className="p-6">
                <RefillForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Links */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Quick Medical Resources</h2>
            <p className="text-xl text-blue-200">
              Access important drug and health information instantly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <a href="https://www.epocrates.com/online/drugs" target="_blank" rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all hover:-translate-y-2 group">
              <FaSearch className="text-4xl text-yellow-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-4">Search Drugs</h3>
              <p className="text-blue-100 mb-6">Find detailed information about any medication including dosage, interactions, and side effects</p>
              <span className="inline-flex items-center text-yellow-400 font-bold group-hover:translate-x-2 transition-transform">
                Search Medications →
              </span>
            </a>

            <a href="https://www.epocrates.com/online/diseases" target="_blank" rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all hover:-translate-y-2 group">
              <FaStethoscope className="text-4xl text-yellow-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-4">Search Diseases</h3>
              <p className="text-blue-100 mb-6">Learn about medical conditions, symptoms, treatments, and management strategies</p>
              <span className="inline-flex items-center text-yellow-400 font-bold group-hover:translate-x-2 transition-transform">
                Explore Conditions →
              </span>
            </a>

            <a href="https://www.drugs.com/imprints.php" target="_blank" rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all hover:-translate-y-2 group">
              <FaTablets className="text-4xl text-yellow-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-4">Pill Identification</h3>
              <p className="text-blue-100 mb-6">Identify unknown pills by imprint, shape, color, or other physical characteristics</p>
              <span className="inline-flex items-center text-yellow-400 font-bold group-hover:translate-x-2 transition-transform">
                Identify Pills →
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;