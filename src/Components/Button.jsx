import React from "react"

const Button = ({ text, ...props }) => {
  return (
    <button
      type="button"
      className={`bg-indigo-600 text-sm font-semibold py-2 px-3 rounded-md hover:bg-indigo-900 ease-in duration-100 flex gap-2 items-center ${
        props.disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      {...props}
    >
      {text}
    </button>
  )
}

export default Button
