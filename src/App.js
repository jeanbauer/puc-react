import React, { Component } from 'react';
import Card from './Card.js';
import $ from 'jquery';

const apiUrl = 'http://netflixroulette.net/api/api.php?director=Quentin%20Tarantino';

// TODO:
// make some click handler
// make API params flexible.
// create more components.
// use at least 2 hooks.

class App extends Component {
  constructor(props) {
    super();
    this.state = { data: []};
  }

  componentDidMount() {
    $.get(apiUrl, function(data) {
      this.setState({data});
    }.bind(this));
  }

  getMovies() {
    return this.state.data.map((movie, k) => (
      <Card key={k} title={movie.show_title} img={movie.poster} />
    ));
  }

  render() {
    return (
      <div className="slider">
        {this.getMovies()}
      </div>
    );
  }
}

export default App;
