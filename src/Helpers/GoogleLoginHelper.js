import { GoogleSignin, statusCodes } from 'react-native-google-signin';

export const GOOGLE = 'GOOGLE';
GoogleSignin.configure();

export const googleSignIn = async () => {
    
    try {

        await GoogleSignin.hasPlayServices();
        return await GoogleSignin.signIn();

    } 
    catch (error) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            alert('Sign in cancelled');
        } 
        else if (error.code === statusCodes.IN_PROGRESS) {
            alert('Sign in is in progress already');
            // operation (f.e. sign in) is in progress already
        } 
        else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            alert('Services is not available or outdated');
            // play services not available or outdated
        } 
        else {
            alert('Unknown error');
            // some other error happened
        }
        return error;
    }

};





export const getCurrentUser = async () => {
    return await GoogleSignin.getCurrentUser();
};




export const isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    return isSignedIn;
};



export const signOut = async () => {
    try {
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
        // Remember to remove the user from your app's state as well
    } catch (error) {
        console.error(error);
    }
};