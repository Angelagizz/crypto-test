import {createStore, combineReducers} from "redux"
import kanyeReducer from "./Reducer"

const rootReducer = combineReducers ({
    kanye: kanyeReducer
})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;