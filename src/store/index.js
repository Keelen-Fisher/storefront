import {createStore, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import productReducer from './categories';
import cartReducer from './cart';

let reducers = combineReducers({
  productReducer: productReducer,
  cartReducer: cartReducer,
});

export default function store(){
  return createStore(reducers, composeWithDevTools())
}
