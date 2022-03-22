import styled from "styled-components";
import { WiCloud } from "react-icons/wi";
import { WiRain } from "react-icons/wi";
import { WiDaySunny } from "react-icons/wi";
import { WiDaySleet } from "react-icons/wi";
import { WiDaySnow } from "react-icons/wi";
import { WiDayFog } from "react-icons/wi";
import { WiNightClear } from "react-icons/wi";
import { WiNightAltCloudy } from "react-icons/wi";
import { WiNightAltRainMix } from "react-icons/wi";
import { WiNightSnow } from "react-icons/wi";
import { WiNightAltSleet } from "react-icons/wi";
import { WiDayThunderstorm } from "react-icons/wi";
import { WiNightThunderstorm } from "react-icons/wi";
import { WiNightFog } from "react-icons/wi";
import { WiThermometer } from "react-icons/wi";

export const Icons = styled.div`
  font-size: 100px;
  text-shadow: 1px 1px 1px #ccc;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 20px;
  /* box-shadow: 0 0 15px rgba(0, 0, 0, 0.15); */
  border-radius: 20px;
  
`;

export const Temprature = styled.div`
 color: ${(props) => props.theme.fontColor};
 font-size: 30px;
`
export const SvgObject = {
  // 'Clear': <WiDaySunny/>,
  // 'Clouds': <WiCloud/>,
  // 'Rain': <WiRain/>,
  // 'Drizzle': <WiDaySleet/>,
  // 'Thunderstorm': <WiDayLightning/>,
  // 'Snow': <WiDaySnow/>,
  // 'Mist': <WiDayFog/>,
  Clear: {
    day: <WiDaySunny />,
    night: <WiNightClear />,
  },

  Clouds: {
    day: <WiCloud />,
    night: <WiNightAltCloudy />,
  },

  Rain: {
    day: <WiRain />,
    night: <WiNightAltRainMix />,
  },

  Drizzle: {
    day: <WiDaySleet />,
    night: <WiNightAltSleet />,
  },

  Thunderstorm: {
    day: <WiDayThunderstorm />,
    night: <WiNightThunderstorm />,
  },

  Snow: {
    day: <WiDaySnow />,
    night: <WiNightSnow />,
  },

  Mist: {
    day: <WiDayFog />,
    night: <WiNightFog />,
  },

  Atmosphere: {
    day: <WiDayFog />,
    night: <WiNightFog />,
  },
};

export default SvgObject;
