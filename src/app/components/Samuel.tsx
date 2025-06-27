import React from 'react'; // Removed useState and useEffect as they are no longer used
import { Mail, Linkedin, Github, Instagram } from 'lucide-react'; // Using Lucide React for icons


const Samuel: React.FC = () => {
    return (
        // Main container, centered and responsive
        <div>
            <div className="bg-gray-800 rounded-xl shadow-2xl p-8 flex flex-col items-center w-full max-w-lg mx-auto border border-gray-700">

                {/* Profile Image */}
                <div className="text-center mb-4">
                    <img
                        src="samage.jpg" // Placeholder image URL
                        className="block border-4 border-blue-500 rounded-full mt-5 mx-auto w-36 h-36 object-cover shadow-lg"
                        alt="Samuel Ikoli"
                    />
                </div>

                {/* Name */}
                <div className="text-center pt-2">
                    <h2 className="text-4xl font-bold text-blue-400">SAMUEL IKOLI</h2>
                </div>

                {/* Role */}
                <div className="text-center pt-2">
                    <p className="text-xl text-gray-300">Software Developer</p>
                </div>

                {/* Education */}
                <div className="text-center pt-2">
                    <p className="text-lg text-gray-400">B.Eng, Electrical and Electronics Engineering, Nile University</p>
                </div>

                {/* Location */}
                <div className="text-center pt-2">
                    <p className="text-lg text-gray-400">Lives in: Abuja, Nigeria</p>
                </div>

                <hr className="w-full border-t border-gray-600 my-6" />

                {/* Email */}
                <div className="text-center pt-2 pb-1">
                    <p className="text-lg text-gray-300 flex items-center justify-center">
                        <span className="mr-2 text-blue-400 text-2xl"><Mail size={24} /></span> ayibanimiikoli@gmail.com
                    </p>
                </div>

                <hr className="w-full border-t border-gray-600 my-6" />

                {/* Social Media Links */}
                <div className="flex justify-center w-full pt-2 space-x-8">
                    <div className="flex-1 text-center">
                        <a
                            rel="noreferrer"
                            href="https://www.linkedin.com/in/samuelikoli/"
                            target="_blank"
                            className="text-blue-500 hover:text-blue-400 transition-colors duration-300 text-5xl"
                            aria-label="LinkedIn Profile"
                        >
                            <Linkedin size={48} />
                        </a>
                    </div>
                    <div className="flex-1 text-center">
                        <a
                            rel="noreferrer"
                            href="https://github.com/samuelIkoli"
                            target="_blank"
                            className="text-gray-300 hover:text-white transition-colors duration-300 text-5xl"
                            aria-label="GitHub Profile"
                        >
                            <Github size={48} />
                        </a>
                    </div>
                    <div className="flex-1 text-center">
                        <a
                            rel="noreferrer"
                            href="https://www.instagram.com/socially.sam/"
                            target="_blank"
                            className="text-pink-500 hover:text-pink-400 transition-colors duration-300 text-5xl"
                            aria-label="Instagram Profile"
                        >
                            <Instagram size={48} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Samuel;