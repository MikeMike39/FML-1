import React, { useState } from 'react';
import './App.css';
import Main from './components/Main';
import Form from './components/form/Form';


// main page
const App = () => {

  const[isLoggedIn, setLogin] = useState(false);

  let token = localStorage.getItem("auth");

  if(token === "mike@gmail.com" && !isLoggedIn){
    setLogin(true);
  }

  if(isLoggedIn === false){
    return (
      <Form/>      
    );
  }

  return (
    <div className="container">
      <Main />
    </div>
  );
}
export default App;
