// components/PaystackInlineButton.tsx
'use client';
import React from 'react';
import { usePaystackPayment } from 'react-paystack';

type PaystackConfig = {
    reference: string;
    email: string;
    amount: number;
    publicKey: string;
};

const PaystackInlineButton = ({ config }: { config: PaystackConfig }) => {

    const initializePayment = usePaystackPayment(config);

    const onSuccess = (reference: unknown) => {
        console.log('Payment successful:', reference);
    };

    const onClose = () => {
        console.log('Payment closed');
    };

    return (
        <button
            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
            onClick={(e) => {
                e.preventDefault()
                console.log("config is", config)
                initializePayment({ onSuccess, onClose })
            }}
        >
            Pay Now
        </button>
    );
};

export default PaystackInlineButton;
