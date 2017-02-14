import React, { Component } from 'react';
import banner_bg from '../images//index_bg.jpg';
import '../css/App.css';

class App extends Component {
   contextTypes: {
    router: React.PropTypes.object
  }
  handleSubmit(event) {
    event.preventDefault()
    const path = `/mainhtml`
   /* this.context.router.push(path)*/
    this.props.router.push(path)
  }
  render() {
    return (
      <div className="App">
        <img src={banner_bg} />
        <button onClick={this.handleSubmit.bind(this)}>立即进入</button>
      </div>
    );
  }
}
export default App;
