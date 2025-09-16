import type React from "react";

interface ButtonProps {
  name: string;
  onclick(): void;
}

const Button = ({ name, onclick }: ButtonProps) => {
  return (
    <>
      <input
        type="submit"
        id={`${name}-button`}
        onClick={() => {
          onclick();
        }}
        value={name}
      />
    </>
  );
};

export default Button;
