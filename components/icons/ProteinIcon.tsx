
import React from 'react';

export const ProteinIcon: React.FC<{ className?: string }> = ({ className }) => (
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
    <path d="M12.13 2.69a2 2 0 0 1 2.74 0l6.43 6.43a2 2 0 0 1 0 2.74l-3.32 3.32a2 2 0 0 1-2.83 0l-3.32-3.32a2 2 0 0 1 0-2.83l.29-.29" />
    <path d="M12.13 11.12a2 2 0 0 0-2.74 0l-6.43 6.43a2 2 0 0 0 0 2.74l.29.29" />
    <path d="m16 16 3-3" />
    <path d="m10 10-3 3" />
    <path d="m.5 12.5 3-3" />
    <path d="m20 20-3-3" />
    <path d="m4.5 8.5 3-3" />
  </svg>
);
