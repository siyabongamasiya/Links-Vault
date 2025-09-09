import { useState } from "react";
import Input from "./input";
import Tag from "./Tag";
import Button from "./button";

interface DialogProps {
  style: React.CSSProperties;
}

const Dialog = ({ style }: DialogProps) => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div style={style}>
      <p>Create link</p>
      <div>
        <Input name="title" placeholder="Title" type="text" value={title} />
        <Input name="url" placeholder="URL" type="text" value={url} />
        <Input
          name="Description"
          placeholder="Description"
          type="textarea"
          value={description}
        />
      </div>
      <div>
        <Tag text="Coding" />
        <Tag text="Football" />
        <Tag text="Movies" />
      </div>
      <Button name="Add" />
    </div>
  );
};

export default Dialog
