// Notice that below, I did not include , {Component} after import
// React
import React from 'react';

// we're importing the component from Todo.js
import Todo from './Todo';


class App extends Component {

  constructor(){
    super();

  }

// Establish a function that we are going to be passing
// into the Todo Component.
<<<<<<< HEAD
  function alertMe(){
    alert("You're a wizard");
  }

  render() {
    return (
      <div>
      
=======

  handleSubmit(e){
    e.preventDefault();
  }

  handleChange(e){
    e.preventDefault();
  
  }

  render() {
    return (
      <div>

        <form onSubmit={(event)=> this.handleSubmit(event)}>
          <input onChange={()=>this.handleChange(event)} />
          <input type="submit"/>
        </form>

>>>>>>> 4cc24cf0471b7d58d707f5ad127e0c14a5aa0565
      </div>
    );
  }

<<<<<<< HEAD
}

// Fix all the errors that are plaguing this application thus far.
// After you're done with that, please follow the instructions below.

// 1. Create some default Props and pass them along to your
// child component.

// 2. Display that content in either an h tag or a p tag.

// 2. Pass the funMe function to your child component and when
// someone clicks on a button, it will show the alert on from this component.




=======

// Change the state of both the local component and the parent component
// introduce the local loop and creating a new component to handle the loop
// talk about key in the <li>
// constructor method

>>>>>>> 4cc24cf0471b7d58d707f5ad127e0c14a5aa0565

export default App;
