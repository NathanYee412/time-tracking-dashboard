export default function UserCard(props) {

    return(
        <div className="bg-profile">
            <img className="h-[100px] w-[100px] rounded-full border-4 border-white" src={props.imgSrc} alt="profile picture" />
            <p className="text-sm text-slate-300 font-light">Report For</p>
            <h1 className="text-[18px] text-white">{props.name}</h1>
        </div>
    );
}