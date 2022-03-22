import styled from 'styled-components';
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";

const Toggle = styled.button`
    margin-left: 150px;
    margin-bottom: 20px; 
    cursor: pointer;
    height: 50px;
    width: 50px;   
    border-radius: 50%;
    border: none;
    background-color: ${props => props.theme.dayLightColor};
    color: ${props => props.theme.fontColor};
    &:focus {
        outline: none;
    }
    transition: all .2s ease;
`;

function Splash(props) {
    function changeTheme() {
        if(props.theme === "light"){
            props.setTheme("dark");
        }
        else {
            props.setTheme("light");
        }
    };

    const icon = props.theme === "dark" ? <HiMoon size={30} /> : <CgSun size={30} />;

    return (
                <Toggle onClick={changeTheme}>
                    {icon}
                </Toggle>
    
    )
}

export default Splash;