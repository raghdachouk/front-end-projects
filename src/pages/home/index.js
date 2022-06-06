import { format } from "date-fns";
import { useEffect, useState } from "react";

import DateInput from "../../components/atomes/dateInput";
import SelectOne from "../../components/atomes/select";
import EmptyData from "../../components/molecules/emptyData";
import { useDataContext } from "../../context/dataContext";

import { getGateways, getProjects, getReport } from "../../services";
import { columns, columnsNoGatways } from "../../utils/constants";
import { getDataProject } from "../../utils/getDataProject";
import { getGatewayName, getProjectName } from "../../utils/getName";
import { prepareData } from "../../utils/prepareData";
import ContainerTableChart from "./components/containerTableChart";
import { WrapperContainer } from "./home.styles";

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [gateways, setGateways] = useState([]);

  const {
    setInput,
    setChart,
    setResult,
    setTotal,
    result,
    input,
    chart,
    totalAmount,
  } = useDataContext();

  useEffect(() => {
    getProjects().then((res) => setProjects(res));
    getGateways().then((res) => setGateways(res));
  }, []);

  useEffect(() => {
    setResult(null);
    setChart(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input.projectId, input?.gatewayId]);

  const generateReport = async () => {
    if (input?.gatewayId && input?.projectId) {
      const response = await getReport({
        gatewayId: input?.gatewayId === "all" ? "" : input?.gatewayId,
        projectId: input?.projectId === "all" ? "" : input?.projectId,
        from: input?.startDate
          ? format(new Date(input?.startDate), "yyyy-MM-dd")
          : "2021-01-01",
        to: input?.endDate
          ? format(new Date(input?.endDate), "yyyy-MM-dd")
          : "2021-12-31",
      });

      const finalData = getDataProject({
        data: response,
        gatewayId: input?.gatewayId,
        grouped:
          input?.projectId !== "all" && input?.gatewayId === "all"
            ? "gatewayId"
            : "projectId",
        projects,
        gateways,
      });
      setResult(finalData);
      const resultTotalAmount = finalData.reduce(
        (sum, elt) => sum + parseFloat(elt.total),
        0
      );
      setTotal(resultTotalAmount);
      if (
        (input?.projectId === "all" && input?.gatewayId !== "all") ||
        (input?.projectId !== "all" && input?.gatewayId === "all")
      ) {
        const resultChart = finalData.reduce((acc, item) => {
          const persentage = (item.total / resultTotalAmount) * 100;
          Object.assign(acc, {
            [item.name]: parseFloat(persentage.toFixed(1)),
          });
          return acc;
        }, {});
        setChart(resultChart);
      }
    }
  };

  return (
    <WrapperContainer>
      <div className="container-top">
        <div className="container-top__text-container">
          <h2 className="container-top__text-container__title">Reports</h2>
          <span className="container-top__text-container__description">
            Easily generate a report of your transactions
          </span>
        </div>
        <div className="container-top__select-container">
          <SelectOne
            placeholder="Select project"
            options={[
              { label: "All projects", value: "all" },
              ...prepareData(projects),
            ]}
            handleChange={(e) => {
              setInput({ projectId: e });
            }}
            value={input?.projectId}
          />
          <SelectOne
            placeholder="Select gatway"
            options={[
              { label: "All gateways", value: "all" },
              ...prepareData(gateways),
            ]}
            handleChange={(e) => setInput({ gatewayId: e })}
            value={input?.gatewayId}
          />
          <DateInput
            name="startDate"
            handleSetDate={(e) => setInput({ startDate: e })}
            value={input?.startDate}
            placeholder="From Date"
          />
          <DateInput
            name="endDate"
            handleSetDate={(e) => setInput({ endDate: e })}
            value={input?.endDate}
            placeholder="To Date"
          />
          <button onClick={generateReport}>Generate report</button>
        </div>
      </div>
      <div className="container-body">
        {result ? (
          <ContainerTableChart
            totalAmount={totalAmount}
            chart={chart}
            columns={
              input?.projectId === "all" && input?.gatewayId === "all"
                ? columns
                : columnsNoGatways
            }
            data={result}
            title={`${getProjectName(
              projects,
              input?.projectId
            )} | ${getGatewayName(gateways, input?.gatewayId)}`}
          />
        ) : (
          <EmptyData />
        )}
      </div>
    </WrapperContainer>
  );
};
export default Home;
