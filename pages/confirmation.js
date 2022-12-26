import Image from "next/image";
import FooterUser from "./footer-user";
import Navbar from "./navbar";

const Confirmation = () => {
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
                        <span className="font-bold text-lg grow">Transfer To</span>
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
                    <div className="flex center-items mt-8">
                        <span className="font-bold text-lg grow">Details</span>
                    </div>

                    <div className="flex flex-col gap-5">
                        <div className="bg-[#FFFFFF] flex flex-col gap-[10px] rounded-md drop-shadow-xl">
                            <div className="text-base text-[#7A7886]">Amount</div>
                            <div className="text-[22px] font-bold text-[#514F5B]">Rp100.000</div>
                        </div>

                        <div className="bg-[#FFFFFF] flex flex-col gap-[10px] rounded-md drop-shadow-xl">
                            <div className="text-base text-[#7A7886]">Balance Left</div>
                            <div className="text-[22px] font-bold text-[#514F5B]">Rp20.000</div>
                        </div>

                        <div className="bg-[#FFFFFF] flex flex-col gap-[10px] rounded-md drop-shadow-xl">
                            <div className="text-base text-[#7A7886]">Date & Time</div>
                            <div className="text-[22px] font-bold text-[#514F5B]">May 11, 2020 - 12.20</div>
                        </div>

                        <div className="bg-[#FFFFFF] flex flex-col gap-[10px] rounded-md drop-shadow-xl">
                            <div className="text-base text-[#7A7886]">Notes</div>
                            <div className="text-[22px] font-bold text-[#514F5B]">For buying some socks</div>
                        </div>
                        <div className="flex justify-end">
                            {/* <button htmlFor="modals" className="btn bg-[#82C3EC] border border-0">Continue</button> */}
                            <label htmlFor="modals" className="btn bg-[#82C3EC]">Continue</label>

                            {/* Put this part before </body> tag */}
                            <input type="checkbox" id="modals" className="modal-toggle" />
                            <div className="modal">
                                <div className="modal-box relative">
                                    <label htmlFor="modals" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                    <h3 className="text-lg font-bold">Enter PIN to Transfer</h3>
                                    <p className="py-4 text-base">Enter your 6 digits PIN for confirmation to continue transferring money. </p>
                                    <div className="flex justify-center gap-[23px]">
                                        <input type="text" className="w-[53px] h-[65px] border border-1 border-[#A9A9A9] opacity-60 rounded-lg"></input>
                                        <input type="text" className="w-[53px] h-[65px] border border-1 border-[#A9A9A9] opacity-60 rounded-lg"></input>
                                        <input type="text" className="w-[53px] h-[65px] border border-1 border-[#A9A9A9] opacity-60 rounded-lg"></input>
                                        <input type="text" className="w-[53px] h-[65px] border border-1 border-[#A9A9A9] opacity-60 rounded-lg"></input>
                                        <input type="text" className="w-[53px] h-[65px] border border-1 border-[#A9A9A9] opacity-60 rounded-lg"></input>
                                        <input type="text" className="w-[53px] h-[65px] border border-1 border-[#A9A9A9] opacity-60 rounded-lg"></input>
                                    </div>
                                    <div className="flex justify-end pt-[70px]">
                                    <label htmlFor="modals" className="btn bg-[#82C3EC]">Continue</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FooterUser></FooterUser>
        </>
    )
}

export default Confirmation;