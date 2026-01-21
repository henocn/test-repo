import { useEffect, useState } from "react";

const PART1 = "Henoc";
const PART2 = " Esther";

export default function App() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [step, setStep] = useState(0);

  useEffect(() => {
    let timeout;

    // Écriture de Henoc
    if (step < PART1.length) {
      timeout = setTimeout(() => {
        setText1((prev) => prev + PART1[step]);
        setStep(step + 1);
      }, 400);
    }

    // Écriture de Dev après Henoc
    else if (step < PART1.length + PART2.length) {
      timeout = setTimeout(() => {
        const i = step - PART1.length;
        setText2((prev) => prev + PART2[i]);
        setStep(step + 1);
      }, 300);
    }

    return () => clearTimeout(timeout);
  }, [step]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-widest flex items-center gap-6">
        <span className="neon-henoc">{text1}</span>

        {text1.length === PART1.length && (
          <span className="neon-heart" />
        )}

        <span className="neon-dev">
          {text2}
        </span>
      </h1>
    </div>
  );
}
