import { StarRateRounded } from "@mui/icons-material"
import { createSlice,PayloadAction } from "@reduxjs/toolkit"
import { CountryT } from "../types/data"

export type CartState = {
    countries: CountryT[]    
}
const initialState:CartState = {
    countries: [],   
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add: (state, action: PayloadAction<CountryT>) => {
            state.countries.push(action.payload)
        },
        remove: (state, action: PayloadAction<string>) => {
            state.countries = state.countries.filter(
                (c) => c.name.official !== action.payload
            )
        },
    },
}
)


export default cartSlice.reducer

export const {add, remove}= cartSlice.actions