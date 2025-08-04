import type { ReactNode, MouseEventHandler } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const Button = ({
  children,
  onClick,
  type = "button",
  className = "",
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`mt-6 bg-accent text-background px-6 py-2 rounded shadow hover:bg-danger transition hover:cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
