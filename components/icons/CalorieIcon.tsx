
import React from 'react';

export const CalorieIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14.5 4.5c.991.991 1.749 2.43 2.121 4.242" />
    <path d="M17.5 7.5c.61.952 1.01 2.235 1.01 3.75 0 3.314-2.686 6-6 6s-6-2.686-6-6c0-1.515.4-2.798 1.01-3.75" />
    <path d="M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0" />
  </svg>
);
