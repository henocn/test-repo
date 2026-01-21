export default function SurpriseButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="neon-button text-3xl px-12 py-6 rounded-xl"
    >
      🎁 SURPRISE
    </button>
  );
}
