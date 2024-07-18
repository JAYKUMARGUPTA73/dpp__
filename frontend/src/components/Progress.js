import React from 'react';

const CircularProgress = ({ percentage =75 }) => {
  const maxRadius = 40; // Set the maximum radius
  const radius = (percentage / 100) * maxRadius; // Calculate the radius based on the percentage
  const circumference = 2 * Math.PI * maxRadius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative h-48 w-48">
      <svg
        viewBox="0 0 100 100"
        className="h-full w-full transform rotate-[-90deg]"
      >
        <circle
          cx="50"
          cy="50"
          r={maxRadius}
          stroke="#e2e8f0"
          strokeWidth="8"
          fill="none"
          className="stroke-current text-gray-300"
        />
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#4fd1c5"
          strokeWidth="8"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          fill="none"
          className="stroke-current text-teal-500"
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-gray-800">
        {`${percentage}%`}
      </span>
    </div>
  );
};

export default CircularProgress;