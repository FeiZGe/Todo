import { buttonProps } from "@/types";
import clsx from "clsx";

const Button = ({ type, text, onClick, actionButton, bgColor, ...props }: buttonProps) => {
  return (
    <div>
      <button
        onClick={onClick}
        type={type}
        className={clsx(
            actionButton && 
                "text-white hover:bg-blue-600 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2",
                `text-white ${bgColor} hover:${bgColor} focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2`
        )}
      >
        {text}
      </button>
    </div>
  )
}

export default Button
