import React from "react";
import { createTheme } from "@mui/material";
import { StylesProvider, ThemeProvider } from "@mui/styles";


function Theme(props) {
    const {children} = props;

    const base = {
        header:{
            height: '50px',
            headerColor: '#f3ece5',
        }
    }
    const muiTheme = {
        base: base,
        overrides:{
            MuiIconButton: {
                colorPrimary: {
                  color: '#dddcda',
                },
              },
        }

    }
    
    const theme = createTheme(muiTheme);
    return (
        <StylesProvider>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </StylesProvider>
    )
}

export default Theme;