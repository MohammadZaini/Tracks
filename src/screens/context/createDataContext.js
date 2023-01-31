import React,{useReducer} from "react";
import { exp } from "react-native-reanimated";


export default (reducer,actions , defaultValue) => {
    const Context =  React.createContext()

    const Provider = ({children}) => {
        const [state, dispatch] = useReducer(reducer, defaultValue);
        console.log(children)
        const boundActions = {};

        for (let key in actions) {
            boundActions[key] = actions[key](dispatch)
        }

        return (
            <Context.Provider value={{state, ...boundActions}} >
                {children}
            </Context.Provider>
        );
    };

    return {Context, Provider};
};