import { combineReducers } from "redux";
import amoutReduces from "./amoutReduces";


const reducers = combineReducers({
    amount : amoutReduces
})

export default reducers;