import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css'
import Home from './Components/Home-Component/Home'
import { useContext } from 'react';
import { inputContext } from './Components/UseContext-Component/Context';

function App() {
  const {showLogin} = useContext(inputContext)

  return (
    <>
    <BrowserRouter>

    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
