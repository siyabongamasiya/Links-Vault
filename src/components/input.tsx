import type React from "react";

interface InputProps {
  placeholder: string;
  name: string;
  type: string;
  value: string;
}

const Input = ({ placeholder, name, type, value }: InputProps) => {
  return (
    <>
      {type != "textarea" ? (
        <input type={type} name={name} placeholder={placeholder} />
      ) : (
        <textarea value={value} />
      )}
    </>
  );
};

export default Input;
