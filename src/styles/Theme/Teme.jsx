import {  ThemeProvider, createGlobalStyle } from "styled-components";

const theme = {};

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }
`
const Theme = ({children}) => {

    return(
        <ThemeProvider theme={theme} >
            <GlobalStyle />
            {children}
        </ThemeProvider>
    );
};

export default Theme;

// 