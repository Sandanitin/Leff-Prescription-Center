import React, { useState } from 'react';
import SingleFormButton from './SingleFormButton';

const VaccinationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    datePreference: '',
    timePreference: '',
    vaccineType: '',
    insuranceProvider: '',
    insuranceId: '',
    additionalNotes: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\d\s\-\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Phone number is invalid';
    }
    
    if (!formData.datePreference) {
      newErrors.datePreference = 'Preferred date is required';
    }
    
    if (!formData.timePreference) {
      newErrors.timePreference = 'Preferred time is required';
    }
    
    if (!formData.vaccineType) {
      newErrors.vaccineType = 'Vaccine type is required';
    }
    
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Vaccination Form Submitted:', formData);
      setSubmitted(true);
      setIsSubmitting(false);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          datePreference: '',
          timePreference: '',
          vaccineType: '',
          insuranceProvider: '',
          insuranceId: '',
          additionalNotes: ''
        });
      }, 3000);
    }, 1000);
  };

  const shareViaWhatsApp = () => {
    // Create a formatted message with form data
    const message = `*Vaccination Appointment Request*

*Full Name:* ${formData.fullName || 'N/A'}
*Phone:* ${formData.phone || 'N/A'}
*Email:* ${formData.email || 'N/A'}
*Vaccine Type:* ${formData.vaccineType || 'N/A'}
*Preferred Date:* ${formData.datePreference || 'N/A'}
*Preferred Time:* ${formData.timePreference || 'N/A'}
*Insurance Provider:* ${formData.insuranceProvider || 'N/A'}
*Insurance ID:* ${formData.insuranceId || 'N/A'}
*Additional Notes:* ${formData.additionalNotes || 'N/A'}`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create WhatsApp URL using the pharmacy's phone number (718-665-1163)
    // Note: WhatsApp requires phone numbers in international format without dashes or parentheses
    const whatsappUrl = `https://wa.me/17186651163?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="form-container bg-blue-50 rounded-lg p-2 w-full" id="vaccination-form">
      <div className="mb-2">
        <h2 className="text-base font-bold text-blue-800 mb-1">Schedule Your Vaccination</h2>
        <p className="text-gray-600 text-xs">Book your immunization appointment</p>
      </div>
      
      {submitted && (
        <div className="bg-green-100 border border-green-200 text-green-800 px-2 py-1 rounded-sm mb-2 flex items-center gap-1">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
          <span className="text-xs">Appointment submitted!</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-1.5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
          <div className="flex flex-col gap-0.5">
            <label htmlFor="vax-fullName" className="text-xs font-semibold text-gray-700">Full Name *</label>
            <input
              type="text"
              id="vax-fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
              className={`w-full px-1.5 py-1 rounded border text-xs focus:border-blue-500 focus:ring-1 focus:ring-blue-200 outline-none transition-all ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.fullName && <span className="text-red-500 text-xs mt-0.5">{errors.fullName}</span>}
          </div>

          <div className="flex flex-col gap-0.5">
            <label htmlFor="vax-phone" className="text-xs font-semibold text-gray-700">Phone Number *</label>
            <input
              type="tel"
              id="vax-phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Your phone number"
              className={`w-full px-1.5 py-1 rounded border text-xs focus:border-blue-500 focus:ring-1 focus:ring-blue-200 outline-none transition-all ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.phone && <span className="text-red-500 text-xs mt-0.5">{errors.phone}</span>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
          <div className="flex flex-col gap-0.5">
            <label htmlFor="vax-email" className="text-xs font-semibold text-gray-700">Email Address *</label>
            <input
              type="email"
              id="vax-email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
              className={`w-full px-1.5 py-1 rounded border text-xs focus:border-blue-500 focus:ring-1 focus:ring-blue-200 outline-none transition-all ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.email && <span className="text-red-500 text-xs mt-0.5">{errors.email}</span>}
          </div>

          <div className="flex flex-col gap-0.5">
            <label htmlFor="vax-vaccineType" className="text-xs font-semibold text-gray-700">Vaccine Type *</label>
            <select
              id="vax-vaccineType"
              name="vaccineType"
              value={formData.vaccineType}
              onChange={handleChange}
              required
              className={`w-full px-1.5 py-1 rounded border text-xs focus:border-blue-500 focus:ring-1 focus:ring-blue-200 outline-none transition-all ${errors.vaccineType ? 'border-red-500' : 'border-gray-300'}`}
            >
              <option value="">Select vaccine type</option>
              <option value="flu">Flu Shot</option>
              <option value="covid19">COVID-19</option>
              <option value="rsv">RSV</option>
              <option value="shingles">Shingles</option>
              <option value="pneumonia">Pneumonia</option>
              <option value="tdap">Tdap</option>
              <option value="other">Other</option>
            </select>
            {errors.vaccineType && <span className="text-red-500 text-xs mt-0.5">{errors.vaccineType}</span>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
          <div className="flex flex-col gap-0.5">
            <label htmlFor="vax-datePreference" className="text-xs font-semibold text-gray-700">Preferred Date *</label>
            <input
              type="date"
              id="vax-datePreference"
              name="datePreference"
              value={formData.datePreference}
              onChange={handleChange}
              required
              className={`w-full px-1.5 py-1 rounded border text-xs focus:border-blue-500 focus:ring-1 focus:ring-blue-200 outline-none transition-all ${errors.datePreference ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.datePreference && <span className="text-red-500 text-xs mt-0.5">{errors.datePreference}</span>}
          </div>

          <div className="flex flex-col gap-0.5">
            <label htmlFor="vax-timePreference" className="text-xs font-semibold text-gray-700">Preferred Time *</label>
            <select
              id="vax-timePreference"
              name="timePreference"
              value={formData.timePreference}
              onChange={handleChange}
              required
              className={`w-full px-1.5 py-1 rounded border text-xs focus:border-blue-500 focus:ring-1 focus:ring-blue-200 outline-none transition-all ${errors.timePreference ? 'border-red-500' : 'border-gray-300'}`}
            >
              <option value="">Select time</option>
              <option value="morning">Morning (9:00 AM - 12:00 PM)</option>
              <option value="afternoon">Afternoon (12:00 PM - 3:00 PM)</option>
              <option value="evening">Evening (3:00 PM - 6:00 PM)</option>
            </select>
            {errors.timePreference && <span className="text-red-500 text-xs mt-0.5">{errors.timePreference}</span>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
          <div className="flex flex-col gap-0.5">
            <label htmlFor="vax-insuranceProvider" className="text-xs font-semibold text-gray-700">Insurance Provider</label>
            <input
              type="text"
              id="vax-insuranceProvider"
              name="insuranceProvider"
              value={formData.insuranceProvider}
              onChange={handleChange}
              placeholder="e.g., Blue Cross, Medicaid, Medicare"
              className="w-full px-1.5 py-1 rounded border border-gray-300 text-xs focus:border-blue-500 focus:ring-1 focus:ring-blue-200 outline-none transition-all"
            />
          </div>

          <div className="flex flex-col gap-0.5">
            <label htmlFor="vax-insuranceId" className="text-xs font-semibold text-gray-700">Insurance ID</label>
            <input
              type="text"
              id="vax-insuranceId"
              name="insuranceId"
              value={formData.insuranceId}
              onChange={handleChange}
              placeholder="Your insurance ID number"
              className="w-full px-1.5 py-1 rounded border border-gray-300 text-xs focus:border-blue-500 focus:ring-1 focus:ring-blue-200 outline-none transition-all"
            />
          </div>
        </div>

        <div className="flex flex-col gap-0.5">
          <label htmlFor="vax-additionalNotes" className="text-xs font-semibold text-gray-700">Additional Notes</label>
          <textarea
            id="vax-additionalNotes"
            name="additionalNotes"
            value={formData.additionalNotes}
            onChange={handleChange}
            rows="2"
            placeholder="Any allergies, special requests, or questions?"
            className="w-full px-1.5 py-1 rounded border border-gray-300 text-xs focus:border-blue-500 focus:ring-1 focus:ring-blue-200 outline-none transition-all resize-y min-h-[40px]"
          ></textarea>
        </div>

        <SingleFormButton 
          onSubmit={handleSubmit}
          onSubmitText="Schedule Appointment"
          isSubmitting={isSubmitting}
          onWhatsAppClick={shareViaWhatsApp}
          submitColor="blue"
        />
      </form>
    </div>
  );
};

export default VaccinationForm;