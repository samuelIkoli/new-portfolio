'use client'
import { Code, ExternalLink, GitBranch } from "lucide-react";

// Define interface for a project item
interface ProjectItem {
    title: string;
    description: string;
    technologies: string[];
    githubLink?: string;
    liveLink?: string;
    courseLink?: string;
}

// pages/projects.tsx (Projects Page)
const Projects: React.FC = () => {
    const projects: ProjectItem[] = [
        {
            title: 'Afro Fashion Fuse',
            description: 'I built AFF Designer, a browser-based fashion design studio using Next.js, TypeScript, TailwindCSS, and Fabric.js v6. The platform lets users customize garment patterns (shirts, sleeves, collars, etc.) on standardized human frames, adjusting measurements like sleeve length or neckline depth. With anchor-based alignment, fabric textures (e.g. Ankara, denim), and export options to PNG/SVG or JSON, it provides a modern tool for designers to create and preview clothing digitally',
            technologies: ['Typescript', 'NodeJS', 'NextJS', 'PostgreSQL'],
        },
        {
            title: 'AI Chatbot',
            description: 'Leveraging Retrieval-Augmented Generation (RAG) and Google Gemini as the Large Language Model (LLM) to develop a Support AI that processes documents and text inputs from companies, enabling it to provide accurate, context-aware responses to customer inquiries.',
            technologies: ['GoLang', 'Gin', 'Google Gemini', 'MongoDB'],
            githubLink: 'https://github.com/thegreenwebfoundation/co2.js'

        },
        {
            title: 'Open Source Contribution',
            description: 'Contributed PRs to various open source projects. Notable ones include Green Software for tracking CO2 emissions, an OMR checker for mobile scanning, and basic Python programs.',
            technologies: ['JavaScript', 'Python', 'Node.js'],
            githubLink: 'https://github.com/thegreenwebfoundation/co2.js'

        },
        {
            title: 'Auth n 2FA',
            description: 'Authentication service with 2FA using speakeasy for TOTP, QRCode generation, and MySQL via KnexJS. Bcrypt for password hashing, React for frontend.',
            technologies: ['Node.js', 'Express', 'MySQL', 'KnexJS', 'React', 'Speakeasy', 'QRCode'],
            githubLink: 'https://github.com/samuelIkoli/auth_n_2fa',
        },
        {
            title: 'Stream and Save',
            description: 'Streams video and downloads it to local storage, queues jobs with RabbitMQ, transcribes with Deepgram.',
            technologies: ['Node.js', 'RabbitMQ', 'Deepgram', 'File System'],
            githubLink: 'https://github.com/samuelIkoli/streamAndSave'
        },
        {
            title: 'Pip Calculator',
            description: 'A calculator to determine the pip value in a trader\'s local currency.',
            technologies: ['JavaScript', 'React'],
            githubLink: 'https://github.com/samuelIkoli/pipcalculator',
            liveLink: 'https://pipcalculator.vercel.app/'
        },
        {
            title: 'Buzz',
            description: 'Mobile app for event management and promotion. Cross-platform app with React Native, backend with Express and MySQL, media with Firebase.',
            technologies: ['React Native', 'Node.js', 'Express', 'MySQL', 'Firebase'],
            githubLink: 'https://github.com/samuelIkoli/Buzz',
            liveLink: 'https://www.youtube.com/watch?v=TnROL-8Qm0k'
        },
        {
            title: 'CS50x',
            description: 'Completed Harvard\'s CS50x course with projects using C, Python, Flask, SQL, HTML, CSS, JS. Built problem-solving tools and web apps.',
            technologies: ['C', 'Python', 'Flask', 'SQL', 'HTML', 'CSS', 'JavaScript'],
            courseLink: 'https://cs50.harvard.edu/x/2022/'
        },
        {
            title: 'Back End and API Certification',
            description: 'FreeCodeCamp certification building APIs and microservices with Node.js, Express, and MongoDB.',
            technologies: ['Node.js', 'Express', 'MongoDB', 'Mongoose'],
            githubLink: 'https://github.com/samuelIkoli/Free-code-camp-Backend',
            courseLink: 'https://www.freecodecamp.org/learn/back-end-development-and-apis/'
        },
        {
            title: 'Creative Talent Cooperative',
            description: 'Full stack web development for a cooperative in Abuja using WordPress, Plesk, WooCommerce, Flutterwave.',
            technologies: ['WordPress', 'WooCommerce', 'Flutterwave', 'Plesk'],
            liveLink: 'https://creativetalent.coop/'
        },
        {
            title: 'Yelpcamp',
            description: 'Yelp-like app for camps with full-stack dev using Node.js, EJS, MongoDB, Cloudinary. Built as part of Colt Steele\'s web dev bootcamp.',
            technologies: ['Node.js', 'Express', 'MongoDB', 'EJS', 'Cloudinary'],
            githubLink: 'https://github.com/samuelIkoli/Yelpcamp',
            liveLink: 'https://yelpcamp-ruddy.vercel.app/',
            courseLink: 'https://www.udemy.com/course/the-web-developer-bootcamp/'
        },
        {
            title: 'K-9JA',
            description: 'Dog sales website using EJS, Bootstrap, Express, and Heroku. Dynamic routing for dog listings.',
            technologies: ['Node.js', 'Express', 'EJS', 'Bootstrap'],
            githubLink: 'https://github.com/samuelIkoli/K-9JA',
            liveLink: 'https://k-9-ja.vercel.app/'
        },
        {
            title: 'Bluetooth Tracker',
            description: 'Final year project to track small items via Bluetooth using a mobile app that beeps and estimates distance.',
            technologies: ['Bluetooth', 'Mobile App', 'Embedded Systems']
        },
        {
            title: 'Balloon beach',
            description: 'Unity game using C#. Built during a Unity Udemy course. No source code shared but certification available.',
            technologies: ['Unity', 'C#'],
            liveLink: 'Unity.pdf'
        },
        {
            title: 'TO-DO APP',
            description: 'Simple TODO app using React and hooks.',
            technologies: ['React', 'JavaScript'],
            githubLink: 'https://github.com/samuelIkoli/Portfolio',
            liveLink: 'https://my-portfolio-343207.web.app//todo'
        },
        {
            title: 'Memory Game',
            description: 'Classic memory game using React hooks.',
            technologies: ['React', 'JavaScript'],
            githubLink: 'https://github.com/samuelIkoli/Portfolio',
            liveLink: 'https://my-portfolio-343207.web.app//memory_game'
        },
        {
            title: 'MinMax with TicTacToe',
            description: 'Classic memory game using React hooks.',
            technologies: ['React', 'JavaScript'],
            githubLink: 'https://github.com/samuelIkoli/Portfolio',
            liveLink: 'https://my-portfolio-343207.web.app//memory_game'
        },
        {
            title: 'Web Scraper',
            description: 'Scraper using Cheerio and Axios on backend with Bootstrap frontend to extract metadata from a site.',
            technologies: ['Node.js', 'Express', 'Cheerio', 'Axios', 'Bootstrap'],
            githubLink: 'https://github.com/samuelIkoli/Web_scraper',
            liveLink: 'https://web-scraper-coral-sigma.vercel.app/'
        },
        {
            title: 'Simple Calculator (React)',
            description: 'Simple calculator with React using function components and hooks.',
            technologies: ['React', 'JavaScript'],
            githubLink: 'https://github.com/samuelIkoli/Portfolio',
            liveLink: '/calculator'
        },
        {
            title: 'Simple Calculator (Vanilla JS)',
            description: 'Calculator implemented with vanilla HTML, CSS, JS, and DOM manipulation.',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            githubLink: 'https://github.com/samuelIkoli/Web_scraper/blob/master/views/calculator.ejs',
            liveLink: 'https://web-scraper-coral-sigma.vercel.app/calc'
        }
    ];


    return (
        <div className="bg-white shadow-lg rounded-lg p-8 border border-gray-200">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 flex items-center">
                <Code size={36} className="text-blue-500 mr-3" /> My Projects
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Here are some of the key projects I&apos;ve worked on, showcasing my skills
                in full-stack development and various technologies.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg shadow-md p-6 flex flex-col justify-between transform hover:scale-105 transition duration-300 ease-in-out">
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                            <p className="text-gray-700 text-base mb-4 leading-relaxed">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, techIndex) => (
                                    <span key={techIndex} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-start space-x-4 mt-4">
                            {project.githubLink && (
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-4 py-2 bg-gray-800 text-white text-sm font-medium rounded-md shadow-sm hover:bg-gray-700 transition-colors duration-200"
                                    aria-label={`View ${project.title} on GitHub`}
                                >
                                    <GitBranch size={18} className="mr-2" /> GitHub
                                </a>
                            )}
                            {project.liveLink && (
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md shadow-sm hover:bg-blue-700 transition-colors duration-200"
                                    aria-label={`View live demo of ${project.title}`}
                                >
                                    <ExternalLink size={18} className="mr-2" /> Live Demo
                                </a>
                            )}
                            {project.courseLink && !(project.githubLink && project.liveLink) && (
                                <>
                                    <br />
                                    <a
                                        href={project.courseLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md shadow-sm hover:bg-blue-700 transition-colors duration-200"
                                        aria-label={`View course of ${project.title}`}
                                    >
                                        <ExternalLink size={18} className="mr-2" /> Course Link
                                    </a>
                                </>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Projects;