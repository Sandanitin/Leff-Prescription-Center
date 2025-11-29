import React from 'react';
import { 
  FaPrescription, FaSyringe, FaHeartbeat, FaTruck, 
  FaLanguage, FaCheckCircle, FaHospital, FaHome,
  FaPills, FaStethoscope, FaMoneyBillWave, FaCreditCard
} from 'react-icons/fa';
import { MdVaccines, MdLocalPharmacy, MdBloodtype } from 'react-icons/md';

const ServicesPage = () => {
  const services = [
    {
      category: "Prescription Services",
      icon: <MdLocalPharmacy className="text-3xl" />,
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
      items: [
        "Fast Prescription Filling (10-15 minutes)",
        "Prescription Transfers",
        "Automatic Refill Program",
        "Medication Synchronization",
        "Blister Packaging & Pill Organizers"
      ]
    },
    {
      category: "Clinical & Health Services",
      icon: <FaStethoscope className="text-3xl" />,
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
      items: [
        "Immunizations & Vaccinations",
        "Health Screenings (BP, Diabetes)",
        "Free Medication Consultations",
        "Blood Glucose Testing",
        "Medication Therapy Management"
      ]
    },
    {
      category: "Convenience Services",
      icon: <FaHome className="text-3xl" />,
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
      items: [
        "LOTTO",
        "UPS Drop-off",
        "Email Printing",
        "FAX Services",
        "Passport Pictures",
        "ATM Available",
        "DMV Vision Testing"
      ]
    },
    {
      category: "More Services",
      icon: <FaLanguage className="text-3xl" />,
      bgColor: "bg-indigo-100",
      iconColor: "text-indigo-600",
      items: [
        "Spanish Products",
        "Household Products",
        "Multilingual Staff",
        "Walk-ins Welcome",
        "Senior-Friendly Services"
      ]
    },
    {
      category: "Insurance & Payment Services",
      icon: <FaCreditCard className="text-3xl" />,
      bgColor: "bg-teal-100",
      iconColor: "text-teal-600",
      items: [
        "We Accept OTC",
        "Medicaid & Medicare Accepted",
        "Most Private Insurance Carriers",
        "Competitive Pricing",
        "Discount Programs"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">Our Comprehensive Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          More than just a pharmacy - your complete health & convenience center
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Service Guarantees</h2>
          <div className="space-y-4">
            {[
              "Fast Service - Most prescriptions ready in 15 minutes or less",
              "Quality Care - Licensed pharmacists review every prescription",
              "Competitive Pricing - We match or beat local prices",
              "Free Delivery - No-cost delivery service available",
              "Insurance Expertise - We maximize your insurance benefits",
              "Personal Attention - We know our customers by name"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl shadow-lg p-8 text-white">
          <h2 className="text-3xl font-bold mb-6">How to Use Our Services</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-2">New Prescription Process</h3>
              <ol className="list-decimal pl-5 space-y-1 text-blue-100">
                <li>Bring your prescription from your doctor</li>
                <li>Provide insurance information (if applicable)</li>
                <li>Wait 10-15 minutes while we fill your prescription</li>
                <li>Receive counseling from our pharmacist</li>
                <li>Take your medication or arrange for delivery</li>
              </ol>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-2">Transfer Process</h3>
              <ol className="list-decimal pl-5 space-y-1 text-blue-100">
                <li>Call us at 718-665-1163 with your current pharmacy information</li>
                <li>Provide prescription details and insurance information</li>
                <li>We handle the transfer paperwork and communication</li>
                <li>Pick up your prescription or arrange delivery</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className={`${service.bgColor} ${service.iconColor} p-6 flex items-center gap-4`}>
              <div className="bg-white p-3 rounded-xl">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold">{service.category}</h3>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <span className={`w-2 h-2 rounded-full ${service.iconColor} mt-2 flex-shrink-0`}></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-2xl p-8 mt-12 text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">Questions About Our Services?</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Our friendly staff is here to help you with any questions about our services or to assist you with your pharmacy needs.
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

export default ServicesPage;