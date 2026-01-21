import { useState } from "react";
import SurpriseButton from "./components/SurpriseButton";
import CodeGate from "./components/CodeGate";
import LoveScene from "./components/LoveScene";

export default function App() {
  const [step, setStep] = useState("start"); // start | code | success

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      {step === "start" && <SurpriseButton onClick={() => setStep("code")} />}
      {step === "code" && <CodeGate onSuccess={() => setStep("success")} />}
      {step === "success" && <LoveScene />}
    </div>
  );
}
