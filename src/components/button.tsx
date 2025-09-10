import type React from "react";

interface ButtonProps {
  name: string;
  onclick(): void;
}

const Button = ({ name, onclick }: ButtonProps) => {
  return (
    <>
      <button
        id={`${name}-button`}
        onClick={() => {
          onclick();
        }}
      >
        {name}
      </button>
    </>
  );
};

export default Button;
