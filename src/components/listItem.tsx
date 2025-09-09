import ItemButton from "./itemButton";

interface ListItemProps {
  title: string;
  url: string;
  description: string;
}

const ListItem = ({ title, url, description }: ListItemProps) => {
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
            //update
          }}
        />
        <ItemButton
          type="delete"
          onDelete={() => {
            //delete
          }}
        />
      </div>
    </div>
  );
};

export default ListItem;
