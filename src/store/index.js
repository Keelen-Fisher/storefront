import {createStore, combineReducers} from 'redux';
import productReducer from './products';
import categoryReducer from './categories';
import { composeWithDevTools } from 'redux-devtools-extension';

let reducers = combineReducers({
  productReducer: productReducer,
  categoryReducer: categoryReducer,

});


export default function store(){
  return createStore(reducers, composeWithDevTools())
}
