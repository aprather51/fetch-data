import React, { Component } from 'react';
import './App.scss';

//Components
import InDataJS from './components/InDataJS.js';
import OutDataJS from './components/OutDataJS.js';
import Json from './components/Json.js';

//Data
import data from './data/dataJS';
import dataJSON from './data/dataJSON';

class App extends Component {

  render() {
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number, idx) =>
      <li key={idx}>{number}</li>
    );
    return(
      <div>
        <InDataJS/>
        <OutDataJS data={data}/>
        <Json data={dataJSON}/>
        {listItems}
      </div>
    )
  }
}

export default App;



