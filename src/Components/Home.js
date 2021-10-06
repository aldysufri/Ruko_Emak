import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Wanita from './Wanita'
import Logo from '../Assets/Logo.png'


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
                    <a className="button" href="#portofolio">Galery</a>
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

            <section id="portofolio" className="container">
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

            <div className="container-footer">
                <div className="footer">
                    <div className="footer-items">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">Fashion</a></li>
                            <li><a href="#">Development</a></li>
                        </ul>
                    </div>
                    <div className="footer-items">
                        <h3>About</h3>
                        <ul>
                            <li><a href="#">Company</a></li>
                            <li><a href="#">Team</a></li>
                        </ul>
                    </div>

                    <div className="footer-items">
                        <img width={70} src={Logo} />
                        <h3>Ruko Emak</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi non voluptatibus, saepe, asperiores beatae error ducimus dicta laudantium, nulla hic qui. Nobis nisi earum deserunt odio quaerat, officia sequi esse excepturi fugit cumque laudantium obcaecati maxime placeat ratione fuga? Cum aut optio repudiandae ipsum, quo illo est molestias nostrum nisi porro voluptatum. Excepturi nemo suscipit, nam laborum officia eveniet, aspernatur quas corporis iusto quisquam minus rerum culpa dignissimos unde. Odio.</p>
                    </div>
                </div>
                <strong><p className="copyright">TA PRPLBK Kel-16 © 2021</p></strong>
            </div>
        </div >
    )
}
