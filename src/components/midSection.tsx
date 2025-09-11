import { useState } from "react";
import type Link from "../models/link";
import LeftMidSection from "./leftMidSection";
import RightMidSection from "./rightMidSection";
import DataAccessObject from "../Utils/dao";
import generateUniqueId from "../Utils/idgenerator";
import Modal from "./modal";
import FloatingButton from "./floatingbutton";
const dao = new DataAccessObject();

interface MidSectionProps {
  links: Link[];
  onUpdateLinks(): void;
}

const MidSection = ({ links, onUpdateLinks }: MidSectionProps) => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");

  const [isDialogueOpen, setDialogueState] = useState(false);
  const [dialogMode, setDialogueMode] = useState("add");

  const onChangeTitle = (newTitle: string) => {
    setTitle(newTitle);
  };
  const onChangeUrl = (newUrl: string) => {
    setUrl(newUrl);
  };
  const onChangeDescription = (newDescription: string) => {
    setDescription(newDescription);
  };

  const toggleDialogueMode = () => {
    dialogMode === "add" ? setDialogueMode("edit") : setDialogueMode("add");
  };

  const ToggleDialogue = () => {
    setDialogueState(!isDialogueOpen);
  };

  const onAdd = () => {
    if (dialogMode === "edit") {
      dao.saveLink(id, title, url, description);
    } else {
      dao.saveLink(
        generateUniqueId(`${title} ${url} ${description}`),
        title,
        url,
        description
      );
    }

    setTitle("");
    setUrl("");
    setDescription("");
    onUpdateLinks();
  };

  const onEdit = (
    id: string,
    title: string,
    url: string,
    description: string
  ) => {
    setId(id);
    setTitle(title);
    setUrl(url);
    setDescription(description);
    toggleDialogueMode();
  };

  return (
    <div id="midSection">
      <Modal
        title={title}
        url={url}
        description={description}
        onChangeTitle={onChangeTitle}
        onChangeUrl={onChangeUrl}
        onChangeDescription={onChangeDescription}
        onAdd={onAdd}
        dialogMode={dialogMode}
        isOpen={isDialogueOpen}
        onClose={() => {
          ToggleDialogue();
        }}
      />
      <LeftMidSection
        title={title}
        url={url}
        description={description}
        onChangeTitle={onChangeTitle}
        onChangeUrl={onChangeUrl}
        onChangeDescription={onChangeDescription}
        onAdd={onAdd}
        dialogMode={dialogMode}
      />
      <RightMidSection
        links={links ? links : []}
        onEdit={onEdit}
        onUpdate={onUpdateLinks}
      />
      <FloatingButton onToggleDialogue={ToggleDialogue} />
    </div>
  );
};

export default MidSection;
