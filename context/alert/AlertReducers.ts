type alertState = {
  msg: string;
  type: string;
};

type Action = {
  type: string;
  payload?: alertState;
};

const alertReducer = (state: any, action: Action) => {
  switch (action.type) {
    case "SET_ALERT":
      return action.payload;
    case "REMOVE_ALERT":
      return {
        ...state,
        type: "DEFAULT",
      };
    default:
      return state;
  }
};

export default alertReducer;
