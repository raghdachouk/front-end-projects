export const getProjectName = (projects, id) => {
  const project = projects.find((elt) => elt.projectId === id);
  return project?.name || "All projects";
};

export const getGatewayName = (gateways, id) => {
  const gateway = gateways.find((elt) => elt.gatewayId === id);
  return gateway?.name || "All gateways";
};
