import { useEffect, useState } from "react";


const TEXT = "Henoc Dev";

export default function App() {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < TEXT.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + TEXT[index]);
        setIndex((i) => i + 1);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <h1 className="neon-text text-9xl font-bold tracking-widest">
        {displayed}
        <span className="cursor">|</span>
      </h1>
    </div>
  );
}
