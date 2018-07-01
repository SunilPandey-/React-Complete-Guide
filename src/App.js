import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    
    state = {
        persons: [
            {id: "1", name: "Sunil", age: 27},
            {id: "2", name: "Max", age: 28},
            {id: "3", name: "Krish", age: 26},
        ],
        showPersons: false
    }

    switchNameHandler = (newName) =>{
        //console.log("clicked");
        this.setState({
            persons: [
            {id: "1", name: newName, age: 27},
            {id: "2", name: "Harry", age: 28},
            {id: "3", name: "Kent Ro", age: 26},
        ]
        })
        
    }
    
    nameChangedHandler = (event, id) =>{
        //console.log("clicked");
        const personIndex = this.state.persons.findIndex(p =>{
           return p.id === id; 
        });
        const person = {
            ...this.state.persons[personIndex]
        };
        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState({
            persons: persons
        })
        
    }
    togglePersonsHandler = ()=>{
        //console.log("inside toggle");
        const doesShow = this.state.showPersons;
        this.setState({
            showPersons: !doesShow
            
        });
        //console.log("ishow person:",this.state.showPerson);
    }
    deletePersonHandler = (personIndex)=>{
        const persons = [...this.state.persons];
        persons.splice(personIndex,1);
        this.setState({persons: persons});
    }

  render() {
      const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };
      let persons = null;
      if(this.state.showPersons){
          persons = (
             <div>
              {this.state.persons.map((person, index) =>{
               return <Person 
               name={person.name} 
               age={person.age}
               key = {person.id}
               click1 = {this.switchNameHandler.bind(this,"Chrisss")}
               changed = {(event) => this.nameChangedHandler(event,person.id)}
               click2= {this.deletePersonHandler.bind(this,index)}
              
              />
              })}
              
        
        </div>
          )
      }
    return (
        
        
      <div className="App">
        <h1> 
            Hi , I am react app
        </h1>
        <button onClick={this.togglePersonsHandler}>Toggle Person</button>
        <br/><br/>
        
        <button 
        style={style}
        onClick={this.switchNameHandler.bind(this,"Chris!!!")}> Switch Name</button>

        {persons}
        
      </div>
    );
  }
}

export default App;
