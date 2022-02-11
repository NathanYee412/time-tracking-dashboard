import workLogo from '../content/icons/icon-work.svg';

export default function Work(props) {
    return(
        <div className="bg-work rounded-xl">
            <img className="float-right z-10" src={workLogo} alt="work" />
            <div className="bg-card hover:bg-cardhover rounded-xl p-0 h-full z-20">
                <div className="columns-2">
                    <h2 className="font-semibold text-white">Work</h2>
                    <h2 className="font-semibold text-white float-right">...</h2>
                </div>
            </div>
        </div>
    );
}