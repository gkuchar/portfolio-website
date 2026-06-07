"use client";

import { useState, useEffect } from "react";

const roles = [
  "a builder",
  "creative",
  "a software engineer",
  "goals-driven",
  "a creator",
  "a systems engineer",
  "continuously learning",
  "a ML researcher",
  "curious",
  "a holistic thinker",
  "a problem solver",
  "an author",
  "collaborative",
  "a CS tutor",
  "innovative",
  "a designer",
  "adaptable"
];

export default function RotatingRole() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
        setVisible(false);                     

        setTimeout(() => {                      
        setIndex((prev) => (prev + 1) % roles.length);  
        setVisible(true);                      
        }, 400);
    }, 2500);

    return () => clearInterval(interval);
    }, []);

  return <span
  className={`inline-block font-display font-bold transition-opacity duration-300 ${
    visible ? "opacity-100" : "opacity-0"
  }`}
>
  {roles[index]}.
</span>
}