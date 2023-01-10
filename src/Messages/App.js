import './App.css';
import {Bar, Chat} from './components/chatComp/Chat';
import { Fragment } from 'react';

function App() {
  return (
    <div className="App">
      <Fragment>
        <Bar />
        <Chat />
      </Fragment>
      
    </div>
  );
}

export default App;
