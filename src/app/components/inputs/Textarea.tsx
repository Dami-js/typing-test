import React from "react";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  containerClass?: string;
}

const Textarea = ({
  className = "",
  containerClass = "",
  ...props
}: TextareaProps) => {
  return (
    <div className={`${containerClass}`}>
      <textarea
        className={`flex w-full border-b outline-none p-4 text-xl leading-10 text-gray-700 shadow-md disabled:bg-slate-50 ${className}`}
        {...props}
      ></textarea>
    </div>
  );
};

export default Textarea;
