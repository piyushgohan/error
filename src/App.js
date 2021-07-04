
import './App.css';
import ProductGrid from './components/containers/productGrid';
import ProductDetails from './components/containers/prductDetail';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {Provider} from 'react-redux';  
import store from './components/redux/store/store';

function App() {
  return (
    <Provider store={store} >
    <BrowserRouter>
    <div className="App">
      <Switch>
     <Route exact path="/" component={ProductGrid}/>
     <Route exact path="/details" component={ProductDetails}/>
     </Switch>
    </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
