import React, { Component } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Link, Route, withRouter } from "react-router-dom";
import logo from "./logo.svg";
import Services from "./services";

import css from "/Users/lyricpayton/Desktop/react-movie-town/src/App.css";
import MovieDetail from "/Users/lyricpayton/Desktop/react-movie-town/src/movieDetail.js";
import Movies from "./Movies";

import MovieList from "./MovieList";
import Search from "/Users/lyricpayton/Desktop/react-movie-town/src/search.js";
import index from "./index";
import Login from "./form";
import {
  Grid,
  Navbar,
  Button,
  Jumbotron,
  Thumbnail,
  Row,
  Col,
  Clearfix,
  PageHeader,
  FormGroup,
  FormControl
} from "react-bootstrap";

const mapStateToProps = state => ({
  searchTerm: state.common.searchTerm,
  user: state.common.user,
  userAuthenticated: state.common.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  setSearchTerm: term => dispatch({ type: "CREATE_SEARCH_TERM", payload: term })
});

class App extends Component {
  state = {
    searchTermURI: ""
  };
  componentWillReceiveProps(nextProps) {
    //reset search term for a new clean search
    if (nextProps.location.pathname === "/") {
      this.props.setSearchTerm("");
    }
  }
  movieSearchTerm = searchTerm => {
    this.props.setSearchTerm(searchTerm);
    this.props.history.push("/movies");
  };
  movieSignUp = event => {
    event.history.push("/form");
  };

  render() {
    return (
      <div>
        <Navbar inverse top>
          <PageHeader style={{ color: "red" }}>
            Welcome !
            <small>
              "Don't be bored when you can watch unlimited movies in Movie Town"
            </small>
          </PageHeader>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Home</a>
              <a href="/Users/lyricpayton/Desktop/react-movie-town/src/movieDetail.js">
                Movie Details
              </a>
              <Link to="/movies"> Movies </Link>
              <LinkContainer to="/form">
                <Button type="submit" onClick={() => this.movieSignUp()}>
                  Login
                </Button>
              </LinkContainer>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <input
              placeholder="movie search"
              type="text"
              ref={input => (this.input = input)}
            />
            <br />
            <Button
              onClick={() => this.props.movieSearchTerm(this.input.value)}
            >
              Find Movie
            </Button>
            <Navbar.Form />
          </Navbar.Collapse>
        </Navbar>
        <h1>{this.state.searchTermURI} Movie</h1>
        <Route
          exact
          path="/"
          render={props => (
            <Search {...props} movieSearchTerm={this.movieSearchTerm} />
          )}
        />
        <Route
          exact
          path="/movies"
          render={props => (
            <Movies {...props} searchTermURI={this.state.searchTermURI} />
          )}
        />
        <Route path="/form" component={Login} />
      </div>
    );
  }
}

export default withRouter(App);
