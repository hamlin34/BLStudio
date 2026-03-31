import "../styles/Home.css";

function Home() {
  const host = window.location.hostname;

  return (
    <div className="home">

      <div className="hero-section">

        <div className="hero-left">
          <img
            src="/images/logo.png"
            alt="BL Studio Logo"
            className="hero-logo"
          />
        </div>

        <div className="hero-right">

          <p className="hero-label">BL Studio</p>

          <h1>BLAndrew575</h1>

          <p className="hero-text">
            Welcome to my channel! I live by the phrase,
            "If its worth doing, its worth overdoing."
          </p>

          <p className="hero-text-small">
            No matter what we play or build, it must absolutely go all out and over the top!
          </p>

          <div className="hero-buttons">

            <a
              className="gold-btn-link"
              href="https://www.twitch.tv/blandrew575"
              target="_blank"
              rel="noreferrer"
            >
              Watch Live
            </a>

            <a
              className="gold-btn-link"
              href="https://discord.com/invite/eqxzf6FsNC"
              target="_blank"
              rel="noreferrer"
            >
              Join Community
            </a>

          </div>

        </div>

      </div>

      <div className="gold-line"></div>

      <div className="live-stream-section">

        <div className="section-header">

          <h2>Live Stream</h2>

          <p className="section-text">
            Watch BLAndrew575 live on Twitch.
          </p>

        </div>

        <div className="stream-box">

          <iframe
            src={"https://player.twitch.tv/?channel=blandrew575&parent=" + host}
            height="420"
            width="100%"
            allowFullScreen
            title="BLAndrew575 Twitch Stream"
          ></iframe>

        </div>

      </div>

      <div className="gold-line"></div>

      <div className="studio-goods">

        <div className="studio-goods-left">

          <p className="section-label">Store</p>

          <h2>Studio Goods</h2>

          <p className="section-text goods-text">
            Limited-run items produced to support the studio and its community.
          </p>

          <a
            className="gold-btn-link"
            href="https://blandrew575-shop.fourthwall.com/"
            target="_blank"
            rel="noreferrer"
          >
            Visit the Shop →
          </a>

        </div>

        <div className="studio-goods-right">

          <img
            src="/images/Merch.png"
            alt="BL Studio Merchandise"
            className="merch-img"
          />

        </div>

      </div>

      <div className="gold-line"></div>

      <div className="partnerships-section">

        <div className="section-header">

          <h2>Partnerships</h2>

          <p className="section-text">
            Brands and partners that help support the BL Studio community.
          </p>

        </div>

        <div className="partner-grid">

          <a
            className="partner-card"
            href="https://rogueenergy.com/?ref=BLAndrew575"
            target="_blank"
            rel="noreferrer"
          >
            <div className="partner-img-wrap">
              <img
                src="/images/Rogue.png"
                alt="Rogue Energy"
                className="partner-img"
              />
            </div>

            <div className="partner-content">
              <h3>Rogue Energy</h3>

              <p className="partner-text">
                We have partnered with Rogue Energy! The ultimate beverage line
                tailored for gamers! Whether you're powering up, staying hydrated,
                or winding down, Rogue Energy has you covered with Energy,
                Hydration, and Chill.
              </p>

              <p className="partner-text">
                Ready to elevate your game? Click the photo to check out all the
                amazing flavors available and get 20% off your order when you use
                code <strong>BLAndrew575</strong> at checkout!
              </p>
            </div>
          </a>

          <a
            className="partner-card"
            href="https://tacticalnerd.store/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="partner-img-wrap">
              <img
                src="/images/TacticalNerd.jpg"
                alt="Tactical Nerd"
                className="partner-img"
              />
            </div>

            <div className="partner-content">
              <h3>Tactical Nerd</h3>

              <p className="partner-text">
                Now partnered with a great friend of mine who makes tactical nerd gear!
                I served with this person from 2012-2021 and it is such an honor to
                partner up!
              </p>

              <p className="partner-text">
                Thanks again sir!
              </p>
            </div>
          </a>

        </div>

      </div>

    </div>
  );
}

export default Home;