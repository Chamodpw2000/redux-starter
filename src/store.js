import { configStore } from "redux";
import reducer from "./reducer";

const store = configStore({
    reducer
});

export default store;