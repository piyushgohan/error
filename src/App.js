
import './App.css';
import ProductGrid from './components/containers/productGrid';
import ProductDetails from './components/containers/prductDetail';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
  

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
     <Route exact path="/" component={ProductGrid}/>
     <Route exact path="/details" component={ProductDetails}/>
     
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
