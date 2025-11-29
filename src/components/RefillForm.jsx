import React, { useState } from 'react';
import SingleFormButton from './SingleFormButton';

const RefillForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        dateOfBirth: '',
        phone: '',
        email: '',
        rxNumber: '',
        medicationName: '',
        prescribingDoctor: '',
        insuranceProvider: '',
        insuranceId: '',
        deliveryPreference: '',
        additionalInstructions: ''
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validate = () => {
        const newErrors = {};
        
        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Full name is required';
        }
        
        if (!formData.dateOfBirth) {
            newErrors.dateOfBirth = 'Date of birth is required';
        }
        
        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^[\d\s\-\(\)]+$/.test(formData.phone)) {
            newErrors.phone = 'Phone number is invalid';
        }
        
        if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        
        if (!formData.rxNumber.trim()) {
            newErrors.rxNumber = 'Prescription number is required';
        }
        
        if (!formData.medicationName.trim()) {
            newErrors.medicationName = 'Medication name is required';
        }
        
        if (!formData.deliveryPreference) {
            newErrors.deliveryPreference = 'Delivery preference is required';
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
            console.log('Refill Form Submitted:', formData);
            setSubmitted(true);
            setIsSubmitting(false);
            
            // Reset form after 3 seconds
            setTimeout(() => {
                setSubmitted(false);
                setFormData({
                    fullName: '',
                    dateOfBirth: '',
                    phone: '',
                    email: '',
                    rxNumber: '',
                    medicationName: '',
                    prescribingDoctor: '',
                    insuranceProvider: '',
                    insuranceId: '',
                    deliveryPreference: '',
                    additionalInstructions: ''
                });
            }, 3000);
        }, 1000);
    };

    const shareViaWhatsApp = () => {
        // Create a formatted message with form data
        const message = `*Prescription Refill Request*

*Full Name:* ${formData.fullName || 'N/A'}
*Date of Birth:* ${formData.dateOfBirth || 'N/A'}
*Phone:* ${formData.phone || 'N/A'}
*Email:* ${formData.email || 'N/A'}
*Rx Number:* ${formData.rxNumber || 'N/A'}
*Medication:* ${formData.medicationName || 'N/A'}
*Doctor:* ${formData.prescribingDoctor || 'N/A'}
*Preference:* ${formData.deliveryPreference || 'N/A'}
*Insurance Provider:* ${formData.insuranceProvider || 'N/A'}
*Insurance ID:* ${formData.insuranceId || 'N/A'}
*Instructions:* ${formData.additionalInstructions || 'N/A'}`;

        // Encode the message for URL
        const encodedMessage = encodeURIComponent(message);
        
        // Create WhatsApp URL using the pharmacy's phone number (718-665-1163)
        // Note: WhatsApp requires phone numbers in international format without dashes or parentheses
        const whatsappUrl = `https://wa.me/17186651163?text=${encodedMessage}`;
        
        // Open WhatsApp in a new tab
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div id="refill-form" className="form-container bg-green-50 rounded-lg p-2 w-full">
            <div className="mb-2">
                <h2 className="text-base font-bold text-green-800 mb-1">Request Prescription Refill</h2>
                <p className="text-gray-600 text-xs">Hassle-free refill requests - ready in 10-15 minutes</p>
            </div>

            {submitted && (
                <div className="bg-green-100 border border-green-200 text-green-800 px-2 py-1 rounded-sm mb-2 flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-xs">Refill request submitted!</span>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-1.5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
                    <div className="flex flex-col gap-0.5">
                        <label htmlFor="refill-fullName" className="text-xs font-semibold text-gray-700">Full Name *</label>
                        <input
                            type="text"
                            id="refill-fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                            placeholder="Enter your full name"
                            className={`w-full px-1.5 py-1 rounded border text-xs focus:border-green-500 focus:ring-1 focus:ring-green-200 outline-none transition-all ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.fullName && <span className="text-red-500 text-xs mt-0.5">{errors.fullName}</span>}
                    </div>

                    <div className="flex flex-col gap-0.5">
                        <label htmlFor="refill-dateOfBirth" className="text-xs font-semibold text-gray-700">Date of Birth *</label>
                        <input
                            type="date"
                            id="refill-dateOfBirth"
                            name="dateOfBirth"
                            value={formData.dateOfBirth}
                            onChange={handleChange}
                            required
                            className={`w-full px-1.5 py-1 rounded border text-xs focus:border-green-500 focus:ring-1 focus:ring-green-200 outline-none transition-all ${errors.dateOfBirth ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.dateOfBirth && <span className="text-red-500 text-xs mt-0.5">{errors.dateOfBirth}</span>}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
                    <div className="flex flex-col gap-0.5">
                        <label htmlFor="refill-phone" className="text-xs font-semibold text-gray-700">Phone Number *</label>
                        <input
                            type="tel"
                            id="refill-phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            placeholder="Your phone number"
                            className={`w-full px-1.5 py-1 rounded border text-xs focus:border-green-500 focus:ring-1 focus:ring-green-200 outline-none transition-all ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.phone && <span className="text-red-500 text-xs mt-0.5">{errors.phone}</span>}
                    </div>

                    <div className="flex flex-col gap-0.5">
                        <label htmlFor="refill-email" className="text-xs font-semibold text-gray-700">Email Address</label>
                        <input
                            type="email"
                            id="refill-email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your@email.com"
                            className={`w-full px-1.5 py-1 rounded border text-xs focus:border-green-500 focus:ring-1 focus:ring-green-200 outline-none transition-all ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.email && <span className="text-red-500 text-xs mt-0.5">{errors.email}</span>}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
                    <div className="flex flex-col gap-0.5">
                        <label htmlFor="refill-rxNumber" className="text-xs font-semibold text-gray-700">Prescription (Rx) Number *</label>
                        <input
                            type="text"
                            id="refill-rxNumber"
                            name="rxNumber"
                            value={formData.rxNumber}
                            onChange={handleChange}
                            required
                            placeholder="Located on your prescription label"
                            className={`w-full px-1.5 py-1 rounded border text-xs focus:border-green-500 focus:ring-1 focus:ring-green-200 outline-none transition-all ${errors.rxNumber ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.rxNumber && <span className="text-red-500 text-xs mt-0.5">{errors.rxNumber}</span>}
                    </div>

                    <div className="flex flex-col gap-0.5">
                        <label htmlFor="refill-medicationName" className="text-xs font-semibold text-gray-700">Medication Name *</label>
                        <input
                            type="text"
                            id="refill-medicationName"
                            name="medicationName"
                            value={formData.medicationName}
                            onChange={handleChange}
                            required
                            placeholder="Name of medication"
                            className={`w-full px-1.5 py-1 rounded border text-xs focus:border-green-500 focus:ring-1 focus:ring-green-200 outline-none transition-all ${errors.medicationName ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.medicationName && <span className="text-red-500 text-xs mt-0.5">{errors.medicationName}</span>}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
                    <div className="flex flex-col gap-0.5">
                        <label htmlFor="refill-prescribingDoctor" className="text-xs font-semibold text-gray-700">Prescribing Doctor</label>
                        <input
                            type="text"
                            id="refill-prescribingDoctor"
                            name="prescribingDoctor"
                            value={formData.prescribingDoctor}
                            onChange={handleChange}
                            placeholder="Doctor's name"
                            className="w-full px-1.5 py-1 rounded border border-gray-300 text-xs focus:border-green-500 focus:ring-1 focus:ring-green-200 outline-none transition-all"
                        />
                    </div>

                    <div className="flex flex-col gap-0.5">
                        <label htmlFor="refill-deliveryPreference" className="text-xs font-semibold text-gray-700">Preference *</label>
                        <select
                            id="refill-deliveryPreference"
                            name="deliveryPreference"
                            value={formData.deliveryPreference}
                            onChange={handleChange}
                            required
                            className={`w-full px-1.5 py-1 rounded border text-xs focus:border-green-500 focus:ring-1 focus:ring-green-200 outline-none transition-all ${errors.deliveryPreference ? 'border-red-500' : 'border-gray-300'}`}
                        >
                            <option value="">Select option</option>
                            <option value="pickup">Pickup at Store</option>
                            <option value="delivery">Free Home Delivery</option>
                        </select>
                        {errors.deliveryPreference && <span className="text-red-500 text-xs mt-0.5">{errors.deliveryPreference}</span>}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
                    <div className="flex flex-col gap-0.5">
                        <label htmlFor="refill-insuranceProvider" className="text-xs font-semibold text-gray-700">Insurance Provider</label>
                        <input
                            type="text"
                            id="refill-insuranceProvider"
                            name="insuranceProvider"
                            value={formData.insuranceProvider}
                            onChange={handleChange}
                            placeholder="e.g., Blue Cross, Medicaid, Medicare"
                            className="w-full px-1.5 py-1 rounded border border-gray-300 text-xs focus:border-green-500 focus:ring-1 focus:ring-green-200 outline-none transition-all"
                        />
                    </div>

                    <div className="flex flex-col gap-0.5">
                        <label htmlFor="refill-insuranceId" className="text-xs font-semibold text-gray-700">Insurance ID</label>
                        <input
                            type="text"
                            id="refill-insuranceId"
                            name="insuranceId"
                            value={formData.insuranceId}
                            onChange={handleChange}
                            placeholder="Your insurance ID number"
                            className="w-full px-1.5 py-1 rounded border border-gray-300 text-xs focus:border-green-500 focus:ring-1 focus:ring-green-200 outline-none transition-all"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-0.5">
                    <label htmlFor="refill-additionalInstructions" className="text-xs font-semibold text-gray-700">Additional Instructions</label>
                    <textarea
                        id="refill-additionalInstructions"
                        name="additionalInstructions"
                        value={formData.additionalInstructions}
                        onChange={handleChange}
                        rows="2"
                        placeholder="Special delivery instructions or questions..."
                        className="w-full px-1.5 py-1 rounded border border-gray-300 text-xs focus:border-green-500 focus:ring-1 focus:ring-green-200 outline-none transition-all resize-y min-h-[40px]"
                    ></textarea>
                </div>

                <SingleFormButton 
                    onSubmit={handleSubmit}
                    onSubmitText="Submit Refill Request"
                    isSubmitting={isSubmitting}
                    onWhatsAppClick={shareViaWhatsApp}
                    submitColor="green"
                />
            </form>
        </div>
    );
};

export default RefillForm;