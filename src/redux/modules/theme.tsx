enum ActionTypes {
  CHANGE_THEME = "theme/reducer/CHANGE_THEME",
}

type ChangeTheme = {
  type: ActionTypes.CHANGE_THEME;
  payload: string;
};

export const changeTheme = (payload: string) => {
  return {
    type: ActionTypes.CHANGE_THEME,
    payload,
  };
};

const theme = (state = "light", action: ChangeTheme) => {
  switch (action.type) {
    case ActionTypes.CHANGE_THEME:
      return action.payload === "light" ? "dark" : "light";
    default:
      return state;
  }
};

export default theme;
