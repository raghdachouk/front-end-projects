const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

const getRequest = ({ body = null, method = "GET" }) => {
  const request = {
    headers,
    method,
    credentials: "same-origin",
  };
  if (body && method === "POST") request.body = JSON.stringify(body);
  return request;
};
export default getRequest;
