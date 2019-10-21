import React from 'react';
import Router from './router/public'
import big from './router/big'

class App extends React.Component {
  render() {
    return (
      <div>
        <Router pathArr={big}/>
      </div>
    )
  }

}



export default App;
