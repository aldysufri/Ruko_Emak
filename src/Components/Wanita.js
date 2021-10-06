import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import Modal from 'react-modal';

const CategoryContext = createContext();
Modal.setAppElement("#root");
export default function Wanita() {
    const [valueCategory, setValueCategory] = useState("Dress");
    console.log(valueCategory);
    return (
        <CategoryContext.Provider value={valueCategory}>
            <div className="center btn">
                <button onClick={() => setValueCategory("Watch")}>Jam Tangan</button>
                <button onClick={() => setValueCategory("Dress")}>Dress</button>
                <button onClick={() => setValueCategory("Hells")}>Hells</button>
            </div>
            <Context />
        </CategoryContext.Provider>
    )
}

function Context() {
    return (
        <div>
            <Data />
        </div>
    )
}

function Data() {
    const [data, SetData] = useState([]);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [Detail, setDetail] = useState({});
    const category = useContext(CategoryContext);
    console.log(category);
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
            url: `http://localhost:3001/${category}`,
            headers: {
                accept: "/",
            },
        })
            .then((data) => {
                console.log(data.data);
                SetData([...data.data]);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [category]);
    return (
        <div>
            <div className="center pria">
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
                <div className="footer" >
                    <svg viewBox="0 -20 700 110" width="100%" height={110} preserveAspectRatio="none">
                        <path transform="translate(0, -20)" d="M0,10 c80,-22 240,0 350,18 c90,17 260,7.5 350,-20 v50 h-700" fill="#CEB964" />
                        <path d="M0,10 c80,-18 230,-12 350,7 c80,13 260,17 350,-5 v100 h-700z" fill="#00273F" />
                    </svg>
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
            >
                <div className="modal">
                    <h1>{Detail.name}</h1>
                    <img src={Detail.image} alt="" />
                    <h3>{Detail.harga}</h3>
                    <p>{Detail.des}</p>
                    <button className="button">Beli</button>
                </div>
            </Modal>
        </div>
    )
}
