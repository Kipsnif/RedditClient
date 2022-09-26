import logo from '../Images/Reddit_pixelated_logo_1.png';
import '../App.css';
import { SearchField } from '../Components/searchField/SearchField';
import Subs from '../Components/subs/Subs';
import Posts from '../Components/posts/Posts';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <img src={logo} alt="Logo" className="App-logo"/>
        <SearchField />
      </header>
      <body>
        <Subs />

        <Posts />
      </body>

    </div>
  );
}

export default App;
