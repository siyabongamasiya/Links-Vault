import Dialog from "./dialog";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0,0,0,0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1000,
        }}
        onClick={onClose}
      ></div>

      <div
        style={{
          position: "fixed",
          width:"50%",
          top: "50%",
          left: "50%",
          height:"70%",
          transform: "translate(-50%, -50%)",
          background: "#fff",
          padding: "2rem",
          borderRadius: "8px",
          zIndex: 1001,
          minWidth: "70%",
        }}
      >
        <Dialog
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            height: "100%",
            padding:"10px"
          }}
        />
      </div>
    </>
  );
};

export default Modal;
