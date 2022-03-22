import styled from "styled-components";

export const StyledContainer = styled.div`

color : ${(props) => props.theme.containerColor};
background-color : ${(props) => props.theme.containerColor};
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border: 2px hidden purple;
box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
border-radius: 20px;
transition: 0.2s ease-in-out;
/* background-color: #DBE2F1; */

`