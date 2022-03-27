import React, { useContext, useState, useReducer } from "react";
import { HavaDurumuContext } from "../contexts/HavaDurumuContext";
import { reducer } from "../reducer/reducer";
import { StyledForm } from "./styles/Form.styled";
import { StyledInfo } from "./styles/Info.styled";
import { StyledContainer } from "./styles/Container.styled";
import { Button } from "./styles/Button.styled";
import { BsSearch } from "react-icons/bs";
import {Icons, SvgObject} from "./styles/SvgObject.styled";
import {Temprature} from "./styles/SvgObject.styled";
import { WiThermometer } from "react-icons/wi";
import { WiStrongWind } from "react-icons/wi";
import { WiTime2 } from "react-icons/wi";

export const HavaDurumu = () => {
  const context = useContext(HavaDurumuContext);
  // let {city} = context.state;
  // const [sehir, setSehir] = useState("Denizli");

  // const [state, dispatch] =  useReducer(reducer, context);
 
  const { weather, dt, main, sys, wind , timezone } = context.state.weather_data;
  const {name} = context.state.city? context.state.city: context.state.weather_data;
  
  // console.log(context.state.weather_data);

  const timeZoneCalc = (offset) => {
    const b = new Date()
    const utc = b.getTime()+(b.getTimezoneOffset()*60000);
    const nd = new Date(utc + (3600000*offset));
    return nd.toLocaleString();
  }

  
  const handleSubmit = (e) => {
    e.preventDefault();
    context.getCoordinates(context.sehir);
  };
  const handleChange = (e) => {
    const { value } = e.target;
    context.setSehir(value);
  };

  if (!context.state.weather_data) {
    return <p>...</p>;
  }

  const dayOrNight = () => {
    const currentDate = timeZoneCalc(timezone/3600);
    const sunriseDate = new Date((sys.sunrise*1000)).toLocaleString();

    if(dt > sys.sunrise){
      return SvgObject[weather[0].main].day;
    }
    else{
      return SvgObject[weather[0].main].night;
    }
  }
  
  return (
    <StyledContainer>
      <StyledForm onSubmit={handleSubmit}>
        <label></label>
        <BsSearch id="bsSearch"/>
        <input 
          type="text"
          required
          value={context.sehir}
          onChange={handleChange}
        />
        
        <Button bg='#ff0099' color='#fff'>Search</Button>
        {/* <p>{name}</p> */}
      </StyledForm>
      <StyledInfo>
        <h3>{name},   {sys.country}</h3>
        <h3>{weather.map((data) => data.description).join(", ")}</h3>
        <Icons >{dayOrNight()}</Icons>
        <div>
          <div>
          {<WiThermometer/>}{main.temp}°C 
          </div>
          <div>
          {<WiStrongWind/>}{wind.speed} m/s
          </div>
        </div>
          
         <h3>{<WiTime2/>}{timeZoneCalc(timezone/3600)}</h3>
         
      </StyledInfo>
    </StyledContainer>
  );
};
