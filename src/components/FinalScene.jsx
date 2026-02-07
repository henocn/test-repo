import { useEffect, useState } from "react";
import Confetti from "react-confetti";

export default function FinalScene({ finalMessage }) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
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
    if (index < finalMessage.length) {
      const timer = setTimeout(() => {
        setDisplayedText(displayedText + finalMessage[index]);
        setIndex(index + 1);
      }, 40);
      return () => clearTimeout(timer);
    }
  }, [index, displayedText, finalMessage]);

  return (
    <>
      <Confetti
        width={size.width}
        height={size.height}
        numberOfPieces={200}
        recycle
        opacity={0.7}
        drawShape={(ctx) => {
          const emojis = ["💗", "✨", "🌹", "💕", "🎇"];
          const emoji = emojis[Math.floor(Math.random() * emojis.length)];
          ctx.font = "32px serif";
          ctx.fillText(emoji, 0, 0);
        }}
      />

      <div className="flex flex-col items-center justify-center gap-8 px-6 py-12 min-h-screen text-center">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-red-500 to-pink-500 rounded-2xl blur-xl opacity-40 animate-pulse" />
          <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 p-12 rounded-2xl border-2 border-pink-500/50 max-w-3xl shadow-2xl">
            <h1 className="neon-final text-4xl sm:text-5xl md:text-6xl mb-8 animate-glow">
              FIN 💗
            </h1>

            <p className="neon-message text-2xl sm:text-3xl md:text-4xl leading-relaxed">
              {displayedText}
            </p>
          </div>
        </div>

        {index === finalMessage.length && (
          <div className="flex flex-col gap-4 mt-12">
            <div className="text-6xl animate-bounce">💘</div>
            <p className="text-pink-300 text-xl">Merci de m'avoir choisi(e) ❤️</p>
          </div>
        )}
      </div>
    </>
  );
}
