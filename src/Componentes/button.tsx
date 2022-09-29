import React from "react";

interface Props {
  border: string;
  background: string;
  children?: React.ReactNode;
  height: string;
  onClick: () => void;
  radius: string
  textcolor: string;
  width: string;
  margin: string;
  padding: string;
}

const Button: React.FC<Props> = ({ 
    border,
    background,
    children,
    height,
    onClick, 
    radius,
    textcolor,
    width,
    margin,
    padding
  }) => { 
  return (
    <button 
      onClick={onClick}
      style={{
         backgroundColor: background,
         border,
         borderRadius: radius,
         height,
         color: textcolor,
         width,
         margin,
         padding
      }}
    >
    {children}
    </button>
  );
}

export default Button;