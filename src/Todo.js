import React from 'react';



class Todo extends React.Component{

render(){
  console.log(this.props)
  return(
    <div>
    {this.props.tasks}
    </div>
  )
}

}

export default Todo
