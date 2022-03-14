import React from 'react'
import styled from "styled-components";
import Underline from "../Underline";

interface AchievementI {
    underlineLabel: string;
    firstText: string;
    secondText: string;
}

const Achievement = ({firstText, secondText, underlineLabel}:AchievementI) =>
    <AchievementContainer>
        <FirstText>{firstText}</FirstText>
        <SecondText>{secondText}</SecondText>
        <Spacer/>
        <Underline label={underlineLabel}/>
    </AchievementContainer>;

const AchievementContainer = styled.div`width: 45%; margin-bottom: 1rem;`;
const SecondText = styled.p`font-size: 1rem; margin:0;`;
const Spacer = styled.div`height:0.5rem`;
const FirstText = styled.p`font-weight: bold; margin:0; font-size: 1rem;`;

export default Achievement