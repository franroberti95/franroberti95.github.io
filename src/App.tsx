import React, {useEffect, useState} from 'react';
import Studies from "./sections/Studies";
import Languages from "./sections/Languages";
import Experience from "./sections/Experience";
import Jobs from "./sections/Jobs";
import Header from "./sections/Header";
import styled from "styled-components";
import Underline from "./components/Underline";
import Login from "./login-example/screens/login";

function App() {
    // @ts-ignore
    const [showCv, setShowCv]:[boolean, (showCv: boolean)=>{}] = useState(true);

    useEffect(() => {
        document.title = "Franco Roberti"
    },[])

    return showCv ? (
    <AppContainer>
        <Header setShowCv={setShowCv}/>
        <Underline/>
        <Spacer/>
        <Jobs/>
        <Spacer/>
        <Experience/>
        <Spacer/>
        <Studies/>
        <Spacer/>
        <Languages/>
    </AppContainer>
  ):(<Login setShowCv={setShowCv}/>);
}
const AppContainer = styled.div`
    width: 800px;
    max-width: 100%;
    margin: auto;
  padding-right: 1rem;
  padding-left: 1rem;
`;
const Spacer = styled.div`
  height: 1rem
`;
export default App;
