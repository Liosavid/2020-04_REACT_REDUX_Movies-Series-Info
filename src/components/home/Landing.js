import React, { Component } from 'react';
import SearchForm from './SearchForm';
import {connect} from 'react-redux';




class Landing extends Component {
    render() {
        return (
            <div className= "container">

              <SearchForm /> 

            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.movies.loading
  });
  
export default connect(mapStateToProps)(Landing);
