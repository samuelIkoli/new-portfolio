import { Info, Lightbulb } from 'lucide-react';
import React from 'react'

const About: React.FC = () => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-8 border border-gray-200">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 flex items-center">
                <Info size={36} className="text-blue-500 mr-3" /> About Me
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Hello! I'm Samuel a passionate Full Stack Developer with a knack for creating
                dynamic and user-friendly web applications. My journey into the world of
                programming began with a curiosity for how things work on the internet,
                which quickly evolved into a dedicated pursuit of mastering web technologies.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3 flex items-center">
                        <Lightbulb size={24} className="text-green-500 mr-2" /> My Philosophy
                    </h3>
                    <p className="text-md text-gray-600 leading-relaxe font-bold">
                        "Driven by curiosity, defined by purpose, remembered for character."
                    </p>
                    <p>I believe that what we create should be useful, not just impressive. I choose progress over perfection, purpose over pressure, and doing the right thing over simply doing things right. Success, to me, is reaching my goals while still being the kind of man people are proud to know.</p>
                </div>
                <div className='flex items-center'>
                    <img
                        src="samage.jpg" // Placeholder image URL
                        className="block border-4 border-blue-500 rounded-full mx-auto w-48 h-48 object-cover shadow-lg"
                        alt="Samuel Ikoli"
                    />
                </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
                When I'm not coding, you can find me playing video games, watching anime or movies, playing football or working out, creating content, maybe exploring new technologies, browsing the net for expensive items that I want to own someday or just curious about, or enjoying outdoor activities. I'm always eager
                to connect with anyone that aligns with my goals and discuss new opportunities.
            </p>
        </div>
    );
};
export default About;