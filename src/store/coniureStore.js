import { configureStore } from "@reduxjs/toolkit";
import reducer from "./bugs";






export default function configureTheStore() {

const store = configureStore({
    reducer,
});

return store;

}
