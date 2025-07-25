'use client';

import { Github, Sparkles } from 'lucide-react';

export function Header() {
  return (
    <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 lg:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-1.5 lg:p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
              <Sparkles className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg lg:text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                README Generator
              </h1>
              <p className="text-xs lg:text-sm text-gray-400 hidden sm:block">
                Create stunning GitHub profiles in minutes
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 text-sm text-gray-400">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Live Preview
            </div>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 lg:p-2 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Github className="w-4 h-4 lg:w-5 lg:h-5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}