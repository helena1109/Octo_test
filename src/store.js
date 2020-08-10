import {createStore} from "redux";
import reducer from "./Reducer/reducer.js";

const store = createStore(reducer);

export default store;