import "../styles/Videos.css";

function Videos() {
    const host = window.location.hostname;

    const clips = [
        {
            id: 1,
            src: "https://clips.twitch.tv/embed?clip=CreativeWrongMarrowPeteZaroll-D8lbQ-7CpgmIGvrW&parent=" + host +"&autoplay=false",
            title: "Hey Andrew! There's one behind you!",
            date: "April 14, 2026",
            link: "https://www.twitch.tv/blandrew575/clip/CreativeWrongMarrowPeteZaroll-D8lbQ-7CpgmIGvrW"
        },
        {
            id: 2,
            src: "https://clips.twitch.tv/embed?clip=KitschyResilientPoxFUNgineer-1_QfDK2I6vmglWe9&parent=" + host +"&autoplay=false",
            title: "The Pooper",
            date: "April 12, 2026",
            link: "https://www.twitch.tv/blandrew575/clip/KitschyResilientPoxFUNgineer-1_QfDK2I6vmglWe9"
        },
        {
            id: 3,
            src: "https://clips.twitch.tv/embed?clip=BrightBetterAlfalfaFUNgineer-JnB8W_2hKy6dQYmK&parent=" + host +"&autoplay=false",
            title: "Startup Parameter",
            date: "April 12, 2026",
            link: "https://www.twitch.tv/blandrew575/clip/BrightBetterAlfalfaFUNgineer-JnB8W_2hKy6dQYmK"
        }
    ];

    const fullStreams = [
        {
            id: 4,
            src: "https://player.twitch.tv/?video=2749732342&parent=" + host +"&autoplay=false",
            title: "StarRupture New Update",
            date: "April 16, 2026",
            link: "https://www.twitch.tv/videos/2749732342"
        },
        {
            id: 5,
            src: "https://player.twitch.tv/?video=2748154765&parent=" + host +"&autoplay=false",
            title: "StarRupture Update 1",
            date: "April 14, 2026",
            link: "https://www.twitch.tv/videos/2748154765"
        },
        {
            id: 6,
            src: "https://player.twitch.tv/?video=2746378251&parent=" + host +"&autoplay=false",
            title: "StarRupture Update 2",
            date: "April 12, 2026",
            link: "https://www.twitch.tv/videos/2746378251"
        }
    ];

    return (
        <div className="videos-page">

            <div className="page-header">
                <h1>Videos</h1>
                <p className="page-text">
                    Watch clips and full streams from BLAndrew575.
                </p>
            </div>

            <div className="gold-line"></div>

            <h2 className="video-section-title">Featured Clips</h2>

            <div className="video-grid">
                {clips.map(function(video) {
                    return (
                        <div className="video-card" key={video.id}>

                            <div className="video-wrapper">
                                <iframe
                                    src={video.src}
                                    title={video.title}
                                    height="315"
                                    width="100%"
                                    allowFullScreen
                                ></iframe>
                            </div>

                            <div className="video-title-row">
                                <h3 className="video-title">{video.title}</h3>
                                <span className="video-date">{video.date}</span>
                            </div>

                            <div className="video-button-row">
                                <a
                                    className="gold-btn-link"
                                    href={video.link}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Watch More
                                </a>
                            </div>

                        </div>
                    );
                })}
            </div>

            <h2 className="video-section-title">Full Streams</h2>

            <div className="video-grid">
                {fullStreams.map(function(video) {
                    return (
                        <div className="video-card" key={video.id}>

                            <div className="video-wrapper">
                                <iframe
                                    src={video.src}
                                    title={video.title}
                                    height="315"
                                    width="100%"
                                    allowFullScreen
                                ></iframe>
                            </div>

                            <div className="video-title-row">
                                <h3 className="video-title">{video.title}</h3>
                                <span className="video-date">{video.date}</span>
                            </div>

                            <div className="video-button-row">
                                <a
                                    className="gold-btn-link"
                                    href={video.link}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Watch More
                                </a>
                            </div>

                        </div>
                    );
                })}
            </div>

        </div>
    );
}

export default Videos;