import React from 'react';

export const CTX = React.createContext();

//"coord":{"lon":-81.74,"lat":41.44}
function reducer(state, action) {
    const { name, weather, main, coord } = action.payload;
    const {lon, lat} = coord;
    switch (action.type) {
        case "RECEIVE_LOCATION":
            return ({
                name,
                weather,
                main,
                lng: lon,
                lat
                
            });

        default:
            return state;
    }
}

const initialState = {
    name: '',
    weather: [{main: '', icon: ''}],
    main: {temp:'', temp_max:'', temp_min: ''},
    lng: -73.9405301, 
    lat: 40.7687653
};


let defaultCity;

export default function Store(props) {

    if (!defaultCity) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?zip=10022,us&units=imperial&appid=a673f727f21560d303446f34d91487b1`)
            .then(res => {
                return res.json();
            }).then(res => {
                dispatch({ type: "RECEIVE_LOCATION", payload: res });
            });
        defaultCity = true;
    }

    const [weatherInfo, dispatch] = React.useReducer(reducer, initialState);

    const fetchData = function (value) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&units=imperial&appid=a673f727f21560d303446f34d91487b1`)
            .then(res => {
                return res.json();
            }).then(res => {
                dispatch({ type: "RECEIVE_LOCATION", payload: res });
            }, (error) => {
                dispatch({type: "RECEIVE_LOCATION", payload: initialState});
            }
            );
    };
    return (
        <CTX.Provider value={{ fetchData, weatherInfo }}>
            {props.children}
        </CTX.Provider>
    )
}