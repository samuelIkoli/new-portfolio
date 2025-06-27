"use client"
import React, { useState } from 'react';
import dynamic from "next/dynamic";


const PaystackInlineButton = dynamic(() => import('../components/PaystackInlineButton'), {
    ssr: false,
});

interface PayConfig {
    reference: string;
    email: string;
    amount: number; // Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: string;
}

const Pay: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [amount, setAmount] = useState<string>('');
    const [paymentStatus, setPaymentStatus] = useState<string | null>(null);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(e.target.value);
    }

    // Placeholder for Paystack config - actual values would come from environment variables
    const config: PayConfig = {
        reference: (new Date()).getTime().toString(),
        email,
        amount: parseInt(amount) * 100, // Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
        publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || '', // Replace with your actual public key
    };

    // Placeholder for Paystack success callback
    const onSuccess = (reference: any) => {
        console.log('Payment Success:', reference);
        setPaymentStatus('Payment successful!');
        // In a real application, you would verify this transaction on your backend
    };

    // Placeholder for Paystack close callback
    const onClose = () => {
        console.log('Payment dialog closed');
        setPaymentStatus('Payment cancelled or closed.');
    }


    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-700 to-indigo-900 p-4">
            <div className="bg-gray-800 text-white rounded-xl shadow-2xl p-8 flex flex-col w-full max-w-md mx-auto space-y-6 border border-gray-700">
                <h1 className="text-3xl font-extrabold text-center text-green-400 mb-4">
                    Make a Payment
                </h1>
                <form className="space-y-4">
                    <p className="text-sm text-center text-gray-400">Secured and Powered by Paystack</p>

                    <div>
                        <label htmlFor="user_email" className="block text-gray-300 text-sm font-semibold mb-2">
                            Email Address
                        </label>
                        <input
                            id="user_email"
                            type="email"
                            name="user_email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400
                                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="your.email@example.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="user_amount" className="block text-gray-300 text-sm font-semibold mb-2">
                            Amount in Nigerian Naira
                        </label>
                        <input
                            id="user_amount"
                            type="number"
                            min={50}
                            name="user_amount"
                            value={amount}
                            onChange={handleAmountChange}
                            required
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400
                                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="e.g., 5000"
                        />
                    </div>

                    {/* <PaystackHookExample /> */}
                    {/* <MyBrowserOnlyComponent config={config} /> */}
                    <PaystackInlineButton config={config} />


                    {paymentStatus && (
                        <p className={`text-center text-md font-medium ${paymentStatus.includes('successful') ? 'text-green-300' : 'text-red-300'}`}>
                            {paymentStatus}
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
}

export default Pay;
