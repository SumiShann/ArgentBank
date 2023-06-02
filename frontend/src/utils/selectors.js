export const selectAuth = () => {
    return (state) => state.auth;
}

export const selectToken = state => state.auth.token;

export const selectProfile = () => {
    return (state) => state.profile;
}

export const selectInfo = state => state.profile.data;

export const selectUsername = () => {
    return (state) => state.user;
}