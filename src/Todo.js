import React from 'react';



class Todo extends React.Component{

render(){
  debugger
  return(
    <div>
     <button onClick={(event) => this.props.alert(event)}>
      My alert button
     </button>
    </div>
  )
}
}

export default Todo
