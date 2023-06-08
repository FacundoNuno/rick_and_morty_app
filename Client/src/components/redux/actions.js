import { ADD_FAV, FILTER_CARDS, ORDEN_CARDS, REMOVE_FAV } from "./types";
export const addFav = (character) => {
    return {type: ADD_FAV, payload: character}
};

export const removeFav = (id) => {
    return{type: REMOVE_FAV, payload: id}
};

export const filterCard = (gender) => {
    return{type: FILTER_CARDS, payload: gender}
};

export const orderCards = (orden) => {
    return{type: ORDEN_CARDS, payload: orden}
};