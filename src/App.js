import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
render(){

  return (
    <div>

<Navbar/>
<Footer/>

</div>
  );

}

}


export default App;
