'use client';
import React, { useState } from 'react';


export default function Dashboard() {
  const [email, setEmail] = useState('');

  const handleEmail = (e:any) => {
    e.preventDefault(); 
    //to: my email
    const toEmail = "danielharrislimos@outlook.com";
    const subject = encodeURIComponent('New Subscriber!');
    const body = encodeURIComponent(`Please notify me when it's ready! My email: ${email}`);
    window.location.href = `mailto:${toEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#000013] to-[#0b0c2a] text-white font-orbitron dark">
      <div className="text-center p-4">
        <h1 className="text-4xl md:text-6xl font-bold text-cyan-400 drop-shadow-md animate-pulse">
          🚀 Coming Soon 🚀
        </h1>

        <p className="text-lg mt-4 text-gray-300">
          You gotta be a little intuitive to find us.. 🌌
        </p>

        <form onSubmit={handleEmail} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={email || ''} // extra safety fallback
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 rounded-full text-white bg-gray-800 border border-cyan-400 placeholder-cyan-300 w-64"
            />
          <button
            type="submit"
            className="px-6 py-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black rounded-full transition duration-300"
          >
            Notify Me
          </button>
        </form>

        <div className="mt-10 flex justify-center">
          {/* <img
            src="assets/images"
            alt="Rocket"
            className="w-36 h-auto animate-float"
          /> */}
        </div>
      </div>
    </div>
  );
}