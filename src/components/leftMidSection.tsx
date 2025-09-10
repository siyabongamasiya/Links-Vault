import DataAccessObject from "../Utils/dao";
import Dialog from "./dialog";

interface LeftMidSectionProps {
  title: string;
  url: string;
  description: string;
  dialogMode : string;
  onChangeTitle(newTitle: string): void;
  onChangeUrl(newUrl: string): void;
  onChangeDescription(newDescription: string): void;
  onAdd(): void;
}

const LeftMidSection = ({title,url,dialogMode,description,onChangeTitle,onChangeUrl,onChangeDescription,onAdd} :LeftMidSectionProps) => {
  return (
    <div className="desktop" id="leftMidSection">
      <Dialog
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
        title={title}
        url={url}
        description={description}
        onChangeTitle={onChangeTitle}
        onChangeUrl={onChangeUrl}
        onChangeDescription={onChangeDescription}
        onAdd={onAdd}
        dialogMode={dialogMode}
      />
    </div>
  );
};

export default LeftMidSection;
