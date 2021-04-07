import React, {Component} from 'react';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <label htmlFor="label">label</label>
        <input type="text" onChange={() => {console.log("tired")}} />
      </React.Fragment>
    )
  }
}
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
