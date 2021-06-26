import Player from './Components/Player'
import {quron} from './data';
import {name} from './data'
import {useState} from 'react'


function App() {
  const [num, setNum] = useState(1)
  return (
    <div className="App">
      <Player quron={quron} prop={num} name={name} setProp={setNum} />
    </div>
  );
}

export default App;
