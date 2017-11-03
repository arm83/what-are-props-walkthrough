import React from 'react';

import Todo from './Todo';

class App extends React.Component {
  fun(event) {
      alert('Lets get some white castle')
    }

  handleClick(event) {
      console.log(event.target.value)
    }
  
  render(){
    //debugger
    return (
     <div>
      < Todo alert={this.fun}/>
      < input onChange={(event) => this.handleClick(event)} />
      < button onClick={() => this.fun()}>Ring the Alarm</button>
     </div>
    )
  }
}



// App.defaultProps={
//  allTasks: [{
//   task: 'go to the store and buy Ice Cream',
//   importance: 1,
//   completed: false
//  }]
// }

export default App;