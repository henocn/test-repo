import { useEffect, useState } from "react";

const PART1 = "Henoc";
const PART2 = " Esther";

export default function LoveScene() {
  const [t1, setT1] = useState("");
  const [t2, setT2] = useState("");
  const [i, setI] = useState(0);

  useEffect(() => {
    let t;
    if (i < PART1.length) {
      t = setTimeout(() => {
        setT1(t1 + PART1[i]);
        setI(i + 1);
      }, 350);
    } else if (i < PART1.length + PART2.length) {
      const j = i - PART1.length;
      t = setTimeout(() => {
        setT2(t2 + PART2[j]);
        setI(i + 1);
      }, 300);
    }
    return () => clearTimeout(t);
  }, [i]);

  return (
    <h1 className="flex items-center gap-4 text-4xl sm:text-6xl md:text-8xl">
      <span className="neon-henoc">{t1}</span>
      {t1.length === PART1.length && <span className="neon-heart" />}
      <span className="neon-dev">{t2}</span>
    </h1>
  );
}
