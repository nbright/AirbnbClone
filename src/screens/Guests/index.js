import React, {useState} from 'react';
import {View, Text, Pressable} from "react-native";
import styles from './styles';


const GuestsScreen = props => {
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);
    return (
        <View>
        {/* Row 1 : Adults */}
        <View style = {styles.row}>
            {/* Titles */}
            <View>
                <Text style = {styles.BigText}>Adults</Text>
                <Text style = {styles.SmallText}>Ages 13 or above</Text>
            </View>
            {/* Buttons with value */}
            <View style = {styles.GuestContainer}>
                {/* - */}
                <Pressable 
                    onPress ={()=>setAdults(Math.max(0,adults - 1))}
                    style = {styles.button}>
                    <Text style = {styles.ButtonText}>-</Text>
                </Pressable>
                {/* value */}
                <Text style = {styles.ValueText}>{adults}</Text>
                {/* + */}
                <Pressable 
                    onPress ={()=>setAdults(adults + 1)}
                    style = {styles.button}>
                    <Text style = {styles.ButtonText}>+</Text>
                </Pressable>
            </View>
        </View>
        <View style = {styles.row}>
            {/* Titles */}
            <View>
                <Text style = {styles.BigText}>Children</Text>
                <Text style = {styles.SmallText}>Ages 2-12</Text>
            </View>
            {/* Buttons with value */}
            <View style = {styles.GuestContainer}>
                {/* - */}
                <Pressable 
                    onPress ={()=>setChildren(Math.max(0,children  - 1))}
                    style = {styles.button}>
                    <Text style = {styles.ButtonText}>-</Text>
                </Pressable>
                {/* value */}
                <Text style = {styles.ValueText}>{children }</Text>
                {/* + */}
                <Pressable 
                    onPress ={()=>setChildren(children  + 1)}
                    style = {styles.button}>
                    <Text style = {styles.ButtonText}>+</Text>
                </Pressable>
            </View>
        </View>
        <View style = {styles.row}>
            {/* Titles */}
            <View>
                <Text style = {styles.BigText}>Infants</Text>
                <Text style = {styles.SmallText}>Under 2</Text>
            </View>
            {/* Buttons with value */}
            <View style = {styles.GuestContainer}>
                {/* - */}
                <Pressable 
                    onPress ={()=>setInfants(Math.max(0,infants  - 1))}
                    style = {styles.button}>
                    <Text style = {styles.ButtonText}>-</Text>
                </Pressable>
                {/* value */}
                <Text style = {styles.ValueText}>{infants }</Text>
                {/* + */}
                <Pressable 
                    onPress ={()=>setInfants(infants  + 1)}
                    style = {styles.button}>
                    <Text style = {styles.ButtonText}>+</Text>
                </Pressable>
            </View>
        </View>
    </View>
    );
};
export default GuestsScreen;