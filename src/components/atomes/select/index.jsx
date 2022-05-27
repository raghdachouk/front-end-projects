import { WrapperSelect } from "./select.styles";

const SelectOne = ({ placeholder = "", value, handleChange, options }) => {
  return (
    <WrapperSelect
      value={value}
      onChange={(e) => {
        handleChange(e.target.value);
      }}
    >
      <option value="">{placeholder}</option>
      {options.map((elt) => (
        <option key={elt.value} value={elt.value}>
          {elt.label}
        </option>
      ))}
    </WrapperSelect>
  );
};
export default SelectOne;
