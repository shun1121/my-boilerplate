import React from 'react';
import PropTypes from 'prop-types';

const App = () => {
  const profiles = [
    {
      name: "Taro",
      age: 10
    },
    {
      name: "Natsu",
      age: 9
    },
    {
      name: "9",
      age: 9
    }
  ]
  return (
    <div>
      {
        profiles.map((profiles, index) => {
          console.log(profiles)
          return <User name={profiles.name} age={profiles.age} key={index} />
        })
      }
    </div>)
}

const User = (props) => {
  console.log(props)
  return <div>Bow! {props.name} He's {props.age}</div>
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

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
