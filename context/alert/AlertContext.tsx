import { createContext, useReducer } from "react";
import alertReducer from "./AlertReducers";

const AlertContext = createContext({
  alert: {},
  setAlert: (msg: string, type: string) => {},
});

export const AlertContextProvider = (props: any) => {
  const initialState = null;
  const [state, dispatch] = useReducer(alertReducer, initialState);

  const setAlert = (msg: string, type: string) => {
    dispatch({ type: "SET_ALERT", payload: { msg, type } });

    setTimeout(() => dispatch({ type: "REMOVE_ALERT" }), 3000);
  };

  const alertContext = { alert: state, setAlert: setAlert };

  return (
    <AlertContext.Provider value={alertContext}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
