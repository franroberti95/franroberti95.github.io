import styled from "styled-components"


const Form = styled.form`
  width: ${(props: any) => props.width};
  height: ${(props: any) => props.height};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export default Form
