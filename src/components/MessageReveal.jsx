import { useEffect, useState } from "react";
import Confetti from "react-confetti";

export default function MessageReveal({ message, messageIndex, onFinish }) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [showConfetti, setShowConfetti] = useState(true);
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
    if (index < message.length) {
      const timer = setTimeout(() => {
        setDisplayedText(displayedText + message[index]);
        setIndex(index + 1);
      }, 50);
      return () => clearTimeout(timer);
    } else if (index === message.length && message.length > 0) {
      setTimeout(() => {
        setShowConfetti(false);
      }, 2000);
    }
  }, [index, displayedText, message]);

  const handleNext = () => {
    onFinish();
  };

  return (
    <>
      {showConfetti && (
        <Confetti
          width={size.width}
          height={size.height}
          numberOfPieces={150}
          recycle
          opacity={0.6}
          drawShape={(ctx) => {
            ctx.font = "28px serif";
            ctx.fillText("💌", 0, 0);
          }}
        />
      )}

      <div className="flex flex-col items-center justify-center gap-8 px-6 py-12 min-h-screen">
        <div className="text-sm sm:text-base md:text-lg text-pink-300 opacity-70">
          Message {messageIndex}/6
        </div>

        <div className="relative w-full max-w-2xl h-64 sm:h-80 bg-gradient-to-br from-pink-900/20 to-blue-900/20 rounded-2xl border-2 border-pink-500/30 p-8 flex items-center justify-center shadow-2xl">
          <p className="neon-message text-2xl sm:text-3xl md:text-4xl text-center leading-relaxed">
            {displayedText}
          </p>
        </div>

        {index === message.length && (
          <button
            onClick={handleNext}
            className="neon-button px-8 py-4 text-lg mt-8 animate-pulse"
          >
            Continu 💘
          </button>
        )}
      </div>
    </>
  );
}
