import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    loadingContainer: {
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7c7c7c',
    },
    loadingText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    bgImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',
    },
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentContainer: {
        height: '80%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});