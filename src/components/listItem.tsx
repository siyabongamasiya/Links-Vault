import DataAccessObject from "../Utils/dao";
import ItemButton from "./itemButton";
const dao = new DataAccessObject();

interface ListItemProps {
  id: string;
  title: string;
  url: string;
  description: string;
  onDelete(url: string): void;
  onEdit(id: string, title: string, url: string, description: string): void;
}

const ListItem = ({
  id,
  title,
  url,
  description,
  onDelete,
  onEdit,
}: ListItemProps) => {
  return (
    <div id="list-item">
      <div id="link-details">
        <p id="item-title">{title}</p>
        <p id="item-url">{url}</p>
        <p id="item-description">{description}</p>
      </div>
      <div id="item-buttons">
        <ItemButton
          type="update"
          onEdit={() => {
            if (onEdit) {
              return onEdit(id, title, url, description);
            }
            return false;
          }}
        />
        <ItemButton
          type="delete"
          onDelete={() => {
            onDelete(id);
          }}
        />
      </div>
    </div>
  );
};

export default ListItem;
