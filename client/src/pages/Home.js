import UserCard from "../components/UserCard";
import Footer from "../components/Footer";
import Work from "../components/Work";

export default function Home() {
    return(
        <>
            <div className="md:grid grid-rows-2 grid-flow-col gap-4 px-5 py-5 h-96">
                <div className="md:row-span-2">
                    <UserCard name="Nathan Yee" imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvCdyi-jV5u0bVQC1BIH0LAH2wJT_p56qUNQ&usqp=CAU" />
                </div>
                <Work />
                <Work />
                <Work />
                <Work />
                <Work />
                <Work />
            </div>
            <Footer />
        </>
    );
}