import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar/navbar"

const homepage = () => {
    return (
        <>
        <header>
        <Navbar />
        </header>
        <main className="mx-[32rem]">
            <div className="flex justify-between mt-[4rem] items-center">
                <div className="flex items-center">
                <input className="ms-[-0.7rem] h-[3.5rem] w-[31rem] mt-5 focus:outline-none" style={{border: '3px solid #ccc',padding: '8px', borderRadius: '5px'}} placeholder="Search"  />
                </div>
            </div>


            <div className=" mt-5 items-center">
                <div className="flex items-center">
                   <Image className="w-[4rem] h-[4rem] ms-[-1rem] rounded-full" alt="wow" src="/erk.jpg" width={80} height={80}> 
                   </Image>
                   <p className="ms-3 h-[4rem] w-[2rem]"><b>Erika</b></p>
                   <p className="ms-[-2rem] h-[1rem]">Prototype</p>
                   <button className="h-8 w-[7rem] ms-[15rem] mt-2 text-[#fff] rounded-lg bg-[#397692]">Follow</button>
                </div>
            </div>

            <div className="mt-2 h-[0.5px] bg-black"></div>
            <div className=" mt-2 items-center">
                <div className="flex items-center">
                   <Image className="w-[4rem] h-[4rem] ms-[-1rem] rounded-full" alt="wow" src="/edg.jpg" width={80} height={80}> 
                   </Image>
                   <p className="ms-3 h-[4rem] w-[2rem]"><b>Edgar</b></p>
                   <p className="ms-[-2rem] h-[1rem]">Prototype</p>
                   <button className="h-8 w-[7rem] ms-[15rem] mt-2 text-[#fff] rounded-lg bg-[#397692]">Follow</button>
                </div>
            </div>

            <div className="mt-2 h-[1px] bg-black"></div>
            <div className=" mt-2 items-center">
                <div className="flex items-center">
                   <Image className="w-[4rem] h-[4rem] ms-[-1rem] rounded-full" alt="wow" src="/kepin.jpg" width={80} height={80}> 
                   </Image>
                   <p className="ms-3 h-[4rem] w-[2rem]"><b>Kevin</b></p>
                   <p className="ms-[-2rem] h-[1rem]">Prototype</p>
                   <button className="h-8 w-[7rem] ms-[15rem] mt-2 text-[#fff] rounded-lg bg-[#397692]">Follow</button>
                </div>
            </div>

            <div className="mt-2 h-[1px] bg-black"></div>
            <div className=" mt-2 items-center">
                <div className="flex items-center">
                   <Image className="w-[4rem] h-[4rem] ms-[-1rem] rounded-full" alt="wow" src="/jrt.jpg" width={80} height={80}> 
                   </Image>
                   <p className="ms-3 h-[4rem] w-[2rem]"><b>Jarot</b></p>
                   <p className="ms-[-2rem] h-[1rem]">Prototype</p>
                   <button className="h-8 w-[7rem] ms-[15rem] mt-2 text-[#fff] rounded-lg bg-[#397692]">Follow</button>
                </div>
            </div>

            <div className="mt-2 h-[0.5px] bg-black"></div>
            <div className=" mt-2 items-center">
                <div className="flex items-center">
                   <Image className="w-[4rem] h-[4rem] ms-[-1rem] rounded-full" alt="wow" src="/ern.jpg" width={80} height={80}> 
                   </Image>
                   <p className="ms-3 h-[4rem] w-[2rem]"><b>Erwin</b></p>
                   <p className="ms-[-2rem] h-[1rem]">Prototype</p>
                   <button className="h-8 w-[7rem] ms-[15rem] mt-2 text-[#fff] rounded-lg bg-[#397692]">Follow</button>
                </div>
            </div>

            <div className="mt-2 h-[1px] bg-black"></div>
            <div className=" mt-2 items-center">
                <div className="flex items-center">
                   <Image className="w-[4rem] h-[4rem] ms-[-1rem] rounded-full" alt="wow" src="/prel.jpg" width={80} height={80}> 
                   </Image>
                   <p className="ms-3 h-[4rem] w-[2rem]"><b>Wilson</b></p>
                   <p className="ms-[-2rem] h-[1rem]">Prototype</p>
                   <button className="h-8 w-[7rem] ms-[15rem] mt-2 text-[#fff] rounded-lg bg-[#397692]">Follow</button>
                </div>
            </div>

            <div className="mt-2 h-[0.5px] bg-black"></div>
            <div className=" mt-2 items-center">
                <div className="flex items-center">
                   <Image className="w-[4rem] h-[4rem] ms-[-1rem] rounded-full" alt="wow" src="/adul.jpg" width={80} height={80}> 
                   </Image>
                   <p className="ms-3 h-[4rem] w-[2rem]"><b>Darmian</b></p>
                   <p className="ms-[-2rem] h-[1rem]">Prototype</p>
                   <button className="h-8 w-[7rem] ms-[15rem] mt-2 text-[#fff] rounded-lg bg-[#397692]">Follow</button>
                </div>
            </div>

            <div className="mt-2 h-[1px] bg-black"></div>
            <div className=" mt-2 items-center">
                <div className="flex items-center">
                   <Image className="w-[4rem] h-[4rem] ms-[-1rem] rounded-full" alt="wow" src="/pp.jpg" width={80} height={80}> 
                   </Image>
                   <p className="ms-3 h-[4rem] w-[2rem]"><b>Darwin</b></p>
                   <p className="ms-[-2rem] h-[1rem]">Prototype</p>
                   <button className="h-8 w-[7rem] ms-[15rem] mt-2 text-[#fff] rounded-lg bg-[#397692]">Follow</button>
                </div>
            </div>

            <div className="mt-2 h-[1px] bg-black"></div>
            <div className=" mt-2 items-center">
                <div className="flex items-center">
                   <Image className="w-[4rem] h-[4rem] ms-[-1rem] rounded-full" alt="wow" src="/ris.jpg" width={80} height={80}> 
                   </Image>
                   <p className="ms-3 h-[4rem] w-[2rem]"><b>Risna</b></p>
                   <p className="ms-[-2rem] h-[1rem]">Prototype</p>
                   <button className="h-8 w-[7rem] ms-[15rem] mt-2 text-[#fff] rounded-lg bg-[#397692]">Follow</button>
                </div>
            </div>

            <div className="mt-2 h-[0.5px] bg-black"></div>
            <div className=" mt-2 items-center">
                <div className="flex items-center">
                   <Image className="w-[4rem] h-[4rem] ms-[-1rem] rounded-full" alt="wow" src="/gin.jpg" width={80} height={80}> 
                   </Image>
                   <p className="ms-3 h-[4rem] w-[2rem]"><b>Gina</b></p>
                   <p className="ms-[-2rem] h-[1rem]">Prototype</p>
                   <button className="h-8 w-[7rem] ms-[15rem] mt-2 text-[#fff] rounded-lg bg-[#397692]">Follow</button>
                </div>
            </div>
        </main>
        </>
    );
};

export default homepage;