import { useEffect, useState } from "react";
import axios from "axios";
import Modal from 'react-modal';

export default function Pria() {
    const customStyles = {
        overlay: {
            border: "none",
            position: "fixed",
            top: "90px",
            overflow: "hide",
        }, content: {
            padding: 0,
            margin: 15,
            top: 25,
            left: "300px",
            width: "800px",
            background: "#f0f0f0",
            border: "none",
        },
    };
    const [data, SetData] = useState([]);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [Detail, setDetail] = useState({});
    const [valueCategory, setValueCategory] = useState("Kemeja");
    console.log(valueCategory);
    function OpenModal(id, name, des, harga, image) {
        setDetail({
            id: id,
            name: name,
            des: des,
            harga: harga,
            image: image
        });

        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    useEffect(() => {
        axios({
            method: "GET",
            url: `http://localhost:3001/${valueCategory}`,
        })
            .then((data) => {
                console.log(data.data);
                SetData([...data.data]);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [valueCategory]);
    return (
        <div className="center">
            <div className="btn">
                <button onClick={() => setValueCategory("Topi")}>Topi</button>
                <button onClick={() => setValueCategory("Kemeja")}>Kemeja</button>
                <button onClick={() => setValueCategory("Sepatu")}>Sepatu</button>
            </div>

            <div className="pria center">
                {data.map((p) => (
                    <div item key={p.id}>
                        <div className="property-card" onClick={() => {
                            OpenModal(
                                p.id,
                                p.name,
                                p.des,
                                p.harga,
                                p.image,
                            )
                        }}>
                            <div className="property-image" style={{ backgroundImage: `url(${p.image})` }}>
                                <div className="property-image-title" >
                                </div>
                            </div>
                            <div className="property-description">
                                <h5> {p.name} </h5>
                                <p>{p.harga}</p>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="footer-show">
                    <svg viewBox="0 -20 700 110" width="100%" height={110} preserveAspectRatio="none">
                        <path transform="translate(0, -20)" d="M0,10 c80,-22 240,0 350,18 c90,17 260,7.5 350,-20 v50 h-700" fill="#CEB964" />
                        <path d="M0,10 c80,-18 230,-12 350,7 c80,13 260,17 350,-5 v100 h-700z" fill="#00273F" />
                    </svg>
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <div className="modal">
                    <div className="abs">
                        <h1 className="abs">{Detail.name}</h1>
                        <img className="abs" src={Detail.image} alt="" />
                        <p className="abs"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo ut tempore iste sed fuga vero, repellat a mollitia quibusdam placeat quis aliquam nostrum optio quam.</p>
                        <h3 className="abs">{Detail.harga}</h3>
                        <button className="Button abs" onClick={() => console.log(Detail.name)}>Beli</button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}
