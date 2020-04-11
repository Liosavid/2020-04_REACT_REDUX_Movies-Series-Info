import React, { Component } from 'react';
import {Provider} from 'react-redux';

import './App.css';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/home/Landing';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
render(){

  return (
    <Provider store={store}>

<Navbar/>
<Landing/>
<Footer/>

</Provider>
  );

}

}


export default App;
