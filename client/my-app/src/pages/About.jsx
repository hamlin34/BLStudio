import "../styles/About.css";

function About() {
    return (
        <div className="about-page">

            <div className="about-header">
                <h1>About BLAndrew575</h1>

                <p className="about-subtitle">
                    6.4K followers
                </p>
            </div>

            <div className="page-divider">
                <span className="divider-mark"></span>
            </div>

            <div className="bio-card">

                <img
                    src="/images/bio.png"
                    alt="BLAndrew575"
                    className="bio-image"
                />

                <div className="bio-text">

                    <h2>Streamer Bio</h2>

                    <p>
                        BLAndrew575 is a Twitch streamer known for building massive
                        projects, pushing games to their limits, and creating
                        over-the-top interactive moments with the community.
                    </p>

                    <p>
                        His motto is simple:
                        <br />
                        <strong>"If it’s worth doing, it’s worth overdoing."</strong>
                    </p>

                    <p>
                        From huge Satisfactory builds to hilarious community-driven
                        chaos, every stream is about going bigger, having fun,
                        and making every moment memorable.
                    </p>

                </div>

            </div>

            <div className="page-divider">
                <span className="divider-mark"></span>
            </div>

            <div className="about-grid">

                <div className="about-box">
                    <h2>Channel Overview</h2>
                    <p>
                        Welcome to the channel. BLAndrew575 lives by the phrase,
                        "If it’s worth doing, it’s worth overdoing." No matter what
                        is being played or built, the goal is to go all out and
                        make it bigger, louder, and more memorable.
                    </p>
                </div>

                <div className="about-box">
                    <h2>Business Inquiries</h2>
                    <p>
                        BLAndrew575@gmail.com
                    </p>
                </div>

                <div className="about-box">
                    <h2>Content Focus</h2>
                    <p>
                        The channel features gaming, over-the-top interactive stream
                        moments, community engagement, and Satisfactory content.
                    </p>
                </div>

            </div>

            <div className="page-divider">
                <span className="divider-mark"></span>
            </div>

            <div className="about-grid">

                <div className="about-box">
                    <h2>Stream PC</h2>

                    <ul className="about-list">
                        <li>Intel i9-12900KS</li>
                        <li>RTX 3080 Ti</li>
                        <li>64GB Corsair RAM</li>
                        <li>12TB M.2 NVMe</li>
                    </ul>
                </div>

                <div className="about-box">
                    <h2>Gaming PC</h2>

                    <ul className="about-list">
                        <li>AMD Ryzen 9 9950X</li>
                        <li>RTX 5090</li>
                        <li>128GB Crucial RAM</li>
                        <li>16TB HDD</li>
                        <li>12TB M.2 NVMe</li>
                    </ul>
                </div>

                <div className="about-box">
                    <h2>Other Equipment</h2>

                    <ul className="about-list">
                        <li>Canon EOS RP Camera</li>
                        <li>Shure SM7B Mic</li>
                        <li>Stream Deck +</li>
                        <li>2x XL Stream Deck</li>
                    </ul>
                </div>

            </div>

        </div>
    );
}

export default About;