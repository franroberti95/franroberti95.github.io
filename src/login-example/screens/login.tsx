import React, {useState, useRef} from "react";
import styled from "styled-components";
import LeniSvg from "../assets/svg/leni";
import Input from "../components/Input";
import Form from "../components/Form";
import Button from "../components/Button";
import Patch from "../assets/svg/patch";
import Eye from "../assets/svg/eye";
import AngryEye from "../assets/svg/angry-eye";
import Mouth from "../assets/svg/mouth";
import AngryMouth from "../assets/svg/angry-mouth";
import gsap from "gsap";
import CopHatSvg from "../assets/svg/cop-hat";

const defaultEyeCoords = {
    x: 101.16,
    y: 84.55
};

const FormWidth = 300;
const FormHeight = 600;
const CharsMaxLen = 37;
const HandWidth = 100;

const Login = ({setShowCv}: {setShowCv?: (showCv: boolean)=>{}}) => {
    const [eyeCoords,setEyeCoords] = useState(defaultEyeCoords);
    const [passwordActive,setPasswordActive] = useState(false);
    const [emailError,setEmailError] = useState(false);
    const [passwordError,setPasswordError] = useState(false);
    const leniHandRef = useRef();
    const formRef = useRef();

    const handFade = () => {
        gsap.to([leniHandRef.current], {
            y: 0,
            opacity: 0
        });
    }

    const positionHand = (e:any) => {
        gsap.to([leniHandRef.current], {
            y: `${e.target.offsetTop}px`,
            opacity: 1
        });
    }

    const onEmailFocus = (e:any) => {
        positionHand(e);
        updateLeniEye(e);
    }

    const handlePasswordFocus = (e:any)  => {
        positionHand(e);
        setPasswordActive(true);
    }
    const handlePasswordBlur = () => {
        handFade();
        setPasswordActive(false);
    }
    const resetErrors = () => {
        setPasswordError(false);
        setEmailError(false);
    };

    const changeEyeCoords = (xPercent:number) => {
        const x = 85 + (33*xPercent/100);
        setEyeCoords ({
            x,
            y: (-0.05 * Math.pow(x,2)) + (10.25 * x) - 425
        })
    };

    const updateLeniEye = (e: { target: { value: string } }) => {
        resetErrors();
        if(!e.target.value) return;
        const len = e.target.value.length - 1;
        changeEyeCoords(len*100/CharsMaxLen);
    }

    const handleLoginClick = (e: any) => {
        e.preventDefault();
        const form = new FormData(formRef.current);
        const email = form.get("email");
        const password = form.get("password");

        if(!email){
            setEmailError(true);
        }

        if(!password){
            setPasswordError(true);
        }

    }
    const handlePasswordChange = () => resetErrors();
    const handleEmailBlur = () => {
        handFade();
        setEyeCoords(defaultEyeCoords);
    }
    const getHatComponent = () => passwordError ? CopHatSvg : null;
    const getEyeComponent = () => passwordActive ? Patch : emailError ? AngryEye : Eye;
    const getMouthComponent = () => emailError || passwordError ? AngryMouth : Mouth;

    return (
        <LoginContainer>
            <div><p style={{color: 'white', position: 'absolute', top: 0, left:10, cursor: 'pointer'}}
                    onClick={()=>setShowCv &&setShowCv(true)}>Back to resume</p></div>
            {/* @ts-ignore */}
            <Form height={`${FormHeight}px`} width={`${FormWidth}px`} ref={formRef}>
                <LeniSvg
                    eyeCoords={eyeCoords}
                    eyeComponent={ getEyeComponent() }
                    mouthComponent={ getMouthComponent() }
                    hatComponent={ getHatComponent() }
                />
                <Input name="email" label="Email" maxlength={CharsMaxLen} type="email" onFocus={onEmailFocus} onChange={updateLeniEye} onBlur={handleEmailBlur}/>
                <Input name="password" label="Password" type="password" onFocus={handlePasswordFocus} onChange={handlePasswordChange} onBlur={handlePasswordBlur} />
                <LoginButtonContainer>
                    <Button onClick={handleLoginClick}>
                        Submit
                    </Button>
                </LoginButtonContainer>

                {/* @ts-ignore */}
                <StyledLeniHandSvg ref={leniHandRef} width={`${HandWidth}px`} viewBox="45 135 75 35" role="img" aria-labelledby="leni desc">
                    <g id="hand-think">
                        <path fill="#69b3b2" className="leni-hands"
                              d="M40.47 169.67c11.46-18.18 30.66-23.15 39.58-27.26 33.2-15.31 45.1-2.12 34 10.33-6.19 6.92-18.71 8.44-27.52 7.72-4.37-.35-18.23 4.16-25.64 9.28"/>
                        <path fill="#141827"
                              d="M41.76 170.43c6.6-10.37 16.66-17.21 27.76-22 3.89-1.7 7.88-3.14 11.74-4.9 6.31-2.87 13.06-5.36 20-6.21 3.82-.47 8.29-.59 11.74 1.22a7 7 0 012.76 2.41 5.38 5.38 0 01.84 3.11c0 3-2 6.13-4.3 8.36-4.28 4.23-10.72 5.88-16.53 6.48a53.5 53.5 0 01-8.95.13 20.3 20.3 0 00-6 .72 69.33 69.33 0 00-17.09 6.55 39 39 0 00-3.61 2.19c-1.59 1.08-.09 3.68 1.51 2.59a60.5 60.5 0 0117.47-7.78 26.19 26.19 0 016.77-1.32c2.9 0 5.75.25 8.67 0 6.39-.5 13.11-2 18.26-6.05 3.08-2.41 5.88-6.09 6.6-10a9 9 0 00-2.62-8.4c-2.92-2.64-7.07-3.41-10.88-3.48-12.05-.19-23.13 5.73-34 10.17-11.21 4.57-21.9 10.54-29.5 20.23-1.13 1.45-2.2 3-3.19 4.5s1.56 3.14 2.59 1.52z"/>
                    </g>
                </StyledLeniHandSvg>
            </Form>
        </LoginContainer>
    );
}

const StyledLeniHandSvg = styled.svg`
  position: absolute;
  top: 0;
  left: -${HandWidth}px;
  opacity: 0;
`;

const LoginButtonContainer = styled.div`
  margin-top: 15px;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #121625;
`;

export default Login;
