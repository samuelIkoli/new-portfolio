import { Github, Instagram, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-6 mt-10 shadow-inner">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
                {/* Copyright Information */}
                <div className="text-sm">
                    &copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.
                </div>

                {/* Social Media Links */}
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a
                        href="https://github.com/samuelikoli"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
                        aria-label="GitHub Profile"
                    >
                        <Github size={24} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/samuelikoli/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
                        aria-label="LinkedIn Profile"
                    >
                        <Linkedin size={24} />
                    </a>
                    <a
                        href="https://www.instagram.com/socially.sam/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
                        aria-label="Twitter Profile"
                    >
                        <Instagram size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;