import React from 'react'
import Achievement from "../../components/Achievement";
import SectionTitle from "../../components/SectionTitle";
import styled from "styled-components";

const Jobs = () =>
    <section>
        <SectionTitle>Jobs</SectionTitle>
            <AchievementsContainer>
                    <Achievement firstText={'React Native developer at Phipeeps'}
                             secondText={'Develop, create native modules, ci deployment for iOS and Android apps.'}
                             underlineLabel={'Jen. 2021 - Now'}/>
                    <Achievement firstText={'Front-end React.js developer at Valtech'}
                                 secondText={'Work in teams building webapps.'}
                                 underlineLabel={'Jen. 2019- 2021'}/>
                    <Achievement firstText={'Full stack web developer'}
                                 secondText={'at AGEA (CLARÍN).'}
                                 underlineLabel={'Jun. 2018 - Oct. 2018'}/>
                    <Achievement firstText={'Full stack web developer'}
                                 secondText={'at ELINPAR S.A.'}
                                 underlineLabel={'Oct. 2018 - Jen. 2019'}/>
                    <Achievement firstText={'Full stack web developer'}
                                 secondText={'at THE CACTUS GROUP.'}
                                 underlineLabel={'Feb.2017 - Jun. 2018'}/>
            </AchievementsContainer>
    </section>

const AchievementsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default Jobs