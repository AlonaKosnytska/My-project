import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

import countriesReducer from "./../redux/countriesSlice"
import cartReducer from "./../redux/cartSlice"

const store = configureStore({
    reducer: {
        countries: countriesReducer,
        cart: cartReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
    >

export default store

