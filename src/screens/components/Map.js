import React, {useContext} from "react"; 
import {Text, StyleSheet, ActivityIndicator} from 'react-native';
import { exp } from "react-native-reanimated";
import MapView, {Polyline, Circle} from "react-native-maps";
import {Context as LocationContext} from '../context/LocationContext'

const Map = () => {
    const {state: {currentLocation}} = useContext(LocationContext)

    if (!currentLocation) {
        return <ActivityIndicator size="large" style={{marginTop: 200}} />
    }
    console.log("Hola!")
    return (
    <MapView  
    style={styles.map}
    initialRegion={{
        ...currentLocation.coords,
        latitudeDelta:0.01,
        longitudeDelta: 0.01
    }}
    region= {{
        ...currentLocation.coords,
        latitudeDelta:0.01,
        longitudeDelta: 0.01
        
    }}
    >
    <Circle
        center={currentLocation.coords}
        radius={25}
        strokeColor="rgba(158,158,255,1.0)"
        fillColor="rgba(158,158,255,0.3"
    />
    </MapView>
    );
};

const styles = StyleSheet.create({
    map: {
        height: 300,
    }
});

export default Map