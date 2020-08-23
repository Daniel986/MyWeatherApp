export const addFavorite = (newFavorite) => ({
  type: 'ADD_FAVORITE',
  newFavorite: newFavorite
});

export const removeFavoriteByKey = (removeKey) => ({
  type: 'REMOVE_FAVORITE',
  removeKey: removeKey
});