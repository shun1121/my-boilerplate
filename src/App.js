import React, { Component } from 'react';

const App = () => ( <Counter></Counter> )
  

class Counter extends Component {
  // ↓ 初期化処理を書く
  constructor(props) {
    super(props)
    this.state = { count: 0 }
    console.log(this.state)
  }

  handlePlusbutton = () => {
    console.log("+++++++")
    this.setState({ count: this.state.count + 1 })
  }

  handleMinusButton = () => {
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    console.log(this.state)
    return (
      <React.Fragment>
        <div>count: {this.state.count}</div>
        <button onClick={this.handlePlusbutton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    )
  }
}


// export default App

// class App extends Component {
//   render() {
//     return React.createElement(
//       "h1",
//       null,
//       "Hello World!!"
//     )
//   }
// }


export default App;
