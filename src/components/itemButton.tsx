import edit from "../assets/images/edit.png";
import remove from "../assets/images/delete.png";

interface ItemButton {
  type: string;
  onEdit?: () => void;
  onDelete?: () => void;
}

const ItemButton = ({ type, onEdit, onDelete }: ItemButton) => {
  return (
    <div id="item-button" onClick={type === "update" ? onEdit : onDelete}>
      {type === "update" ? (
        <img className="item-image" src={edit} alt="edit" />
      ) : (
        <img className="item-image" src={remove} alt="edit" />
      )}
    </div>
  );
};

export default ItemButton;
