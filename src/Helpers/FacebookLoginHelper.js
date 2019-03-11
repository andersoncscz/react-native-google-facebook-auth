import {
    LoginManager,
    AccessToken,
    GraphRequest, 
    GraphRequestManager
} from 'react-native-fbsdk';

export const FACEBOOK = 'FACEBOOK';

export const fbLoginManager = async () => {

    return await LoginManager.logInWithReadPermissions(['public_profile', 'email', 'user_birthday']).then(
        async result => {
            if (result.isCancelled)
                alert('Login was cancelled');
            else {
                return await AccessToken.getCurrentAccessToken().then(
                    async data => {
                        return await this.getFacebookUserInformation(data).then(
                            response => { return response }
                        )
                    }
                )                    
            }
        }
    ).catch(error => alert('Login failed with error: ' + error));         
}



getFacebookUserInformation = data => {
    
    const { accessToken } = data;
    const graphConfig = {
        accessToken,
        parameters: {
            fields: {
                string: 'email, name, first_name, middle_name, last_name, picture'
            }
        }            
    }

    return new Promise((resolve, reject) => {

        const infoRequest = new GraphRequest(
            '/me', 
            graphConfig, 
            ((error, result) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(result)
                }
            })
        )
        new GraphRequestManager().addRequest(infoRequest).start();
    })
}   