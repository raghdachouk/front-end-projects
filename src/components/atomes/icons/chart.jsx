import IconWrapper from "./iconWrapper";
import { ReactComponent as Chart } from "./assets/chart.svg";

const ChartIcon = ({ ...props }) => (
  <IconWrapper {...props}>
    <Chart />
  </IconWrapper>
);

export default ChartIcon;
