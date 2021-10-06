import React from 'react'
import Logo from '../Assets/Logo.png'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import Wanita from './Wanita'


export default function Home() {
    const Data = [
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
    return (
        <div className="home">
            <div className="hero" style={{ height: "100vh" }}>
                <div className="hero-text">
                    <h1 style={{ fontSize: '50px' }}>Welcome To Ruko Emak</h1>
                    <p>Modern fashion shopping place</p>
                    <br />
                    <Link to="/wanita">
                        <button>Home</button>
                    </Link>
                    <Switch>
                        <Route path="/wanita" exact component={Wanita} />
                    </Switch>
                </div>
            </div>

            <div className="top">
                <h2>Top Searches This Week</h2>
                <div className="center">
                    {Data.map((p) => (
                        <div className="property-card">
                            <div className="property-image" style={{ backgroundImage: `url(${p.image})` }}>
                                <div className="property-image-title" >
                                </div>
                            </div>
                            <div className="property-description">
                                <h5> {p.name} </h5>
                                <p>{p.sc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <section className="container">
                <div className="gallery">
                    <h2>Gallery</h2>
                    <img src="https://source.unsplash.com/random/201x201/?Fashion" alt="" />
                    <img src="https://source.unsplash.com/random/202x202/?Fashion" alt="" />
                    <img src="https://source.unsplash.com/random/203x203/?Fashion" alt="" />
                    <img src="https://source.unsplash.com/random/204x204/?Fashion" alt="" />
                    <img src="https://source.unsplash.com/random/205x205/?Fashion" alt="" />
                    <img src="https://source.unsplash.com/random/206x206/?Fashion" alt="" />
                    <img src="https://source.unsplash.com/random/207x207/?Fashion" alt="" />
                    <img src="https://source.unsplash.com/random/208x208/?Fashion" alt="" />
                    <img src="https://source.unsplash.com/random/209x209/?Fashion" alt="" />
                    <img src="https://source.unsplash.com/random/205x209/?Fashion" alt="" />
                </div>
            </section>

            <div className="footer" >
                <svg viewBox="0 -20 700 110" width="100%" height={110} preserveAspectRatio="none">
                    <path transform="translate(0, -20)" d="M0,10 c80,-22 240,0 350,18 c90,17 260,7.5 350,-20 v50 h-700" fill="#CEB964" />
                    <path d="M0,10 c80,-18 230,-12 350,7 c80,13 260,17 350,-5 v100 h-700z" fill="#00273F" />
                </svg>
            </div>
        </div >
    )
}
