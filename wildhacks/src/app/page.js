"use client";

import React, { useEffect, useState, useRef } from "react";

export default function Home() {
  const [mainVisible, setMainVisible] = useState(false);
  const [secondHeadingVisible, setSecondHeadingVisible] = useState(false);

  const mainRef = useRef(null);
  const secondHeadingRef = useRef(null);

  const mainWasVisible = useRef(false);
  const secondWasVisible = useRef(false);

  // Intersection Observer for Main Section
  useEffect(() => {
    if (!mainRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!mainWasVisible.current && entry.intersectionRatio >= 0.3) {
            setMainVisible(true);
            mainWasVisible.current = true;
          } else if (mainWasVisible.current && entry.intersectionRatio < 0.6) {
            setMainVisible(false);
            mainWasVisible.current = false;
          }
        });
      },
      { threshold: [0, 0.3, 0.6] }
    );

    observer.observe(mainRef.current);
    return () => {
      if (mainRef.current) observer.unobserve(mainRef.current);
    };
  }, []);

  // Intersection Observer for Second Heading
  useEffect(() => {
    if (!secondHeadingRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!secondWasVisible.current && entry.intersectionRatio >= 0.3) {
            setSecondHeadingVisible(true);
            secondWasVisible.current = true;
          } else if (secondWasVisible.current && entry.intersectionRatio < 0.6) {
            setSecondHeadingVisible(false);
            secondWasVisible.current = false;
          }
        });
      },
      { threshold: [0, 0.3, 0.6] }
    );

    observer.observe(secondHeadingRef.current);
    return () => {
      if (secondHeadingRef.current) observer.unobserve(secondHeadingRef.current);
    };
  }, []);

  return (
    <div>
      <div
        ref={mainRef}
        className={`flex flex-col items-center justify-center min-h-screen bg-white text-center transition-all transform duration-2000 ${
          mainVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
      >
        <h1 className="text-9xl font-bold mb-25">Import Calculator</h1>
        <div className="flex gap-4">
          <button className="px-10 py-8 bg-green-400 text-2xl text-black font-bold rounded-full hover:bg-green-600">
            Get Started
          </button>
        </div>
      </div>

      <div
        ref={secondHeadingRef}
        className={`flex flex-col items-center justify-center min-h-screen bg-white text-center transition-all transform duration-2000 ${
          secondHeadingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
      >
        <h2 className="text-6xl font-bold">For all your import calculation needs.</h2>
      </div>
    </div>
  );
}
