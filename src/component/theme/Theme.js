import React from "react";
import { 
    createTheme, 
    ThemeProvider, 
    StyledEngineProvider, 
} from "@mui/system";


function Theme(props) {
    const {children} = props;

    const base = {
        headerColor: '#68bd69',

    }
    const muiTheme = {

    }
    
    const theme = createTheme(muiTheme);
    return (
        <StyledEngineProvider>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </StyledEngineProvider>

    )
}

export default Theme;