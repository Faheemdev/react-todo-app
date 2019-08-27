import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import { Spring } from 'react-spring/renderprops'

class App extends React.Component {




  render() {
    return (

      <Spring
        from={{ opacity: 0, marginTop: -50 }}
        to={{ opacity: 1, marginTop: 0 }}
      >
        {
          props => (
            <div style={props}>
              <div className="todo--app">
                <TodoList />
              </div>
            </div>
          )
        }
      </Spring>

    )
  }

}

export default App;
