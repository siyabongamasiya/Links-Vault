import type React from "react";

interface InputProps {
  placeholder: string;
  name: string;
  type: string;
  value: string;
  onChangeText(newText: string): void;
}

const Input = ({
  placeholder,
  name,
  type,
  value,
  onChangeText,
}: InputProps) => {
  return (
    <div className="input-container" id={`${name}-container`}>
      {type != "textarea" ? (
        <input
          id={`${name}-input`}
          className="input"
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            onChangeText(e.target.value);
          }}
        />
      ) : (
        <textarea
          id={`${name}-input`}
          className="input"
          placeholder={placeholder}
          value={value}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            onChangeText(e.target.value);
          }}
        />
      )}
    </div>
  );
};

export default Input;
