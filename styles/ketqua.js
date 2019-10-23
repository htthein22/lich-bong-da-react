import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    viewItem: {
        width: 370,
        height: 110,
        top: 5,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        borderRadius: 15,
        backgroundColor: '#fff',
        marginTop: 10,

    },
    floating: {
        width: 56,
        height: 56,
        backgroundColor: 'green',
        borderRadius: 50,
        left: 310,
        top: 620,
        justifyContent: 'center',
        
    },
    //view modal
    viewModal: {
        left: 40,
        top: 150,
        alignItems: 'center',
        width: 310,
        height: 400,
        backgroundColor: 'white',
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 2,
        elevation: 5,
        borderRadius: 15,
    },
    //text input 
    txtDulieu: {
        width: 200,
        height: 50,
        borderBottomWidth: 1,
        borderColor: 'green'
    },
});


export default styles;