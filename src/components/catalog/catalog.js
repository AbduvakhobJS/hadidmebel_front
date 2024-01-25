import React, {useEffect, useState} from 'react';
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Catalog({item, product}) {

        return (
            <div style={{marginTop: "130px"}}>
                <h4 className={"text-center my-5"}>{item} ro'yhati</h4>
                <div className={"container my-5"}>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {product && product.map((productById, index) => (
                            <div key={index} className="col">
                                <div className="card h-100 border-dark rounded-0">
                                    <img src={`${process.env.REACT_APP_API_IMAGE}/products/${productById.image}`}
                                         className="card-img-top rounded-0" alt="Mahsulot rasmi"/>
                                    <div className="card-body text-bg-dark shadow">
                                        <h5 className="card-title">{productById.title}</h5>
                                        <p className="card-text">{productById.description}</p>
                                        <div className={"d-grid gap-2 col-6 mx-auto"}>
                                            <Link className="btn btn-success rounded-0"
                                                  to={`/${item}/${productById._id}`}>Batafsil</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
}

export default Catalog;