'use client'
import { useForm, ValidationError } from "@formspree/react";
import { Instagram, Mail, MapPin, Music2, Send, Twitch, Youtube } from "lucide-react";
import { useState } from "react";

interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

// pages/contact.tsx (Contact Page)
const Contact: React.FC = () => {
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        message: '',
    });
    const [statusMessage, setStatusMessage] = useState<string>('');
    const [isSuccess, setIsSuccess] = useState<boolean>(false);

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    //     const { name, value } = e.target;
    //     setFormData((prevData: any) => ({
    //         ...prevData,
    //         [name]: value,
    //     }));
    // };

    const [state, handleSubmit2] = useForm("xnqwvbgj");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatusMessage('Sending message...');
        setIsSuccess(false);

        // Simulate API call
        setTimeout(() => {
            console.log('Form data submitted:', formData);
            setStatusMessage('Message sent successfully! (This is a simulation)');
            setIsSuccess(true);
            setFormData({ name: '', email: '', message: '' }); // Clear form
        }, 1500); // Simulate network delay
    };

    return (
        <div className="bg-white shadow-lg rounded-lg p-8 border border-gray-200">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 flex items-center">
                <Mail size={36} className="text-blue-500 mr-3" /> Contact Me
            </h2>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                I'd love to hear from you! Whether you have a question, a project idea,
                or just want to say hello, feel free to reach out using the form below
                or directly via email/phone.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Contact Information */}
                <div className="flex flex-col space-y-6">
                    <div className="flex items-start space-x-4">
                        <Mail size={24} className="text-blue-500 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800">Email</h3>
                            <p className="text-gray-700">
                                <a href="mailto:your.email@example.com" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                                    ayibanimiikoli@gmail.com
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <MapPin size={24} className="text-blue-500 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800">Location</h3>
                            <p className="text-gray-700">Somewhere in Earth</p>
                        </div>
                    </div>
                    <hr className="border-t-2 border-gray-300" />
                    <p className="text-2xl font-bold text-gray-900 flex items-center">
                        <img alt="Your Company" src="myLogo2.png" className="h-15 w-auto object-contain" /> Virtual Presence
                    </p>

                    <div className="flex items-start space-x-4">
                        <Twitch size={24} className="text-blue-500 flex-shrink-0 mt-1" />
                        <a href="https://www.twitch.tv/naija_noob" target="_blank" rel="noreferrer">
                            <h3 className="text-xl font-semibold text-gray-800">Twitch</h3>
                        </a>
                    </div>
                    <div className="flex items-start space-x-4">
                        <Music2 size={24} className="text-blue-500 flex-shrink-0 mt-1" />
                        <a href="http://tiktok.com/@virtually.sam" target="_blank" rel="noreferrer">
                            <h3 className="text-xl font-semibold text-gray-800">Tiktok</h3>
                        </a>
                    </div>
                    <div className="flex items-start space-x-4">
                        <Instagram size={24} className="text-blue-500 flex-shrink-0 mt-1" />
                        <a href="https://www.youtube.com/@virtually_sam" target="_blank" rel="noreferrer">
                            <h3 className="text-xl font-semibold text-gray-800">Instagram</h3>
                        </a>
                    </div>
                    <div className="flex items-start space-x-4">
                        <Youtube size={24} className="text-blue-500 flex-shrink-0 mt-1" />
                        <a href="https://www.youtube.com/@virtually_sam" target="_blank" rel="noreferrer">
                            <h3 className="text-xl font-semibold text-gray-800">Youtube</h3>
                        </a>
                    </div>

                </div>

                {/* Contact Form */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200">
                    <form onSubmit={handleSubmit2} className="space-y-5">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                // onChange={handleChange}
                                required
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm
                           focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white text-gray-900"
                                placeholder="Your Name"
                            />
                        </div>
                        <ValidationError
                            prefix="Name"
                            field="name"
                            errors={state.errors}
                        />
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                // value={formData.email}
                                // onChange={handleChange}
                                // required
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm
                           focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white text-gray-900"
                            />
                        </div>
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                // onChange={handleChange}
                                // rows="5"
                                required
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm
                           focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white text-gray-900"
                                placeholder="Your message..."
                            ></textarea>
                        </div>
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                        <button
                            type="submit"
                            className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent
                         shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700
                         focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                         transform hover:scale-105 transition duration-300 ease-in-out" disabled={state.submitting}
                        >
                            <Send size={20} className="mr-2" /> Send Message
                        </button>
                        {statusMessage && (
                            <p className={`mt-4 text-center text-sm ${isSuccess ? 'text-green-600' : 'text-red-600'}`}>
                                {statusMessage}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;