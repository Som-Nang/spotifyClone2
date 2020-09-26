export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //token: "BQATnmqNRiFGbOj4FMXt-TO4qhl64kTmmjLTuBibV5gtmyUJWjO-bldJ6qWhJPKjylry6SlUCgOy6MLnxTDNWVu0IncdYaFXr9st-bFdxQkawCO5B4Z-mpnTndNwg0GKUrUXPwkLuN5cPJepx4gGFA0T-IFKC9nCu_nXXLDW5Pjuk5tP",
};
const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };

        default:
            return state;
    }
}
export default reducer;