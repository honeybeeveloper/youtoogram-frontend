import React from "react";
// import { makeStyles } from "@mui/styles";
import StyledTheme from "../../component/theme/StyledTheme";
import StyledTextField from "../../component/textfield/StyledTextField";
import StyledButton from "../../component/button/StyledButton";


function SignIn(props) {

    return (
        <div style={useStyles.root}>
            <div style={useStyles.sideDiv}>Left</div>
            <div style={useStyles.contents}>
                <div style={useStyles.titleDiv}>
                    <label style={useStyles.title}>
                        {'너도 할 수 있어!'}<br />{'You too, gram'}
                    </label>
                </div>
                <div style={useStyles.inputsDiv}>
                    <StyledTextField id={'idInput'} inputLabel={'아이디'} width={'30vw'} />
                    <StyledTextField id={'pwInput'} inputLabel={'비밀번호'}  width={'30vw'}/>
                    <StyledButton name={'로그인'} />
                </div>
                <div style={useStyles.signupDiv}>
                    <label>아직 회원이 아니신가요?</label>
                    <label>회원가입</label>
                </div>
            </div>
            <div style={useStyles.sideDiv}>Right</div>
        </div>
    )

}

const useStyles = {
    root: {
        display: 'flex',
        height: '100vh',
    },
    sideDiv: {
        width: `${StyledTheme.variables.sideWidth}vw`,
    },
    contents: {
        width:  `calc(100vw - ${StyledTheme.variables.sideWidth}vw * 2)`,
        backgroundColor: '#e7bee7',
    },
    titleDiv: {
        display: "grid",
        justifyContent: "center",
        alignContent: "center",
        height: '40vh',
        backgroundColor: 'pink'
    },  
    title: {
        fontWeight: "bolder",
        fontSize: StyledTheme.spacing * 10
    },
    inputsDiv: {
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        height: '30vh',
        backgroundColor: 'yellow'
    },
    signupDiv: {
        height: '30vh',
        backgroundColor: 'lime'
    }
};

export default SignIn;