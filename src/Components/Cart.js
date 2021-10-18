import React, { Component } from 'react'

export default class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };
    }

    componentDidMount() {
        fetch(
            "http://localhost:3001/Post")
            .then((res) => res.json())
            .then((data) => {
                // console.log(data)
                this.setState({
                    items: data,
                });
            })
    }

    delete = (id) => {
        fetch('http://localhost:3001/Post/' + id, {
            method: 'DELETE'
        })
        window.location.reload();
    }

    render() {
        const { items } = this.state;
        return (
            <div className="center">
                <div className="pria">
                    <h1> Daftar Pesanan Anda  </h1>
                    <table id="cart" >
                        <tbody><tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Harga</th>
                            <th>Aksi</th>
                        </tr>
                            {
                                items.map((item) => (
                                    <tr key={item.id}>
                                        <td><img src={item.image} height={110} alt="" /></td>
                                        <td>{item.name}</td>
                                        <td>{item.harga}</td>
                                        <td><button className="Button" style={{ backgroundColor: "red" }} onClick={() => { this.delete(item.id) }}>Batal</button></td>
                                    </tr>
                                ))
                            }
                        </tbody></table>
                </div>
            </div>
        );
    }
}
