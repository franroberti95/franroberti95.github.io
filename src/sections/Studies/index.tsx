import React from 'react'
import SectionTitle from "../../components/SectionTitle";
import Achievement from "../../components/Achievement";
import styled from "styled-components";

const Studies = () =>
    <section>
        <SectionTitle>Studies</SectionTitle>
        <AchievementsContainer>
            <Achievement firstText={'SOFTWARE ENGINEER'}
                         secondText={'Software Engineer student at UniversIity of Buenos Aires.'}
                         underlineLabel={'3rd year'}/>

            <Achievement firstText={'HIGH SCHOOL'}
                         secondText={'Bilingual school at Instituto Domingo Faustino Sarmiento.'}
                         underlineLabel={'Complete'}/>
        </AchievementsContainer>
    </section>

const AchievementsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export default Studies