import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react"; 


const ToDo = props => {

  return(
    <tr>
      <td>
        <label>{props.item.id}</label>
      </td>
      <td>
        <input value={props.item.value} onChange={(e) => props.setValue(e.target.value, props.item.id)}/>
      </td>
      <td>
        <label>{props.item.createdAt.toTimeString()}</label>
      </td>
    </tr>
  )
}

class App extends React.Component {
  constructor() {
    super();
    const date = new Date();
    const todoCounter = 1;
    this.state = {
      currValue: undefined,
      todoCounter: todoCounter,
      list: [
        {
          id: todoCounter,
          createdAt: date,
        },
      ],
    };
  }


  

  addToStart() {
    const date = new Date();
    const nextId = this.state.todoCounter + 1;
    const newList = [
      {id: nextId, createdAt: date, value:""},
      ...this.state.list,
    ];
    this.setState({
      list: newList,
      todoCounter: nextId,
    });
  }


  
  setValue = (value, id) => {
    let list = [...this.state.list].map(i => {
      if (id === i.id){
        return {...i, value}
      }
      else{
        return i
      }
    })
    this.setState({list})
  }



  render() {
    return (
      <div>
        <br />
        <button onClick={() => this.addToStart()}>
          Add New to Start
        </button>
        <table>
          <tr>
            <th>ID</th>
            <th />
            <th>created at</th>
          </tr>
          {this.state.list.map((todo, index) => {
            return <ToDo key={index} item={todo}  setValue={this.setValue}/>
          })}
        </table>
      </div>
    );
  }
}

export default App;



 

 

