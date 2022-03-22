export const reducer = (state, action) => {
    switch(action.type) {
        case "FETCH_START":
            return {...state, weather_data: "", error: ""}
        case "FETCH_SUCCESS":
            return {...state, weather_data: action.payload, error: ""}
        case "FETCH_FAILURE":
            return {...state, error: action.payload}
        case "FETCH_INPUT":
            return {...state, city: action.payload}
        default:
            return state;
    }
}