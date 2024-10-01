import React, { useState, useEffect, useRef } from 'react';

const CountingNumbers = ({ targetNumber, duration }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.unobserve(counterRef.current); // Stop observing after entering view
      }
    });

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const incrementValue = targetNumber / (duration / 100); // How much the counter increases each 100ms
    let currentCount = 0;

    const interval = setInterval(() => {
      currentCount += incrementValue;
      if (currentCount >= targetNumber) {
        setCount(targetNumber); // Ensures it stops exactly at the target number
        clearInterval(interval); // Stop the interval when the target is reached
      } else {
        setCount(Math.round(currentCount)); // Update the count state
      }
    }, 100); // Updates every 100ms

    return () => clearInterval(interval);
  }, [isInView, targetNumber, duration]);

  return (
    <div ref={counterRef}>
      <h2>{count}</h2>
    </div>
  );
};

export default CountingNumbers;
