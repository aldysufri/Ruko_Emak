import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import Logo from './Assets/Logo.png'
import Cartimg from './Assets/cart.png'
import User from './Assets/user.png'
import Dashboard from './Components/Index'
import Home from './Components/Home'
import Pria from './Components/Pria'
import Wanita from './Components/Wanita'
import Cart from './Components/Cart'

function App() {
  return (
    <BrowserRouter>
      <div className="header">
        <div className="nav">
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="Gambar" width={75} />
            </Link>
          </div>
          <nav>
            <Link className="text" to="/home">
              Home
            </Link>
            <Link className="text" to="/pria">
              Pria
            </Link>
            <Link className="text" to="/wanita">
              Wanita &emsp;
            </Link>
            <Link className="text" to="/">
              <img src={User} alt="Gambar" width={20} />
            </Link>
            <Link className="text" to="/cart">
              <img src={Cartimg} alt="Gambar" width={20} />
            </Link>
          </nav>
        </div>
      </div>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/home" exact component={Home} />
        <Route path="/pria" exact component={Pria} />
        <Route path="/wanita" exact component={Wanita} />
        <Route path="/cart" exact component={Cart} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
