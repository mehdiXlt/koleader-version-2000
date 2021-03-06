import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fbfefd",
  fontColor: "#000",
};

export const darkTheme = {
  body: "#000",
  fontColor: "#fff",
};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
    transition: 1s
	}
`;