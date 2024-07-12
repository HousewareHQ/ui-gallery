import { ChangeEvent } from "react";
import "./textinput.css";

export interface TextInputProps {
  size?: number;
  value: string;
  placeholder: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Primary UI component for user interaction
 */
export const TextInput = ({
  placeholder,

  value,
  onChange,
  ...props
}: TextInputProps) => {

    
  return (
    <input
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className="input"
      {...props}
    />
  );
};
