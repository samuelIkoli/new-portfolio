import React from 'react'
import Typer from "typewriter-effect";

const Typewriter = () => {
    return (

        <div className="w-full font-mono mb-8">
            <div className="bg-gray-800 border border-gray-700 rounded-xl shadow-2xl flex flex-col w-full max-w-4xl mx-auto">
                <div className="p-4 sm:p-6 md:p-8 text-white text-center">
                    <Typer
                        options={{
                            delay: 18, // Speed of typing
                        }}
                        onInit={(typewriter) => {
                            typewriter
                                .typeString("You've arrived at the official online portfolio page of Samuel Ikoli. That's me. My foundation in Electrical and Electronics Engineering fuels a relentless drive for Software Engineering excellence. I personally architected and built this platform with Next.js, a leading ReactJS framework, and deployed it on Google's reliable Firebase infrastructure. Explore at your leisure and uncover what makes me tick in the tech space.")
                                .start(); // Start the typing animation
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Typewriter;