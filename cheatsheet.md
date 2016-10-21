# Cheat sheet

> In ES6 classes, you can define the initial state by assigning this.state in the constructor:

# Nesting
Nest components to separate concerns. See multiple components.
```javascript
var UserAvatar  = React.createClass({...});
var UserProfile = React.createClass({...});

var Info = React.createClass({
  render() {
    return <div>
      <UserAvatar src={this.props.avatar} />
      <UserProfile username={this.props.username} />
    </div>;
  }
});
```
States & Properties
Use props (this.props) to access parameters passed from the parent. Use states (this.state) to manage dynamic data.

<MyComponent fullscreen={true} />
// props
  this.props.fullscreen //=> true

// state
```javascript
  this.setState({ username: 'rstacruz' });
  this.replaceState({ ... });
  this.state.username //=> 'rstacruz'
render: function () {
  return <div className={this.props.fullscreen ? 'full' : ''}>
    Welcome, {this.state.username}
  </div>;
}
```
Setting defaults

Pre-populates this.state.comments and this.props.name.

```javascript
React.createClass({
  getInitialState: function () {
    return { comments: [] };
  },

  getDefaultProps: function () {
    return { name: "Hello" };
  }
);
```

# Ajax
```javascript
React.createClass({
  componentWillMount () {
    $.get('https://api.github.com/users/jeanbauer/repos', function (data) {
      this.setState(data);
    }.bind(this));
  },

  render: function () {
    return <CommentList data={this.state.data} />
  }
});
```

# Mounting

Before initial rendering occurs. Add your DOM stuff on didMount (events, timers, etc). See reference.

componentWillMount()	Before rendering (no DOM yet)

componentDidMount()	After rendering

# Updating

Called when parents change properties and .setState(). These are not called for initial renders. See reference.

```javascript
componentWillReceiveProps(newProps={})	Use setState() here
shouldComponentUpdate(newProps={}, newState={})	Skips render() if returns false
componentWillUpdate(newProps={}, newState={})	Can’t use setState() here
componentDidUpdate(prevProps={}, prevState={})	Operate on the DOM here
```

# Unmounting

Clear your DOM stuff here (probably done on didMount). See reference.

componentWillUnmount()	Invoked before DOM removal


# Validations: Basic types

Primitive types: .string, .number, .func, and .bool. See propTypes.

```javascript
React.createClass({
  propTypes: {
    email:      React.PropTypes.string.isRequired,
    seats:      React.PropTypes.number,
    settings:   React.PropTypes.object,
    callback:   React.PropTypes.func,
    isClosed:   React.PropTypes.bool,
    any:        React.PropTypes.any,
  }
});
```
