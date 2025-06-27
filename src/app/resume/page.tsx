import { Briefcase, Download, GraduationCap, Lightbulb } from "lucide-react";
import React from 'react'


const Resume: React.FC = () => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-8 border border-gray-200">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 flex items-center">
                <Briefcase size={36} className="text-blue-500 mr-3" /> My Resume
            </h2>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Below is a summary of my professional experience, education, and skills.
                You can also download my full resume for a detailed overview.
            </p>

            {/* Download Button */}
            <div className="mb-10 text-center">
                <a
                    href="/MyResume.pdf"
                    download="Samuel_Ikoli_Resume.pdf"
                    className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-bold rounded-full shadow-lg
         hover:bg-green-700 transition-colors duration-300 transform hover:scale-105
         focus:outline-none focus:ring-4 focus:ring-green-300"
                    aria-label="Download Full Resume"
                >
                    <Download size={24} className="mr-3" />
                    Download Full Resume (PDF)
                </a>
            </div>

            {/* Experience Section */}
            <section className="mb-10">
                <h3 className="text-3xl font-semibold text-gray-800 mb-5 border-b-2 border-blue-400 pb-2 flex items-center">
                    <Briefcase size={28} className="text-blue-500 mr-2" /> Experience
                </h3>

                <div className="space-y-6">
                    <div className="p-5 bg-gray-50 rounded-lg shadow-sm border border-gray-200">
                        <h4 className="text-xl font-bold text-gray-900">Backend Developer</h4>
                        <p className="text-md text-gray-600 mb-2">Lendsqr | Dec 2023 - Sept 2024</p>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                            <li>Refactored legacy codebases for improved quality using software engineering principles.</li>
                            <li>Migrated code from JavaScript to TypeScript emphasizing object-oriented design.</li>
                            <li>Applied complexity analysis and SDLC best practices to debug and optimize implementations.</li>
                            <li>Built features using innovative technologies and efficient algorithm design.</li>
                        </ul>
                    </div>

                    <div className="p-5 bg-gray-50 rounded-lg shadow-sm border border-gray-200">
                        <h4 className="text-xl font-bold text-gray-900">Tech Support</h4>
                        <p className="text-md text-gray-600 mb-2">Consummate Traders | Sep 2023 - Dec 2023</p>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                            <li>Collaborated with the technical team to optimize operations through smart data structures.</li>
                            <li>Investigated and improved product quality with tech-driven solutions.</li>
                        </ul>
                    </div>

                    <div className="p-5 bg-gray-50 rounded-lg shadow-sm border border-gray-200">
                        <h4 className="text-xl font-bold text-gray-900">Fullstack Developer</h4>
                        <p className="text-md text-gray-600 mb-2">Buzz.ng | Dec 2022 - Jun 2023</p>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                            <li>Led the development of a cross-platform mobile app using React Native.</li>
                            <li>Built RESTful APIs and CRUD operations using Node.js and Express with SQL database.</li>
                            <li>Implemented frontend features based on designs using libraries like react-native-maps and Google autofill.</li>
                            <li>Integrated third-party services for authentication, ORM, and media.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section className="mb-10">
                <h3 className="text-3xl font-semibold text-gray-800 mb-5 border-b-2 border-blue-400 pb-2 flex items-center">
                    <GraduationCap size={28} className="text-blue-500 mr-2" /> Education
                </h3>

                <div className="space-y-6">
                    <div className="p-5 bg-gray-50 rounded-lg shadow-sm border border-gray-200">
                        <h4 className="text-xl font-bold text-gray-900">
                            BSc. Electrical and Electronics Engineering
                        </h4>
                        <p className="text-md text-gray-600 mb-2">Nile University of Nigeria | CGPA: 4.38</p>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="mb-10">
                <h3 className="text-3xl font-semibold text-gray-800 mb-5 border-b-2 border-blue-400 pb-2 flex items-center">
                    <Lightbulb size={28} className="text-blue-500 mr-2" /> Key Skills
                </h3>
                <div className="flex flex-wrap gap-3">
                    {[
                        'JavaScript', 'TypeScript', 'Python', 'GoLang', 'Java', 'C',
                        'React', 'Angular', 'NextJS', 'NodeJS', 'Express', 'Django',
                        'FastAPI', 'Fiber', 'ThreeJS', 'SQL', 'MongoDB',
                        'Git', 'Linux', 'VS Code', 'AWS', 'AI Integration'
                    ].map((skill) => (
                        <span
                            key={skill}
                            className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full shadow-sm"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </section>

            {/* Projects Summary */}
            <section>
                <h3 className="text-3xl font-semibold text-gray-800 mb-5 border-b-2 border-blue-400 pb-2 flex items-center">
                    <Briefcase size={28} className="text-blue-500 mr-2" /> Projects & Open Source
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>
                        Built the backend for a Chrome video recorder with cloud storage and transcription using RabbitMQ and Deepgram.
                    </li>
                    <li>
                        Developed CRUD APIs for event planning and job board apps; also supported mobile debugging.
                    </li>
                    <li>
                        Created an AI agent using Go, LangChain, and Gemini for Retrieval Augmented Generation (RAG).
                    </li>
                    <li>
                        Participated in Hacktoberfest & MLH Career Week; explored Auth0, MongoDB RAG, and Google AI APIs.
                    </li>
                    <li>
                        Contributed to open source: OMRChecker, CO2.js, Python Programs, GreenSoftwareDirectory.
                    </li>
                </ul>
            </section>
        </div>
    );

};

export default Resume;