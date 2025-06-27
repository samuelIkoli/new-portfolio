'use client'
import { useState } from 'react'

export default function Exchanger() {
    const exchangeRate = 1550 // Static USD → NGN rate
    const [usd, setUsd] = useState<number | ''>('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        if (value === '') return setUsd('')
        const num = parseFloat(value)
        if (!isNaN(num)) setUsd(num)
    }

    return (
        <main className="flex justify-center">
            <div className="bg-white rounded-lg pb-3 w-full max-w-md space-y-6">
                {/* Line 1: Exchange Rate */}
                <div className="text-center text-gray-700 text-xl font-semibold">
                    1 USD = {exchangeRate.toLocaleString()} NGN
                </div>

                {/* Line 2: USD Input + NGN Output Side by Side */}
                <div className="flex col-2 items-center gap-4">
                    <input
                        id="usd-input"
                        type="number"
                        value={usd}
                        onChange={handleChange}
                        className="flex-1 border border-gray-300 rounded px-3 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter USD"
                    />
                    <span className="text-lg text-gray-800 whitespace-nowrap">
                        {usd !== '' ? `≈ ₦${(usd * exchangeRate).toLocaleString()}` : ''}
                    </span>
                </div>
            </div>
        </main>
    )
}
