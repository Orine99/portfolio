"use client";

import { useState } from "react";

export default function ProfileImage() {
  const [error, setError] = useState(false);

  return (
    <div className="w-52 h-52 rounded-2xl overflow-hidden border-4 border-accent/30 shadow-2xl flex items-center justify-center bg-navy-800">
      {!error ? (
        <img
          src="/profile.jpg"
          alt="Orine Stephenson"
          className="w-full h-full object-cover"
          onError={() => setError(true)}
        />
      ) : (
        <span className="text-6xl font-black text-accent">OS</span>
      )}
    </div>
  );
}