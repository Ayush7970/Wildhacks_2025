"use client";

import React, { useEffect, useState } from 'react';

export default function Home() {
  const [headingsFadeIn, setHeadingsFadeIn] = useState(false);
  const [buttonFadeIn, setButtonFadeIn] = useState(false);
  const [cardFadeIn, setCardFadeIn] = useState(false);

  useEffect(() => {
    const headingsTimer = setTimeout(() => {
      setHeadingsFadeIn(true);
    }, 500);

    const buttonTimer = setTimeout(() => {
      setButtonFadeIn(true);
    }, 2500);

    const cardTimer = setTimeout(() => {
      setCardFadeIn(true);
    }
    , 4000);

    return () => {
      clearTimeout(headingsTimer);
      clearTimeout(buttonTimer);
      clearTimeout(cardTimer);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center">
      <h1
        className={`text-9xl font-bold mb-30 transition-all transform ${
          headingsFadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        } duration-2000`}
      >
        Import Calculator
      </h1>

      <div
        className={`flex gap-4 transition-all transform ${
          buttonFadeIn  ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
        style={{ transitionDuration: "2000ms" }}
      >
        <button className="px-10 py-8 bg-green-400 text-2xl text-black font-bold rounded-full hover:bg-blue-600">
          Get Started
        </button>
      </div>

      <div 
        className={`mt-8 flex flex-wrap justify-center gap-4 transition-all transform ${
          cardFadeIn  ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
        style={{ transitionDuration: "2000ms" }}
      >
        <div className="w-80 p-10 rounded-lg bg-white/10 text-black shadow-md backdrop-blur-sm">
          <h3 className="text-xl font-semibold">What</h3>
          <p className="text-sm">Calculating Tariffs.</p>
        </div>
        <div className="w-80 p-10 rounded-lg bg-white/10 text-black shadow-md backdrop-blur-sm">
          <h3 className="text-xl font-semibold">Why</h3>
          <p className="text-sm">Because Trump.</p>
        </div>
        <div className="w-80 p-10 rounded-lg bg-white/10 text-black shadow-md backdrop-blur-sm">
          <h3 className="text-xl font-semibold">How</h3>
          <p className="text-sm">Graph Fuckery.</p>
        </div>
      </div>
    </div>
  );
}