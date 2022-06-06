import { format } from "date-fns";
import groupBy from "lodash.groupby";
import { getGatewayName, getProjectName } from "./getName";

export const getDataProject = ({
  data,
  gatewayId,
  gateways,
  projects,
  grouped,
}) => {
  const result = groupBy(data, grouped);
  const finalData = Object.entries(result).reduce((acc, [key, value]) => {
    const details = value.map((elt) => {
      return {
        transactionId: elt.paymentId,
        date: elt.created,
        amount: elt.amount,
        ...(grouped === "projectId" && {
          gateway:
            gatewayId === "all" ? getGatewayName(gateways, elt.gatewayId) : "",
        }),
      };
    });
    const total = details.reduce((sum, el) => sum + el.amount, 0);
    const sortedDates = details.sort(
      (first, second) =>
        new Date(first.date).getTime() - new Date(second.date).getTime()
    );

    acc.push({
      name:
        grouped === "projectId"
          ? getProjectName(projects, key)
          : getGatewayName(gateways, key),
      details: sortedDates.map(({ date, ...rest }) => ({
        ...rest,
        date: format(new Date(date), "dd-MM-yyyy"),
      })),
      total: total.toFixed(3),
    });
    return acc;
  }, []);

  return finalData;
};
