import { useRef, useState } from "react";
import SurpriseButton from "./components/SurpriseButton";
import CodeGate from "./components/CodeGate";
import LoveScene from "./components/LoveScene";

export default function App() {
  const [step, setStep] = useState("start");
  const audioRef = useRef(null);

  const startExperience = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4;
      audioRef.current.play().catch(() => {});
    }
    setStep("code");
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center overflow-hidden">
      <audio
        ref={audioRef}
        src="/jmetire.mp3"
        loop
        preload="auto"
      />

      {step === "start" && <SurpriseButton onClick={startExperience} />}
      {step === "code" && <CodeGate onSuccess={() => setStep("success")} />}
      {step === "success" && <LoveScene />}
    </div>
  );
}
