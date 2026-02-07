import { useState } from "react";

export default function QuestionScreen({ question, onAnswerCorrect, onAnswerWrong }) {
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleAnswer = (index) => {
    if (answered) return;

    const option = question.options[index];
    setSelected(index);
    setAnswered(true);
    setIsCorrect(option.correct);

    setTimeout(() => {
      if (option.correct) {
        onAnswerCorrect();
      } else {
        onAnswerWrong();
      }
    }, 1500);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8 px-6 py-12">
      <h2 className="neon-question text-3xl sm:text-4xl md:text-5xl text-center max-w-2xl">
        {question.question}
      </h2>

      <div className="flex flex-col gap-4 w-full max-w-md">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
            disabled={answered}
            className={`
              neon-option p-4 text-lg sm:text-xl rounded-lg transition-all duration-300
              ${
                selected === index
                  ? isCorrect
                    ? "ring-4 ring-green-500 bg-opacity-20"
                    : "ring-4 ring-red-500 bg-opacity-20"
                  : ""
              }
              ${answered ? "opacity-60 cursor-not-allowed" : "cursor-pointer hover:scale-105"}
            `}
          >
            {option.text}
          </button>
        ))}
      </div>

      {answered && (
        <div className="text-center">
          {isCorrect ? (
            <div className="text-5xl animate-bounce">✅</div>
          ) : (
            <div className="text-5xl animate-pulse">❌</div>
          )}
        </div>
      )}
    </div>
  );
}
