import React, {useContext} from "react";
import {View, Text, StyleSheet} from 'react-native';
import { NavigationEvents } from "react-navigation";
import Authform from "./components/AuthForm";
import NavLink from "./components/NavLink";
import { Context as AuthContext } from "./context/AuthContext";

const SigninScreen = () => {
    const {state, signin, clearErrorMessage} = useContext(AuthContext);

    return (
    <View style={styles.container} >

        <NavigationEvents
            onWillFocus={clearErrorMessage}
        />
        <Authform
            headerText="Sign To to your account"
            errorMessage={state.errorMessage}
            onSubmit = {signin}
            submitButtonText="Sign In"
        />

        <NavLink
            text="Don't have an account? Sign up instead"
            routeName="Signup"
        />
    </View>

    );
};

SigninScreen.navigationOptions = () => {
    return {
        headerShown: false
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginBottom: 250,
    }
});

export default SigninScreen;