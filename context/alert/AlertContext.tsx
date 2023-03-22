import { createContext, useReducer } from "react";
import alertReducer from "./AlertReducers";

const INTIAL_CONTEXT = {
  alert: { type: "DEFAULT", msg: "" },
  setAlert: (msg: string, type: string) => {},
};

const AlertContext = createContext(INTIAL_CONTEXT);

export const AlertContextProvider = (props: any) => {
  const initialState = INTIAL_CONTEXT;
  const [state, dispatch] = useReducer(alertReducer, initialState);

  console.log(state);

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
