import React, {useState, useEffect} from "react";
import {  createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchResult from '../screens/SearchResult';
import SearchResultsMap from '../screens/SearchResultsMap';
import feed from '../../assets/data/feed';
import { useRoute } from "@react-navigation/native";
//import { API, graphqlOperation } from "aws-amplify";
import { listPosts } from "../graphql/queries";
import { LogBox } from "react-native";

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = (props) => {

  const [posts, setPosts] = useState([]);
  console.log(posts);
  // const route = useRoute();
  // const { guests, viewport }  = route.params;

  useEffect(() => {
    const fetchPosts = async () => {
      try {

        // const postsResult = await API.graphql(
        //   graphqlOperation(listPosts, {
        //     filter: {
        //       and: {
        //         maxGuests: {
        //           ge: guests
        //         },
        //         latitude: {
        //           between: [
        //             viewport.southwest.lat,
        //             viewport.northeast.lat,
        //           ],
        //         },
        //         longitude: {
        //           between: [
        //             viewport.southwest.lng,
        //             viewport.northeast.lng,
        //           ],
        //         }
        //       }
        //     }
        //   })
        // )

        // setPosts(postsResult.data.listPosts.items);
      } catch (e) {
        console.log(e);
      }
    }

    fetchPosts();
  }, [])

  return (
    <Tab.Navigator screenOptions={{
      activeTintColor: '#f15454',
      indicatorStyle: {
        backgroundColor: '#f15454',
      }
    }}>
      <Tab.Screen name={"list"}>
        {() => (
          <SearchResult posts={posts} />
        )}
      </Tab.Screen>
      <Tab.Screen name={"map"}>
        {() => (
          <SearchResultsMap posts={posts} />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default SearchResultsTabNavigator;
