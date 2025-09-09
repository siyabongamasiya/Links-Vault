import type React from "react";

interface ButtonProps{
  name: string;
};

const Button = ({ name }: ButtonProps) => {
  return (
    <>
      <button>{name}</button>
    </>
  );
};

export default Button 
