import edit from "../assets/images/edit.png";
import remove from "../assets/images/delete.png";

interface ItemButton {
  type: string;
  onEdit?: () => void;
  onDelete?: () => void;
}

const ItemButton = ({ type, onEdit, onDelete }: ItemButton) => {
  return (
    <div id="item-button">
      {type === "update" ? (
        <img
          className="item-image"
          src={edit}
          alt="edit"
          onClick={() => {
            onEdit!();
          }}
        />
      ) : (
        <img
          className="item-image"
          src={remove}
          alt="edit"
          onClick={() => {
            onEdit!();
          }}
        />
      )}
    </div>
  );
};

export default ItemButton;
