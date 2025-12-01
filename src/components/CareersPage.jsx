import React from 'react';
import { motion } from 'framer-motion';
import {
    FaBriefcase, FaUsers, FaHeart, FaGraduationCap,
    FaClock, FaDollarSign, FaAward,
    FaUserMd, FaPills, FaLaptopMedical, FaClipboardList,
    FaMapMarkerAlt, FaCheckCircle
} from 'react-icons/fa';

const CareersPage = () => {

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

    const benefits = [
        {
            icon: FaDollarSign,
            title: "Competitive Salary",
            description: "Industry-leading compensation packages with regular performance reviews",
            color: "text-green-600",
            bgColor: "bg-green-50"
        },
        {
            icon: FaHeart,
            title: "Health Benefits",
            description: "Comprehensive medical, dental, and vision insurance for you and your family",
            color: "text-red-500",
            bgColor: "bg-red-50"
        },
        {
            icon: FaClock,
            title: "Flexible Schedule",
            description: "Work-life balance with flexible hours and paid time off",
            color: "text-blue-600",
            bgColor: "bg-blue-50"
        },
        {
            icon: FaGraduationCap,
            title: "Career Growth",
            description: "Continuing education opportunities and professional development programs",
            color: "text-purple-600",
            bgColor: "bg-purple-50"
        },
        {
            icon: FaAward,
            title: "Employee Recognition",
            description: "Performance bonuses and employee appreciation programs",
            color: "text-yellow-600",
            bgColor: "bg-yellow-50"
        },
        {
            icon: FaUsers,
            title: "Team Environment",
            description: "Collaborative, supportive workplace with a family-like atmosphere",
            color: "text-indigo-600",
            bgColor: "bg-indigo-50"
        }
    ];

    const openPositions = [
        {
            id: 1,
            title: "Licensed Pharmacist",
            icon: FaUserMd,
            type: "Full-Time",
            location: "Bronx, NY",
            salary: "$120,000 - $145,000/year",
            color: "blue",
            description: "Join our team as a licensed pharmacist and make a difference in our community's health.",
            responsibilities: [
                "Dispense medications and provide expert pharmaceutical care",
                "Counsel patients on proper medication usage and potential side effects",
                "Collaborate with healthcare providers to optimize patient outcomes",
                "Manage inventory and ensure medication safety protocols",
                "Administer immunizations and health screenings"
            ],
            requirements: [
                "Active NYS Pharmacist License required",
                "PharmD degree from an accredited institution",
                "Strong communication and interpersonal skills",
                "Commitment to patient care excellence",
                "Immunization certification preferred"
            ]
        },
        {
            id: 2,
            title: "Pharmacy Technician",
            icon: FaPills,
            type: "Full-Time",
            location: "Bronx, NY",
            salary: "$38,000 - $48,000/year",
            color: "green",
            description: "Support our pharmacy operations and help deliver exceptional patient care.",
            responsibilities: [
                "Assist pharmacists in preparing and dispensing medications",
                "Process prescription orders and insurance claims",
                "Maintain accurate patient records and inventory",
                "Provide excellent customer service to patients",
                "Handle phone inquiries and prescription refill requests"
            ],
            requirements: [
                "NYS Pharmacy Technician License required",
                "High school diploma or equivalent",
                "1+ years of pharmacy experience preferred",
                "Strong attention to detail and organizational skills",
                "Proficiency with pharmacy software systems"
            ]
        },
        {
            id: 3,
            title: "Pharmacy Assistant",
            icon: FaClipboardList,
            type: "Part-Time/Full-Time",
            location: "Bronx, NY",
            salary: "$32,000 - $40,000/year",
            color: "purple",
            description: "Start your pharmacy career in a supportive, community-focused environment.",
            responsibilities: [
                "Assist with prescription intake and customer service",
                "Manage inventory and stock medications",
                "Process payments and handle cash register operations",
                "Maintain cleanliness and organization of pharmacy",
                "Support delivery services and administrative tasks"
            ],
            requirements: [
                "High school diploma or equivalent required",
                "Customer service experience preferred",
                "Reliable, punctual, and detail-oriented",
                "Ability to work in a fast-paced environment",
                "Bilingual (English/Spanish) a plus"
            ]
        },
        {
            id: 4,
            title: "Delivery Driver",
            icon: FaLaptopMedical,
            type: "Part-Time",
            location: "Bronx, NY",
            salary: "$16 - $20/hour + tips",
            color: "orange",
            description: "Deliver medications and healthcare products to our valued customers.",
            responsibilities: [
                "Safely deliver prescriptions to patients' homes",
                "Maintain accurate delivery records and signatures",
                "Provide friendly, professional customer service",
                "Ensure timely and secure medication transport",
                "Assist with pharmacy tasks during non-delivery hours"
            ],
            requirements: [
                "Valid driver's license with clean driving record",
                "Reliable vehicle with insurance",
                "Excellent time management skills",
                "Strong customer service orientation",
                "Ability to lift up to 30 lbs"
            ]
        }
    ];

    const getColorClasses = (color) => {
        const colors = {
            blue: {
                bg: 'bg-blue-50',
                border: 'border-blue-200',
                text: 'text-blue-900',
                badge: 'bg-blue-600',
                hover: 'hover:border-blue-400'
            },
            green: {
                bg: 'bg-green-50',
                border: 'border-green-200',
                text: 'text-green-900',
                badge: 'bg-green-600',
                hover: 'hover:border-green-400'
            },
            purple: {
                bg: 'bg-purple-50',
                border: 'border-purple-200',
                text: 'text-purple-900',
                badge: 'bg-purple-600',
                hover: 'hover:border-purple-400'
            },
            orange: {
                bg: 'bg-orange-50',
                border: 'border-orange-200',
                text: 'text-orange-900',
                badge: 'bg-orange-600',
                hover: 'hover:border-orange-400'
            }
        };
        return colors[color] || colors.blue;
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-24 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }}></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-white/20">
                            <FaBriefcase className="text-2xl text-yellow-400" />
                            <span className="text-lg font-semibold">Join Our Team</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                            Build Your Career at<br />
                            <span className="text-yellow-400">Leff Prescription Center</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                            Join a family-owned pharmacy where your passion for patient care makes a real difference in our Bronx community
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="#positions" className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-all hover:scale-105 shadow-lg">
                                View Open Positions
                            </a>
                            <a href="#apply" className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all border-2 border-white/30">
                                Apply Now
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Why Work With Us */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                Why Choose Leff Pharmacy?
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                We&apos;re more than just a workplace – we&apos;re a community dedicated to excellence in patient care and employee growth
                            </p>
                        </motion.div>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className={`${benefit.bgColor} p-8 rounded-2xl border-2 border-transparent hover:border-gray-200 transition-all duration-300 hover:shadow-xl group`}
                            >
                                <div className={`w-16 h-16 ${benefit.bgColor.replace('50', '100')} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <benefit.icon className={`text-3xl ${benefit.color}`} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                                <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Open Positions */}
            <section id="positions" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Open Positions
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Explore exciting career opportunities and find your perfect role
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                        {openPositions.map((job) => {
                            const colors = getColorClasses(job.color);
                            return (
                                <motion.div
                                    key={job.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className={`${colors.bg} rounded-2xl border-2 ${colors.border} ${colors.hover} transition-all duration-300 hover:shadow-xl overflow-hidden group`}
                                >
                                    <div className="p-8">
                                        <div className="flex items-start justify-between mb-6">
                                            <div className="flex items-center gap-4">
                                                <div className={`w-14 h-14 ${colors.badge} rounded-xl flex items-center justify-center text-white`}>
                                                    <job.icon className="text-2xl" />
                                                </div>
                                                <div>
                                                    <h3 className={`text-2xl font-bold ${colors.text} mb-1`}>{job.title}</h3>
                                                    <div className="flex flex-wrap gap-2">
                                                        <span className="text-sm bg-white px-3 py-1 rounded-full text-gray-700 font-medium">
                                                            {job.type}
                                                        </span>
                                                        <span className="text-sm bg-white px-3 py-1 rounded-full text-gray-700 font-medium flex items-center gap-1">
                                                            <FaMapMarkerAlt className="text-xs" /> {job.location}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <p className="text-gray-700 mb-4 leading-relaxed">{job.description}</p>

                                        <div className="mb-6">
                                            <h4 className="font-bold text-gray-900 mb-3 text-lg">Key Responsibilities:</h4>
                                            <ul className="space-y-2">
                                                {job.responsibilities.slice(0, 3).map((resp, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                                                        <FaCheckCircle className={`${colors.text} mt-1 flex-shrink-0`} />
                                                        <span>{resp}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="mb-6">
                                            <h4 className="font-bold text-gray-900 mb-3 text-lg">Requirements:</h4>
                                            <ul className="space-y-2">
                                                {job.requirements.slice(0, 3).map((req, idx) => (
                                                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                                                        <FaCheckCircle className={`${colors.text} mt-1 flex-shrink-0`} />
                                                        <span>{req}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <button
                                            onClick={() => {
                                                const phoneNumber = '1234567890'; // Replace with actual WhatsApp number
                                                const message = `Hello, I'm interested in applying for the ${job.title} position at Leff Prescription Center.`;
                                                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                                                window.open(whatsappUrl, '_blank');
                                            }}
                                            className={`w-full ${colors.badge} text-white py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all hover:scale-105 shadow-lg`}
                                        >
                                            Apply for this Position
                                        </button>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            </div>
    );
};

export default CareersPage;
