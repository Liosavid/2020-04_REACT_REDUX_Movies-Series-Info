import React, { Component } from "react";
import { connect } from "react-redux";
import MovieCard from "./MovieCard";

export class MoviesContainer extends Component {
  render() {
    const { movies } = this.props;
    let content = "";

    content =
      movies.Response === "True"
        ? movies.Search.map((movie, index) => <MovieCard key={index} movie={movie} />)
        : (<div>
          No results
        </div>);

    return <div className="row justify-content-center">{content}</div>;
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
});

export default connect(mapStateToProps)(MoviesContainer);
