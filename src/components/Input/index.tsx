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
  value,
  onChange,
}: InputProps) => {
  const handleInputChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    if (onChange) {
      onChange(parseInt(newValue));
    }
  };

  return (
    <div className={classNames(className, "flex-col lg:flex-row flex")}>
      <label className="mr-4  text-[20px]">{label}:</label>
      <select
        disabled={disabled}
        className="main-input rounded-[4px] py-[2px] px-[2px]  text-[20px]"
        value={value.toString()}
        onChange={handleInputChange}
      >
        <option value={6}>6</option>
        <option value={7}>7</option>
        <option value={8}>8</option>
        <option value={9}>9</option>
        <option value={10}>10</option>
        <option value={11}>11</option>
        <option value={12}>12</option>
        <option value={13}>13</option>
        <option value={14}>14</option>
        <option value={15}>15</option>
        <option value={16}>16</option>
        <option value={17}>17</option>
        <option value={18}>18</option>
      </select>
    </div>
  );
};
