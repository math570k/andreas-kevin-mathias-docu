let accessToken = "";

export const getAccessToken = () => {
    if(!accessToken) return "";
    return accessToken;
}

export const setAccessToken = (token) => {
    return accessToken = token;
}

export function removeToken()  {
    return new Promise((resolve => {
        fetch("/remove_refresh_token", {
            method: "POST",
            credentials: "include"
        }).then(() => {
            accessToken = "";
            resolve(true);
        })
    }))
}

export function refreshAccessToken() {
    return new Promise(( (resolve, reject) => {
        fetch("/refresh_token", {
            method: "POST",
            credentials: "include"
        }).then(data => {
            data.json().then(data => {
                if(data.ok) {
                    console.log('### Refreshed token ###', data.accessToken)
                    setAccessToken(data.accessToken)
                    return resolve(data)
                }

                return resolve(null);
            });
        })
    }))
}