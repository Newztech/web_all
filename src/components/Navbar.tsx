import React from 'react';
import { Menu, X, Code, Github } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Code className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">TechSolutions</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#features" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Features</a>
              <a href="#about" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="#contact" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              <a href="https://github.com" className="flex items-center text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
                <Github className="h-5 w-5 mr-1" />
                GitHub
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="block text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium">Features</a>
            <a href="#about" className="block text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#contact" className="block text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium">Contact</a>
            <a href="https://github.com" className="flex items-center text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium">
              <Github className="h-5 w-5 mr-1" />
              GitHub
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}