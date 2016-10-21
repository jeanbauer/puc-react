import React, {Component} from  'react';

class Card extends Component {
  getStyle() {
    return `backgroundImage: url(${this.props.img})`;
  }

  render() {
    return (
      <div style={{backgroundImage:  'url('+ this.props.img + ')'}} className="bg-img">
        <a href="#">
          <div className="content">
            <h2>{this.props.title}</h2>
          </div>
        </a>
      </div>
    )
  }
}

export default Card;
