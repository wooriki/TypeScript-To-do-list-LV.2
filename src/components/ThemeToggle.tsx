import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/config/configStore";
import { changeTheme } from "../redux/modules/theme";
import { styled } from "styled-components";

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme);
  const onClickThemeToggle = () => {
    if (theme) {
      dispatch(changeTheme(theme));
    }
  };
  return (
    <div>
      <StThemeToggleBtn onClick={onClickThemeToggle}>
        {theme === "light" ? "DarkMode" : "LightMode"}
      </StThemeToggleBtn>
    </div>
  );
};

export default ThemeToggle;

const StThemeToggleBtn = styled.button`
  border: 1px solid grey;
  cursor: pointer;
`;
