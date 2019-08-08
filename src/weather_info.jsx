import React from 'react';
import Typography from '@material-ui/core/Typography';

class WeatherInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            weather: '',
            temp: '',
            temp_max: '',
            temp_min: '',
            humidity: '',
            // icon: `http://openweathermap.org/img/wn/${this.props.weather[0].icon}@2x.png`
        };

    }

    // componentDidMount() {
    //     fetch(`https://api.openweathermap.org/data/2.5/weather?zip=10022,us&units=imperial&appid=a673f727f21560d303446f34d91487b1`)
    //         .then(res => {
    //             return res.json();
    //         }).then(res => {
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
        console.log(this.props);
        const{main, weather, name} = this.props;
        return (
            <div>
                <Typography variant="h4" component="h4">
                    {name}
                </Typography>

                    <img src={this.state.icon}/>
                <Typography variant="h5" component="h5">
                    {weather.main[0]}
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

export default WeatherInfo;