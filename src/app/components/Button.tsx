import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({
  children,
  className = "",
  ...props
}: React.PropsWithChildren<ButtonProps>) => {
  return (
    <button
      className={`bg-blue-800 text-white px-6 py-2 rounded-md active:opacity-70 disabled:opacity-70 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
