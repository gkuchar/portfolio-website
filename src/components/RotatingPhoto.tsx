"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import photo1 from "@/assets/about1.png";
import photo2 from "@/assets/about2-2.png";
import photo3 from "@/assets/about3-2.png";
import photo4 from "@/assets/about4-2.png";

const photos = [photo1, photo2, photo3, photo4];

export default function RotatingPhoto() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % photos.length);
        setVisible(true);
      }, 400);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Image
      src={photos[index]}
      alt="Griffin Kuchar"
      width={400}
      height={462}
      className={`rounded-lg border-4 border-foreground/80 transition-opacity duration-200 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      priority
    />
  );
}