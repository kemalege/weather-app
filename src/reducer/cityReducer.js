export const cityReducer = (cityState, action) => {
    switch(action.type) {

        case "FETCH_INPUT":
            return {...cityState, sehir: action.payload}
        default:
            return cityState;
    }
}