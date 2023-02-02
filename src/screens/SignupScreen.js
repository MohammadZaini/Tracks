import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Context as AuthContext } from "./context/AuthContext";
import Authform from "./components/AuthForm";
import NavLink from "./components/NavLink";

const SignupScreen = ({navigation}) => {
    const {state, signup} = useContext(AuthContext)


    return (
    <View style={styles.container}>    
        <Authform
            headerText="Sign Up for tacker"
            errorMessage= {state.errorMessage}
            submitButtonText="Sign Up"
            onSubmit={signup} 
            // Is equivalent to ===> onSubmit={({email, password}) => signup(email,password)}
        />
        <NavLink 
            text="Already have an account? Sign in instead"
            routeName="Sginin"
        />
    </View>
    );
};

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250,
    }
});

export default SignupScreen;