import React, { useEffect, useState } from "react";

import Countries from "../components/Countries";
import { fetchCountries, search } from "../redux/countriesSlice";
import { useAppDispatch, useAppSelector } from "../redux/reduxHooks";


const HomePage = () => {
  const [input, setInput] = useState("");
  const dispatch = useAppDispatch();
  const {  countries, filtered } = useAppSelector(
    (state) => state.countries
  );
  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  let renderedCountries = filtered.length > 0 ? filtered : countries;
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e: any) => {
          setInput(e.target.value);
          dispatch(search(input));
        }}
      />
      {countries.length === 0 && <p>Loading...</p>}
      <Countries countries={renderedCountries} />
    </div>
  );
};

export default HomePage;
