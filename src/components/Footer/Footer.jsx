import React from 'react'
import headTwitter from "../../assets/twitter.png";
import headYoutube from "../../assets/youtube.png";
import headSoo from "../../assets/so.png";
import headDiscord from "../../assets/discord.png";
import bitmap from "../../assets/Bitmap Copy 5.png";

import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer className="Footer">
                <div className="FooterCentered">
                    <div className="FooterLeftContainer">
                        <img src={bitmap} alt="" />
                        <div className="footer-ul">
                            <ul>
                                <li><a href="#">FEEDBACK</a></li>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">PATCH NOTES</a></li>
                                <li><a href="#">WHITEPAPER</a></li>
                                <li><a href="#">MERCH</a></li>
                            </ul>

                            <ul className="footer-ul2">
                                <li className="footer-li2"><a className="footer-a2" href="#">Curfluffle Games</a></li>
                                <li className="footer-li2"><a className="footer-a2 footer_link" href="#">Terms of Service</a></li>
                                <li className="footer-li2 "><a className="footer-a2 footer_link" href="#">Privacy Policy</a></li>
                            </ul>

                        </div>
                    </div>
                    <div className="FooterRightContainer">
                        <img src={headTwitter} alt="" />
                        <img src={headYoutube} alt="" />
                        <img src={headSoo} alt="" />
                        <img src={headDiscord} alt="" />
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer