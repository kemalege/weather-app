import styled from "styled-components";

export const StyledForm = styled.form`
  & input {
    margin: 0 auto;
    margin-left: 5px;
    margin-top: 10px;
    border-radius: 10px;
    background-image: url("searchicon.png");
    background-position: 10px 10px;
    background-repeat: no-repeat;
    border: 0px solid;
    background-color: transparent;
    height: 35px;
    width: 200px;
    font-weight: 700;
    font-size: 18px;
    /* background-color: #d6c0cf; */
    background-color : ${(props) => props.theme.inputColor};
    color:${(props) => props.theme.body};
    padding-left: 40px;
    transition: 0.2s ease-in-out;
    
    
      
    :focus {
      opacity: 0.5;
      outline: none;
    }
    
  }
  
  #bsSearch {
    position: absolute;
    margin-top : 20px;
    margin-left : 15px;
    opacity: 0.4;
 
  }
`;
