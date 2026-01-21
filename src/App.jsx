import { useState } from "react";
import SurpriseButton from "./components/SurpriseButton";
import CodeGate from "./components/CodeGate";
import LoveScene from "./components/LoveScene";

export default function App() {
  const [step, setStep] = useState("start");
  const [playMusic, setPlayMusic] = useState(false);

  const startExperience = () => {
    setPlayMusic(true);
    setStep("code");
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center overflow-hidden">
      {playMusic && (
        <iframe
          title="background-music"
          src="https://www.youtube.com/embed/450p7goxZqg?autoplay=1&loop=1&playlist=450p7goxZqg&controls=0&mute=0&modestbranding=1&showinfo=0"
          allow="autoplay"
          className="hidden"
        />
      )}

      {step === "start" && <SurpriseButton onClick={startExperience} />}
      {step === "code" && <CodeGate onSuccess={() => setStep("success")} />}
      {step === "success" && <LoveScene />}
    </div>
  );
}
