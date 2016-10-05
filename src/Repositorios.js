import React, { Component } from 'react';
import $ from 'jquery';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  componentWillMount () {
    $.get('https://api.github.com/users/jeanbauer/repos', function (data) {
      this.setState({ data });
    }.bind(this));
  }
  getForkedRepos() {
    return this.state.data.map(r => r.full_name);
  }
  render() {
    return (
      <div className="Repos">
        {this.getForkedRepos()}
      </div>
    );
  }
}

export default Posts;
