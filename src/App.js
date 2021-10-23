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
import Al from './Assets/aldy.jpg'
import yu from './Assets/yunita.jpg'

const Top = [
  {
    name: "Dress",
    sc: "12.5k + Pencarian",
    image: "https://source.unsplash.com/gMkpcMPno-w/230x230"
  },

  {
    name: "Shoes",
    sc: "12.5k + Pencarian",
    image: "https://source.unsplash.com/OX_en7CXMj4/230x230"
  },
  {
    name: "Shirt",
    sc: "12.5k + Pencarian",
    image: "https://source.unsplash.com/hMMXhKSZk7k/230x230"
  },

  {
    name: "Watch",
    sc: "12.5k + Pencarian",
    image: "https://source.unsplash.com/rBPOfVqROzY/230x230"
  }
]

const Data = [
  {
    name: "Aldy Sufriyanto",
    nim: "21120118120021",
    kel: "16",
    image: Al
  },

  {
    name: "Yunita Andriana",
    nim: "21120118120031",
    kel: "16",
    image: yu
  }
]

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
        <Route path="/" exact component={Dashboard}>
          <Dashboard Data={Data} title="Kelompok 16" />
        </Route>
        <Route path="/home" exact component={Home}>
          <Home Top={Top} toptitle="Top Searches This Week" />
        </Route>
        <Route path="/pria" exact component={Pria}>
          <Pria topi="Topi" kemeja="Kemeja" sepatu="Sepatu" />
        </Route>
        <Route path="/wanita" exact component={Wanita}>
          <Wanita jam="Jam Tangan" dress="Dress" hells="Hells" />
        </Route>
        <Route path="/cart" exact component={Cart}>
          <Cart titlecart="Daftar Pesanan Anda" cartdes="-Silahkan periksa pesanan anda-" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
