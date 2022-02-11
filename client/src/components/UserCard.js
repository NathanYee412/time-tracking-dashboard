export default function UserCard(props) {

    return(
        <div className="md:relative bg-card h-full rounded-xl">
            <div className="md:absolute bg-profile h-3/4 w-full rounded-xl">
                <div className="pl-7 pt-7">
                    <img className="h-[100px] w-[100px] rounded-full border-4 border-white" src={props.imgSrc} alt="profile" />
                </div>
                <p className="pl-10 pt-10 text-lg text-slate-300 font-light">Report For</p>
                <h1 className="pl-10 text-6xl pt-3 text-white">{props.name}</h1>
            </div>
            <p className="absolute text-substat bottom-0">Daily</p>
            <p className="absolute text-substat bottom-10">Daily</p>
            <p className="absolute text-substat bottom-5">Daily</p>
        </div>
    );
}