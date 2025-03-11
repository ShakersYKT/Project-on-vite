import React from "react";
export const Button = (props) => {
  const { size, color, title } = props;

  const defaultClass =
    "flex items-center rounded-full h-[40px] w-[max-content] px-8 py-2 border-2 ";

  const classes = {
    colors: {
      primary: {
        button: "bg-amber-700 text-red",
        text: "",
      },
      secondary: {
        button: "bg-red-500 text-white",
        text: "",
      },
      custom: {
        button: "bg-black text-white border-white hover:bg-gray-800", 
        text: "", 
      },
    },
    sizes: {
      small: "font-sm",
      medium: "font-base text-2xl",
      large: "font-base min-h-[56px]",
    },
  };

  return (
    <div
      className={
        defaultClass + " " + classes.sizes[size] + " " + classes.colors[color].button
      }
    >
      {title}
    </div>
  );
};