import PieChart from "../../../components/molecules/pieChart";
import Table from "../../../components/molecules/table";
import { WrapperContainer } from "./ContainerTableChart.styles";

const ContainerTableChart = ({
  title,
  data,
  chart = null,
  columns,
  totalAmount,
}) => {
  return (
    <WrapperContainer>
      <div className="container-table">
        <Table title={title} data={data} columns={columns} />
        {!chart && (
          <div className="container-table__total">TOTAL: {totalAmount} USD</div>
        )}
      </div>
      {chart && (
        <div>
          <PieChart chart={chart} totalAmount={totalAmount} />
          <div className="container-table__total">TOTAL: {totalAmount} USD</div>
        </div>
      )}
    </WrapperContainer>
  );
};
export default ContainerTableChart;
