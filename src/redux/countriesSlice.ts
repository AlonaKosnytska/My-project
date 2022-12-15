
import { createAsyncThunk,createSlice,PayloadAction } from "@reduxjs/toolkit"
import { CountryT } from "../types/data"
export type CountriesState = {
    countries: CountryT[]
    filtered: CountryT[]
    loading: boolean
    error: boolean
    country:CountryT[]
}

const initialState:CountriesState = {
    countries: [],
    filtered: [],
    loading: false,
    error: false,
    country:[]
    
}
const countriesSlice = createSlice({
    name: "countries",
    initialState,
    reducers: {
        sortByName: (state) => {
            state.countries.sort((a,b)=>(a.name.official.toLowerCase()>b.name.official.toLowerCase()?1:-1))
        },
        sortByPopulation: (state, action: PayloadAction<string>) => {
            state.countries.sort((a,b)=>(b.population-a.population))
        },

        search: (state, action: PayloadAction<string>) => {
            state.filtered=[]
             let input = action.payload 
            if (!input) {
                state.filtered=[]
            } else{
                state.filtered = state.countries.filter((c) => {
                return  c.name.official.toLowerCase().includes(input.toLowerCase())
           
          })
            }
            
    
        },
    },
    extraReducers:(builder) => {
        builder.addCase(fetchCountries.fulfilled, (state, action) => {
            state.countries = action.payload
            state.loading = false
            state.error = false

        })
        builder.addCase(fetchCountries.rejected, (state, action) => {
            state.error = true
            state.countries=[]
         })
        builder.addCase(fetchCountries.pending, (state, action) => {
            state.loading= true
        })

        builder.addCase(fetchCountry.fulfilled, (state, action) => {
            state.country = action.payload
            state.loading = false
            state.error = false

        })
        builder.addCase(fetchCountry.rejected, (state, action) => {
            state.error = true
            state.country=[]
         })
        builder.addCase(fetchCountry.pending, (state, action) => {
            state.loading= true
        })
    },
}) 

export const fetchCountries = createAsyncThunk(
    "countries/fetchCountries",
   async () => {
       const response = await fetch(
           "https://restcountries.com/v3.1/all"
       )
       const data: CountryT[] = await response.json()
       return data
   }
)
export const fetchCountry = createAsyncThunk(
    "countries/fetchCountry",
  async (name:string) => {
       const response = await fetch(
        `https://restcountries.com/v3.1/name/${name}?fullText=true`
       )
       const data: CountryT[] = await response.json()
       return data
   }
)


export default countriesSlice.reducer

export const {sortByName,sortByPopulation,search}= countriesSlice.actions