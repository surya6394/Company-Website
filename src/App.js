import logo from './logo.svg';
import './App.css';
import Home from './Components/Screens/Home';
import { Routes } from 'react-router-dom';
import { createContext, useReducer } from 'react';

export const UserContext = createContext();

function App() {
  const [state, dispatch] = useReducer();
  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Home />
        <Routes>
        </Routes>
      </UserContext.Provider>


    </>
  );
}

export default App;
