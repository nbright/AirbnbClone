import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    button : {
        borderWidth : 1,
        width : 30,
        height : 30,
        borderRadius : 30,
        justifyContent : 'center',
        borderColor : '#8d8d8d',
        alignItems : 'center'
    },
    BigText : {
        fontWeight : 'bold',
    },
    SmallText : {
        color : '#8d8d8d',
    },
    GuestContainer : {
        flexDirection : 'row', 
        alignItems : 'center',
    },
    ButtonText :{
        fontSize : 16, 
        color : '#474747',
    },
    ValueText :{
        marginHorizontal: 20,
        fontSize: 16,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        marginHorizontal: 20,
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
    },
});

export default styles;