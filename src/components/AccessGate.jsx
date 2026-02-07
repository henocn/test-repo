import { useState } from "react";

export default function AccessGate({ secretCode, onSuccess }) {
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);

  const submit = () => {
    if (code === secretCode) {
      onSuccess();
    } else {
      setError(true);
      setTimeout(() => setError(false), 1500);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      submit();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8 px-6 py-12 min-h-screen">
      <h1 className="neon-question text-4xl sm:text-5xl md:text-6xl text-center">
        Déverrouille mon cœur 🔐
      </h1>

      <div className="max-w-md w-full flex flex-col gap-6">
        <input
          type="password"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Entre le code secret ❤️"
          className="neon-input text-xl px-6 py-4 rounded-lg text-center"
          autoFocus
        />

        <button onClick={submit} className="neon-button px-10 py-4 text-xl">
          Accès 💫
        </button>

        {error && (
          <div className="flex flex-col items-center gap-4">
            <div className="text-6xl animate-pulse">💔</div>
            <p className="text-red-400 text-lg">Mauvais code... essaie encore</p>
          </div>
        )}
      </div>
    </div>
  );
}
