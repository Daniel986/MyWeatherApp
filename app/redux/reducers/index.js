// Imports: Dependencies
import { combineReducers } from 'redux';

import favoritesReducer from './favoritesReducer';
import settingsReducer from './settingsReducer';


const rootReducer = combineReducers({
  favoritesReducer: favoritesReducer,
  settingsReducer: settingsReducer
});

export default rootReducer;