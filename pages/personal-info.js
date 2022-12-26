import Image from "next/image";
import FooterUser from "./footer-user";
import Navbar from "./navbar";

const PersonalInfo = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="flex bg-[#E5E5E5] pt-5 pb-[35px]">
                {/* Dashboard kiri */}
                <div className="bg-white rounded-md ml-[5%] pl-[3%] pr-[5%] pt-[47px]">
                    <div className="h-screen">
                        <div className="flex gap-x-5">
                            <svg className="w-6 h-6 text-[#82C3EC]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                            <span className="text-lg font-bold text-[#82C3EC]">Dashboard</span>
                        </div>

                        <div className="flex gap-x-5 mt-[52px]">
                            <svg className="w-6 h-6 text-[#3A3D42] opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                            <span className="text-[#3A3D42] opacity-80">Transfer</span>
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
                <div className="ml-5 mr-[5%] w-full bg-white rounded-md pl-[50px] py-[30px] pr-[30px]">
                    <div className="flex center-items">
                        <span className="font-bold text-lg grow">Personal Information</span>
                    </div>
                    <div className="text-base text-[#7A7886] mt-[25px]">
                        <div>We got your personal information from the sign up proccess.</div>
                        <div>If you want to make changes on</div>
                        <div>your information, contact our support.</div>
                    </div>

                    <div className="flex mt-8 bg-[#FFFFFF] drop-shadow-lg">
                        <div className="flex ml-[15px] w-full">
                            <div className="flex flex-col grow">
                                <span className="text-base text-[#7A7886]">First Name</span>
                                <span className="font-bold text-[22px]">Robert</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex mt-8 bg-[#FFFFFF] drop-shadow-lg">
                        <div className="flex ml-[15px] w-full">
                            <div className="flex flex-col grow">
                                <span className="text-base text-[#7A7886]">Last Name</span>
                                <span className="font-bold text-[22px]">Chandler</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex mt-8 bg-[#FFFFFF] drop-shadow-lg">
                        <div className="flex ml-[15px] w-full">
                            <div className="flex flex-col grow">
                                <span className="text-base text-[#7A7886]">Verified E-mail</span>
                                <span className="font-bold text-[22px]">pewdiepie1@gmail.com</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex mt-8 bg-[#FFFFFF] drop-shadow-lg">
                        <div className="flex ml-[15px] w-full">
                            <div className="flex flex-col grow">
                                <span className="text-base text-[#7A7886]">Phone Number</span>
                                <div className="flex">
                                <span className="font-bold text-[22px] grow">+62 813-9387-7946</span>
                                <span className="text-base text-[#82C3EC] font-semibold pr-5">Manage</span>
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

export default PersonalInfo