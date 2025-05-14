import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  hoverEffect?: boolean;
}

const Card = ({
  children,
  className = "",
  onClick,
  hoverEffect = false,
}: CardProps) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-custom-sm p-6 ${
        hoverEffect
          ? "transition-all duration-300 hover:shadow-custom-md hover:-translate-y-1"
          : ""
      } ${onClick ? "cursor-pointer" : ""} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;