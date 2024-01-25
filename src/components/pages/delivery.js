import React from 'react';

function Delivery() {
    return (
        <div  style={{marginTop: "150px", marginBottom: "100px"}}>

            <h3 className={"text-center my-5"}>Yetkazib berish</h3>

            <div className={"container px-5 w-75 shadow-lg"}>
                <div className={"row align-items-center"}>
                    <div className={"image-container col-lg"}>
                            <img className={" ms-2 my-5 img-fluid"} style={{width: "500px"}} src="/delivery.png"/>
                    </div>

                    <div className={"col-lg"}>

                        <div className={"container me-2 p-4"}>
                            <h6 className={"text-center "}>

                                Bizdan sotib olingan har qanday mebelni tezkor yetkazib berish, polga ko'tarish va sifatli yig'ish bilan ta'minlaymiz!
                                <br/>
                                <br/>
                                Biz sizning mebellaringizni tez, xavfsiz va qulay shartlarda yetkazib beramiz.
                                <br/>
                                <br/>
                                Konsultatsiya uchun telefon orqali qo'ng'iroq qiling!<br/> +998 (93) 773-62-16 +998 (99) 800-62-16
                                <br/>
                                <br/>
                                har kuni soat 9:00 dan 20:00 gacha savdo xodimlari sizga maslahat beradilar va buyurtmangizni qabul qiladilar.Boshqa vaqtda yetkazib berish va yig'ish shartlarini aniqlab olishingiz mumkin. mebelni veb-saytdagi fikr-mulohaza shakllari orqali yoki manzilga elektron pochta orqali yuborish orqali. info@smebel.uz
                            </h6>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default Delivery;