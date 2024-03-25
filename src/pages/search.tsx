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
                   <div className="w-[4rem] h-[4rem] bg-[#D9D9D9] ms-[-1rem] opacity rounded-full items-center justify-center flex"><svg xmlns="http://www.w3.org/2000/svg" width="5em" height="3em" viewBox="0 0 16 16"><g fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"><circle cx="8" cy="6" r="3.25"/>
          <path d="M2.75 14.25c0-2.5 2-5 5.25-5s5.25 2.5 5.25 5"/></g></svg> 
                   </div>
                   <p className="ms-3 h-[4rem]"><b>bot1</b></p>
                   <p className="ms-[-2rem] h-[1rem]">Prototype</p>
                   <button className="h-8 w-[7rem] ms-[15rem] mt-2 text-[#fff] rounded-lg bg-[#397692]">Follow</button>
                </div>
            </div>

            <div className="mt-2 h-[0.5px] bg-black"></div>
            <div className=" mt-2 items-center">
                <div className="flex items-center">
                   <div className="w-[4rem] h-[4rem] bg-[#D9D9D9] ms-[-1rem] opacity rounded-full items-center justify-center flex"><svg xmlns="http://www.w3.org/2000/svg" width="5em" height="3em" viewBox="0 0 16 16"><g fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"><circle cx="8" cy="6" r="3.25"/>
          <path d="M2.75 14.25c0-2.5 2-5 5.25-5s5.25 2.5 5.25 5"/></g></svg> 
                   </div>
                   <p className="ms-3 h-[4rem]"><b>bot2</b></p>
                   <p className="ms-[-2rem] h-[1rem]">Prototype</p>
                   <button className="h-8 w-[7rem] ms-[15rem] mt-2 text-[#fff] rounded-lg bg-[#397692]">Follow</button>
                </div>
            </div>

            <div className="mt-2 h-[1px] bg-black"></div>
            <div className=" mt-2 items-center">
                <div className="flex items-center">
                   <div className="w-[4rem] h-[4rem] bg-[#D9D9D9] ms-[-1rem] opacity rounded-full items-center justify-center flex"><svg xmlns="http://www.w3.org/2000/svg" width="5em" height="3em" viewBox="0 0 16 16"><g fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"><circle cx="8" cy="6" r="3.25"/>
          <path d="M2.75 14.25c0-2.5 2-5 5.25-5s5.25 2.5 5.25 5"/></g></svg> 
                   </div>
                   <p className="ms-3 h-[4rem]"><b>bot3</b></p>
                   <p className="ms-[-2rem] h-[1rem]">Prototype</p>
                   <button className="h-8 w-[7rem] ms-[15rem] mt-2 text-[#fff] rounded-lg bg-[#397692]">Follow</button>
                </div>
            </div>

            <div className="mt-2 h-[1px] bg-black"></div>
            <div className=" mt-2 items-center">
                <div className="flex items-center">
                   <div className="w-[4rem] h-[4rem] bg-[#D9D9D9] ms-[-1rem] opacity rounded-full items-center justify-center flex"><svg xmlns="http://www.w3.org/2000/svg" width="5em" height="3em" viewBox="0 0 16 16"><g fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"><circle cx="8" cy="6" r="3.25"/>
          <path d="M2.75 14.25c0-2.5 2-5 5.25-5s5.25 2.5 5.25 5"/></g></svg> 
                   </div>
                   <p className="ms-3 h-[4rem]"><b>bot4</b></p>
                   <p className="ms-[-2rem] h-[1rem]">Prototype</p>
                   <button className="h-8 w-[7rem] ms-[15rem] mt-2 text-[#fff] rounded-lg bg-[#397692]">Follow</button>
                </div>
            </div>

            <div className="mt-2 h-[0.5px] bg-black"></div>
            <div className=" mt-2 items-center">
                <div className="flex items-center">
                   <div className="w-[4rem] h-[4rem] bg-[#D9D9D9] ms-[-1rem] opacity rounded-full items-center justify-center flex"><svg xmlns="http://www.w3.org/2000/svg" width="5em" height="3em" viewBox="0 0 16 16"><g fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"><circle cx="8" cy="6" r="3.25"/>
          <path d="M2.75 14.25c0-2.5 2-5 5.25-5s5.25 2.5 5.25 5"/></g></svg> 
                   </div>
                   <p className="ms-3 h-[4rem]"><b>bot5</b></p>
                   <p className="ms-[-2rem] h-[1rem]">Prototype</p>
                   <button className="h-8 w-[7rem] ms-[15rem] mt-2 text-[#fff] rounded-lg bg-[#397692]">Follow</button>
                </div>
            </div>

            <div className="mt-2 h-[1px] bg-black"></div>
            <div className=" mt-2 items-center">
                <div className="flex items-center">
                   <div className="w-[4rem] h-[4rem] bg-[#D9D9D9] ms-[-1rem] opacity rounded-full items-center justify-center flex"><svg xmlns="http://www.w3.org/2000/svg" width="5em" height="3em" viewBox="0 0 16 16"><g fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"><circle cx="8" cy="6" r="3.25"/>
          <path d="M2.75 14.25c0-2.5 2-5 5.25-5s5.25 2.5 5.25 5"/></g></svg> 
                   </div>
                   <p className="ms-3 h-[4rem]"><b>bot6</b></p>
                   <p className="ms-[-2rem] h-[1rem]">Prototype</p>
                   <button className="h-8 w-[7rem] ms-[15rem] mt-2 text-[#fff] rounded-lg bg-[#397692]">Follow</button>
                </div>
            </div>

            <div className="mt-2 h-[0.5px] bg-black"></div>
            <div className=" mt-2 items-center">
                <div className="flex items-center">
                   <div className="w-[4rem] h-[4rem] bg-[#D9D9D9] ms-[-1rem] opacity rounded-full items-center justify-center flex"><svg xmlns="http://www.w3.org/2000/svg" width="5em" height="3em" viewBox="0 0 16 16"><g fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"><circle cx="8" cy="6" r="3.25"/>
          <path d="M2.75 14.25c0-2.5 2-5 5.25-5s5.25 2.5 5.25 5"/></g></svg> 
                   </div>
                   <p className="ms-3 h-[4rem]"><b>bot7</b></p>
                   <p className="ms-[-2rem] h-[1rem]">Prototype</p>
                   <button className="h-8 w-[7rem] ms-[15rem] mt-2 text-[#fff] rounded-lg bg-[#397692]">Follow</button>
                </div>
            </div>

            <div className="mt-2 h-[1px] bg-black"></div>
            <div className=" mt-2 items-center">
                <div className="flex items-center">
                   <div className="w-[4rem] h-[4rem] bg-[#D9D9D9] ms-[-1rem] opacity rounded-full items-center justify-center flex"><svg xmlns="http://www.w3.org/2000/svg" width="5em" height="3em" viewBox="0 0 16 16"><g fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"><circle cx="8" cy="6" r="3.25"/>
          <path d="M2.75 14.25c0-2.5 2-5 5.25-5s5.25 2.5 5.25 5"/></g></svg> 
                   </div>
                   <p className="ms-3 h-[4rem]"><b>bot8</b></p>
                   <p className="ms-[-2rem] h-[1rem]">Prototype</p>
                   <button className="h-8 w-[7rem] ms-[15rem] mt-2 text-[#fff] rounded-lg bg-[#397692]">Follow</button>
                </div>
            </div>

            <div className="mt-2 h-[1px] bg-black"></div>
            <div className=" mt-2 items-center">
                <div className="flex items-center">
                   <div className="w-[4rem] h-[4rem] bg-[#D9D9D9] ms-[-1rem] opacity rounded-full items-center justify-center flex"><svg xmlns="http://www.w3.org/2000/svg" width="5em" height="3em" viewBox="0 0 16 16"><g fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"><circle cx="8" cy="6" r="3.25"/>
          <path d="M2.75 14.25c0-2.5 2-5 5.25-5s5.25 2.5 5.25 5"/></g></svg> 
                   </div>
                   <p className="ms-3 h-[4rem]"><b>bot9</b></p>
                   <p className="ms-[-2rem] h-[1rem]">Prototype</p>
                   <button className="h-8 w-[7rem] ms-[15rem] mt-2 text-[#fff] rounded-lg bg-[#397692]">Follow</button>
                </div>
            </div>

            <div className="mt-2 h-[0.5px] bg-black"></div>
            <div className=" mt-2 items-center">
                <div className="flex items-center">
                   <div className="w-[4rem] h-[4rem] bg-[#D9D9D9] ms-[-1rem] opacity rounded-full items-center justify-center flex"><svg xmlns="http://www.w3.org/2000/svg" width="5em" height="3em" viewBox="0 0 16 16"><g fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"><circle cx="8" cy="6" r="3.25"/>
          <path d="M2.75 14.25c0-2.5 2-5 5.25-5s5.25 2.5 5.25 5"/></g></svg> 
                   </div>
                   <p className="ms-3 h-[4rem]"><b>bot10</b></p>
                   <p className="ms-[-2rem] h-[1rem]">Prototype</p>
                   <button className="h-8 w-[7rem] ms-[15rem] mt-2 text-[#fff] rounded-lg bg-[#397692]">Follow</button>
                </div>
            </div>
        </main>
        </>
    );
};

export default homepage;