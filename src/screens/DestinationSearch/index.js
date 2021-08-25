
import React,{useState} from "react";
import {View, Text, TextInput, FlatList} from "react-native";
import searchResults from '../../../assets/data/search';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';

const DestinationSearchScreen = props => {

    const [inputText, setInputText] = useState('');
    // console.log(searchResults);
    // const results = searchResults;
    return (
    <View>
        {/*import component*/}
        <TextInput 
            style = {styles.textInput}
            placeholder = "Where are you going?"
            value = {inputText}
            onChangeText={setInputText}/>
        {/*List of Component */}
        <FlatList 
            data = {searchResults}
            renderItem = {({item}) => 
                <View style = {styles.row}>
                    <View style={styles.iconContainer}>
                        <Entypo name = {"location-pin"} size ={30} />
                    </View>
                    <Text style = {styles.locationText}>{item.description}</Text>
                </View>
            }
        />
    </View>
    );
};
export default DestinationSearchScreen;