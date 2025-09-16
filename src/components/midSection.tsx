import { useState } from "react";
import type Link from "../models/link";
import LeftMidSection from "./leftMidSection";
import RightMidSection from "./rightMidSection";
import DataAccessObject from "../Utils/dao";
import generateUniqueId from "../Utils/idgenerator";
import Modal from "./modal";
import FloatingButton from "./floatingbutton";
import csvToArray from "../Utils/tagger";
import useViewportWidth from "../customHooks/customHooks";
import Toast from "../Utils/Toast";
import allValuesAreValid from "../Utils/stringValidator";
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
  const [tags, setTags] = useState("");

  const [isDialogueOpen, setDialogueState] = useState(false);
  const [dialogMode, setDialogueMode] = useState("add");
  const width = useViewportWidth();

  const onChangeTitle = (newTitle: string) => {
    setTitle(newTitle);
  };
  const onChangeUrl = (newUrl: string) => {
    setUrl(newUrl);
  };
  const onChangeDescription = (newDescription: string) => {
    setDescription(newDescription);
  };
  const onChangeTags = (newTags: string) => {
    setTags(newTags);
  };

  const hideDialogue = () => {
    setDialogueState(false);
  };
  const showDialogueAdd = () => {
    setDialogueMode("add");
    setDialogueState(true);
    clearForm();
  };
  const showDialogueEdit = () => {
    setDialogueMode("edit");
    setDialogueState(true);
  };

  const clearForm = () => {
    setTitle("");
    setUrl("");
    setDescription("");
    setTags("");
  };

  const onAdd = () => {
    if (dialogMode === "edit") {
      dao.saveLink(id, title, url, description, csvToArray(tags)!);
      setDialogueMode("add");
    } else {
      dao.saveLink(
        generateUniqueId(`${title} ${url} ${description}`),
        title,
        url,
        description,
        csvToArray(tags)!
      );
    }

    clearForm();
    onUpdateLinks();
  };

  const onEdit = (
    id: string,
    title: string,
    url: string,
    tags: string,
    description: string
  ) => {
    setId(id);
    setTitle(title);
    setUrl(url);
    setTags(tags);
    setDescription(description);
    setDialogueMode("edit");
    if (width < 1024) {
      showDialogueEdit();
    }
  };

  return (
    <div id="midSection">
      <Modal
        title={title}
        url={url}
        description={description}
        onChangeTitle={onChangeTitle}
        onChangeUrl={onChangeUrl}
        onChangeTags={onChangeTags}
        onChangeDescription={onChangeDescription}
        tags={tags}
        onAdd={onAdd}
        dialogMode={dialogMode}
        isOpen={isDialogueOpen}
        onClose={() => {
          hideDialogue();
        }}
      />
      <LeftMidSection
        title={title}
        url={url}
        tags={tags}
        description={description}
        onChangeTitle={onChangeTitle}
        onChangeUrl={onChangeUrl}
        onChangeDescription={onChangeDescription}
        onChangeTags={onChangeTags}
        onCancel={() => {
          setDialogueMode("add");
          clearForm();
        }}
        onAdd={onAdd}
        dialogMode={dialogMode}
      />
      <RightMidSection
        links={links ? links : []}
        onEdit={onEdit}
        onUpdate={onUpdateLinks}
      />
      <FloatingButton onToggleDialogue={showDialogueAdd} />
    </div>
  );
};

export default MidSection;
