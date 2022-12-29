import Image from "next/image";
import FooterUser from "../components/footer-user";
import Navbar from "../components/navbar";

const InputAmount = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="flex bg-[#E5E5E5] pt-5 pb-[35px] font-nunito">
                {/* Dashboard kiri */}
                <div className="bg-white rounded-md ml-[5%] pl-[3%] pr-[5%] pt-[47px]">
                    <div className="h-screen">
                        <div className="flex gap-x-5">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                            <span className="text-[#3A3D42] opacity-80">Dashboard</span>
                        </div>

                        <div className="flex gap-x-5 mt-[52px]">
                            <svg className="w-6 h-6 text-[#82C3EC]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                            <span className="text-lg font-bold text-[#82C3EC]">Transfer</span>
                        </div>

                        <div className="flex gap-x-5 mt-[52px]">
                            <svg className="w-6 h-6 text-[#3A3D42] opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                            <span className="text-[#3A3D42] opacity-80">Top Up</span>
                        </div>

                        <div className="flex gap-x-5 mt-[52px]">
                            <svg className="w-6 h-6 text-[#3A3D42] opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                            <span className="text-[#3A3D42] opacity-80">Profile</span>
                        </div>
                    </div>

                    <div className="flex gap-5 mb-[10%]">
                        <svg className="w-6 h-6 text-[#3A3D42] opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                        <span className="text-[#3A3D42] opacity-80">Logout</span>
                    </div>
                </div>

                {/* Konten kanan */}
                <div className="ml-5 mr-[5%] w-full bg-white rounded-lg pl-[50px] pt-[30px] pr-[30px]">
                    <div className="flex center-items">
                        <span className="font-bold text-lg grow">Transfer Money</span>
                    </div>
                    <div className="flex mt-8">
                        <Image src={require('../assets/profile.png')} alt="desc" ></Image>
                        <div className="flex ml-[15px] w-full">
                            <div className="flex flex-col grow">
                                <span className="font-bold text-base">Samuel Suhi</span>
                                <span className="text-sm text-[#7A7886]">+62 813-8492-9994</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10">
                        <div className="text-base text-[#7A7886]">
                            <div>Type the amount you want to transfer and then</div>
                            <div>press continue to the next steps.</div>
                        </div>

                        <div className="flex flex-col justify-center items-center">
                            <input type="text" className="placeholder:text-center placeholder:font-bold placeholder:text-[42px] h-14" placeholder="0.00"></input>
                            <div className="text-base font-bold">Rp120.000 Available</div>
                            <div className="relative mb-6 mt-[63px]">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                                </div>
                                <input type="text" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add some notes"></input>
                            </div>
                        </div>

                        <div className="flex justify-end">
                        <button className="btn bg-[#82C3EC]">Continue</button>
                        </div>
                    </div>
                </div>
            </div>

            <FooterUser></FooterUser>
        </>
    )
}

export default InputAmount