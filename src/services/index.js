import getRequest from "../utils/getRequest";

export const API_URI = process.env.REACT_APP_API;

export const getUsers = async () => {
  const request = getRequest({ method: "GET" });
  const response = await fetch(`${API_URI}/users`, request);
  const { code, data, error } = await response.json();
  if (code === "200" && !error) return data;
  return null;
};
export const getProjects = async () => {
  const request = getRequest({ method: "GET" });
  const response = await fetch(`${API_URI}/projects`, request);
  const { code, data, error } = await response.json();
  if (code === "200" && !error) return data;
  return null;
};
export const getGateways = async () => {
  const request = getRequest({ method: "GET" });
  const response = await fetch(`${API_URI}/gateways`, request);
  const { code, data, error } = await response.json();
  if (code === "200" && !error) return data;
  return null;
};

export const getReport = async (body) => {
  const request = getRequest({ body, method: "POST" });
  const response = await fetch(`${API_URI}/report`, request);
  const { code, data, error } = await response.json();
  if (code === "200" && !error) return data;
  return null;
};
