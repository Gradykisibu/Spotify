import SpotifyWebApi from 'spotify-web-api-node';

const scopes = [
    "user-read-email",
    "plaulist-read-private",
    "user-read-collaborative",
    "user-read-email",
    "streaming",
    "user-read-private",
    "user-library-read",
    "user-top-read",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-read-currently-playing",
    "user-read-recently-playing",
    "user-follow-read",
].join(',');

const params = {
    scope: scopes,
};

const queryParamString =  new URLSearchParams(params);

const LOGIN_URL = "https://accounts.spotify.com/authorize?" + queryParamString.toString();

const  spotifyApi = new SpotifyWebApi ({
    clientid: process.env.NEXT_PUBLIC_CLIENT_ID,
    clientsecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
})

export default spotifyApi;
export { LOGIN_URL}