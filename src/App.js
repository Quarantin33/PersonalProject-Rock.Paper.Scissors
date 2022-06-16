
import { Route, Routes } from 'react-router-dom';
import './styles.scss';

import Header from "./components/Header"
import Play from "./components/Play"
import Footer from 'components/Footer';
import Game from 'components/Game';
import { useState } from 'react';


function App() {

  const [myChoice, setMyChoice] = useState("")

  const [score, setScore] = useState(0)

  return (
    <div className="container">
      
      <Header score={score}/>

      <Routes>
          <Route exact path='/' element={<Play setMyChoice={setMyChoice}/>}/>
          <Route path='/game' element={<Game myChoice={myChoice} score={score} setScore={setScore}/>}/>
          
          <Route/>
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
