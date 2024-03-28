import React, { useState } from 'react';
import BaseSection from '../base/Section';
import Card from './Card';
import axios from 'axios';

const ContactForm = () => {
    const [formValues, setFormValues] = useState({
        name: '',
        company: '',
        position: '',
        phone: '',
        email: '',
        message: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const serviceId = 'service_39sicup',
        templateId = 'template_tlehdjf',
        publicKey = 't7GdKmdAL_qs_SisC';

        const data = {
            service_id: serviceId,
            template_id: templateId,
            user_id: publicKey,
            template_params: {
                from_name: formValues.name,
                from_email: formValues.email,
                to_name: "IASSET Contact Mail",
                from_company: formValues.company,
                from_position: formValues.position,
                from_phone: formValues.phone,
                message: formValues.message
            }
        };

        try {
            await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);   
        } catch (error) {
            console.log(error);
        }

        setFormValues({
            name: '',
            company: '',
            position: '',
            phone: '',
            email: '',
            message: '',
        });
    };

    return (
        <div className="w-[65%] mx-auto">
            <a href='/' className="flex items-center text-gray-700 hover:text-blue-500 focus:outline-none mt-7">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Kembali
            </a>
            <Card className="mt-7">
                <form onSubmit={handleSubmit}>
                    <BaseSection>
                        <div className="flex flex-col col-span-12">
                            <label htmlFor="name" className="block text-sm mt-5 font-medium text-gray-700">
                                Nama <span className="text-red-600">*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="mt-1 block px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                onChange={handleInputChange}
                                value={formValues.name}
                            />
                        </div>
                    </BaseSection>


                    <BaseSection>
                        <div className="flex flex-col col-span-12">
                            <label htmlFor="company" className="block mt-5 text-sm font-medium text-gray-700">
                                Perusahaan <span className="text-red-600">*</span>
                            </label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                required
                                maxLength={50}
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                onChange={handleInputChange}
                                value={formValues.company}
                            />
                        </div>
                    </BaseSection>

                    <BaseSection>
                        <div className="flex flex-col col-span-12">
                            <label htmlFor="position" className="block mt-5 text-sm font-medium text-gray-700">
                                Jabatan <span className="text-red-600">*</span>
                            </label>
                            <input
                                type="text"
                                id="position"
                                name="position"
                                required
                                maxLength={50}
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                onChange={handleInputChange}
                                value={formValues.position}
                            />
                        </div>
                    </BaseSection>

                    <BaseSection>
                        <div className="flex flex-col col-span-12 lg:col-span-6">
                            <label htmlFor="phone" className="block text-sm mt-5 font-medium text-gray-700">
                                No. Hp/Tlp <span className="text-red-600">*</span>
                            </label>
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                required
                                className="mt-1 block px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                onChange={handleInputChange}
                                value={formValues.phone}
                            />
                        </div>
                        <div className="flex flex-col col-span-12 lg:col-span-6">
                            <label htmlFor="email" className="block text-sm mt-5 font-medium text-gray-700">
                                Email <span className="text-red-600">*</span>
                            </label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                required
                                className="mt-1 block px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                onChange={handleInputChange}
                                value={formValues.email}
                            />
                        </div>
                    </BaseSection>


                    <BaseSection>
                        <div className="flex flex-col col-span-12">
                            <label htmlFor="message" className="block mt-5 text-sm font-medium text-gray-700">
                                Pesan <span className="text-red-600">*</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                onChange={handleTextAreaChange}
                                value={formValues.message}
                            />
                        </div>
                    </BaseSection>

                    <BaseSection>
                        <div className="col-span-12">
                            <button
                                type="submit"
                                className="inline-flex justify-center py-2 px-4 mt-5 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Kirim
                            </button>

                        </div>
                    </BaseSection>

                </form>
            </Card>
        </div>
    );
};

export default ContactForm;
