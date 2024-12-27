import React from 'react';

export default function Spinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <img
        src="/images/atticus/atticus.svg"
        alt="Loading..."
        className="spinner"
      />
    </div>
  );
} 