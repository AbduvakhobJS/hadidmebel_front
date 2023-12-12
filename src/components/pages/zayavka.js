import React, {useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Zayavka() {
    const [name, setName] = useState('')
    const [surename, setSurename] = useState('')
    const [phone, setPhone] = useState('')
    const navigate = useNavigate()
    const addZayavka = async (e) => {
        e.preventDefault()
        if(name === "" || surename === "" || phone === ""){
            alert("Malumotni toliq kiriting")
        }
        else {
            await axios.post(`http://165.232.70.6:7000/api/zayavka/create`,{
                name: name,
                surename: surename,
                phone: phone
            })
            navigate("/")

        }
    }
    return (
        <div style={{marginTop: "100px"}} id="zayavkaid" className={"pb-1"}>
            <div className={"container text-center pt-4 my-3  "}><h3>Murojat uchun malumotlar qoldiring</h3></div>

            <div id="containerinput" className={"container  py-4 justify-content-center"} style={{width: "450px"}}>
                <form id="inputform" className={"shadow-lg p-5 mb-4"}>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Ism</label>
                        <input type="text" onChange={e => setName(e.target.value)} className="form-control text-bg-dark" id="exampleFormControlInput1" placeholder="Ism"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Familiya</label>
                        <input type="text" onChange={e => setSurename(e.target.value)} className="form-control text-bg-dark" id="exampleFormControlInput1" placeholder="Familiya"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Telefon Raqam</label>
                        <input type="number" onChange={e => setPhone(e.target.value)} className="form-control text-bg-dark" id="exampleFormControlInput1" placeholder="+(998) xx xxx xx xx"/>
                    </div>
                    <div className={"d-grid gap-2 col-6 mx-auto"}>
                        <button type={"button"} onClick={addZayavka} className={"btn btn-success rounded-0 mt-2"}>Yuborish</button>
                    </div>
                </form>

            </div>

        </div>
    );
}

export default Zayavka;