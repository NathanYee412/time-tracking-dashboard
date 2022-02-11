import playLogo from '../content/icons/icon-play.svg';

export default function Play(props) {
    return(
        <div>
            <div className="md:relative bg-play rounded-xl h-full">
                <img className="float-right z-10" src={playLogo} alt="Play" />
                <div className="md:absolute bg-card hover:bg-cardhover rounded-xl h-[77%] md:inset-x-0 md:bottom-0">
                    <div className="columns-2 px-10 py-5">
                        <h1 className="font-light text-white text-2xl">Play</h1>
                        <h1 className="font-light text-white text-2xl float-right">...</h1>
                    </div>
                    <div>
                        <h1 className="px-8 text-white font- text-6xl">{props.hours}hrs</h1>
                    </div>
                    <p className="px-10 pt-2 text-substat">Last Week: {props.lastWeek}hrs</p>
                </div>
            </div>
        </div>
    );
}