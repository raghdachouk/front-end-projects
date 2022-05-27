import { createContext, useContext, useMemo, useReducer } from "react";

const initalState = {
  input: {},
  chart: null,
  result: null,
  totalAmount: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_INPUT":
      return { ...state, input: { ...state.input, ...action.value } };
    case "SET_CHART":
      return { ...state, chart: action.value };
    case "SET_RESULT":
      return { ...state, result: action.value };
    case "SET_TOTAL":
      return { ...state, totalAmount: action.value };
    default:
      return state;
  }
};

export const DataContext = createContext();

const DataContextProvider = DataContext.Provider;

export const DataContextWrapper = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalState);

  const setInput = (value) => {
    dispatch({ type: "SET_INPUT", value });
  };
  const setChart = (value) => {
    dispatch({ type: "SET_CHART", value });
  };
  const setResult = (value) => {
    dispatch({ type: "SET_RESULT", value });
  };
  const setTotal = (value) => {
    dispatch({ type: "SET_TOTAL", value });
  };

  const value = useMemo(
    () => ({
      ...state,
      setInput,
      setChart,
      setResult,
      setTotal,
    }),
    [state]
  );

  return <DataContextProvider value={value}>{children}</DataContextProvider>;
};

export const useDataContext = () => useContext(DataContext);
