import classNames from "classnames";
import React, { ChangeEvent } from "react";

type InputProps = {
  label?: string;
  value: number;
  className?: string;
  onChange?: (value: number) => void;
  disabled?: boolean;
  type?: string;
};

export const Input = ({
  className = "",
  label = "",
  disabled = false,
  type = "text",
  value,
  onChange,
}: InputProps) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    if (onChange) {
      onChange(parseInt(newValue));
    }
  };

  return (
    <div className={classNames(className, "flex-row flex")}>
      <label className="mr-4 text-3xl">{label}:</label>
      <input
        disabled={disabled}
        className="main-input rounded-[4px] py-[4px] px-[4px] text-3xl"
        type={type}
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
};
