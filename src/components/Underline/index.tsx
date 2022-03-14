import React from 'react'
import styled from 'styled-components';

interface UnderlineI {
    label?: string;
}

const Underline = ({label}:UnderlineI) =>
    <UnderlineContainer>
        <Line/>
        {
            label &&
            <Label>{label}</Label>
        }
    </UnderlineContainer>

const UnderlineContainer = styled.div`display: flex; flex-direction: row; align-items: center; justify-content: space-between;`;
const Line = styled.div`flex-grow: 5; border-bottom: 1px solid black;`;
const Label = styled.p`margin:0; flex-grow: 1; text-align: right; font-weight: normal; color: darkgray; font-size: 0.75rem; font-style: italic`;

export default Underline