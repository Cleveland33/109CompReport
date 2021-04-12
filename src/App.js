import NavBar from './components/navBar';
import Footer from './components/footer';
import Catalog from './components/catalog';
import Home from "./components/home";
import About from "./components/about";
import Cart from "./components/cart";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
    <div className="App">
        <NavBar></NavBar>

        <hr></hr>

      <div className="container-fluid">

      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/home" exact component={Home} ></Route>
        <Route path="/catalog" exact component={Catalog} ></Route>
        <Route path="/about" exact component={About}></Route> 
        <Route path="/cart" exact component={Cart}></Route>     
      </Switch>

      </div>



      <hr></hr>

        <Footer></Footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
