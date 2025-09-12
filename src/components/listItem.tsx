import ItemButton from "./itemButton";

interface ListItemProps {
  id: string;
  title: string;
  url: string;
  tags: string;
  description: string;
  onDelete(url: string): void;
  onEdit(id: string, title: string, url: string,tags:string, description: string): void;
}

const ListItem = ({
  id,
  title,
  url,
  tags,
  description,
  onDelete,
  onEdit,
}: ListItemProps) => {
  return (
    <div id="list-item">
      <div id="link-details">
        <p id="item-title">{title}</p>
        <a id="item-url" href={url}>
          {url}
        </a>
        <p id="item-description">{description}</p>
        <p id="item-tags">{tags}</p>
      </div>
      <div id="item-buttons">
        <ItemButton
          type="update"
          onEdit={() => {
            if (onEdit) {
              return onEdit(id, title, url,tags, description);
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
