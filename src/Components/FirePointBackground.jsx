"use client";
import React, { useEffect, useState } from "react";

const createFilePoint = () => ({
  id: Math.random(),
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  animationDuration: `${Math.random() * 5 + 5}s`,
});
export const FirePointBackground = () => {
  const [firePoint, setFirePoint] = useState([]);

  useEffect(() => {
    const addFireFlyPoint = () => {
      const newFireFly = createFilePoint();
      setFirePoint(currentFirePoint=> [
        ...currentFirePoint.slice(-14),
         newFireFly
      ]);
    };

    const interval = setInterval(addFireFlyPoint, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 h-full w-full -z-10 overflow-hidden">
      {firePoint.map((fire) => {
        return (
          <div
            key={fire.id}
            className="absolute rounded-full w-[10px] h-[10px] bg-firefly-radial"
            style={{
              top: fire.top,
              left: fire.left,
              animation: `move ${fire.animationDuration} infinite alternate`,
            }}
          ></div>
        );
      })}
    </div>
  );
};
