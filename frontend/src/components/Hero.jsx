import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";

const Hero = () => {
  const heroRef = useRef(null);
  const [pos, setPos] = useState({ x: "50%", y: "50%" });

  const handleMouseMove = (e) => {
    const rect = heroRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPos({ x: `${x}px`, y: `${y}px` });
  };

  const handleTouchMove = (e) => {
    const rect = heroRef.current.getBoundingClientRect();
    const t = e.touches[0];
    if (!t) return;
    const x = t.clientX - rect.left;
    const y = t.clientY - rect.top;
    setPos({ x: `${x}px`, y: `${y}px` });
  };

  const handleMouseLeave = () => setPos({ x: "-9999px", y: "-9999px" });

  useEffect(() => {
    const rect = heroRef.current?.getBoundingClientRect();
    if (rect) setPos({ x: `${rect.width / 2}px`, y: `${rect.height / 2}px` });
  }, []);

  return (
    <div
      className="hero"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchMove={handleTouchMove}
    >
      <div className="hero-bg" />

      <div className="hero-content">
        <h1>Legends in Stone</h1>
        <p>
        Carved in eternal white, these dragons embody the balance of power
              and grace.  
              Each sculpture tells a story of fire turned to silence, of myths
              captured in stillness.  
              Guardians of forgotten realms, they stand timeless, fierce yet
              serene.  
              Step closer, and the echoes of their roars awaken in your
              imagination.  
              Their wings stretch as if ready to take flight, frozen at the edge
              of legend.  
              In their stillness lies a storm, waiting for the one who dares to
              awaken them.  
              Here, stone becomes myth, and silence whispers of eternity.        </p>
      </div>


<div
        className="flash-overlay"
        style={{ "--x": pos.x, "--y": pos.y }}
      />  
    </div>
  );
};

export default Hero;
