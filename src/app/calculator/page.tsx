'use client'
import React, { useState } from 'react'

const Calculator: React.FC = () => {

    const [calc, setCalc] = useState<string>("");
    const ops = ['+', '-', '/', '*', '.'];

    const MAX_DIGITS = 10; // Define the maximum number of digits allowed on screen

    const updateCalc = (value: string) => {
        // Prevent adding multiple operators or operator at start
        if ((ops.includes(value) && calc === '') || (ops.includes(value) && ops.includes(calc[calc.length - 1]))) {
            return;
        }

        // Limit input length to MAX_DIGITS
        // If adding a new digit makes it exceed MAX_DIGITS and it's not an operator or decimal, prevent it.
        // Operators and decimals can still be added even if the number part is MAX_DIGITS.
        if (!ops.includes(value) && calc.replace(/[^0-9.]/g, '').length >= MAX_DIGITS) {
            return;
        }

        setCalc(calc + value);
    }

    const AC = () => {
        setCalc('');
    }

    const delCalc = () => {
        setCalc(calc.slice(0, -1));
    }

    const evalCalc = () => {
        // Prevent evaluation if empty or ends with an operator
        if (calc === '' || ops.includes(calc[calc.length - 1])) {
            return;
        }
        try {
            let result = eval(calc).toString();

            // Handle potential floating-point precision issues for display
            // Convert to a number, fix to a reasonable precision, then convert back to string
            // This prevents very long decimals unless explicitly needed.
            const numResult = parseFloat(result);
            if (numResult.toString().length > MAX_DIGITS) {
                // Try to format if it's a decimal, otherwise truncate or use scientific notation
                if (result.includes('.') && result.length > MAX_DIGITS) {
                    // Find out how many digits are before the decimal point
                    const integerPartLength = result.split('.')[0].length;
                    // If integer part itself is already too long, show error
                    if (integerPartLength > MAX_DIGITS) {
                        setCalc("Overflow");
                        return;
                    }
                    // Calculate remaining precision for decimal part
                    const decimalPrecision = MAX_DIGITS - integerPartLength - (result.includes('.') ? 1 : 0);
                    if (decimalPrecision >= 0) {
                        result = numResult.toFixed(decimalPrecision).toString();
                        // Remove trailing zeros if they were added by toFixed and if the length permits
                        result = parseFloat(result).toString();
                    } else {
                        // If no space for decimal and integer part is exactly MAX_DIGITS
                        setCalc("Overflow");
                        return;
                    }
                }

                // If after decimal handling it's still too long or was never a decimal
                if (result.length > MAX_DIGITS) {
                    // If it's a very large number, use toPrecision for scientific notation if needed
                    if (Math.abs(numResult) >= Math.pow(10, MAX_DIGITS) || (Math.abs(numResult) > 0 && Math.abs(numResult) < Math.pow(10, -(MAX_DIGITS - 1)))) {
                        result = numResult.toPrecision(MAX_DIGITS - 1).toString(); // Use 1 less for 'e'
                    } else {
                        result = result.substring(0, MAX_DIGITS); // Fallback to simple truncation
                    }
                }
            }


            setCalc(result);
        } catch (error) {
            setCalc("Error"); // Display "Error" if evaluation fails
            console.log(error)
        }
    }

    // Helper function to dynamically create digit buttons (1-9)
    const createDigits = () => {
        const digits = [];
        for (let i = 1; i < 10; i++) {
            digits.push(
                <button
                    key={i}
                    onClick={() => updateCalc(i.toString())}
                    className="bg-gray-200 text-gray-800 text-3xl font-semibold p-4 rounded-lg shadow-md
                               hover:bg-gray-300 active:bg-gray-400 focus:outline-none transition transform active:scale-95"
                >
                    {i}
                </button>
            )
        }
        return digits;
    }

    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-4'>
            <div className="calculator bg-white rounded-xl shadow-2xl overflow-hidden max-w-sm w-full border border-gray-200 transform scale-95 md:scale-100">
                {/* Calculator Screen */}
                <div className="screen bg-gray-800 text-right p-5 text-white text-4xl sm:text-5xl font-light tracking-wide rounded-t-xl overflow-hidden break-words min-h-[80px] flex items-end justify-end">
                    {/* Ensure displayed value does not exceed MAX_DIGITS if it's a pure number */}
                    {calc.length > MAX_DIGITS && !ops.some(op => calc.includes(op)) && calc !== "Error"
                        ? calc.substring(0, MAX_DIGITS)
                        : calc || '0'}
                </div>

                {/* Calculator Keypad */}
                <div className="keypad p-4 grid grid-cols-4 gap-3">
                    {/* Top row: AC, DEL, /, * */}
                    <button
                        onClick={AC}
                        className="col-span-2 bg-red-500 text-white text-3xl font-semibold p-4 rounded-lg shadow-md
                                   hover:bg-red-600 active:bg-red-700 focus:outline-none transition transform active:scale-95"
                    >
                        AC
                    </button>
                    <button
                        onClick={delCalc}
                        className="bg-yellow-500 text-white text-3xl font-semibold p-4 rounded-lg shadow-md
                                   hover:bg-yellow-600 active:bg-yellow-700 focus:outline-none transition transform active:scale-95"
                    >
                        DEL
                    </button>
                    <button
                        onClick={() => updateCalc('/')}
                        className="bg-blue-500 text-white text-3xl font-semibold p-4 rounded-lg shadow-md
                                   hover:bg-blue-600 active:bg-blue-700 focus:outline-none transition transform active:scale-95"
                    >
                        /
                    </button>

                    {/* Numbers 7, 8, 9, and * */}
                    {createDigits().slice(6, 9)} {/* Renders buttons for 7, 8, 9 */}
                    <button
                        onClick={() => updateCalc('*')}
                        className="bg-blue-500 text-white text-3xl font-semibold p-4 rounded-lg shadow-md
                                   hover:bg-blue-600 active:bg-blue-700 focus:outline-none transition transform active:scale-95"
                    >
                        *
                    </button>

                    {/* Numbers 4, 5, 6, and - */}
                    {createDigits().slice(3, 6)} {/* Renders buttons for 4, 5, 6 */}
                    <button
                        onClick={() => updateCalc('-')}
                        className="bg-blue-500 text-white text-3xl font-semibold p-4 rounded-lg shadow-md
                                   hover:bg-blue-600 active:bg-blue-700 focus:outline-none transition transform active:scale-95"
                    >
                        -
                    </button>

                    {/* Numbers 1, 2, 3, and + */}
                    {createDigits().slice(0, 3)} {/* Renders buttons for 1, 2, 3 */}
                    <button
                        onClick={() => updateCalc('+')}
                        className="bg-blue-500 text-white text-3xl font-semibold p-4 rounded-lg shadow-md
                                   hover:bg-blue-600 active:bg-blue-700 focus:outline-none transition transform active:scale-95"
                    >
                        +
                    </button>

                    {/* Last row: 0, ., = */}
                    <button
                        onClick={() => updateCalc('0')}
                        className="bg-gray-200 text-gray-800 text-3xl font-semibold p-4 rounded-lg shadow-md
                                   hover:bg-gray-300 active:bg-gray-400 focus:outline-none transition transform active:scale-95"
                    >
                        0
                    </button>
                    <button
                        onClick={() => updateCalc('.')}
                        className="bg-gray-200 text-gray-800 text-3xl font-semibold p-4 rounded-lg shadow-md
                                   hover:bg-gray-300 active:bg-gray-400 focus:outline-none transition transform active:scale-95"
                    >
                        .
                    </button>
                    <button
                        onClick={evalCalc}
                        className="col-span-2 bg-green-500 text-white text-3xl font-semibold p-4 rounded-lg shadow-md
                                   hover:bg-green-600 active:bg-green-700 focus:outline-none transition transform active:scale-95"
                    >
                        =
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Calculator