import React, {Component} from  'react';

class Card extends Component {
  render() {
    return (
      <div className="card-custom">
        <div className="thumbnail">
          <img alt={this.props.title} src={this.props.img}/>
          <div className="caption">
            <h4>{this.props.title}</h4>
          </div>
        </div>
      </div>
    )
  }
}

export default Card;
