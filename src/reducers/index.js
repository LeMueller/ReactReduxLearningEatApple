import {combineReducers} from 'redux'
import appleBasketReducer from './appleBasketReducer'


//combine reducers, but there is only one reducer, not so much means. but better to expend.

const rootReducer = combineReducers({
	appleBasket: appleBasketReducer
});

export default rootReducer;