import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  fullWidth?: boolean;
}

const Button = ({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyles = "rounded-lg font-medium transition-all duration-200 flex items-center justify-center";
  
  const variantStyles = {
    primary: "bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800",
    secondary: "bg-accent-500 text-white hover:bg-accent-600 active:bg-accent-700",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100 active:bg-gray-200",
    ghost: "text-primary-600 hover:bg-primary-50 active:bg-primary-100",
    danger: "bg-red-600 text-white hover:bg-red-700 active:bg-red-800",
  };
  
  const sizeStyles = {
    sm: "text-sm px-3 py-1.5 gap-1.5",
    md: "text-base px-4 py-2 gap-2",
    lg: "text-lg px-6 py-3 gap-3",
  };
  
  const widthStyle = fullWidth ? "w-full" : "";
  const disabledStyle = props.disabled ? "opacity-50 cursor-not-allowed" : "";
  const loadingStyle = isLoading ? "relative !text-transparent" : "";
  
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${disabledStyle} ${loadingStyle} ${className}`}
      {...props}
    >
      {children}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            className="animate-spin h-5 w-5 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      )}
    </button>
  );
};

export default Button;