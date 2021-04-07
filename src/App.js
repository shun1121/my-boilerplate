import React, {Component} from 'react';

//AppがComponentを継承している 
// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <label htmlFor="label">label</label>
//         <input type="text" onChange={() => {console.log("tired")}} />
//       </React.Fragment>
//     )
//   }
// }

// 関数コンポーネント
const App = () => {
  return (
  <div>
    <Dog />
    <Cat />
  </div>)
}

const Dog = () => {
  return <div>Bow!</div>
}

const Cat = () => {
  return <div>Meow!</div>
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
