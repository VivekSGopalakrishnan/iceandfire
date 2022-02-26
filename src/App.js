import React from 'react';
import './App.css';
import Booksfile from './Books/Booksfile';
import Housesfile from './Houses/Housesfile';
import Landing from './Landing/Landing';
import Charactersfile from './Characters/Charactersfile';
function App() {
  return (
<div className='app'>
<Landing/>
<Charactersfile/>
<Booksfile/>
<Housesfile/> 
</div>
  );
}

export default App;
