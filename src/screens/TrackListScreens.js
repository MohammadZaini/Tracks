import React, {useContext} from "react";
import { Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { NavigationEvents } from "react-navigation";
import { ListItem } from "react-native-elements";
import { Context as TrackContext } from "./context/TrackContext";

const TrackListScreen = ({navigation}) => {
    const { state, fetchTracks } = useContext(TrackContext);
    console.log(state);
    return <>
    <NavigationEvents onWillFocus={fetchTracks} />
        <Text>Track List Screen</Text>
        <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
        return (
            <TouchableOpacity>
            <ListItem>
                <ListItem.Content>
                <ListItem.Title>{item.name}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
            </TouchableOpacity>
        );
        }}
    />  

    </>
};

const styles = StyleSheet.create({});

export default TrackListScreen;

/*
<FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
        return (
            <TouchableOpacity>
            <ListItem>
                <ListItem.Content>
                <ListItem.Title>{item.name}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
            </TouchableOpacity>
        );
        }}
    />
*/