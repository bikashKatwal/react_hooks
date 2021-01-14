import {combineReducers} from "redux";
import {iceCreamReducer} from "../iceCream/iceCreamReducers";

const rootReducer = combineReducers({
    iceCreams: iceCreamReducer,
});
export default rootReducer;
