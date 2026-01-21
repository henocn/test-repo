import { useEffect, useState } from "react";
import SurpriseButton from "./components/SurpriseButton";
import CodeGate from "./components/CodeGate";
import LoveScene from "./components/LoveScene";

export default function App() {
  const [step, setStep] = useState("start"); // start | code | success

  useEffect(() => {
    const audio = document.getElementById("bg-music");
    if (audio) {
      audio.volume = 0.4;
      audio.play().catch(() => {});
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center overflow-hidden">
      <audio
        id="bg-music"
        src="/jmetire.mp3"
        loop
        autoPlay
      />

      {step === "start" && <SurpriseButton onClick={() => setStep("code")} />}
      {step === "code" && <CodeGate onSuccess={() => setStep("success")} />}
      {step === "success" && <LoveScene />}
    </div>
  );
}
