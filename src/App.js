import HomePage from './pages/homepage/homepage.component'
import './App.css';
import { Switch, Route } from 'react-router-dom';


const HatsPage = (history) => {
  console.log(history);
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  );
};


const JacketsPage = (history) => {
  console.log(history);
  return (
    <div>
      <h1>Jackets Page</h1>
    </div>
  )
}


function App() {
  return (
    <div>
      <Switch>
        {/* <HomePage/> */}
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop/hats' component={HatsPage} />
        <Route exact path='/shop/jackets' component={JacketsPage} />
      </Switch>
    </div>
  );
}

export default App;
