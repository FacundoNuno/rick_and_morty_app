
const initialState ={
    myFavorites: [],
    allCharacters:[]
}


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_FAV":
            return {
                ...state,
            myFavorites: [...state.myFavorites, action.payload]
            }
        case "REMOVE_FAV":
            return {
                ...state,
                myFavorite: state.myFavorites.filter(fav => fav.id !== Number(action.payload))
            }

        default:
            return {...state}
    }
};

export default reducer;