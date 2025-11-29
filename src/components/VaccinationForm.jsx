import React, { useState } from 'react';

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

  return (
    <div className="form-container" id="vaccination-form">
      <h2 className="form-title">Schedule Your Vaccination</h2>
      <p className="form-subtitle">Book your immunization appointment today</p>
      
      {submitted && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6 flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
          Thank you! Your appointment request has been submitted. We'll contact you shortly to confirm.
        </div>
      )}

      <form onSubmit={handleSubmit} className="pharma-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="vax-fullName">Full Name *</label>
            <input
              type="text"
              id="vax-fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
              className={`w-full px-4 py-2 rounded-lg border focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.fullName && <span className="text-red-500 text-sm mt-1">{errors.fullName}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="vax-phone">Phone Number *</label>
            <input
              type="tel"
              id="vax-phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="718-665-1163"
              className={`w-full px-4 py-2 rounded-lg border focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.phone && <span className="text-red-500 text-sm mt-1">{errors.phone}</span>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="vax-email">Email Address *</label>
            <input
              type="email"
              id="vax-email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
              className={`w-full px-4 py-2 rounded-lg border focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="vax-vaccineType">Vaccine Type *</label>
            <select
              id="vax-vaccineType"
              name="vaccineType"
              value={formData.vaccineType}
              onChange={handleChange}
              required
              className={`w-full px-4 py-2 rounded-lg border focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all ${errors.vaccineType ? 'border-red-500' : 'border-gray-300'}`}
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
            {errors.vaccineType && <span className="text-red-500 text-sm mt-1">{errors.vaccineType}</span>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="vax-datePreference">Preferred Date *</label>
            <input
              type="date"
              id="vax-datePreference"
              name="datePreference"
              value={formData.datePreference}
              onChange={handleChange}
              required
              className={`w-full px-4 py-2 rounded-lg border focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all ${errors.datePreference ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.datePreference && <span className="text-red-500 text-sm mt-1">{errors.datePreference}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="vax-timePreference">Preferred Time *</label>
            <select
              id="vax-timePreference"
              name="timePreference"
              value={formData.timePreference}
              onChange={handleChange}
              required
              className={`w-full px-4 py-2 rounded-lg border focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all ${errors.timePreference ? 'border-red-500' : 'border-gray-300'}`}
            >
              <option value="">Select time</option>
              <option value="morning">Morning (9:00 AM - 12:00 PM)</option>
              <option value="afternoon">Afternoon (12:00 PM - 3:00 PM)</option>
              <option value="evening">Evening (3:00 PM - 6:00 PM)</option>
            </select>
            {errors.timePreference && <span className="text-red-500 text-sm mt-1">{errors.timePreference}</span>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="vax-insuranceProvider">Insurance Provider</label>
            <input
              type="text"
              id="vax-insuranceProvider"
              name="insuranceProvider"
              value={formData.insuranceProvider}
              onChange={handleChange}
              placeholder="e.g., Blue Cross, Medicaid, Medicare"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
            />
          </div>

          <div className="form-group">
            <label htmlFor="vax-insuranceId">Insurance ID</label>
            <input
              type="text"
              id="vax-insuranceId"
              name="insuranceId"
              value={formData.insuranceId}
              onChange={handleChange}
              placeholder="Your insurance ID number"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="vax-additionalNotes">Additional Notes</label>
          <textarea
            id="vax-additionalNotes"
            name="additionalNotes"
            value={formData.additionalNotes}
            onChange={handleChange}
            rows="3"
            placeholder="Any allergies, special requests, or questions?"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-y min-h-[100px]"
          ></textarea>
        </div>

        <button 
          type="submit" 
          className="submit-btn w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 mt-4 flex items-center justify-center"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </>
          ) : (
            'Schedule Appointment'
          )}
        </button>
      </form>
    </div>
  );
};

export default VaccinationForm;