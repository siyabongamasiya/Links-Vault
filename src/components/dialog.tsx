import { useState } from "react";
import Input from "./input";
import Tag from "./Tag";
import Button from "./button";
import DataAccessObject from "../Utils/dao";

interface DialogProps {
  style: React.CSSProperties;
  title: string;
  url: string;
  description: string;
  dialogMode : string;
  onChangeTitle(newTitle: string): void;
  onChangeUrl(newUrl: string): void;
  onChangeDescription(newDescription: string): void;
  onAdd(): void;
}

const Dialog = ({
  style,
  title,
  url,
  description,
  dialogMode,
  onChangeTitle,
  onChangeUrl,
  onChangeDescription,
  onAdd,
}: DialogProps) => {
  return (
    <div id="dialog" style={style}>
      <h1 id="dialog-header">Create link</h1>
      <div id="link-form">
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
          name="Description"
          placeholder="Description"
          type="textarea"
          value={description}
          onChangeText={(newText: string) => {
            onChangeDescription(newText);
          }}
        />
      </div>
      <div id="tags">
        <Tag text="Coding" />
        <Tag text="Football" />
        <Tag text="Movies" />
      </div>
      <Button
        name= {dialogMode === "add" ? "Add" : "Edit"}
        onclick={() => {
          onAdd();
        }}
      />
    </div>
  );
};

export default Dialog;
