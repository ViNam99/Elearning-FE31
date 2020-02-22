import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import UserLayout from './Layouts/UserLayout';
import HomePage from './Pages/HomePage';
import './assets/styles/main.scss';
const App = () => {
  return (
   <BrowserRouter>
      <Switch>
        <UserLayout path='/'>
          <Switch>
          <Route path='/' component ={HomePage}/>
          </Switch>
        </UserLayout>
      </Switch>
   </BrowserRouter>
  )
}
export default App
