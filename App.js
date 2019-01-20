import React, {Component} from 'react';
import {Text, View, ImageBackground, ActivityIndicator, NetInfo, Alert} from 'react-native';
import TemperatureBox from './Komponentai/TemperatureBox';
import DayNightBox from './Komponentai/DayNightBox';
import styles from './App.style.js';

const apiKey = "ejHerlkQZgRze1edqV53SbY3S4HHKYpY";

type Props = {};
export default class App extends Component<Props> {

    constructor(props){
        super(props);
        this.state = {
          isLoading: true,
          weatherDailyForecast: {},
          currentTemperature: "",
        }
    }

    componentDidMount(){
        this.getLocationKey();
    }

    getLocationKey(){
        NetInfo.getConnectionInfo().then((connectionInfo) => {
            var conn = connectionInfo.type.toString()
            if(conn != "none") {
                fetch('http://dataservice.accuweather.com/locations/v1/cities/ipaddress.json?apikey=' + apiKey)
                    .then((response) => response.json())
                    .then((responseJson) => {
                        if(responseJson.hasOwnProperty('Key')){
                            this.getWeatherForecast(responseJson.Key);
                        } else {
                            this.setTestData();
                        }
                    })
                    .catch((error) =>{
                        console.error(error);
                    });
            }
            else {
                Alert.alert(
                    'No internet connection!',
                    'Enable internet connection and try again.',
                    [
                        {text: 'Try again', onPress: () => this.getLocationKey()}
                    ],
                    { cancelable: true }
                )
            }
        });
    }

    getWeatherForecast(locationKey){
        fetch('http://dataservice.accuweather.com/forecasts/v1/daily/1day/' + locationKey + '.json?metric=true&apikey=' + apiKey)
            .then((response) => response.json())
            .then((responseJson) => {
                if(responseJson.hasOwnProperty('DailyForecasts')){
                    this.setState({
                        weatherDailyForecast: responseJson.DailyForecasts[0]
                    });
                    this.getCurrentTemperature(locationKey);
                } else {
                    this.setTestData();
                }
            })
            .catch((error) =>{
                console.error(error);
            });
    }

    getCurrentTemperature(locationKey){
        fetch('http://dataservice.accuweather.com/forecasts/v1/hourly/1hour/' + locationKey + '.json?metric=true&apikey=' + apiKey)
            .then((response) => response.json())
            .then((responseJson) => {
                if(responseJson.length > 0 && responseJson[0].hasOwnProperty('Temperature')){
                    this.setState({
                        isLoading: false,
                        currentTemperature: responseJson[0].Temperature.Value
                    });
                } else {
                    this.setTestData();
                }
            })
            .catch((error) =>{
                console.error(error);
            });
    }

    setTestData(){
        //test data jei bus pasiektas API call limitas (50 uzklausu / diena)---------------------
        this.setState({
            currentTemperature: '-12',
            weatherDailyForecast: {
                Temperature: {
                    Maximum: {
                        Value: '-10'
                    },
                    Minimum: {
                        Value: '-15'
                    }
                },
                Day: {
                    Icon: '20',
                    IconPhrase: 'Mostly cloudy w/ flurries',
                },
                Night: {
                    Icon: '35',
                    IconPhrase: 'Partly cloudy',
                }
            },
            isLoading: false
        })
        //---------------------------------------------------------------------------------------
    }

  render() {
      if(!this.state.isLoading){
          return (
              <ImageBackground source={require('./Komponentai/Category/rain.jpg')} style={styles.bgImage}>
                  <View style={styles.mainContainer}>
                      <View style={styles.contentContainer}>
                          <TemperatureBox temperatureNow={this.state.currentTemperature}
                                          maxTemperature={this.state.weatherDailyForecast.Temperature.Maximum.Value}
                                          minTemperature={this.state.weatherDailyForecast.Temperature.Minimum.Value} />
                          <DayNightBox dayIcon={this.state.weatherDailyForecast.Day.Icon}
                                       dayText={this.state.weatherDailyForecast.Day.IconPhrase}
                                       nightIcon={this.state.weatherDailyForecast.Night.Icon}
                                       nightText={this.state.weatherDailyForecast.Night.IconPhrase} />
                      </View>
                  </View>
              </ImageBackground>
          );
      } else {
          return (

              <View style={styles.loadingContainer}>
                  <Text style={styles.loadingText}>Loading data</Text>
                  <ActivityIndicator size="large" color="#ffffff" />
              </View>
          );
      }
  }
}