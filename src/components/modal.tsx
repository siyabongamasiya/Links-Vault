import Dialog from "./dialog";

interface ModalProps {
  title: string;
  url: string;
  tags:string;
  description: string;
  dialogMode: string;
  onChangeTitle(newTitle: string): void;
  onChangeUrl(newUrl: string): void;
  onChangeTags(newTags: string): void;
  onChangeDescription(newDescription: string): void;
  onAdd(): void;
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({
  title,
  url,
  dialogMode,
  tags,
  description,
  onChangeTitle,
  onChangeUrl,
  onChangeTags,
  onChangeDescription,
  onAdd,
  isOpen,
  onClose,
}: ModalProps) => {
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
          width: "50%",
          top: "50%",
          left: "50%",
          height: "70%",
          transform: "translate(-50%, -50%)",
          background: "#fff",
          padding: "2rem",
          borderRadius: "8px",
          zIndex: 1001,
          minWidth: "70%",
        }}
      >
        <Dialog
          title={title}
          url={url}
          description={description}
          onChangeTitle={onChangeTitle}
          onChangeUrl={onChangeUrl}
          onChangeDescription={onChangeDescription}
          onAdd={onAdd}
          tags={tags}
          onChangeTags={onChangeTags}
          onCloseModal={() => {
            onClose();
          }}
          dialogMode={dialogMode}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            height: "100%",
            padding: "10px",
          }}
        />
      </div>
    </>
  );
};

export default Modal;
