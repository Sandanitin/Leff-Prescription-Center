import React, { useState } from 'react';

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

    return (
        <div id="refill-form" className="bg-green-50 rounded-2xl p-6">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-green-800 mb-2">Request Prescription Refill</h2>
                <p className="text-gray-600">Hassle-free online refill requests - ready in 10-15 minutes</p>
            </div>

            {submitted && (
                <div className="bg-green-100 border border-green-200 text-green-800 px-4 py-3 rounded-lg mb-6 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    Your refill request has been received! We'll have it ready for pickup or delivery soon.
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="refill-fullName" className="text-sm font-semibold text-gray-700">Full Name *</label>
                        <input
                            type="text"
                            id="refill-fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                            placeholder="Enter your full name"
                            className={`w-full px-4 py-2 rounded-lg border focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.fullName && <span className="text-red-500 text-sm mt-1">{errors.fullName}</span>}
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="refill-dateOfBirth" className="text-sm font-semibold text-gray-700">Date of Birth *</label>
                        <input
                            type="date"
                            id="refill-dateOfBirth"
                            name="dateOfBirth"
                            value={formData.dateOfBirth}
                            onChange={handleChange}
                            required
                            className={`w-full px-4 py-2 rounded-lg border focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all ${errors.dateOfBirth ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.dateOfBirth && <span className="text-red-500 text-sm mt-1">{errors.dateOfBirth}</span>}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="refill-phone" className="text-sm font-semibold text-gray-700">Phone Number *</label>
                        <input
                            type="tel"
                            id="refill-phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            placeholder="Your phone number"
                            className={`w-full px-4 py-2 rounded-lg border focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.phone && <span className="text-red-500 text-sm mt-1">{errors.phone}</span>}
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="refill-email" className="text-sm font-semibold text-gray-700">Email Address</label>
                        <input
                            type="email"
                            id="refill-email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your@email.com"
                            className={`w-full px-4 py-2 rounded-lg border focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email}</span>}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="refill-rxNumber" className="text-sm font-semibold text-gray-700">Prescription (Rx) Number *</label>
                        <input
                            type="text"
                            id="refill-rxNumber"
                            name="rxNumber"
                            value={formData.rxNumber}
                            onChange={handleChange}
                            required
                            placeholder="Located on your prescription label"
                            className={`w-full px-4 py-2 rounded-lg border focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all ${errors.rxNumber ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.rxNumber && <span className="text-red-500 text-sm mt-1">{errors.rxNumber}</span>}
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="refill-medicationName" className="text-sm font-semibold text-gray-700">Medication Name *</label>
                        <input
                            type="text"
                            id="refill-medicationName"
                            name="medicationName"
                            value={formData.medicationName}
                            onChange={handleChange}
                            required
                            placeholder="Name of medication"
                            className={`w-full px-4 py-2 rounded-lg border focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all ${errors.medicationName ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.medicationName && <span className="text-red-500 text-sm mt-1">{errors.medicationName}</span>}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="refill-prescribingDoctor" className="text-sm font-semibold text-gray-700">Prescribing Doctor</label>
                        <input
                            type="text"
                            id="refill-prescribingDoctor"
                            name="prescribingDoctor"
                            value={formData.prescribingDoctor}
                            onChange={handleChange}
                            placeholder="Doctor's name"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="refill-deliveryPreference" className="text-sm font-semibold text-gray-700">Preference *</label>
                        <select
                            id="refill-deliveryPreference"
                            name="deliveryPreference"
                            value={formData.deliveryPreference}
                            onChange={handleChange}
                            required
                            className={`w-full px-4 py-2 rounded-lg border focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all ${errors.deliveryPreference ? 'border-red-500' : 'border-gray-300'}`}
                        >
                            <option value="">Select option</option>
                            <option value="pickup">Pickup at Store</option>
                            <option value="delivery">Free Home Delivery</option>
                        </select>
                        {errors.deliveryPreference && <span className="text-red-500 text-sm mt-1">{errors.deliveryPreference}</span>}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="refill-insuranceProvider" className="text-sm font-semibold text-gray-700">Insurance Provider</label>
                        <input
                            type="text"
                            id="refill-insuranceProvider"
                            name="insuranceProvider"
                            value={formData.insuranceProvider}
                            onChange={handleChange}
                            placeholder="e.g., Blue Cross, Medicaid, Medicare"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="refill-insuranceId" className="text-sm font-semibold text-gray-700">Insurance ID</label>
                        <input
                            type="text"
                            id="refill-insuranceId"
                            name="insuranceId"
                            value={formData.insuranceId}
                            onChange={handleChange}
                            placeholder="Your insurance ID number"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="refill-additionalInstructions" className="text-sm font-semibold text-gray-700">Additional Instructions</label>
                    <textarea
                        id="refill-additionalInstructions"
                        name="additionalInstructions"
                        value={formData.additionalInstructions}
                        onChange={handleChange}
                        rows="3"
                        placeholder="Special delivery instructions or questions..."
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all resize-y min-h-[100px]"
                    ></textarea>
                </div>

                <button 
                    type="submit" 
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 mt-4 flex items-center justify-center"
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
                        'Submit Refill Request'
                    )}
                </button>
            </form>
        </div>
    );
};

export default RefillForm;