import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import tokenReducer from "../slice/tokenSlice";

const store = configureStore({
    reducer: tokenReducer,
})

export default function StoreProvider({children}) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
} 
