import "../styles/NavBar.css";

function NavBar(props){
    return(
        <div className="navbar">
            <div className="nav-container">

                <button
                    className="logo-button"
                    onClick={()=>props.setPage("home")}
                    type="button"
                >
                    <img src="/images/Logo.png" alt="BL Studio Logo" className="logo-img" />
                    BL Studio
                </button>

                <div className="nav-links">
                    <button onClick={()=>props.setPage("home")} type="button">Home</button>
                    <button onClick={()=>props.setPage("videos")} type="button">Videos</button>
                    <button onClick={()=>props.setPage("community")} type="button">Community</button>
                    <button onClick={()=>props.setPage("about")} type="button">About</button>
                    <button onClick={()=>props.setPage("contact")} type="button">Contact</button>
                </div>

                <a
                    className="shop-link"
                    href="https://blandrew575-shop.fourthwall.com/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Merch Store
                </a>

            </div>
        </div>
    );
}

export default NavBar;