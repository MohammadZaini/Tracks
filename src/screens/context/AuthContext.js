import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error': 
            return {...state, errorMessage: action.payload};

        default:
            return state;
    };
};

const signup = dispatch => {
    return async ({email, password}) => {
        //make API request to sign up with that email and password

        try {
            const response = await trackerApi.post('/signup',{email, password})
            console.log(response.data)

        } catch(error) {
            console.log(response.data)
            dispatch({type: 'add_error', payload:'Something went wrong with sign up'})

        };
        // If we sign up, modify our state, and say that we are authenticated

        // If signing up fails, we probably need to reflect an error message somewhere
    };
};

const signin = (dispatch) => {
    return ({email, password}) => {
        //Try to sign in 

        // Handle success by updating state 

        // hanlde failure by showing error message (somehow)
    };
};

const signout = (dispatch) => {
    return () => {
        // Somehow sign out
    }
}

export const {Provider, Context} = createDataContext(
    authReducer,
    {signup, signin, signout},
    {isSignedin: false, errorMessage: ''}
);