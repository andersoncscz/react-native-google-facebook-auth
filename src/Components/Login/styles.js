import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({

    textButton: {
        flex: 1,
        color: '#fff',
        alignSelf: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        paddingRight: 28
    },

    imageButton: {
        width: 35,
        height: 35,
        alignSelf: 'flex-start',
        marginLeft: 5,
    },

    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 5,
        margin: 5,
        
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 2,        
    },    

    fbButton: {
        backgroundColor: '#3F51B5',
    },

    googleButton: {
        backgroundColor: '#F44336',
    }    
});

export default styles;