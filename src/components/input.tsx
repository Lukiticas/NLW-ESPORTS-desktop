import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = (props: InputProps) => {
  return (
    <input
      {...props}
      className={`bg-zinc-900 py-3 px-5 rounded text-small placeholder:text-zinc-500`}
    />
  );
};

export default Input;
