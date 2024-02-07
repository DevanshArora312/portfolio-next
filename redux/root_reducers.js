import { combineReducers } from 'redux';
// import storage from 'redux-persist/lib/storage';

import activeReducer from './slices/active';
import islandRotateReducer from './slices/islandRotate';
import hutReducer from "./slices/hutRotate"
import colorReducer from './slices/colorScheme';


// const rootPersistConfig = {
//   key: 'root',
//   storage,
//   keyPrefix: 'redux-',
//   //   whitelist: [],
//   //   blacklist: [],
// };

const rootReducer = combineReducers({
  active : activeReducer,
  islandRotate : islandRotateReducer,
  hutRotate : hutReducer,
  colorScheme : colorReducer

});

export { rootReducer};