import type React from "react";

interface InputProps {
  placeholder: string;
  name: string;
  type: string;
  value: string;
}

const Input = ({ placeholder, name, type, value }: InputProps) => {
  return (
    <div className="input-container" id={`${name}-container`}>
      {type != "textarea" ? (
        <input
          id={`${name}-input`}
          className="input"
          type={type}
          name={name}
          placeholder={placeholder}
        />
      ) : (
        <textarea
          id={`${name}-input`}
          className="input"
          placeholder={placeholder}
          value={value}
        />
      )}
    </div>
  );
};

export default Input;
