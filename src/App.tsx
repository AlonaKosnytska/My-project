

import React from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from './redux/reduxHooks'
import RouterPage from './components/RouterPages';
import {sortByName} from './redux/countriesSlice'

const App = () => {
       const countries = useAppSelector(state=>state.countries)
       const dispatch = useAppDispatch();

       return (
              <div className='App'>     
                     <RouterPage />
                    <button onClick={()=>dispatch(sortByName)}>Sort by name</button> 
              </div>
       )
}





 
export default App;
