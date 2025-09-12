import Dialog from "./dialog";

interface LeftMidSectionProps {
  title: string;
  url: string;
  tags: string;
  description: string;
  dialogMode: string;
  onChangeTitle(newTitle: string): void;
  onChangeUrl(newUrl: string): void;
  onChangeDescription(newDescription: string): void;
  onChangeTags(newTags: string): void;
  onCancel?() : void;
  onAdd(): void;
}

const LeftMidSection = ({
  title,
  url,
  tags,
  dialogMode,
  description,
  onChangeTitle,
  onChangeUrl,
  onChangeDescription,
  onChangeTags,
  onCancel,
  onAdd,
}: LeftMidSectionProps) => {
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
        tags={tags}
        description={description}
        onChangeTitle={onChangeTitle}
        onChangeUrl={onChangeUrl}
        onChangeDescription={onChangeDescription}
        onAdd={onAdd}
        onCancel={onCancel}
        onChangeTags={onChangeTags}
        dialogMode={dialogMode}
      />
    </div>
  );
};

export default LeftMidSection;
