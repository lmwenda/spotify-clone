// https://developer.spotify.com/
// documentation/web-playback-sdk/quick-start/#

// Initializations

export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "https://spotify-clone-lmwenda.vercel.app/";
const clientId = "e73f5ab8c40149b4b63a202d49311222";
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromResponse = () => {
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);

        return initial;
    }, {});
}

export const loginURL = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}
&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
