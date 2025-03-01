import { Icon, type IconifyIcon } from "@iconify-icon/react";
import { cn } from "../../utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    leftIcon?: string | IconifyIcon;
    rightIcon?: string | IconifyIcon;
}

const Button: React.FC<ButtonProps> = ({children, className, leftIcon, rightIcon, ...props }) => {
  return (
    <button className={cn(
      'cursor-pointer bg-gradient-to-br from-amber-300 to-amber-500', 
      'hover:to-amber-600 transition-colors duration-500', 
      'px-4 py-2 rounded-md', 
      'text-black', 
      'flex items-center', 
      className)} {...props}>
        {leftIcon ? (
          <Icon icon={leftIcon} className="mr-2" />
        ) : null}

        <span className="font-semibold">{children}</span>

        {rightIcon ? (
          <Icon icon={rightIcon} className="ml-2" />
        ) : null}
    </button>
  )
}

export default Button