import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Grid, Navbar, Jumbotron, Button } from "react-bootstrap";
import Example from "./components/Example";

const MOVIE_URL =
  "https://api.themoviedb.org/3/search/movie?api_key=2434d246ec60c162a86db597467ef4ed&language=en-US&query=hiphop&include_adult=false&sort_by=created_at.asc&page=1";

let SomeComponent = props => <h1>{props.message}</h1>;

class App extends Component {
  state = {
    movies: []
  };
  componentDidMount() {
    console.log(this.props);
    fetch(MOVIE_URL)
      .then(response => response.json())
      .then(payload =>
        this.setState({
          movies: payload.results
        })
      )
      .catch(err => console.log(err));
  }
  render() {
    let movies = this.state.movies.map(movie => {
      let base_url = "https://image.tmdb.org/t/p/w500/";
      return (
        <div>
          <h3>{movie.title}</h3>
          <img style={{ width: "150px" }} src={base_url + movie.poster_path} />
        </div>
      );
    });

    return (
      <div>
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">React App</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Grid>
        </Navbar>
        <Jumbotron>
          <Grid>
            <h1>Welcome to React</h1>
            <p>
              <Button
                bsStyle="success"
                bsSize="large"
                href="http://react-bootstrap.github.io/components.html"
                target="_blank"
              >
                View React Bootstrap Docs
              </Button>
            </p>
          </Grid>
          <Grid>{movies}</Grid>
          <SomeComponent message={"Hello"} />
          <Example />
        </Jumbotron>
      </div>
    );
  }
}

export default App;
