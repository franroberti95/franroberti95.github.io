import React from 'react'
import Link from "../../components/Link";
import styled from 'styled-components';
import FrancoImage from '../../assets/image.jpeg';
const Header = ({setShowCv}: {setShowCv: (showCv: boolean)=>{}}) =>
    <div>
        <TopStuff>
            <Link
                uri={'https://www.linkedin.com/in/franco-roberti-b12850146/'}
                label={'Linkedin'}
            />
            <p style={{cursor:"pointer"}} onClick={()=>setShowCv(false)}>Interactive resume incoming!!</p>
        </TopStuff>
        <InfoSection>
            <ImageContainer>
                <Image src={FrancoImage} alt="Franco Image"/>
            </ImageContainer>
            <InfoContainer>
                <Name>Franco Roberti</Name>
                <Stack>Full Stack Developer</Stack>
                <MainInfo>
                    <Info>Cellphone: <b>+54 (11) 6199-6820</b></Info>
                    <Info> Email: <b>franroberti95@gmail.com</b></Info>
                </MainInfo>
            </InfoContainer>
            <OtherInfoContainer>
                <OtherInfo><OtherInfoP>City</OtherInfoP> <OtherInfoB>Buenos Aires</OtherInfoB></OtherInfo>
                <OtherInfo><OtherInfoP>Age</OtherInfoP> <OtherInfoB>{getAge('02/22/1995')} años</OtherInfoB></OtherInfo>
            </OtherInfoContainer>
        </InfoSection>
    </div>;

function getAge(dateString:string) {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

const InfoSection = styled.div`
  display: grid;
  grid-template-columns: 0.7fr 2fr 0.7fr;
  grid-template-rows: 1fr;
  gap: 0px 16px;
  grid-template-areas: "image info other";
  margin-bottom: 1rem;
`;
const ImageContainer = styled.div`grid-area: image;
  align-items: center;
  justify-content: center;
  display: flex;`;
const Image = styled.img`max-width:100%;`;
const InfoContainer = styled.div`grid-area: info;`;
const OtherInfoContainer = styled.div`grid-area: other;`;
const MainInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Name = styled.h1`
    font-size: 1.5rem;
`;
const Stack = styled.h2`
  font-size: 1rem;
  font-style: italic;
  font-weight: normal;
  color: grey;
`;
const Info = styled.h3`
    font-size: 0.75rem;
    font-weight: normal;`;
const OtherInfo = styled.div`

    justify-content: right;
    display: flex;
    flex-direction: row;
`;
const OtherInfoP = styled.p`
    font-size: 0.75rem;
`;
const OtherInfoB = styled.p`
  font-size: 0.75rem;
  font-weight: bold;
  margin-left: 10px;
`;
const TopStuff = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default Header