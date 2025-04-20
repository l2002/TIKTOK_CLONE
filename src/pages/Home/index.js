import videos from '~/assets/videos';
function Home() {
    return (
        <div>
            <h2>Home</h2>
            <video src={videos.noVideo} autoPlay muted loop playsInline controls></video>
        </div>
    );
}

export default Home;
