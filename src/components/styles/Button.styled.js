import styled from "styled-components";

export const Button = styled.button`
  
  border-radius: 30px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 12px 40px;
  margin: 5px ;
  background-color: ${(props) => props.theme.buttonColor};
  color:  ${(props) => props.theme.fontColor};
  transition: 0.2s ease-in-out;

    &:hover{
        opacity: 0.9;
        transform: scale(0.98)
    }
`;