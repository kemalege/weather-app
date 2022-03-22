// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=930e530e5a52d823c8289889c79603a3
import { useEffect, useContext, useReducer,useState} from "react";
import { usePosition } from "use-position";
import { reducer } from "./reducer/reducer";
import axios from "axios";
import {HavaDurumu} from './components/HavaDurumu'
import { HavaDurumuContext } from "./contexts/HavaDurumuContext";
import { StyledContainer } from "./components/styles/Container.styled";
import { Container } from "./components/styles/MainContainer.styled";
import GlobalStyles from "./components/styles/Global";
import styled, {ThemeProvider} from "styled-components";
import {lightTheme, darkTheme, themes, aydinlik,karanlik} from './components/styles/themes.js';
import Splash from "./components/styles/ToggleSwitch";

export const initialState = {
  weather_data: "",
  city: "",
  error: ""
};
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {weather_data, city, error} = state;

  const context = useContext(HavaDurumuContext);
  const [sehir, setSehir] = useState(""); 
  const [theme, setTheme] = useState("light")


  // const Icon = theme === "light" ? " Light" : "Dark";
  // const {sehir} = context;
  // console.log(sehir);
  
//   const [weather, setWeather] = useState();
//   const [title, setTitle] = useState("Şehir seç");
  const { latitude, longitude } = usePosition();


  const getWeatherData = async (lat, lon) => {

    dispatch({type: "FETCH_START"});

    const key = process.env.REACT_APP_WEATHER_API_KEY;
    const lang = navigator.language.split("-")[0];
    try {
      //axios ile yaptığımız isteğe ve gelen sonuca göre de veriler var bunun içinden destructor ile alıyoruz
      const { data } = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&lang=${lang}&units=metric`
      );
        dispatch({type:"FETCH_SUCCESS",payload:data});
      
    } catch  {
        alert("Veri alınırken hata oluştu");
        // console.error(error.response);
        dispatch({ type: "FETCH_FAILURE"});
    }
  };

  const getCoordinates = async (cityy) => {

    dispatch({type: "FETCH_START"});

    const key = process.env.REACT_APP_WEATHER_API_KEY;
    const lang = navigator.language.split("-")[0];
    const limit = 5;
    try {
      //axios ile yaptığımız isteğe ve gelen sonuca göre de veriler var bunun içinden destructor ile alıyoruz
      const { data } = await axios.get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${cityy}&limit=${limit}&appid=${key}&lang=${lang}`
      );
      if(data[0]){
        
        dispatch({type:"FETCH_INPUT",payload:data[0]}); 
        
      }
      else if (!city){
        getWeatherData(latitude,longitude);
        
      }
      else{
        getWeatherData(city.lat,city.lon);
        alert("Please enter matching city");
      }
      
      console.log(data[0]);
    } catch (error) {
        dispatch({type:"FETCH_FAILURE",payload:"Failed to fetch"});
        
    }
  };
  useEffect(() => {

    city && getWeatherData(city.lat,city.lon);
  }, [city]);

  useEffect(() => {

    latitude && longitude && getWeatherData(latitude, longitude);
  }, [latitude, longitude]);

  
  return (
  <ThemeProvider theme={themes[theme]} >
   <HavaDurumuContext.Provider
   
    value={{
      state: state,
      getWeatherData: getWeatherData,
      getCoordinates: getCoordinates,
      setSehir: setSehir,
      sehir:sehir
     }}>
     <GlobalStyles/>
      <Container>
        <Splash theme={theme} setTheme={setTheme}/>
        {/* <toggleButton onClick ={() => themeToggler()}>{Icon}</toggleButton> */}
       <HavaDurumu/>
      </Container>
   </HavaDurumuContext.Provider>
   </ThemeProvider>
  );
};

export default App;
