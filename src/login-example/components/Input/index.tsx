import React from "react"
import styled from "styled-components"

interface InputProps{
    name: string;
    label: string;
    required?: boolean;
    onChange?: any;
    onBlur?: any;
    onFocus?: any;
    type?: string;
    maxlength?: number;
}

// @ts-ignore
const Input = ({ name, label, required, onChange, onBlur, onFocus, type, maxlength }:InputProps) =>
    <StyledInputContainer>
        <StyledLabel htmlFor={name}>{required && "*"} {label}</StyledLabel>
        <StyledInput name={name} maxLength={maxlength} onChange={onChange} onBlur={onBlur} type={type} onFocus={onFocus} />
    </StyledInputContainer>

const StyledInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  margin-top: 15px;
`;

const StyledInput = styled.input`
  background-color: #1d2230;
  border-radius: 2px;
  box-shadow: none;
  border: 1px solid rgba(255,255,255,0.5);
  color: white;
  font-family: inherit;
  font-size: 1rem;
  min-height: 42px;
  padding: 5px 10px;
`;

const StyledLabel = styled.label`
  color: white;
  font-weight: 600;
  margin-bottom: 5px;
`;

export default Input
