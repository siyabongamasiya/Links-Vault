import { FaEdit, FaTrash } from "react-icons/fa";

interface ItemButton {
  type: string;
  onEdit?: () => void;
  onDelete?: () => void; 
}

const ItemButton = ({ type, onEdit, onDelete }: ItemButton) => {
  return (
    <div>
      {type === "update" ? (
        <FaEdit
          onClick={() => {
            onEdit!();
          }}
        />
      ) : (
        <FaTrash
          onClick={() => {
            onDelete!();
          }}
        />
      )}
    </div>
  );
};

export default ItemButton
