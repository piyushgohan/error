
import { combineReducers} from 'redux'
import { ProductReducer } from '../products/reducers'


export const RootReducer = combineReducers(
    {
        Products: ProductReducer()
    }
)