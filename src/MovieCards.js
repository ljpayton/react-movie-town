import React, { Component } from "react";
import { Grid } from "react-bootstrap";
import MovieList from "./MovieList";

export default class MovieCards extends Component {
  render() {
    return (
      <Grid>
        <MovieList
          movies={this.props.movies}
          onClick={this.props.onClickeDetails}
        />
      </Grid>
    );
  }
}
