import React from 'react'
import SectionTitle from "../../components/SectionTitle";
import styled from "styled-components";

const Experience = () =>
    <section>
        <SectionTitle>Experience</SectionTitle>
        <FirstP>Fullstack developer, focused in front-end programming using React.js.</FirstP>
        <SecondP>Good knowledge in Web UI developing using newest front-end technologies and tools, such as <b>WebStorm IDE, Bitbucket, JIRA, Figma, Webpack, HTML5, CSS3/SCSS/SASS/LESS, JavaScript/ES6, React/Redux/Mobx, Material Design, GreenSock.</b></SecondP>
        <ThirdP>I also have back-end knowledge, creating <b>RESTful API with Node.js/Golang and NoSQL MongoDB database, as well as Relational databases, such as PGSql.</b></ThirdP>
    </section>
const FirstP = styled.p`font-weight: bold; font-size: 1rem;`;
const SecondP = styled.p`font-size: 1rem;`;
const ThirdP = styled.p`font-size: 1rem;`;
export default Experience