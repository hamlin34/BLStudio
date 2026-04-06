import "../styles/Footer.css";
import { SocialIcon } from "react-social-icons";

function Footer(props){

    return(
        <footer className="footer">

            <div className="footer-container">

                <div className="footer-left">

                    <h2 className="footer-logo">BL Studio</h2>

                    <p className="footer-text">
                        Gaming, community, and over-the-top builds.
                        If it's worth doing, it's worth overdoing.
                    </p>

                </div>

                <div className="footer-middle">

                    <h3>Navigation</h3>

                    <button onClick={()=>props.setPage("home")}>Home</button>
                    <button onClick={()=>props.setPage("videos")}>Videos</button>
                    <button onClick={()=>props.setPage("community")}>Community</button>
                    <button onClick={()=>props.setPage("about")}>About</button>
                    <button onClick={()=>props.setPage("contact")}>Contact</button>

                </div>

                <div className="footer-right">

                    <h3>Follow</h3>

                    <div className="social-icons">

                        <div className="social-item">
                            <SocialIcon
                                url="https://www.twitch.tv/blandrew575"
                                style={{height:32,width:32}}
                                fgColor="#d6b06a"
                                bgColor="transparent"
                                target="_blank"
                                rel="noreferrer"
                            />
                            <a href="https://www.twitch.tv/blandrew575" target="_blank" rel="noreferrer">
                                Twitch
                            </a>
                        </div>

                        <div className="social-item">
                            <SocialIcon
                                url="https://www.youtube.com/channel/UChewoSJTocGRYNacxo0c6vQ"
                                style={{height:32,width:32}}
                                fgColor="#d6b06a"
                                bgColor="transparent"
                                target="_blank"
                                rel="noreferrer"
                            />
                            <a href="https://www.youtube.com/channel/UChewoSJTocGRYNacxo0c6vQ" target="_blank" rel="noreferrer">
                                YouTube
                            </a>
                        </div>

                        <div className="social-item">
                            <SocialIcon
                                url="https://discord.com/invite/eqxzf6FsNC"
                                style={{height:32,width:32}}
                                fgColor="#d6b06a"
                                bgColor="transparent"
                                target="_blank"
                                rel="noreferrer"
                            />
                            <a href="https://discord.com/invite/eqxzf6FsNC" target="_blank" rel="noreferrer">
                                Discord
                            </a>
                        </div>

                        <div className="social-item">
                            <SocialIcon
                                url="https://x.com/BLAndrew575"
                                style={{height:32,width:32}}
                                fgColor="#d6b06a"
                                bgColor="transparent"
                                target="_blank"
                                rel="noreferrer"
                            />
                            <a href="https://x.com/BLAndrew575" target="_blank" rel="noreferrer">
                                X
                            </a>
                        </div>

                    </div>

                </div>

            </div>

            <div className="footer-bottom">
                © 2026 BL Studio • All rights reserved
            </div>

        </footer>
    );
}

export default Footer;