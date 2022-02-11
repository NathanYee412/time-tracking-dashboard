import UserCard from "../components/UserCard";
import Footer from "../components/Footer";
import Work from "../components/Work";
import Play from "../components/Play";
import Study from "../components/Study";
import Exercise from "../components/Exercise";
import Social from "../components/Social";
import SelfCare from "../components/SelfCare";


export default function Home() {
    return(
        <>
            <div className="md:grid grid-rows-2 grid-flow-col gap-6 mx-auto py-10 h-[38rem] max-w-7xl">
                <div className="md:row-span-2">
                    <UserCard name="Nathan Yee" imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvCdyi-jV5u0bVQC1BIH0LAH2wJT_p56qUNQ&usqp=CAU" />
                </div>
                <Work hours="10" lastWeek="9"/>
                <Exercise hours="10" lastWeek="9"/>
                <Play hours="10" lastWeek="9"/>
                <Social hours="10" lastWeek="9"/>
                <Study hours="10" lastWeek="9"/>
                <SelfCare hours="10" lastWeek="9"/>
            </div>
            <Footer />
        </>
    );
}