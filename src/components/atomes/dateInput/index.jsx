import { format } from "date-fns";
import { useRef, useState } from "react";
import CalenderIcon from "../icons/calender";
import { DateInputWrapper } from "./dateInput.styles";

const DateInput = ({ value, handleSetDate, name, placeholder }) => {
  const [typeInput, setTypeInput] = useState("text");
  const ref = useRef();

  const handleFocus = () => {
    ref.current.type = "date";
    setTypeInput("date");
  };
  return (
    <DateInputWrapper>
      <input
        ref={ref}
        onFocus={handleFocus}
        onBlur={() => (ref.current.type = "date")}
        className="input"
        placeholder={placeholder}
        type="text"
        onChange={(e) => handleSetDate(e.target.value)}
        name={name}
        id={name}
        value={value ? format(new Date(value), "yyyy-MM-dd") : ""}
        min="2021-01-01"
        max="2021-12-31"
      />
      {(!ref.current || typeInput === "text") && (
        <CalenderIcon className="icon" />
      )}
    </DateInputWrapper>
  );
};
export default DateInput;
