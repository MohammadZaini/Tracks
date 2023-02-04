import '../_mockLocation';
import React, { useContext } from "react";
import { StyleSheet } from 'react-native';
import { Text } from "react-native-elements";
import Map from "./components/Map";
import { SafeAreaView } from "react-native-safe-area-context";
import { Context as LocationContext } from './context/LocationContext';
import useLocation from '../hooks/useLocation';
import { withNavigationFocus } from 'react-navigation';

const TrackCreateScreen = ({isFocused}) => {
    const {addLocation} = useContext(LocationContext);
    const [err] = useLocation(addLocation);
    // or useLocation((location) => addLocation(location)
    return (
    <SafeAreaView forceInset={{top: 'always'}} >
            <Text h2 >Create A Track</Text>
            <Map/>
            {err ? <Text>Please enable location services</Text> : null}
    </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);