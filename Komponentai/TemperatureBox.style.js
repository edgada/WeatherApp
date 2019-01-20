import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    mainContainer: {
        height: '30%',
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        borderRadius: 10,
        flexDirection: 'column',
    },
    todayText: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'rgba(0, 0, 0, 0.5)'
    },
    todayContainer: {
        height: '15%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '5%',
    },
    contentContainer: {
        height: '85%',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
    },
    contentTemperatureContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentMinMaxContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 15,
        borderColor: '#373447',
        borderLeftWidth: 1,
    },
    contentMaxContainer: {
        height: '20%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    contentMinContainer: {
        height: '20%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    currentTempText: {
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'rgba(0, 0, 0, 0.5)'
    },
    minMaxTemp: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});