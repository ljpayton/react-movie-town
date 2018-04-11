import React, { Component } from "react";
import { Grid, Navbar, Jumbotron, Button } from "react-bootstrap";
import MovieCards from "./MovieCards";
import Services from "./services";

class Movies extends Component {
  state = {
    movies: []
  };
  componentDidMount() {
    const MOVIE_URL = `https://api.themoviedb.org/3/search/movie?api_key=2434d246ec60c162a86db597467ef4ed&language=en-US&query=${
      this.props.searchTermURI
    }&include_adult=false&sort_by=created_at.asc&page=1`;

    fetch(MOVIE_URL)
      .then(response => response.json())
      .then(payload =>
        this.setState({
          movies: payload.results.filter(movie => movie.poster_path)
        })
      )
      .catch(err => console.log(err));
  }

  onClickDetails = movieId => {
    this.props.history.push(`movies/${movieId}`);
  };

  render() {
    return (
      <Grid>
        <MovieCards
          movies={this.state.movies}
          onClickDetails={this.onClickDetails}
        />
      </Grid>
    );
  }
}
export default Movies;
