export default function UserCard(props) {

    return(
        <div className="bg-profile h-full rounded-xl">
            <img className="h-[100px] w-[100px] rounded-full border-4 border-white" src={props.imgSrc} alt="profile" />
            <p className="text-sm text-slate-300 font-light">Report For</p>
            <h1 className="text-[18px] text-white">{props.name}</h1>
        </div>
    );
}