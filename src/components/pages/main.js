import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";

function Main({setProduct}) {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')

    const [promotion, setPromotion] = useState([])
    const [catalog, setCatalog] = useState([])
    const [OnePromotion, setOnePromotion] = useState([])
    const [datePromotion, setDatePromotion] = useState([])
    const [isLoading, setIsLoading] = useState(false)


    const getId = async (id) => {
        const { data } = await axios.post(`${process.env.REACT_APP_API}/catalog/find`, {
            catalog_Id: id
        })
        setProduct(data ? data : [])
    }

    const CatalogFetch = async () => {
        const { data } = await axios.get(`${process.env.REACT_APP_API}/catalog/all`)
        setCatalog(data)
    }


    const fetch_promotion_date = async () => {
        const { data } = await axios.get(`${process.env.REACT_APP_API}/promotion_date/all`)
        setDatePromotion(data)
    }


    const PromotionFetch = async () => {
        setIsLoading(false)
        const {data} = await axios.get(`${process.env.REACT_APP_API}/promotion/all`)
        console.log(data)
        setPromotion(data)
        setIsLoading(true)
    }


    const getOnePromotion = async (id) => {
        const { data } = await axios.get(`${process.env.REACT_APP_API}/promotion/${id}`)
        setOnePromotion(data)
    }
    const getPromotion = {name: OnePromotion.title, id: OnePromotion._id}

    const addPromotion = async (e) => {
        e.preventDefault()
        if(name === "" || phone === ""){
            alert("Malumotni toliq kiriting")
            
        }
        else {
            await axios.post(`${process.env.REACT_APP_API}/order/create`, {
                product_Id: getPromotion.id,
                product_name: getPromotion.name,
                name: name,
                phone: phone
            })
            alert('Buyurtmangiz amalga oshirildi tez orada siz bilan bog\'lanamiz😊')
        }
        
    }

    useEffect(() => {
        CatalogFetch()
        PromotionFetch()
        fetch_promotion_date()
    }, []);


        return (
            <main style={{marginTop: "120px"}}>

                <div className="container">
                    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="6000">
                                <div className="card text-bg-dark">
                                    <img src="/Hadidmebel_glavniy_tayyor.jpg"
                                        className="card-img opacity-75"
                                        alt="Rasm bor"/>
                                </div>
                            </div>
                            <div className="carousel-item ctive" data-bs-interval="6000">
                                <div className="card text-bg-dark">
                                    <img src="/oshxona%20mebeli.jpg" className="card-img opacity-75" alt="Rasm bor"/>
                                </div>
                            </div>
                            <div className="carousel-item " data-bs-interval="6000">
                                <div className="card text-bg-dark">
                                    <img src="/spalniy_glavniy_tayyor.jpg" className="card-img opacity-75" alt="Rasm bor"/>
                                </div>
                            </div>
                            <div className="carousel-item " data-bs-interval="6000">
                                <div className="card text-bg-dark">
                                    <img src="/glavniy_detskiy_tayyor.jpg" className="card-img opacity-75" alt="Rasm bor"/>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button"
                                data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button"
                                data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                </div>

                <div className={"container text-center my-5 border border-2 border-success py-3 "}>
                    <h3 className={"fw-bold"}>Bizning Katalog</h3>
                </div>


                <div className={"container"}>
                    <div className="row row-cols-1 row-cols-md-4 g-4 my-2">
                        {catalog.map((item) => (
                            <div key={item._id} className="col">
                                <Link onClick={() => getId(item._id)} className={"nav-link"} to={`/${item.name}`}>
                                    <div className="card text-bg-dark shadow rounded-0" style={{maxWidth: "400px"}}>
                                        <img src={`${process.env.REACT_APP_API_IMAGE}/catalogs/${item.image}`}
                                             style={{maxHeight: "277px"}} className="card-img-top rounded-0" alt="..."/>
                                        <div className="card-body">
                                            <div className={"container"}>
                                                <h5 className="card-title text-center">{item.name}</h5>
                                                <div className={"d-grid gap-2 col-6 mx-auto"}>
                                                    <button type={"button"}
                                                            className={"btn btn-success rounded-0 mt-2"}>Batafsil
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>


                <div className={"border border-secondary my-5"}>
                    <h2 className={"mt-5 text-center fw-bold"}>Bizning afzalliklarimiz</h2>
                    <div className={"container my-5"}>
                        <div className={"row row-cols-1 row-cols-md-4 g-4 d-flex justify-content-center align-items-center"}>
                            <div className={"col"}>
                                <div className={"card text-bg-dark ms-2 border-secondary"}
                                     style={{height: "285px", width: "285px"}}>
                                    <span className="material-symbols-outlined mt-2 text-center"
                                          style={{fontSize: "150px"}}>eco</span>
                                    <div className={"mt-4"}>
                                        <h5 className={"text-center"}>Ekologik toza va xavfsiz materiallar</h5>
                                    </div>
                                </div>
                            </div>
                            <div className={"col"}>
                                <div className={"card text-bg-dark ms-2 border-secondary"}
                                     style={{height: "285px", width: "285px"}}>
                                    <span className="material-symbols-outlined mt-4 text-center"
                                          style={{fontSize: "135px"}}>handshake</span>
                                    <div className={"mt-4"}>
                                        <h5 className={"text-center"}>Mijozlarni doimo qo'llab quvvatlash</h5>
                                    </div>
                                </div>
                            </div>
                            <div className={"col"}>
                                <div className={"card text-bg-dark ms-2 border-secondary"}
                                     style={{height: "285px", width: "285px"}}>
                                    <span className="material-symbols-outlined mt-4 text-center"
                                          style={{fontSize: "135px"}}>editor_choice</span>
                                    <div className={"mt-4"}>
                                        <h5 className={"text-center"}>Ishlab chiqarishning har bir bosqichida sifat
                                            nazorati</h5>
                                    </div>
                                </div>
                            </div>
                            <div className={"col"}>
                                <div className={"card text-bg-dark ms-2 border-secondary"}
                                     style={{height: "285px", width: "285px"}}>
                                    <span className="material-symbols-outlined mt-4 text-center"
                                          style={{fontSize: "140px"}}>chair</span>
                                    <div className={"mt-3"}>
                                        <h5 className={"text-center"}>Noyob interyer uchun eksklyuziv mebel</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"mt-3"}>
                    {datePromotion.map((item) => (
                        <div>
                            <h2 className={"text-center my-2 text-danger fw-bold"}>{item.promotion_name}</h2>
                            <h3 className={"text-center mb-5 text-danger fw-bold"}>{item.promotion_date}</h3>
                        </div>
                    ))}


                    <div className={"container "}>
                        <div className="row row-cols-1 row-cols-md-4 g-4 d-flex justify-content-center align-items-center">
                            {promotion.map(item => (
                                <div className="col">
                                    <div key={item._id} className="card shadow-lg border-dark rounded-0" style={{width: "18rem"}}>
                                        <img src={`${process.env.REACT_APP_API_IMAGE}/promotions/${item.image}`}
                                             className="card-img-top rounded-0" style={{height: "300px"}} alt="..."/>
                                        <div className="card-body text-bg-dark">
                                            <h5 className="card-title">{item.title}</h5>
                                            <h5 className="card-title text-decoration-line-through">{item.before_price}</h5>
                                            <h3 className="card-text">{item.price}</h3>
                                            <h5 className="card-text">Материаль: {item.material}</h5>
                                            <p className="d-inline-flexgap-1">
                                                <Link className="nav-link fw-bold" style={{fontSize: "20px"}}
                                                      type="button" data-bs-toggle="collapse"
                                                      data-bs-target="#collapseExample" aria-expanded="false"
                                                      aria-controls="collapseExample">
                                                    Batafsil
                                                </Link>
                                            </p>
                                            <div className="collapse bg-dark" id="collapseExample">
                                                <div className="card card-body text-bg-dark">
                                                    {item.description}
                                                </div>
                                            </div>
                                            <div className={"container mt-4"}>
                                                <button onClick={() => getOnePromotion(item._id)}
                                                        className={"btn btn-success rounded-0 w-100"}
                                                        data-bs-toggle="modal" data-bs-target="#exampleModal">Buyurtma
                                                    berish
                                                </button>
                                            </div>
                                            <div className="modal fade "id="exampleModal" tabIndex="-1"
                                                 aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div className="modal-dialog">
                                                    <div className="modal-content bg-dark">
                                                        <div className="modal-header ">
                                                            <h3 className={"text-center"}>Оставить заявку</h3>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div className="modal-body bg-dark">
                                                            <p className={"text-center"}>Siz {getPromotion.name} ni
                                                                tanladingiz</p>
                                                            <form>
                                                                <div className={"container"}>
                                                                    <div className="mb-3">
                                                                        <label className="form-label">Имя*</label>
                                                                        <input onChange={e => setName(e.target.value)}
                                                                               className="form-control text-bg-dark rounded-2"
                                                                               type="text" placeholder="Default input"
                                                                               aria-label="default input example"/>
                                                                    </div>
                                                                    <div className="mb-3">
                                                                        <label className="form-label">Ваш номер
                                                                            телефона*</label>
                                                                        <input onChange={e => setPhone(e.target.value)}
                                                                               className="form-control text-bg-dark rounded-2"
                                                                               type="text" placeholder="Default input"
                                                                               aria-label="default input example"/>
                                                                    </div>
                                                                    <button onClick={addPromotion} type="submit"
                                                                            className="btn btn-success my-3 rounded-0 "
                                                                            style={{marginLeft: "140px"}}
                                                                            data-bs-dismiss="modal" aria-label="Close"
                                                                            id="liveToastBtn">Buyurtma berish
                                                                    </button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={"border border-secondary my-5"}>
                    <h2 className={"mt-5 text-center fw-bold"}>Bizning Hamkorlarimiz</h2>
                    <div className='container'>
                        <div id="brand" className="row row-cols-1 row-cols-md-5 my-5 ">
                            <div className={"col"}>
                                <img src='/blum.jpg'/>
                            </div>
                            <div className={"col"}>
                                <img src='/samet.jpg'/>
                            </div>
                            <div className={"col"}>
                                <img src='/starax.jpg'/>
                            </div>
                            <div className={"col"}>
                                <img src='/hafele.jpg'/>
                            </div>
                            <div className={"col"}>
                                <img src='/hettich.jpg'/>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        );
}

export default Main;


