import { useState } from "react";

const SECRET_CODE = "1402"; // modifie si besoin

export default function CodeGate({ onSuccess }) {
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);

  const submit = () => {
    if (code === SECRET_CODE) {
      onSuccess();
    } else {
      setError(true);
    }
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <input
        type="password"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Entre le code ❤️"
        className="neon-input text-xl px-6 py-3 rounded-lg text-center"
      />

      <button
        onClick={submit}
        className="neon-button px-10 py-4 text-xl"
      >
        Valider
      </button>

      {error && (
        <div className="text-6xl mt-6 animate-pulse">
          💔
        </div>
      )}
    </div>
  );
}
