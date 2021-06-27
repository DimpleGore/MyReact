import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import UserTable from '../src/Components/UserTable'
import PieData from './Components/PieData';


function App() {
  return (
   <BrowserRouter>
     <Route exact path="/" component={UserTable} />
     <Route exact path="/piedata" component={PieData} />
   </BrowserRouter>)
}

export default App;
