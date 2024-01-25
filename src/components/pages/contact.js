import React from 'react';

function Contact() {
    return (
        <div style={{marginTop: "130px"}} className={"divone"}>

            <h4 className={"text-center my-5"}>Kantakt</h4>
            <div id="containerone" className={"container justify-content-center d-flex shadow-lg"}>
                <div className={"w-25 ms-3 "}>
                    <div className={" mt-3 h-25 w-100"}>
                        <i className={"bi bi-geo-alt"} style={{fontSize: "37px"}}></i>
                    </div>
                    <div className={" mt-1 h-25 w-100"}>
                        <i className={"bi bi-map"} style={{fontSize: "37px"}}></i>
                    </div>
                    <div className={"  h-25 w-100"}>
                        <i className={"bi bi-telephone"} style={{fontSize: "37px"}}></i>
                    </div>
                    <div className={"  h-25 w-100"}>
                        <i className={"bi bi-clock"} style={{fontSize: "37px"}}></i>
                    </div>

                </div>
                <div className={" row d-inline h-100 w-100"}>
                    <div className={"col  h-25"}>
                        <p className={"mt-3"} style={{fontSize: "13px"}}>Manzil
                            <h6 className={"mt-1"}>Toshkent Sh. Uchtepa T. Orikzor 23</h6>
                        </p>
                    </div>
                    <div className={"col h-25"}>
                        <p className={"mt-1" } style={{fontSize: "13px"}}>Moljal
                            <h6 className={"mt-1"}>Orikzor Kanali</h6>
                        </p>
                    </div>
                    <div className={"col  h-25"}>
                        <p className={""} style={{fontSize: "13px"}}>Telefon
                            <h6 className={""}>+(998) 93 773 62 16
                                <h6>+(998) 99 800 62 16</h6>
                            </h6>
                        </p>
                    </div>
                    <div className={"col  h-25"}>
                        <p className={""} style={{fontSize: "13px"}}>Ish-vaqti
                            <h6 className={"mt-1"}>9:00 20:00</h6>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Contact;