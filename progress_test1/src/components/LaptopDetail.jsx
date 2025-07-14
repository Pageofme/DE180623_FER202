import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function LaptopDetail() {
    const { id } = useParams();
    const [laptop, setLaptop] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3001/Laptops/${id}`)
            .then(res => setLaptop(res.data))
            .catch(err => setLaptop(null));
    }, [id]);

    if (!laptop) return <h2>404 Not Found</h2>;

    return (
        <div className="container">
            <h2>{laptop.brand} {laptop.model}</h2>
            <p>Year: {laptop.year}</p>
            <p>Price: {laptop.price}</p>
            <img src={laptop.image} alt={laptop.model} width="300" />
            <div> <button className="btn btn-primary mt-3" onClick={() => window.history.back()} >Back to List</button></div>
            {/* <div> <Button className="btn btn-primary mt-3" href="/laptops" >Back to List</Button></div> */}

        </div>
    );
}

export default LaptopDetail;
