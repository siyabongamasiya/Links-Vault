interface TagProps {
  text: string;
}

const Tag = ({ text }: TagProps) => {
  return (
    <div className="tag">
        <p>{text}</p>
    </div>
  );
};

export default Tag
