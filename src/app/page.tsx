'use client'

// App.tsx
// This is the main entry file for the Next.js application.
// It wraps all pages with the Layout component to ensure
// the Navbar and Footer are present on every page.

import React from 'react';
import {
  Mail,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import Typewriter from './components/Typewriter';
import Samuel from './components/Samuel';




// pages/index.tsx (Home Page)
const Home: React.FC = () => {
  return (
    <div className='grid lg:grid-cols-3'>
      <div className="min-h-[60vh] lg:col-span-2 flex flex-col items-center justify-center text-center p-6 rounded-lg ">
        <Sparkles size={60} className="text-blue-500 mb-6 animate-pulse" />
        <Typewriter />
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <a rel="noreferrer" href="/projects">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg
                     flex items-center space-x-2 transform hover:scale-105 transition duration-300 ease-in-out
                     focus:outline-none focus:ring-4 focus:ring-blue-300 cursor-pointer"
            >
              <span>View My Work</span>
              <ArrowRight size={20} />
            </button>
          </a>
          <a href="/contact">
            <button
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-full shadow-lg
                     flex items-center space-x-2 transform hover:scale-105 transition duration-300 ease-in-out
                     focus:outline-none focus:ring-4 focus:ring-gray-400 cursor-pointer"
            >
              <span>Get in Touch</span>
              <Mail size={20} />
            </button>
          </a>
        </div>
      </div>
      <div className='min-h-[60vh] lg:col-span-1 flex flex-col items-center text-center p-6 rounded-lg'>
        <Samuel />
      </div>

    </div>

  );
};

// pages/about.tsx (About Page)



// Main App component
const App: React.FC = () => {



  return (
    <>
      <Home />
    </>
  );
};

export default App;
