'use client'
import React, { useState } from 'react';

import { co2 } from "@tgwf/co2";
import { averageIntensity, marginalIntensity, hosting } from '@tgwf/co2';

const Greenboard: React.FC = () => {
    // State to store the fetched data
    const [co2Data, setCo2Data] = useState<{
        marginalIntensityNGA: number | null;
        averageIntensityNGA: number | null;
        perByteEstimate: number | null;
        googleGreenStatus: boolean | null;
    }>({
        marginalIntensityNGA: null,
        averageIntensityNGA: null,
        perByteEstimate: null,
        googleGreenStatus: null,
    });

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch marginal intensity data for Nigeria
                const mdata = marginalIntensity.data;
                const MNGA = mdata.NGA;
                console.log({ MNGA });

                // Initialize CO2 calculator with SWD model, version 4
                const swdmV4 = new co2({ model: "swd", version: 4 });
                const bytes = 1000000000; // 1 Gigabyte in bytes

                // Estimate CO2 emission per byte
                const estimate = swdmV4.perByte(bytes);
                console.log('est is', estimate);

                // Fetch average intensity data for Nigeria
                const { NGA } = averageIntensity.data;
                console.log({ NGA });

                // Check hosting status for google.com
                const greenCheckResult = await hosting("google.com");
                console.log('greencheck is', greenCheckResult);

                setCo2Data({
                    marginalIntensityNGA: MNGA,
                    averageIntensityNGA: NGA,
                    perByteEstimate: estimate,
                    googleGreenStatus: greenCheckResult,
                });
            } catch (error) {
                console.error("Error fetching CO2 data:", error);
                // Optionally set error state to display to the user
                setCo2Data({
                    marginalIntensityNGA: null,
                    averageIntensityNGA: null,
                    perByteEstimate: null,
                    googleGreenStatus: null,
                });
            }
        };

        fetchData();
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-700 to-gray-900 p-4">
            <div className="bg-gray-800 text-white rounded-xl shadow-2xl p-8 flex flex-col items-center max-w-3xl mx-auto space-y-6 border border-gray-700">
                <h1 className="text-4xl font-extrabold text-center text-green-400 mb-4 tracking-wide">
                    Greenboard: CO2 Dashboard
                </h1>
                <h2 className="text-2xl font-semibold text-center text-gray-200 mb-4">
                    Did you know?
                </h2>

                <div className="bg-gray-700 p-4 rounded-lg shadow-inner w-full text-center">
                    <p className="text-lg text-gray-300">
                        The marginal grid Intensity for CO2 emission for the internet in Nigeria is{' '}
                        <span className="font-bold text-green-300">
                            {co2Data.marginalIntensityNGA !== null ? `${co2Data.marginalIntensityNGA}` : 'Loading...'}
                        </span>{' '}
                        grams of CO2 per KiloWatt-Hour
                    </p>
                </div>

                <div className="bg-gray-700 p-4 rounded-lg shadow-inner w-full text-center">
                    <p className="text-lg text-gray-300">
                        The average grid Intensity for CO2 emission for the internet in Nigeria is{' '}
                        <span className="font-bold text-green-300">
                            {co2Data.averageIntensityNGA !== null ? `${co2Data.averageIntensityNGA.toFixed(2)}` : 'Loading...'}
                        </span>{' '}
                        grams of CO2 per KiloWatt-Hour
                    </p>
                </div>

                <div className="bg-gray-700 p-4 rounded-lg shadow-inner w-full text-center">
                    <p className="text-lg text-gray-300">
                        The average CO2 emission per gigabyte transmitted over the internet in Nigeria is{' '}
                        <span className="font-bold text-green-300">
                            {co2Data.perByteEstimate !== null ? `${co2Data.perByteEstimate.toFixed(4)}` : 'Loading...'}
                        </span>{' '}
                        grams
                    </p>
                </div>

                <div className="bg-gray-700 p-4 rounded-lg shadow-inner w-full text-center">
                    <p className="text-lg text-gray-300">
                        Is Google.com hosted greenly?{' '}
                        <span className="font-bold text-green-300">
                            {co2Data.googleGreenStatus !== null
                                ? (co2Data.googleGreenStatus ? 'Yes, it is!' : 'No, it is not.')
                                : 'Checking...'}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Greenboard;