import './App.css';
import { useEffect, useState } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => {
        setMonsters(users);
      });
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((item) => {
      return item.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField])

  const onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    setSearchField(searchField);
  }

  return (
    <div className='App'>
      <h1 className='app-title'>Monster Rolodex</h1>
      <SearchBox onChangeHandler={onSearchChange} type='search' placeholder='Search Monsters' className='search-box' />
      <CardList monsters={filteredMonsters} />
    </div>
  )
}

// class App extends Component {
//   constructor() {
//     super();// call underlying constructor which you are extending
//     this.state = {
//       monsters: [],
//       searchField: ''
//     };
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((res) => res.json())
//       .then((users) => {
//         this.setState(
//           () => {
//             return { monsters: users }
//           }
//           , () => {
//             console.log(this.state.monsters)
//           })
//       });
//   }

//   onSearchChange = (event)=> {
//     const searchField = event.target.value.toLocaleLowerCase();   
//     this.setState(()=> {
//       return {searchField}
//     });
//   }

//   render() {
//     const filteredMonster = this.state.monsters.filter((item)=> {
//       return item.name.toLocaleLowerCase().includes(this.state.searchField); 
//     });
//     return (
//       <div className='App'>
//         <h1 className='app-title'>Monster Rolodex</h1>
//         <SearchBox onChangeHandler={this.onSearchChange} type='search' placeholder='Search Monsters' className='search-box'/>
//         <CardList monsters={filteredMonster} />
//       </div>
//     );
//   }
// }

export default App;
