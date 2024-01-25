import React, {useEffect, useState} from 'react';
import './navbar.css'
import { Link, NavLink } from "react-router-dom";
import axios from "axios";



function Navbar({setProduct}) {
    const [catalogs, setCatalogs] = useState([])

    const fetchData = async () => {
        const { data } = await axios.get(`${process.env.REACT_APP_API}/catalog/all`)
        setCatalogs(data)
    }

    const getId = async (id) => {
        const { data } = await axios.post(`${process.env.REACT_APP_API}/catalog/find`,{
            catalog_Id: id
        })
        setProduct(data? data:[])
    }


    useEffect(() => {
        fetchData()
    }, []);
    return (
        <header>
            <nav className=" fixed-top navbar navbar-expand-lg bg-dark py-3 shadow">
                <div className="container-fluid">
                    <Link className="navbar-brand text-light" to={"/"}>
                        <img style={{width: "65px" , height: "65px"}} src="/hadidlogo.jpg"/>
                    </Link>

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav justify-content-center w-100">
                            <NavLink className="nav-link text-bg-dark mx-3" to="/">BOSH SAHIFA</NavLink>
                            <div className={"dropdown"}>
                                <Link className="nav-link text-bg-dark mx-3" type={"button"} to={""} data-bs-toggle="dropdown" aria-expanded="false">KATALOG</Link>
                                <ul  className="dropdown-menu dropdown-menu-dark">
                                    {catalogs.map((item, index) => (
                                        <li key={index} onClick={(e) => getId(item._id)}><Link className="dropdown-item" type="button" to={`/${item.name}`}>{item.name}</Link></li>
                                    ))}
                                </ul>
                            </div>
                            <NavLink className="nav-link text-bg-dark mx-3" to="/about">BIZ HAQIMIZDA</NavLink>
    
                            <NavLink className="nav-link text-bg-dark mx-3" to={"/materials"}>MATERIALLAR</NavLink>
                            <NavLink className="nav-link text-bg-dark mx-3" to={"/delivery"}>YETKAZIB BERISH</NavLink>
                            <NavLink className="nav-link text-bg-dark mx-3" to={"/contact"}>BOG'LANISH</NavLink>

                        </div>
                    </div>
                    <div className={""}>
                        <Link className="nav-link text-bg-dark " to={"/zayavka"}>
                            SO'ROV QOLDIRISH
                            <div className="spinner-grow spinner-grow-sm me-1 ms-1 text-warning" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </Link>
                    </div>
                    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <i id="iconlist" className="bi bi-list"></i>
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;