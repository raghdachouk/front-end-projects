import IconWrapper from "./iconWrapper";
import { ReactComponent as Calennder } from "./assets/calender.svg";

const CalenderIcon = ({ ...props }) => (
  <IconWrapper {...props}>
    <Calennder />
  </IconWrapper>
);

export default CalenderIcon;
