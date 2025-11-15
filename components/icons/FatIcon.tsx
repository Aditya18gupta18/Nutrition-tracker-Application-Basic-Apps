
import React from 'react';

export const FatIcon: React.FC<{ className?: string }> = ({ className }) => (
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
    <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3-3-4s-3.5-2.5-3.5-5C12.5 3 10 2 10 2s-3.5 2-2.5 5c0 2.5-1.5 4-3.5 5s-3 2-3 4a7 7 0 0 0 7 7Z" />
    <path d="M12 15a3 3 0 0 0 3-3c0-1.5-1-2-2-2.5S11.5 8 11.5 7C11.5 6 11 5 10.5 5s-1.5 1-1.5 2c0 1 1 1.5 1.5 2.5s2 1.5 2 2.5a3 3 0 0 0-3 3Z" />
  </svg>
);
