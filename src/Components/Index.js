import React, { useEffect, useState } from "react";

export default function Index(props) {
    const {
        Data,
        title,
    } = props;

    // Form
    const [show, setShow] = useState(false);
    const [user, setUser] = useState("");


    useEffect(() => {
        alert("Selamat Datang di Ruko Emak...")
    }, [])

    return (
        <div>
            <div className="ad">
                <h1>{title}</h1>
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
                                    id="in"
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