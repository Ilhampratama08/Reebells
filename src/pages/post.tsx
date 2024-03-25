import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar/navbar"

const homepage = () => {
    return (
        <>
        <header>
        <Navbar />
        </header>
        <main className="mx-[32rem] mt-[4rem]">
            <h1>anday</h1>
        </main>
        </>
    );
};

export default homepage;