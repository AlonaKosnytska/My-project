import React from "react";
import { CountryT } from "../types/data";
import { Link } from "react-router-dom";
import { sortByName } from "../redux/countriesSlice";
import { useAppDispatch } from "../redux/reduxHooks";

type Props = {
  countries: CountryT[];
};
const Countries = ({ countries }: Props) => {
  const dispatch = useAppDispatch();
  
  return (
    <div>
      
        <p>Countries</p>
        <table>
          <tr>
            <th>Flag</th>
            <th onClick={() => dispatch(sortByName())}>Name</th>
            <th>Region</th>
            <th>Capital</th>
            <th>Population</th>
            <th>Area</th>
            <th>Action</th>
          </tr>
          {countries.map((c) => (
            <tr key={c.name.official}>
              <td>
                <img src={c.flags.png} alt={c.name.official} />{" "}
              </td>
              <td>
                <Link to={`countries/${c.name.official}`}>
                  {c.name.official}
                </Link>
              </td>
              <td>{c.region} </td>
              <td>{c.capital?.join(",")} </td>
              <td>{c.population} </td>
              <td>{c.area} </td>
              <td>
                <button>Click</button>
              </td>
            </tr>
          ))}
        </table>
     
    </div>
  );
};

export default Countries;
