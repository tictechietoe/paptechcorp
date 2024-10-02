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
      } else {
        setIsInView(false);
        setCount(0); // Reset the count when out of view
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
        setCount(targetNumber); // Stop at the target number
        clearInterval(interval); // Clear interval when the target is reached
      } else {
        setCount(Math.round(currentCount)); // Update the count
      }
    }, 100); // Update every 100ms

    return () => clearInterval(interval); // Clean up the interval
  }, [isInView, targetNumber, duration]);

  return (
    <div ref={counterRef}>
      <h2>{count}</h2>
    </div>
  );
};

export default CountingNumbers;
