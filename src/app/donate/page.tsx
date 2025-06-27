// 'use client'
import { Coffee, DollarSign, Heart } from "lucide-react";
import Donator from "../components/Donator";
import Exchanger from "../components/Exchanger";

// pages/donate.tsx (Donate Page)
const Donation: React.FC = () => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-8 border border-gray-200 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 flex items-center justify-center">
                <Heart size={36} className="text-red-500 mr-3" /> Support My Work
            </h2>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto">
                If you find my work helpful or inspiring, consider making a small donation!
                Your support helps me continue creating useful projects,
                learning new technologies, contributing to the open-source community, creating virtual content.
                Every little bit helps keep the virtual lights on!
            </p>

            <Exchanger />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-10">
                {/* Pay Via Paystack */}

                <Donator />

                {/* Direct Donation */}
                <div className="bg-green-50 p-6 rounded-lg shadow-md border border-green-200 flex flex-col items-center">
                    <DollarSign size={60} className="text-green-600 mb-4" />
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">Direct Donation</h3>
                    <p className="text-gray-700 mb-4">
                        For direct support towards development tools, hosting, and learning resources.
                    </p>
                    <a
                        href="https://www.paypal.com/paypalme/yourusername" // Replace with your actual PayPal.me link
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-bold rounded-full shadow-lg
                       hover:bg-green-700 transition-colors duration-300 transform hover:scale-105
                       focus:outline-none focus:ring-4 focus:ring-green-300"
                        aria-label="Donate via PayPal"
                    >
                        <DollarSign size={20} className="mr-2" /> Donate via PayPal
                    </a>
                </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">
                Thank you for your generosity and for being a part of my journey!
            </p>
        </div>
    );
};
export default Donation;