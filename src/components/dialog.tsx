import Input from "./input";
import Button from "./button";
import useViewportWidth from "../customHooks/customHooks";

interface DialogProps {
  style: React.CSSProperties;
  title: string;
  url: string;
  description: string;
  tags: string;
  dialogMode: string;
  width?: number;
  onChangeTitle(newTitle: string): void;
  onChangeUrl(newUrl: string): void;
  onChangeDescription(newDescription: string): void;
  onChangeTags(newTags: string): void;
  onCloseModal?(): void;
  onCancel?(): void;
  onAdd(): void;
}

const Dialog = ({
  style,
  title,
  url,
  tags,
  description,
  dialogMode,
  onChangeTitle,
  onChangeUrl,
  onChangeDescription,
  onChangeTags,
  onCloseModal,
  onCancel,
  onAdd,
}: DialogProps) => {
  const width = useViewportWidth();
  return (
    <div id="dialog" style={style}>
      <h1 id="dialog-header">Create link</h1>
      <form id="link-form">
        <Input
          name="title"
          placeholder="Title"
          type="text"
          value={title}
          onChangeText={(newText: string) => {
            onChangeTitle(newText);
          }}
        />
        <Input
          name="url"
          placeholder="URL"
          type="text"
          value={url}
          onChangeText={(newText: string) => {
            onChangeUrl(newText);
          }}
        />
        <Input
          name="tags"
          placeholder="(Optional) tags seperated by ','"
          type="text"
          value={tags}
          onChangeText={(newTags: string) => {
            onChangeTags(newTags);
          }}
        />
        <Input
          name="Description"
          placeholder="Description"
          type="textarea"
          value={description}
          onChangeText={(newText: string) => {
            onChangeDescription(newText);
          }}
        />
      </form>
      <div id="tags">{}</div>
      <Button
        name={dialogMode === "add" ? "Add" : "Edit"}
        onclick={() => {
          onAdd();
          if (onCloseModal) {
            onCloseModal();
          }
        }}
      />
      {dialogMode === "edit" && width > 1024   ? (
        <Button
          name="Cancel"
          onclick={() => {
            onCancel!();
          }}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Dialog;
