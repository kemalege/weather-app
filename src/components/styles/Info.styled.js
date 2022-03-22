import styled from "styled-components";

export const StyledInfo = styled.div`
  color: ${(props) => props.theme.fontColor};
  & div {
    display: flex;
    justify-content: space-between;
  }
`;
