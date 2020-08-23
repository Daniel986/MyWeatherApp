const initialState = {
    favorites: []
  };
  
const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE': {
      return {
        ...state,
        favorites: [...state.favorites, action.newFavorite]
      }
    }

    case 'REMOVE_FAVORITE': {
      return {
        ...state,
        favorites: state.favorites.filter((favorite) => favorite.Key !== action.removeKey )
      }
    }

    default: {
      return state;
    }
  }
};

export default favoritesReducer;