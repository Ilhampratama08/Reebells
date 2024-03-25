import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar/navbar"

const homepage = () => {
    return(
        <>
        <header>
            <Navbar />
        </header>
        <main className="mx-[32rem]">
            <div className=" items-center mt-[4rem]">
                <div className="flex justify-between mt-[1rem] items-center">
                    <div className="mt-4 h-[0.5px] bg-black"></div>
                </div>
            </div>
            
            <div className=" mt-2 items-center">
                <div className="flex items-center">
                   <Image className="w-[4rem] h-[4rem] ms-[-1rem] rounded-full" src="/pp.jpg" width={40} height={40}> 
                   </Image>
                   <p className="ms-3 h-[4rem]"><b>Darwin</b></p>
                   <p className="ms-[-3rem] h-[1rem]">Liked your post</p>
                </div>
            </div>

            <div className="mt-4 h-[0.5px] bg-black"></div>
            <div className=" mt-2 items-center">
                <div className="flex items-center">
                   <Image className="w-[4.5rem] h-[4rem] ms-[-1rem] rounded-full" src="/adul.jpg" height={80} width={80}> 
                   </Image>
                   <p className="ms-3 h-[4rem]"><b>Darmian</b></p>
                   <p className="ms-[-4rem] h-[1rem]">Started following you</p>
                   <button className="h-8 w-[7rem] ms-[12rem] mt-2 text-[#fff] rounded-lg bg-[#397692]">Follow back</button>
                </div>
            </div>

            <div className="mt-4 h-[0.5px] bg-black"></div>
            <div className=" mt-2 items-center">
                <div className="flex items-center">
                   <Image className="w-[4rem] h-[4rem] ms-[-1rem] opacity rounded-full" src="/prel.jpg" width={80} height={80}> 
                   </Image>
                   <p className="ms-3 h-[4rem]"><b>Wilson</b></p>
                   <p className="ms-[-3rem] h-[1rem]">Started following you</p>
                   <button className="h-8 w-[7rem] ms-[12rem] mt-2 text-[#fff] rounded-lg bg-[#397692]">Follow back</button>
                </div>
            </div>

            <div className="mt-4 h-[0.5px] bg-black"></div>
            <div className=" mt-2 items-center">
                <div className="flex items-center">
                   <Image className="w-[4rem] h-[4rem] ms-[-1rem] rounded-full" src="/ern.jpg" width={80} height={80}> 
                   </Image>
                   <p className="ms-3 h-[4rem]"><b>Erwin</b></p>
                   <p className="ms-[-2rem] h-[1rem]">Started following you</p>
                   <button className="h-8 w-[7rem] ms-[12rem] mt-2 text-[#fff] rounded-lg bg-[#397692]">Follow back</button>
                </div>
            </div>

            <div className="mt-4 h-[0.5px] bg-black"></div>
            <div className=" mt-2 items-center">
                <div className="flex items-center">
                   <Image className="w-[4rem] h-[4rem] ms-[-1rem] rounded-full" src="/jrt.jpg" width={80} height={80}>
                   </Image>
                   <p className="ms-3 h-[4rem]"><b>Jarot</b></p>
                   <p className="ms-[-2rem] h-[1rem]">Started following you</p>
                   <button className="h-8 w-[7rem] ms-[12rem] mt-2 text-[#fff] rounded-lg bg-[#397692]">Follow back</button>
                </div>
            </div>

            <div className="mt-4 h-[0.5px] bg-black"></div>
            <div className=" mt-2 items-center">
                <div className="flex items-center">
                   <Image className="w-[4rem] h-[4rem] ms-[-1rem] rounded-full" src="/kepin.jpg" width={80} height={80}>
                   </Image>
                   <p className="ms-3 h-[4rem]"><b>Kevin</b></p>
                   <p className="ms-[-2rem] h-[1rem]">Started following you</p>
                   <button className="h-8 w-[7rem] ms-[12rem] mt-2 text-[#fff] rounded-lg bg-[#397692]">Follow back</button>
                </div>
            </div>

            <div className="mt-4 h-[0.5px] bg-black"></div>
            <div className=" mt-2 items-center">
                <div className="flex items-center">
                   <Image className="w-[4rem] h-[4rem] ms-[-1rem] rounded-full" src="/edg.jpg" width={80} height={80}>
                   </Image>
                   <p className="ms-3 h-[4rem]"><b>Edgar</b></p>
                   <p className="ms-[-2rem] h-[1rem]">Started following you</p>
                   <button className="h-8 w-[7rem] ms-[12rem] mt-2 text-[#fff] rounded-lg bg-[#397692]">Follow back</button>
                </div>
            </div>

            <div className="mt-4 h-[0.5px] bg-black"></div>
            <div className=" mt-2 items-center">
                <div className="flex items-center">
                   <Image className="w-[4rem] h-[4rem] ms-[-1rem] rounded-full" src="/erk.jpg" width={80} height={80}>
                   </Image>
                   <p className="ms-3 h-[4rem]"><b>Erika</b></p>
                   <p className="ms-[-2rem] h-[1rem]">Liked your post</p>
                </div>
            </div>
        </main>
        </>
    );
};

export default homepage;