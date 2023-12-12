import React from 'react';
import './footer.css'
import {Link} from "react-router-dom";
function Footer() {
    return (
        <div>

            <footer className="dark text-center text-lg-start mt-5 shadow">
                <div className="text-center p-3">
                    &copy; HadidMebel 2016 2023 | Barcha huquqlar himoyalangan
                    | Bizni ijtimoiy tarmoqlarda kuzatib boring
                    <Link  className={"text-light ms-2"} to={"https://instagram.com/hadidmebel"}><i className={"bi bi-instagram"}></i></Link>
                    <Link className={"text-light ms-2"} to={"https://tiktok.com/hadidmebel"}><i className={"bi bi-tiktok"}></i></Link>
                    <Link className={"text-light ms-2"} to={"https://facebook.com/hadidmebel"}><i className={"bi bi-facebook"}></i></Link>
                    <Link className={"text-light ms-2"} to={"https://t.me/hadidmebel"}><i className={"bi bi-telegram"}></i></Link>
                </div>

            </footer>

        </div>
    );
}

export default Footer;