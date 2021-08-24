import React from 'react';
import {View, FlatList} from 'react-native';
import feed from '../../../assets/data/feed';
import Post from '../../components/Post';

const SearchResultScreen = props => {
    const feed1 = feed;
    return (
        <View>
            <FlatList
                data = {feed1}
                renderItem = {({item}) => <Post post={item}/>}
            />
        </View>
    );
};
export default SearchResultScreen;
