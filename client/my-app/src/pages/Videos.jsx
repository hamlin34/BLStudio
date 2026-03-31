import "../styles/Videos.css";

function Videos() {
    const host = window.location.hostname;

    const clips = [
        {
            id: 1,
            src: "https://clips.twitch.tv/embed?clip=AstuteGentleTroutTakeNRG-3QfQz1MMuZT9cWfI&parent=" + host,
            title: "Stop Eating My Nuts!",
            date: "May 12, 2026"
        },
        {
            id: 2,
            src: "https://clips.twitch.tv/embed?clip=DaintySourWrenchPogChamp-qdcS_5DdnNxSCTiU&parent=" + host,
            title: "Dainty Sour Wrench Clip",
            date: "May 5, 2026"
        }
    ];

    const fullStreams = [
        {
            id: 3,
            src: "https://player.twitch.tv/?video=v2714738050&parent=" + host,
            title: "Full Stream Replay",
            date: "May 2, 2026"
        },
        {
            id: 4,
            src: "https://player.twitch.tv/?video=v2713040549&parent=" + host,
            title: "Satisfactory Stream Replay",
            date: "April 28, 2026"
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
                        </div>
                    );
                })}
            </div>

        </div>
    );
}

export default Videos;