let accessToken = "";

export const getAccessToken = () => {
    if(accessToken.length <= 0) return null;
    return accessToken;
}

export const setAccessToken = (token) => {
    return accessToken = token;
}

export const removeToken = () => {
    document.cookie = "jid=; expires=Thu, 01 Jan 1970 00:00:00 UTC;"
    return accessToken = "";
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
                    return resolve(data.accessToken)
                }

                return resolve(null);
            });
        })
    }))
}
