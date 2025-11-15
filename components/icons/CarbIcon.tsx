
import React from 'react';

export const CarbIcon: React.FC<{ className?: string }> = ({ className }) => (
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
    <path d="M22 11v1a10 10 0 1 1-9-10" />
    <path d="M12 2a10 10 0 0 0-10 10" />
    <path d="m14 14-4-4 4-4" />
    <path d="M2 12h6" />
  </svg>
);
