import { useState } from "react";
import SurpriseButton from "./components/SurpriseButton";
import AccessGate from "./components/AccessGate";
import QuestionScreen from "./components/QuestionScreen";
import MessageReveal from "./components/MessageReveal";
import FinalScene from "./components/FinalScene";
import data from "./data.json";

export default function App() {
  const [step, setStep] = useState("start");
  const [playMusic, setPlayMusic] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  const startExperience = () => {
    setPlayMusic(true);
    setStep("code");
  };

  const unlockQuestions = () => {
    setStep("questions");
  };

  const handleCorrectAnswer = () => {
    setShowMessage(true);
  };

  const handleWrongAnswer = () => {
    // Peut ajouter une logique pour les mauvaises réponses
  };

  const handleMessageFinished = () => {
    if (currentQuestionIndex < data.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowMessage(false);
    } else {
      setStep("final");
    }
  };

  const currentQuestion = data.questions[currentQuestionIndex];

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
      {step === "code" && <AccessGate secretCode={data.secretCode} onSuccess={unlockQuestions} />}
      
      {step === "questions" && (
        <>
          {!showMessage ? (
            <QuestionScreen
              question={currentQuestion}
              onAnswerCorrect={handleCorrectAnswer}
              onAnswerWrong={handleWrongAnswer}
            />
          ) : (
            <MessageReveal
              message={currentQuestion.message}
              messageIndex={currentQuestionIndex + 1}
              onFinish={handleMessageFinished}
            />
          )}
        </>
      )}

      {step === "final" && <FinalScene finalMessage={data.finalMessage} />}
    </div>
  );
}
