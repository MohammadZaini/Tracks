// import '../_mockLocation';
import React, { useContext, useCallback } from "react";
import { StyleSheet } from 'react-native';
import { Text } from "react-native-elements";
import Map from "./components/Map";
import { SafeAreaView } from "react-native-safe-area-context";
import { Context as LocationContext } from './context/LocationContext';
import useLocation from '../hooks/useLocation';
import { withNavigationFocus } from 'react-navigation';
import TrackForm from './components/TrackForm';
import {FontAwesome} from '@expo/vector-icons'

const TrackCreateScreen = ({isFocused}) => {
    const {state: { recording }, addLocation} = useContext(LocationContext);
    const callback = useCallback( location => {
        addLocation(location, recording);
    }, [recording]
    );
    const [err] = useLocation(isFocused || recording, callback);

    return (
    <SafeAreaView forceInset={{top: 'always'}} >
            <Text h2 >Create A Track</Text>
            <Map/>
            {err ? <Text>Please enable location services</Text> : null}

            <TrackForm

            />
    </SafeAreaView>
    );
};
TrackCreateScreen.navigationOptions = () => {
    return {
        tabBarIcon: <FontAwesome name='plus' size={20} />
    };
};
const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);