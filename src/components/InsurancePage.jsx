import React from 'react';
import { FaCreditCard, FaCheckCircle, FaMedkit, FaPercent, FaUserMd } from 'react-icons/fa';

const InsurancePage = () => {
  const insurancePlans = [
    {
      category: "Government Insurance Programs",
      plans: [
        "Medicaid (NY State Medicaid)",
        "Medicare Part D (All major plans)",
        "Medicare Advantage Plans",
        "EPIC (Elderly Pharmaceutical Insurance Coverage)",
        "Family Health Plus",
        "Child Health Plus"
      ]
    },
    {
      category: "Private Insurance Plans",
      plans: [
        "Aetna",
        "Blue Cross Blue Shield (Empire BCBS)",
        "Cigna",
        "UnitedHealthcare",
        "Oxford Health Plans",
        "HIP Health Plan",
        "EmblemHealth",
        "Healthfirst",
        "VNS Health"
      ]
    },
    {
      category: "Special Programs",
      plans: [
        "Workers' Compensation",
        "No-Fault Insurance",
        "Disability Insurance"
      ]
    }
  ];

  const savingsPrograms = [
    {
      title: "Pharmacy Discount Card",
      description: "Free to join - Instant savings on most prescriptions",
      icon: <FaPercent className="text-2xl" />
    },
    {
      title: "Generic Savings Program",
      description: "Up to 80% savings on generic medications",
      icon: <FaMedkit className="text-2xl" />
    },
    {
      title: "Manufacturer Coupons",
      description: "We accept manufacturer coupons and co-pay cards",
      icon: <FaCreditCard className="text-2xl" />
    },
    {
      title: "Senior Discount Program",
      description: "Additional 10% off for customers 65+",
      icon: <FaUserMd className="text-2xl" />
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">Insurance & Savings</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Making your medications affordable with comprehensive insurance coverage and savings programs
        </p>
      </div>

      <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl shadow-lg p-8 text-white mb-12">
        <h2 className="text-3xl font-bold mb-4">We Accept Most Insurance Plans</h2>
        <p className="text-xl mb-6">
          Our experienced staff can help you navigate your insurance benefits and maximize your coverage.
        </p>
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
          <h3 className="text-2xl font-bold mb-4">Don't See Your Plan Listed?</h3>
          <p className="mb-4">
            We work with many additional plans and can verify your coverage!
          </p>
          <a 
            href="tel:7186651163" 
            className="inline-block bg-white text-blue-700 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Call us at 718-665-1163
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {insurancePlans.map((category, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-blue-800 mb-6">{category.category}</h3>
            <ul className="space-y-3">
              {category.plans.map((plan, planIndex) => (
                <li key={planIndex} className="flex items-center gap-3">
                  <FaCheckCircle className="text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{plan}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-2xl p-8 mb-12">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">Savings & Discount Programs</h2>
        <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
          We offer multiple ways to save on your medications, regardless of insurance status.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {savingsPrograms.map((program, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                {program.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{program.title}</h3>
              <p className="text-gray-600">{program.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Insurance Services</h2>
          <div className="space-y-4">
            {[
              "Prior Authorization Assistance - We handle the paperwork",
              "Claims Processing - Electronic claims submission for faster processing",
              "Coverage Determination - Benefit verification before filling prescriptions",
              "Claims Appeals - Assistance when coverage is denied"
            ].map((service, index) => (
              <div key={index} className="flex items-start gap-3">
                <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{service}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Maximizing Your Savings</h2>
          <div className="space-y-4">
            {[
              "Price Matching - We'll find you the lowest cost",
              "Generic Substitution - FDA-approved alternatives when available",
              "90-Day Supply Savings - Reduced copays for longer supply",
              "Savings Guarantee - We promise to help you find the lowest possible price"
            ].map((tip, index) => (
              <div key={index} className="flex items-start gap-3">
                <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{tip}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-blue-50 rounded-2xl p-8 mt-12 text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">Get Insurance Help Today</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Our insurance specialists are here to help you navigate coverage options and maximize your benefits.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="tel:7186651163" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
            Call Us: 718-665-1163
          </a>
          <a href="mailto:leffdrugs9@gmail.com" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
            Email: leffdrugs9@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default InsurancePage;