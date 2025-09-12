
interface FloatingButtonProps {
  onToggleDialogue(): void;
}



const FloatingButton = ({ onToggleDialogue }: FloatingButtonProps) => {
  return (
    <button id="floating-button" className="mobile" onClick={onToggleDialogue}>
      +
    </button>
  );
};

export default FloatingButton;
