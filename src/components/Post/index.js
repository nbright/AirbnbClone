import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const Post = props => {
    return (
        <View style={styles.container}>
            {/* Image */}
            <Image
                style={styles.image}
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9eKkHj5a2zhoLiAhNWENOfkxehedNalEu5g&usqp=CAU' }}
            />
            {/* Bad & BedRoom*/}
            <Text style={styles.bedrooms}>
                1 bed 1 bedroom
            </Text>
            {/* Type & Description */}
            <Text style={styles.description} numberOfLines={2}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley
            </Text>
            {/* Old price & new Price */}
            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>$36</Text>
                <Text style={styles.price}>  $30</Text>
                / night
            </Text>
            {/* Total price */}
            <Text style={styles.totalPrice}>$230 total</Text>
        </View>
    );
};
export default Post;
