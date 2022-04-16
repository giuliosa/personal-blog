export default function HomePage() {
    return (
        <section className="bg-texture-01 bg-cover bg-center h-screen w-screen flex justify-between">
            <div className="text-right p-7 w-1/2 flex flex-col justify-center items-right">
                <h2 className="font-extrabold text-6xl text-primary-50 uppercase">Front End Developer</h2>
                <a
                    className="bg-secondary-500 hover:bg-secondary-600 font-bold w-fit text-primary-50 px-9 py-3 self-end mt-4"
                    href="https://github.com/giuliosa/"
                    target="_blank">Github</a>
            </div>
            <img src="/images/team-info-page-player-photo-04.png" className="h-screen" />
            <div className="text-left p-7 w-1/2 flex flex-col justify-center items-left">
                <h2 className="font-extrabold text-6xl text-primary-50 uppercase">Indie game Artist</h2>
                <a
                    className="bg-secondary-500 hover:bg-secondary-600 font-bold w-fit text-primary-50 px-9 py-3 mt-4"
                    href="https://www.artstation.com/giulios"
                    target="_blank">Artstation</a>
            </div>
        </section>
    )
}