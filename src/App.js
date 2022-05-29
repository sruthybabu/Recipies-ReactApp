import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AddRecipies from './components/AddRecipies';
import Search from './components/Search';

function App() {
  return (
    <div>
      <AddRecipies/>
      <Search/>
    </div>
  );
}

export default App;
