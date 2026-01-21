import { useEffect, useState } from "react";
import Confetti from "react-confetti";

const PART1 = "Henoc";
const PART2 = " Esther";

export default function LoveScene() {
  const [t1, setT1] = useState("");
  const [t2, setT2] = useState("");
  const [i, setI] = useState(0);
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const onResize = () =>
      setSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

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
    <>
      <Confetti
        width={size.width}
        height={size.height}
        numberOfPieces={180}
        recycle
        drawShape={(ctx) => {
          ctx.font = "20px serif";
          ctx.fillText("❤️", 0, 0);
        }}
      />

      <h1 className="flex items-center text-4xl sm:text-6xl md:text-8xl">
        <span className="neon-henoc">{t1}</span>

        {t1.length === PART1.length && (
          <span className="neon-heart mx-[40px]" />
        )}

        <span className="neon-dev">{t2}</span>
      </h1>
    </>
  );
}
