import React, { Component } from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

class App extends Component{
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
      inv: 0
    };

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(user => this.setState({ monsters:user }));
  }

  clickHandle = ()=>{
    this.setState((prevState, prevProps) =>  {
      return {inv: prevState.inv + 1}
    }, () => { console.log(this.state.inv); })
    
  }
  render() { 
    const { monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1>Hello {this.state.inv}</h1>
        <SearchBox 
          placeholder = "Search Monsters"
          handleChange = {e => this.setState({searchField: e.target.value})}
        />
        <button onClick={this.clickHandle}>Increment</button>
        <CardList monsters={filteredMonsters} />
      </div>
  );
    }
}
export default App;
