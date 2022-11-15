import React from "react";
import { Button }  from '@mui/material'
import PropTypes from "prop-types";
import StyledTheme from "../theme/StyledTheme";

function StyledButton(props){
  const { name } = props
  
  const handleClick = () => {
    console.log('button')
  }

  return (
    <Button variant="contained" sx={useStyles.button} onClick={handleClick}>
        <label style={useStyles.label}>{name}</label>
    </Button>
  )
}

StyledButton.propTypes = {
  name: PropTypes.string.isRequired,
};

const useStyles = {
    button: {
        backgroundColor: StyledTheme.base.button.backgroundColor,
        '&:hover': {
            backgroundColor: StyledTheme.base.button.hoverButtonColor,
        },
    },
    label: {
        fontSize: StyledTheme.base.button.labelSize,
        color: StyledTheme.base.button.labelColor,
        fontWeight: "bold",
    }
}

export default StyledButton;