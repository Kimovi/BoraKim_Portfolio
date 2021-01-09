import React, { Component } from 'react';
import './App.css';
import Main from './components/Main';
import chohan from './chohan.gif'
import learnjp from './learnjp.gif';

// function App() {
//   return (
//     <div>
//       <h1>React project</h1>
//       <main />
//     </div>
//   );
// }

class App extends Component{
  render() {
    return (
      <div className="App">
        <h1>Bora's React project</h1>
        <Main />
        <img src={chohan} alt="chohan" className="logo" /> <br />
        <p>Live webpage (<a href="https://chohan-bakuchi.netlify.app/" className="link">https://chohan-bakuchi.netlify.app/)</a><br />
          This is the first Vanilla Javascript DOM project. </p>
        <img src={learnjp} alt="learnjp" className="logo" /><br />
        <p>Live webpage <a href="https://learn-japanese.netlify.app/" className="link">(https://learn-japanese.netlify.app/)</a><br />
        This is the second Vanilla Javascript DOM project. This time, we leveled up and adopted CRUD function!</p><br />
      </div>
    )
  }
}

export default App;