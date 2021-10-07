import React, { useEffect, useState } from "react";

export default function Index() {
    // Form
    const [show, setShow] = useState(false);
    const [user, setUser] = useState("");

    useEffect(() => {
        alert("Selamat Datang di Ruko Emak...")
    }, [])


    const Data = [
        {
            name: "Aldy Sufriyanto",
            nim: "21120118120021",
            kel: "16",
            image: "https://source.unsplash.com/qsjM7zomoEI/230x230"
        },

        {
            name: "Yunita Andriana",
            nim: "21120118120031",
            kel: "16",
            image: "https://source.unsplash.com/QsxToVwo1iE/230x230"
        }
    ]

    return (
        <div>
            <div className="ad">
                <h1>Kelompok 16</h1>
                <div className="center">
                    {Data.map((p) => (
                        <div className="property-card">
                            <div className="property-image" style={{ backgroundImage: `url(${p.image})` }}>
                                <div className="property-image-title" >
                                </div>
                            </div>
                            <div className="property-description">
                                <h5> {p.name} </h5>
                                <p>{p.nim}</p>
                            </div>
                        </div>
                    ))}
                </div>
                {show && (
                    <>
                        <div className="titleWrapper">
                            <p className="title">Input Name</p>
                            <p style={{ color: "red" }}>-Masukkan nama lalu tekan Enter-</p>
                        </div>
                        <div className="inputWrapper">
                            <div>
                                <input
                                    size="50"
                                    value=
                                    {user} onChange={(event) => setUser(event.target.value)} onKeyUp={(e) => {
                                        if (e.key === 'Enter') {
                                            if (user !== "") {
                                                alert("Hallo " + user);
                                            } else {
                                                alert("Masukkan nama anda!!!")
                                            }
                                        }
                                    }} />
                            </div>
                        </div>
                    </>
                )}
                <button className="Button" onClick={() => setShow(!show)}>{show ? "hide" : "show"}</button>
            </div>
        </div>

    );
}