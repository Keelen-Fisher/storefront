import {configureStore, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import productReducer from './products';
import categoryReducer from './categories';

let reducers = combineReducers({
  productReducer: productReducer,
  categoryReducer: categoryReducer,
});

export default function store(){
  return configureStore(reducers, composeWithDevTools())
}
