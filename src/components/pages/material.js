import React, {useState, useEffect} from 'react';
import axios from "axios";

function Material() {
    const [materials, setMaterials] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const fetchData = async () => {
        setIsLoading(false)
        const {data} = await axios.get(`${process.env.REACT_APP_API}/material/all`)
        console.log(data)
        setMaterials(data)
        setIsLoading(true)
    }
    useEffect(() => {
        fetchData()
    }, []);

    if(isLoading === false){
        return (
            <div className="d-flex justify-content-center" style={{marginTop: "250px", alignItems: "center"}}>
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Yuklanmoqda...</span>
                </div>
            </div>
        )
    }
    else {
    return (
        <div style={{marginTop: "140px"}}>
            <h3 className={"text-center"}>Biz foydalanadigan matriallar</h3>
            <div className={"container my-5 "}>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {materials.map((item) => {
                        return (
                            <div className="col">
                                <div className="card h-100 border-dark">
                                    <img src={`${process.env.REACT_APP_API_IMAGE}/materials/${item.image}`} className="card-img-top" alt="..."/>
                                    <div className="card-body text-bg-dark shadow">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    );
    }
}


export default Material;