import React, {useContext} from "react";
import {View, Text, StyleSheet} from 'react-native';
import { Button } from "react-native-elements";
import Spacer from "./components/Spacer";
import { Context as AuthContext } from "./context/AuthContext";
import { SafeAreaView } from "react-native-safe-area-context";
import {FontAwesome} from '@expo/vector-icons'

const AccountScreen = () => {
    const { signout }= useContext(AuthContext)

    return (
    <SafeAreaView forceInset={{top: 'always'}}>
            <Text style={{ fontSize: 48 }}>Account Screen</Text>
            <Spacer>
                <Button title="Sign Out" onPress={signout}/>
            </Spacer>
        </SafeAreaView>
    )
};

AccountScreen.navigationOptions = () => {
    return {
        tabBarIcon: <FontAwesome name='gear' size={20} />
    };
};

const styles = StyleSheet.create({});

export default AccountScreen;