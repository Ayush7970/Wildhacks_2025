"use client";

import React, { useEffect, useState, useRef } from "react";
import Spline from "@splinetool/react-spline";

export default function Home() {
  // const [splineLoading, setSplineLoading] = useState(true);
  const [splineLoaded, setSplineLoaded] = useState(false);
  const [mainInView, setMainInView] = useState(false);

  // const [mainVisible, setMainVisible] = useState(false);
  const [secondHeadingVisible, setSecondHeadingVisible] = useState(false);
  
  const mainRef = useRef(null);
  const secondHeadingRef = useRef(null);

  // const mainWasVisible = useRef(false);
  const secondWasVisible = useRef(false);

  // Intersection Observer for the hero section.
  useEffect(() => {
    if (!mainRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Fade in when at least 30% is visible, fade out when less than 60% is visible.
          if (entry.intersectionRatio >= 0.3) {
            setMainInView(true);
          } else if (entry.intersectionRatio < 0.6) {
            setMainInView(false);
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

  // When the Spline scene loads, mark it as loaded.
  const handleSplineLoad = () => {
    setSplineLoaded(true);
  };

  // Combine both conditions for hero visibility.
  const mainVisible = splineLoaded && mainInView;

  return (
    <div>
      <div
        ref={mainRef}
        className={`relative flex flex-col items-center justify-center min-h-screen text-center transition-all transform duration-2000 ${
          mainVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
      >
        <div className="absolute inset-0 z-0">
          {!splineLoaded && (
            <div className="spline-loading"></div>
          )}
          <Spline 
            scene="https://prod.spline.design/RxF1KmmVuF0zLFf4/scene.splinecode"
            onLoad={handleSplineLoad}
          />
        </div>
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-9xl font-bold mb-25">Import Calculator</h1>
          <button className="mx-auto px-10 py-8 bg-green-400 text-2xl text-black font-bold rounded-full hover:bg-green-600">
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
        <h2 className="text-6xl mb-5 font-bold">
          For all your import calculation needs.
        </h2>
        <p className="text-2xl mt-4">
          Importing made easy with our comprehensive calculator.
        </p>
      </div>
    </div>
  );
}
