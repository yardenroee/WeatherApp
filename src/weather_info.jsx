import React from 'react';
import Typography from '@material-ui/core/Typography';

class WeatherInfoComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // name: '',
            // weather: '',
            // temp: '',
            // temp_max: '',
            // temp_min: '',
            // humidity: '',
        };
    }

    // componentDidMount() {
    //     fetch(`https://api.openweathermap.org/data/2.5/weather?zip=10022,us&units=imperial&appid=a673f727f21560d303446f34d91487b1`)
    //         .then(res => {
    //             return res.json();
    //         }).then(res => {
    //             console.log(res);
    //             window.defaultLocation = res;
    //             this.setState(
    //                 {
    //                     name: res.name,
    //                     temp: res.main.temp,
    //                     temp_min: res.main.temp_min,
    //                     temp_max: res.main.temp_max,
    //                     humidity: res.main.humidity,
    //                     weather: res.weather[0].main,
    //                     icon: `http://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`
    //                 }
    //             );
    //         });
    // }

    render() {
        const {main, weather, name} = this.props.data;
        return (
            <div>
                <Typography variant="h4" component="h4">
                    {name}
                </Typography>

                <img src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}/> 
                <Typography variant="h5" component="h5">
                    {weather[0].main}
                </Typography>

                <Typography variant="h5" component="h5" style={{ padding: '20px'}}>
                    {Math.ceil(main.temp) + '°'}
                </Typography>

                <Typography variant="subtitle1" component="h2">
                    Today's High: {main.temp_max}° &nbsp; Today's Low: {main.temp_min}°
                </Typography>

                <Typography variant="subtitle2" component="h2" style={{padding: '10px'}}>
                    Humidity: {main.humidity}%
                </Typography>
            </div>
        )
    }
}

export default WeatherInfoComponent;