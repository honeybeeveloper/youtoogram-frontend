import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import PropTypes from "prop-types";
import StyledTheme from "../theme/StyledTheme";


function StyledTextField(props) {
    const {inputLabel, handleTextField, width} = props

    return (
        <span style={useStyles.root}>
            <TextField
                style={{...useStyles.textField, 
                        width : width? width : useStyles.textField.width }}
                InputProps={{
                    startAdornment: (
                    <InputAdornment position="start">
                        <label style={useStyles.textFieldInput}>{inputLabel}</label>
                    </InputAdornment>
                    ),
                }}
                inputProps={{
                    onChange: function (e) {
                        handleTextField(e.currentTarget.value)
                    },
                }}
            />
        </span>
    )
}

StyledTextField.prototype = {
    inputLabel: PropTypes.string.isRequired,
    handleTextField: PropTypes.func.isRequired,
}

const useStyles = {
    root:{
        height: 0,
    },
    textField: {
        width: '30vw',
    },
    textFieldInput: {
        width: StyledTheme.spacing * 10,
        paddingRight: StyledTheme.spacing,
        fontWeight: 'bold',
        color: '#9f9fc1',
    },
};

export default StyledTextField;