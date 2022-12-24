import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
return(
    <>
    <div className="flex bg-[#82C3EC] font-nunito">
        <div className="grow">
        <Image src={require('../assets/logo-remove.png')} className="ml-[5%]" width="150" height="40" alt="desc" ></Image>
        </div>

        <div className="flex justify-center items-center gap-5 mr-[10%]">
            <div>
            <Image src={require('../assets/profile.png')} alt="desc" ></Image>
            </div>
            <div className="flex flex-col">
                <span className="text-lg font-bold">Robert Chandler</span>
                <span className="text-[13px] text-[#3A3D42] opacity-90">+62 8139 3877 7946</span>
            </div>
            <div>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
            </div>
        </div>
    </div>
    </>
)
}

export default Navbar