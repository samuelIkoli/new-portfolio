import { Briefcase, GraduationCap, Lightbulb, Eye } from "lucide-react";
import React from 'react'
import { ExperienceCard } from "../components/ExperienceCard";

const experiences = [
    {
        title: "Full Stack Developer",
        company: "Afro Fashion Fuse",
        date: "Jan 2025 - Present",
        bullets: ["Developed a responsive frontend with Next.js 13+, TypeScript, and TailwindCSS, improving cross-device user experience and reducing UI load times by 30%.",
            "Built a parametric garment design studio with Fabric.js v6 that enabled real-time customization of SVG pattern blocks, increasing user design flexibility by 50%.",
            "Implemented a measurement-based scaling system that mapped garments to a standardized human avatars, ensuring consistent fit ratios across all laptop/desktop.pc screen sizes.",
            "Introduced anchor-based JSON metadata to align garment parts precisely, reducing manual adjustment errors and improving pattern assembly accuracy by 40%.",
            "Designed dynamic garment customization features (sleeve length, neck radius, slit depth), empowering users to tailor clothing designs to personal measurements.",
            "Enabled export of designs to PNG/SVG formats with JSON configs, allowing users to re-render designs or integrate with 3D previews for downstream workflows.",
            "Refactored codebase into reusable lib modules, streamlining development and cutting integration time for new garment types by 25%.",
        ]
    },
    {
        title: "Backend Developer",
        company: "Lendsqr",
        date: "Dec 2023 - Sept 2024",
        bullets: [
            "Refactored a legacy codebase by applying modern software engineering principles, reducing technical debt and improving maintainability by 35%.",
            "Migrated core services from JavaScript to TypeScript with an object-oriented design approach, increasing type safety and cutting runtime errors by 40%.",
            "Applied algorithmic complexity analysis and SDLC best practices to debug and optimize implementations, improving system performance and reducing defect resolution time by 25%.",
            "Built and shipped new features using innovative technologies and efficient algorithm design, accelerating delivery cycles and enhancing end-user experience."
        ]
    },
    {
        title: "Tech Support",
        company: "Consummate Traders",
        date: "Sep 2023 - Dec 2023",
        bullets: [
            "Collaborated with the technical team to optimize operations through smart data structures.",
            "Investigated and improved product quality with tech-driven solutions."
        ]
    },
    {
        title: "Fullstack Developer",
        company: "Buzz.ng",
        date: "Dec 2022 - Jun 2023",
        bullets: [
            "Led the development of a cross-platform mobile app using React Native.",
            "Built RESTful APIs and CRUD operations using Node.js and Express with SQL database.",
            "Implemented frontend features based on designs using libraries like react-native-maps and Google autofill.",
            "Integrated third-party services for authentication, ORM, and media."
        ]
    }
];



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

            {/* View Resume Button */}
            <div className="mb-10 text-center">
                <a
                    href="/myResume.pdf"
                    className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-bold rounded-full shadow-lg
         hover:bg-green-700 transition-colors duration-300 transform hover:scale-105
         focus:outline-none focus:ring-4 focus:ring-green-300"
                    aria-label="View Full Resume"
                >
                    <Eye size={24} className="mr-3" />
                    View Full Resume (PDF)
                </a>
            </div>

            {/* Experience Section */}
            <section className="mb-10">
                <h3 className="text-3xl font-semibold text-gray-800 mb-5 border-b-2 border-blue-400 pb-2 flex items-center">
                    <Briefcase size={28} className="text-blue-500 mr-2" /> Experience
                </h3>

                <div className="space-y-6">
                    {experiences.map((exp, idx) => (
                        <ExperienceCard
                            key={idx}
                            title={exp.title}
                            company={exp.company}
                            date={exp.date}
                            bullets={exp.bullets}
                        />
                    ))}
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