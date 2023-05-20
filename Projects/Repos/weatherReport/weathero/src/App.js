import './App.css';
import Search from './components/search/search';

function App() {

  const handleOnSeachChange = (searchData) => {
    console.log(searchData)
  }

  return (
    <div className="Container">
      <Search onSearchChange={handleOnSeachChange}/>
    </div>
  );
}

export default App;
