import React, { Component } from 'react';
import {Text, View,} from 'react-native';
import styles from './TemperatureBox.style.js';

export default class App extends Component<{}> {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.todayContainer}>
                    <Text style={styles.todayText}>Today</Text>
                </View>

                <View style={styles.contentContainer}>
                    <View style={styles.contentTemperatureContainer}>
                        <Text style={styles.currentTempText}>{this.props.temperatureNow}C</Text>
                    </View>
                    <View style={styles.contentMinMaxContainer}>
                        <View style={styles.contentMaxContainer}>
                            <Text style={styles.minMaxTemp}>max {this.props.maxTemperature}C</Text>
                        </View>
                        <View style={styles.contentMinContainer}>
                            <Text style={styles.minMaxTemp}>min {this.props.minTemperature}C</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
