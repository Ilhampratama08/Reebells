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
        <div className="flex justify-between mt-[4rem] items-center">
          <div className="flex items-center mt-[1rem]">
            <Image className="ms-[-1rem] w-[4.5rem] h-[4.5rem] rounded-full" alt="wow" src="/wow.jpg" width={80} height={80}></Image>
            <p className="ms-3 h-[4rem] "><b>Kashim</b></p>
            <input className="ms-[-2rem] w-[22rem] focus:outline-none" placeholder="Add Text" />
          </div>
          <button className="h-8 w-[5rem] mt-6 text-[#fff] rounded-lg bg-[#397692]">Post</button>
        </div>
        <div className="mt-2 h-[0.5px] bg-black"></div>

        <div className="flex justify-between mt-2 items-center">
          <div className="flex items-center">
            <Image className="ms-[-1rem] w-[4.5rem] h-[4.5rem] opacity rounded-full" alt="wow" src="/adul.jpg" width={80} height={80 }></Image>

            <p className="ms-2 h-[4rem]"><b>Darmian</b></p>
            <p className="ms-[-3rem] h-[1.5rem]">Hallo gais</p>
            <button className="mt-14 ms-[-4.5rem]"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48"><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.987 10.987 0 0 0 15 8"/></svg></button>
            <button className="mt-14 ms-[0.8rem]"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="black" d="M12 2A10 10 0 0 0 2 12a9.89 9.89 0 0 0 2.26 6.33l-2 2a1 1 0 0 0-.21 1.09A1 1 0 0 0 3 22h9a10 10 0 0 0 0-20m0 18H5.41l.93-.93a1 1 0 0 0 0-1.41A8 8 0 1 1 12 20"/></svg></button>
            <button className="mt-14 ms-[0.8rem]"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7a48.678 48.678 0 0 0-7.324 0a4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7a48.656 48.656 0 0 0 7.324 0a4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"/></svg></button>
            <button className="mt-14 ms-[0.8rem]"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="black" fill-rule="evenodd" d="M7.25 15.05a.75.75 0 0 0 1.403.387l.903-1.6a5.25 5.25 0 0 1 5.354-2.611l.149.022c.027.678.065 1.356.114 2.032l.068.931c.055.757.899 1.18 1.538.771a19.631 19.631 0 0 0 5.374-5.089l.456-.635a.75.75 0 0 0 0-.875l-.456-.635a19.631 19.631 0 0 0-5.373-5.09a1.002 1.002 0 0 0-1.539.772l-.068.93c-.04.547-.072 1.093-.097 1.64h-1.019a6.75 6.75 0 0 0-6.748 6.587zm7.883-5.308a6.75 6.75 0 0 0-6.3 2.489a5.25 5.25 0 0 1 5.224-4.732h1.74a.75.75 0 0 0 .749-.724c.026-.77.067-1.538.123-2.305l.006-.075a18.13 18.13 0 0 1 4.26 4.228l.142.198l-.142.197a18.132 18.132 0 0 1-4.26 4.228l-.006-.075a59.785 59.785 0 0 1-.132-2.594a.75.75 0 0 0-.638-.72z" clip-rule="evenodd"/><path fill="black" d="M19.641 17.411a44.03 44.03 0 0 0 .25-3.032a.407.407 0 0 1 .137-.285c.364-.32.716-.654 1.056-1c.128-.13.351-.038.348.144a45.91 45.91 0 0 1-.3 4.348c-.237 2.022-1.862 3.607-3.874 3.832a47.77 47.77 0 0 1-10.516 0c-2.012-.225-3.637-1.81-3.873-3.832a45.92 45.92 0 0 1 0-10.67c.236-2.022 1.86-3.607 3.873-3.832a47.672 47.672 0 0 1 6.958-.26c.196.006.33.198.307.393a2.33 2.33 0 0 0-.013.122l-.051.704a.301.301 0 0 1-.312.279a46.171 46.171 0 0 0-6.723.253a2.89 2.89 0 0 0-2.55 2.516a44.421 44.421 0 0 0 0 10.32a2.89 2.89 0 0 0 2.55 2.516c3.356.375 6.828.375 10.184 0a2.89 2.89 0 0 0 2.55-2.516"/></svg></button>
          </div>
          <button className="ms-3 mt-[-4rem]"><svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 16 16"><path fill="black" d="M3 9.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"/></svg></button>
        </div>
        <div className="mt-2 h-[0.5px] bg-black"></div>

        <div className="flex justify-between mt-2 items-center">
          <div className="flex items-center">
            <Image className="mt-[-15rem] w-[4rem] h-[4rem] ms-[-1rem] rounded-full" alt="wow" src="/prel.jpg" width={80} height={80}></Image>

            <p className="ms-3 h-[19rem]"><b>Wilson</b></p>
            <p className=""></p>
            <Image className="ms-[-3rem] rounded" src="/ee.jpg" alt="asoy" width={650} height={400}></Image>
            <button className="mt-[18rem] ms-[-26.5rem]"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48"><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.987 10.987 0 0 0 15 8"/></svg></button>
            <button className="mt-[18rem] ms-[0.8rem]"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="black" d="M12 2A10 10 0 0 0 2 12a9.89 9.89 0 0 0 2.26 6.33l-2 2a1 1 0 0 0-.21 1.09A1 1 0 0 0 3 22h9a10 10 0 0 0 0-20m0 18H5.41l.93-.93a1 1 0 0 0 0-1.41A8 8 0 1 1 12 20"/></svg></button>
            <button className="mt-[18rem] ms-[0.8rem]"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7a48.678 48.678 0 0 0-7.324 0a4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7a48.656 48.656 0 0 0 7.324 0a4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"/></svg></button>
            <button className="mt-[18rem] ms-[0.8rem]"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="black" fill-rule="evenodd" d="M7.25 15.05a.75.75 0 0 0 1.403.387l.903-1.6a5.25 5.25 0 0 1 5.354-2.611l.149.022c.027.678.065 1.356.114 2.032l.068.931c.055.757.899 1.18 1.538.771a19.631 19.631 0 0 0 5.374-5.089l.456-.635a.75.75 0 0 0 0-.875l-.456-.635a19.631 19.631 0 0 0-5.373-5.09a1.002 1.002 0 0 0-1.539.772l-.068.93c-.04.547-.072 1.093-.097 1.64h-1.019a6.75 6.75 0 0 0-6.748 6.587zm7.883-5.308a6.75 6.75 0 0 0-6.3 2.489a5.25 5.25 0 0 1 5.224-4.732h1.74a.75.75 0 0 0 .749-.724c.026-.77.067-1.538.123-2.305l.006-.075a18.13 18.13 0 0 1 4.26 4.228l.142.198l-.142.197a18.132 18.132 0 0 1-4.26 4.228l-.006-.075a59.785 59.785 0 0 1-.132-2.594a.75.75 0 0 0-.638-.72z" clip-rule="evenodd"/><path fill="black" d="M19.641 17.411a44.03 44.03 0 0 0 .25-3.032a.407.407 0 0 1 .137-.285c.364-.32.716-.654 1.056-1c.128-.13.351-.038.348.144a45.91 45.91 0 0 1-.3 4.348c-.237 2.022-1.862 3.607-3.874 3.832a47.77 47.77 0 0 1-10.516 0c-2.012-.225-3.637-1.81-3.873-3.832a45.92 45.92 0 0 1 0-10.67c.236-2.022 1.86-3.607 3.873-3.832a47.672 47.672 0 0 1 6.958-.26c.196.006.33.198.307.393a2.33 2.33 0 0 0-.013.122l-.051.704a.301.301 0 0 1-.312.279a46.171 46.171 0 0 0-6.723.253a2.89 2.89 0 0 0-2.55 2.516a44.421 44.421 0 0 0 0 10.32a2.89 2.89 0 0 0 2.55 2.516c3.356.375 6.828.375 10.184 0a2.89 2.89 0 0 0 2.55-2.516"/></svg></button>
          </div>
          <button className="ms-[2rem] mt-[-17rem]"><svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 16 16"><path fill="black" d="M3 9.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"/></svg></button>
        </div>
        <div className="mt-2 h-[0.5px] bg-black"></div>

        <div className="flex justify-between mt-2 items-center">
          <div className="flex items-center">
            <Image className="mt-[-15rem] w-[4rem] h-[4rem] ms-[-1rem] rounded-full" alt="wow" src="/pp.jpg" width={80} height={80}></Image>

            <p className="ms-3 h-[19rem]"><b>Darwin</b></p>
            <Image className="ms-[-3rem] rounded" src="/ee.jpg" alt="asoy" width={650} height={400}></Image>
            <button className="mt-[18rem] ms-[-26.5rem]"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48"><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.987 10.987 0 0 0 15 8"/></svg></button>
            <button className="mt-[18rem] ms-[0.8rem]"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="black" d="M12 2A10 10 0 0 0 2 12a9.89 9.89 0 0 0 2.26 6.33l-2 2a1 1 0 0 0-.21 1.09A1 1 0 0 0 3 22h9a10 10 0 0 0 0-20m0 18H5.41l.93-.93a1 1 0 0 0 0-1.41A8 8 0 1 1 12 20"/></svg></button>
            <button className="mt-[18rem] ms-[0.8rem]"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7a48.678 48.678 0 0 0-7.324 0a4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7a48.656 48.656 0 0 0 7.324 0a4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"/></svg></button>
            <button className="mt-[18rem] ms-[0.8rem]"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="black" fill-rule="evenodd" d="M7.25 15.05a.75.75 0 0 0 1.403.387l.903-1.6a5.25 5.25 0 0 1 5.354-2.611l.149.022c.027.678.065 1.356.114 2.032l.068.931c.055.757.899 1.18 1.538.771a19.631 19.631 0 0 0 5.374-5.089l.456-.635a.75.75 0 0 0 0-.875l-.456-.635a19.631 19.631 0 0 0-5.373-5.09a1.002 1.002 0 0 0-1.539.772l-.068.93c-.04.547-.072 1.093-.097 1.64h-1.019a6.75 6.75 0 0 0-6.748 6.587zm7.883-5.308a6.75 6.75 0 0 0-6.3 2.489a5.25 5.25 0 0 1 5.224-4.732h1.74a.75.75 0 0 0 .749-.724c.026-.77.067-1.538.123-2.305l.006-.075a18.13 18.13 0 0 1 4.26 4.228l.142.198l-.142.197a18.132 18.132 0 0 1-4.26 4.228l-.006-.075a59.785 59.785 0 0 1-.132-2.594a.75.75 0 0 0-.638-.72z" clip-rule="evenodd"/><path fill="black" d="M19.641 17.411a44.03 44.03 0 0 0 .25-3.032a.407.407 0 0 1 .137-.285c.364-.32.716-.654 1.056-1c.128-.13.351-.038.348.144a45.91 45.91 0 0 1-.3 4.348c-.237 2.022-1.862 3.607-3.874 3.832a47.77 47.77 0 0 1-10.516 0c-2.012-.225-3.637-1.81-3.873-3.832a45.92 45.92 0 0 1 0-10.67c.236-2.022 1.86-3.607 3.873-3.832a47.672 47.672 0 0 1 6.958-.26c.196.006.33.198.307.393a2.33 2.33 0 0 0-.013.122l-.051.704a.301.301 0 0 1-.312.279a46.171 46.171 0 0 0-6.723.253a2.89 2.89 0 0 0-2.55 2.516a44.421 44.421 0 0 0 0 10.32a2.89 2.89 0 0 0 2.55 2.516c3.356.375 6.828.375 10.184 0a2.89 2.89 0 0 0 2.55-2.516"/></svg></button>
          </div>
          <button className="ms-[2rem] mt-[-17rem]"><svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 16 16"><path fill="black" d="M3 9.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"/></svg></button>
        </div>
        <div className="mt-2 h-[0.5px] bg-black"></div>
       </main>
    </>
  );
};

export default homepage;