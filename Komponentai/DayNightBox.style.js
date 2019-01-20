import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    contentBottomContainer: {
        height: '40%',
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%',
        flexDirection: 'row',
    },
    contentBottomLeftContainer: {
        height: '100%',
        width: '45%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginRight: '5%',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        borderRadius: 10,
        paddingTop: '2%',
    },
    contentBottomRightContainer: {
        height: '100%',
        width: '45%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft: '5%',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        borderRadius: 10,
        paddingTop: '2%',
    },
    dayNightText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'rgba(255, 255, 255, 0.8)'
    },
    iconImage: {
        width: '100%',
        height: '50%',
        resizeMode: 'contain',
    },
    dayNightInfoText: {
        fontSize: 18,
        textAlign: 'center',
        color: 'rgba(255, 255, 255, 1)'
    }
});