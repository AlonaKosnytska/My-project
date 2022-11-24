import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { fetchCountry } from '../redux/countriesSlice'
import { useAppDispatch, useAppSelector } from '../redux/reduxHooks'

import { CountryT } from '../types/data'

const CountryPage = () => {
  const { name } = useParams()  
  const dispatch = useAppDispatch()
  const {country}= useAppSelector((state)=>state.countries)
      useEffect(()=>{
        if (name) {
          dispatch(fetchCountry(name))
        }
      }, [name,dispatch])
  if (country.length ===0) {return (
        <p>Loading...</p>
           )}
  return (
    <div>
      
      <ul>
        <li><img src={country[0].flags.png} alt={country[0].name.official} /></li>
        <li>{country[0].languages && Object.values(country[0].languages)?.join(",")}</li>
        <li>{country[0].flag}</li>
        <li>{country[0].area}</li>
        <li>{country[0].name.official}</li>
        <li>{country[0].capital?.join(",")}</li>
      </ul>
      </div>
    );
  
}
export default CountryPage