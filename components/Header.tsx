
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-lg w-full sticky top-0 z-10 border-b border-slate-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
             <svg
              className="w-8 h-8 text-emerald-500"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
              <path d="m15.5 8-4 4-4-4" />
              <path d="m8 14 4 4 4-4" />
            </svg>
            <h1 className="text-xl font-bold text-slate-800 dark:text-white">
              Gemini Nutrition Tracker
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
