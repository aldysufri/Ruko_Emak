import React from 'react'
import Logo from '../Assets/Logo.png'


export default function Home(props) {
    const { Top, toptitle } = props;
    return (
        <div className="home">
            <div className="hero" style={{ height: "100vh" }}>
                <div className="hero-text">
                    <h1 style={{ fontSize: '50px' }}>Welcome To Ruko Emak</h1>
                    <p style={{ color: 'white' }}>Modern fashion shopping place</p>
                    <br />
                    <a className="button" href="#portofolio">Galery</a>
                    <a className="button" href="#Testi">Testimoni</a>
                </div>
            </div>

            <div className="top">
                <h2>{toptitle}</h2>
                <div className="center">
                    {Top.map((p) => (
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
            
 <section id="Testi" className="container">
                <div className="Testimoni">
                    <h2>Testimoni</h2>
                    <a href='https://postimg.cc/0K9DJCYj' target='_blank'><img src='https://i.postimg.cc/brtTWCdx/testimoni.png' border='0' alt='testimoni'/></a>
                    
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
                        <p>Jl.Haha hihi No 11</p>
                        <p>Tembalang-Semarang  123456</p>
                    </div>
                </div>
                <strong><p className="copyright">TA PRPLBK Kel-16 © 2021</p></strong>
            </div>
        </div >
    )
}
