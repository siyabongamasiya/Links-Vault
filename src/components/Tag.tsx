interface TagProps {
  text: string;
}

const Tag = ({ text }: TagProps) => {
  return (
    <div>
        <p>{text}</p>
    </div>
  );
};

export default Tag
