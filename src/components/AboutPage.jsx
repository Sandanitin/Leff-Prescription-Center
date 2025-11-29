import React from 'react';
import heroBg from '../assets/hero-bg.png';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">About Leff Prescription Center</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Your trusted community pharmacy serving the Bronx neighborhood for many years.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
        <h2 className="text-3xl font-bold text-blue-800 mb-6">Our Story</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Located in the heart of the Bronx at 70 East 161st Street, LEFF PRESCRIPTION CENTER has been a cornerstone of community healthcare for many years. As a family-owned pharmacy, we take pride in providing personalized care that goes beyond just filling prescriptions.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We believe that healthcare should be accessible, affordable, and delivered with compassion. Our commitment to the Bronx community drives everything we do.
            </p>
          </div>
          <div className="flex justify-center">
            <img 
              src={heroBg} 
              alt="Leff Prescription Center - Serving the Bronx Community" 
              className="rounded-xl shadow-md max-w-full h-auto"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-blue-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-blue-800 mb-4">Our Mission</h3>
          <p className="text-gray-700 leading-relaxed">
            To provide exceptional pharmaceutical care with a personal touch, ensuring every member of our community receives the attention, respect, and quality service they deserve.
          </p>
        </div>
        
        <div className="bg-green-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-green-800 mb-4">Our Values</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Community-Focused Care</li>
            <li>Personal Relationships</li>
            <li>Fast, Reliable Service</li>
            <li>Affordable Healthcare</li>
            <li>Cultural Sensitivity</li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-blue-800 mb-6">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Family-Owned", desc: "Owned and operated by people who live in and love this community" },
            { title: "Personalized Care", desc: "We know our customers by name, not by prescription number" },
            { title: "Fast Service", desc: "Most prescriptions ready in 10-15 minutes" },
            { title: "Multilingual Staff", desc: "Clear communication in your preferred language" },
            { title: "Free Delivery", desc: "No-cost delivery service available" },
            { title: "Insurance Expertise", desc: "We maximize your insurance benefits" }
          ].map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-lg text-blue-700 mb-2">{item.title}</h4>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;