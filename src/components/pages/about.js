import React from 'react';

function About() {
    return (
        <div style={{marginTop: "130px"}}>
            <h3 className={"text-center my-5"}>Biz haqimizda</h3>

            <div className={"container px-5 w-75 shadow-lg"}>
                <div className={"row align-items-center"}>
                    <div className={"image-container col-lg"}>
                        <img className={" ms-2 my-5 img-fluid"} style={{width: "450px"}} src="/hadidmebel_about_image.jpg"/>
                    </div>

                    <div className={"col-lg "}>
                            <h5 className={"text-center"}>
                                "HadidMebel" mebel fabrikasi o'rnatilgan va shkaf mebellari bozorida ekspert hisoblanadi. 7 yildan ortiq vaqt davomida biz siz uchun individual loyihalar asosida yuqori sifatli mebel ishlab chiqaramiz. Faoliyatimiz davomida biz mebel bozorida sizning interyeringiz uchun ko'plab g'oyalarga ega ijodiy jamoa sifatida o'zimizni mustahkamladik. Ishlab chiqarishimizga joriy etayotgan zamonaviy dizayn va yangi texnologiyalar bizni boshqa mebel kompaniyalaridan ajratib turadi.
                                <br/>
                                <br/>
                                “HadidMebel” jamoasi barcha bo‘limlarning yaxshi muvofiqlashtirilgan ishi bilan ajralib turadi. Bizning do'stona kompaniyamiz faqat yuqori malakali mutaxassislarni ishlaydi, ular sizning mebelingiz dizayni va ranglarini tanlashda yordam berishga tayyor. Korxonaning ishlab chiqarish sexlari nemis kompaniyalarining eng zamonaviy uskunalari bilan jihozlangan.
                            </h5>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default About;