export const prepareData = (list) => {
  return list?.map((item) => ({
    label: item?.name,
    value: item?.projectId || item?.gatewayId,
  }));
};
