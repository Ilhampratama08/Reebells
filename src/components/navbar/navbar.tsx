import { url } from "inspector";
import Image from "next/image";
import Link from "next/link";
import { title } from "process";

const Navbar = () => {
  return (
    <nav className="fixed flex p-4 justify-evenly w-[95%] mx-6 mt-[-4em] bg-white">
      <div>
        <Image className="" src="/pp.png" alt="logo" height={45} width={45} />
        </div>
    <div className="flex sm:justify-center space-x-7">
      <Link href="/" className="font-medium text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">
        <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="2em" viewBox="0 0 256 256">
          <path fill="black" d="M224 115.55V208a16 16 0 0 1-16 16h-40a16 16 0 0 1-16-16v-40a8 8 0 0 0-8-8h-32a8 8 0 0 0-8 8v40a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16v-92.45a16 16 0 0 1 5.17-11.78l80-75.48l.11-.11a16 16 0 0 1 21.53 0a1.14 1.14 0 0 0 .11.11l80 75.48a16 16 0 0 1 5.08 11.78"/></svg></Link>
      <Link href="/bells" className="font-medium text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">
        <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="2em" viewBox="0 0 256 256">
          <path fill="black" d="M225.29 165.93C216.61 151 212 129.57 212 104a84 84 0 0 0-168 0c0 25.58-4.59 47-13.27 61.93a20.08 20.08 0 0 0-.07 20.07A19.77 19.77 0 0 0 48 196h36.18a44 44 0 0 0 87.64 0H208a19.77 19.77 0 0 0 17.31-10a20.08 20.08 0 0 0-.02-20.07M128 212a20 20 0 0 1-19.6-16h39.2a20 20 0 0 1-19.6 16m-73.34-40C63.51 154 68 131.14 68 104a60 60 0 0 1 120 0c0 27.13 4.48 50 13.33 68Z"/></svg></Link>
      <Link href="/post" className="font-medium text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">
        <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="2em" viewBox="0 0 24 24"><g fill="none" stroke="black" stroke-width="2">
          <path stroke-linecap="round" d="M22 10.5V12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2h1.5"/><path d="m16.652 3.455l.649-.649A2.753 2.753 0 0 1 21.194 6.7l-.65.649m-3.892-3.893s.081 1.379 1.298 2.595c1.216 1.217 2.595 1.298 2.595 1.298m-3.893-3.893L10.687 9.42c-.404.404-.606.606-.78.829c-.205.262-.38.547-.524.848c-.121.255-.211.526-.392 1.068L8.412 13.9m12.133-6.552l-5.965 5.965c-.404.404-.606.606-.829.78a4.59 4.59 0 0 1-.848.524c-.255.121-.526.211-1.068.392l-1.735.579m0 0l-1.123.374a.742.742 0 0 1-.939-.94l.374-1.122m1.688 1.688L8.412 13.9"/></g></svg></Link>
      <Link href="/search" className="font-medium text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">
        <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="2em" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd">
          <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="black" d="M10.5 2a8.5 8.5 0 1 0 5.262 15.176l3.652 3.652a1 1 0 0 0 1.414-1.414l-3.652-3.652A8.5 8.5 0 0 0 10.5 2M4 10.5a6.5 6.5 0 1 1 13 0a6.5 6.5 0 0 1-13 0"/></g></svg></Link>
      <Link href="/profile" className="font-medium text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">
        <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="2em" viewBox="0 0 16 16"><g fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><circle cx="8" cy="6" r="3.25"/>
          <path d="M2.75 14.25c0-2.5 2-5 5.25-5s5.25 2.5 5.25 5"/></g></svg></Link>
    </div>
    <div>
      <Link href="slidebar" className="font-medium text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"><svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24"><path fill="none" stroke="black" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/></svg></Link>
    </div>
    </nav>
  );
};

export default Navbar;