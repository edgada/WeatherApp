import React, { Component } from 'react';
import {Text, View, Image} from 'react-native';
import styles from './DayNightBox.style.js';

export default class App extends Component<{}> {

    constructor(props) {
        super(props);

        this.state = {
            dayIcon: '1',
            nightIcon: '1',
        }
    }

    componentDidMount(){
        if(this.props.dayIcon*1 < 10){
            this.setState({
                dayIcon: '0' + this.props.dayIcon
            })
        } else {
            this.setState({
                dayIcon: this.props.dayIcon
            })
        }

        if(this.props.nightIcon *1 < 10){
            this.setState({
                nightIcon: '0' + this.props.nightIcon
            });
        } else {
            this.setState({
                nightIcon: this.props.nightIcon
            })
        }
    }

    render() {
        return (
            <View style={styles.contentBottomContainer}>
                <View style={styles.contentBottomLeftContainer}>
                    <Text style={styles.dayNightText}>Day</Text>
                    <Image
                        style={styles.iconImage} source={{uri: 'https://developer.accuweather.com/sites/default/files/'+ this.state.dayIcon +'-s.png'}} />
                    <Text style={styles.dayNightInfoText}>{this.props.dayText}</Text>
                </View>
                <View style={styles.contentBottomRightContainer}>
                    <Text style={styles.dayNightText}>Night</Text>
                    <Image
                        style={styles.iconImage} source={{uri: 'https://developer.accuweather.com/sites/default/files/'+ this.state.nightIcon +'-s.png'}} />
                    <Text style={styles.dayNightInfoText}>{this.props.nightText}</Text>
                </View>
            </View>
        );
    }
}