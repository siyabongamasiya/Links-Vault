import ItemButton from "./itemButton";

interface ListItemProps {
  title: string;
  url: string;
  description: string;
}

const ListItem = ({ title, url, description }: ListItemProps) => {
  return (
    <div>
      <div>
        <p>{title}</p>
        <p>{url}</p>
        <p>{description}</p>
      </div>
      <div>
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

export default ListItem
