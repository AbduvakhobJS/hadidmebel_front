import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import axios from "axios";

function Product() {
    const {id} = useParams()
    const [product, setProduct] = useState([])
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const fetchByid = async () => {
        setIsLoading(false)
        const { data } = await axios.get(`${process.env.REACT_APP_API}/product/${id}`)
        const elements = {
            title: data.title,
            price: data.price,
            size: data.size,
            color: data.color,
            image: `${process.env.REACT_APP_API_IMAGE}/products/${data.image[0]}`,
            material: data.material,
            description: data.description,
            catalog_name: data.catalog_name,
            catalog_id: data.catalog_id,
            bonus: data.bonus,
            id: data._id
        }
        setIsLoading(true)
        setProduct({...elements})
        console.log(data)
    }

    const sendOrder = async () => {
        if(name === "" || phone === ""){
            alert("Malumotni toliq kiriting")
            
        }
        else{
            await axios.post(`${process.env.REACT_APP_API}/order/create`,{
                name: name,
                phone: phone,
                product_Id: product.id,
                product_name: product.title
            })
            alert("Buyurtma muvofaqiyatli malaga oshirildi😊")
        }

    }

    useEffect(() => {
        fetchByid()
    }, []);

    if(isLoading === false){
        return (
            <div className="d-flex justify-content-center" style={{marginTop: "250px", alignItems: "center"}}>
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Yulanmoqda...</span>
                </div>
            </div>
        )
    }
    else {
        return (
            <div style={{marginTop: "130px"}}>
                <div className={"container mt-5"}>
                    <div className={"row"}>
                        <div className={"col-md-8 offset-md-2"}>
                            <div className="card mb-4 text-bg-dark shadow rounded-0" style={{maxWidth: "550"}}>
                                <div className="row g-0">
                                    <div className="col-md-6 border border-dark">
                                        <img src={product?.image} className="img-fluid mt-4 " alt="..."/>
                                    </div>
                                    <div className="col-md-6 ">
                                        <div className="card-body ms-3">
                                            <h2 className="card-title my-3 fw-bold">{product?.title}</h2>
                                            <h3 className="card-text fw-bold">{product?.price}</h3>
                                            <div className={"mt-4"}>
                                                <div className={"d-flex"}>
                                                    <h6 className='fw-bold'>O'lchamlar:</h6>
                                                    <h6 className={"ms-3"}>{product.size}</h6>
                                                </div>
                                                <div className={"d-flex"}>
                                                    <h6 className='fw-bold'>Material:</h6>
                                                    <h6 className={"ms-3"}>{product?.material}</h6>
                                                </div>
                                                <div className={"d-flex"}>
                                                    <h6 className='fw-bold'>Rangi:</h6>
                                                    <h6 className={"ms-3"}>{product.color}</h6>
                                                </div>
                                                <div className={"d-flex"}>
                                                    <h6 className='fw-bold'>Qisqacha malumot :</h6>
                                                    <h6 className={"ms-3"}>{product?.description}</h6>
                                                </div>
                                                <div className={"d-flex"}>
                                                    <i className="bi bi-gift me-2"></i>
                                                    <h6 className='fw-bold'>Bonus :</h6>
                                                    <h6 className={"ms-3"}>{product?.bonus}</h6>
                                                </div>
                                            </div>
                                            <hr/>
                                            <div className={"border border-primary"}>
                                                <p className={"text-center mt-2 "}>Buyurtma berganingizdan so'ng 24 soat ichida siz bilan bog'lanamiz</p>
                                            </div>

                                            <button className="btn btn-success rounded-0 mt-3" type="button"
                                                    data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"
                                                    aria-controls="offcanvasExample">
                                                Buyurtma
                                            </button>

                                            <div className="offcanvas offcanvas-start" tabIndex="-1"
                                                 id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                                                <div className="offcanvas-header text-bg-dark">
                                                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Buyurtma
                                                        berish</h5>
                                                    <button type="button" className="btn-close text-light"
                                                            data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                                </div>
                                                <div className="offcanvas-body text-bg-dark">
                                                    <div>
                                                        <p>Siz {product?.title} ni tanladingiz</p>
                                                        <form>
                                                            <div className="mb-3">
                                                                <label className="form-label">Ismingiz</label>
                                                                <input onChange={e => setName(e.target.value)}
                                                                       className="form-control text-bg-dark" type="text"
                                                                       placeholder="Default input"
                                                                       aria-label="default input example"/>
                                                            </div>
                                                            <div className="mb-3">
                                                                <label className="form-label">Raqamingiz</label>
                                                                <input onChange={e => setPhone(e.target.value)}
                                                                       className="form-control text-bg-dark" type="text"
                                                                       placeholder="Default input"
                                                                       aria-label="default input example"/>
                                                            </div>
                                                            <button onClick={() => sendOrder()}
                                                                    className="btn btn-success rounded-0">Buyurtma
                                                                berish
                                                            </button>
                                                        </form>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Product;