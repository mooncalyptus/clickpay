import React from "react";
import http from "../src/helpers/http";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/navbar";
import ModalTopUp from "../components/modal-topup";
import FooterUser from "../components/footerUser";
import { useSelector } from "react-redux";
import { useState } from "react";

const Home = () => {
    const [showModal, setShowModal] = useState(false)
    const token = useSelector((state)=> state.auth.token)
    const [profile, setProfile] = useState(false)
    // const fetchProfile = async () => {
    //     try {
    //       const response = await http().get("/profile", {
    //         headers:  {
    //             "Content-Type": "application/json",
    //           Authorization: `Bearer ${token}`,
    //         },
    //       });
    //       setProfile(response.data.results);
    //     } catch (error) {
    //       if (error) throw error;
    //     }
    //   };
    //   React.useEffect(()=>{
    //     fetchProfile()
    // }, [])
    console.log(profile)
    return (
        <>
            <Navbar></Navbar>
            {/* Main div */}
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
                             <Link href="/search-receiver"><span className="text-[#3A3D42] opacity-80">Transfer</span></Link>
                        </div>

                        <div className="flex gap-x-5 mt-[52px]">
                            <svg className="w-6 h-6 text-[#3A3D42] opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                            <button className="text-[#3A3D42] opacity-80" onClick={()=> setShowModal(true)}>Top Up</button>
                            <ModalTopUp isVisible={showModal} onClose={()=> setShowModal(false)}></ModalTopUp>
                        </div>

                        <div className="flex gap-x-5 mt-[52px]">
                            <svg className="w-6 h-6 text-[#3A3D42] opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                            <Link href="/profile"> <span className="text-[#3A3D42] opacity-80">Profile</span></Link>
                        </div>
                    </div>

                    <div className="flex gap-5 mt-[-10%]">
                        <svg className="w-6 h-6 text-[#3A3D42] opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                        <span className="text-[#3A3D42] opacity-80">Logout</span>
                    </div>
                </div>

                {/* Konten kanan */}
                <div>
                    {/* Konten Balance paling atas */}
                    <div className="flex bg-[#82C3EC] border-black ml-5 rounded-md">
                        {/* Section Balance */}
                        <div className="flex flex-col mr-[400px] justify-center pl-[30px]">
                            <span className="text-lg text-[#E0E0E0]">Balance</span>
                            <span className="text-[40px] fon-bold text-white">{profile?.balance}</span>
                            <span className="text-sm text-[#E0E0E0] font-semibold">+62 813-9387-7946</span>
                        </div>
                        <div className="flex flex-col gap-4 justify-center items-center pr-[30px] py-[30px]">
                            <button className="flex bg-white text-[#82C3EC] rounded-md p-4">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                                <span>Transfer</span>
                            </button>

                            <button className="flex bg-white text-[#82C3EC] rounded-md p-4" onClick={()=> setShowModal(true)}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                                <span>Top Up</span>
                            </button>
                        </div>
                    </div>

                    {/* Section bawah */}
                    <div className="flex">
                        <div className="bg-white flex flex-col ml-5 rounded-md mt-5 px-[30px] pt-[35px]">
                            <div className="flex">
                                <div className="flex flex-col grow">
                                    <svg className="w-6 h-6 text-[#1EC15F]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                                    <span className="text-[#6A6A6A]">Income</span>
                                    <span className="font-bold text-lg">Rp2.120.000</span>
                                </div>

                                <div className="flex flex-col">
                                    <svg className="w-6 h-6 text-[#FF5B37]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                                    <span className="text-[#6A6A6A]">Expense</span>
                                    <span className="font-bold text-lg">Rp1.560.000</span>
                                </div>
                            </div>

                            <div>
                                <Image src={require('../assets/graphic.png')} alt="desc" ></Image>
                            </div>
                        </div>


                        <div className="mt-5 ml-5 bg-white rounded-md px-[30px] py-[30px]">
                            <div className="flex">
                                <span className="font-bold text-lg grow">Transaction History</span>
                                <Link href="/history"> <span className="text-lg font-bold">View All</span></Link>
                            </div>
                            <div className="flex mt-8">
                                <Image src={require('../assets/profile.png')} alt="desc" ></Image>
                                <div className="flex ml-[15px]">
                                    <div className="flex flex-col">
                                        <span className="font-bold text-base">Samuel Suhi</span>
                                        <span className="text-sm text-[#7A7886]">Accept</span>
                                    </div>
                                    <div className="ml-[30px]">
                                        <span className="font-bold text-[#1EC15F] text-base">+Rp50.000</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex mt-8">
                                <div className="bg-[#EBEEF2] w-14 h-14 flex justify-center items-center rounded-md">
                                    <Image src={require('../assets/net.png')} alt="desc" ></Image>
                                </div>
                                <div className="flex ml-[15px]">
                                    <div className="flex flex-col">
                                        <span className="font-bold text-base">Netflix</span>
                                        <span className="text-sm text-[#7A7886]">Transfer</span>
                                    </div>
                                    <div className="ml-[60px]">
                                        <span className="font-bold text-[#FF5B37] text-base">-Rp149.000</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex mt-8">
                                <Image src={require('../assets/1.png')} alt="desc" ></Image>
                                <div className="flex ml-[15px]">
                                    <div className="flex flex-col">
                                        <span className="font-bold text-base">Christine Mar...</span>
                                        <span className="text-sm text-[#7A7886]">Accept</span>
                                    </div>
                                    <div>
                                        <span className="font-bold text-[#1EC15F] text-base">+Rp150.000</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex mt-8">
                                <div className="bg-[#EBEEF2] w-14 h-14 flex justify-center items-center rounded-md">
                                    <Image src={require('../assets/net.png')} alt="desc" ></Image>
                                </div>
                                <div className="flex ml-[15px]">
                                    <div className="flex flex-col">
                                        <span className="font-bold text-base">Robert Chandler</span>
                                        <span className="text-sm text-[#7A7886]">Topup</span>
                                    </div>
                                    <div>
                                        <span className="font-bold text-[#FF5B37] text-base">+Rp249.000</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterUser />
        </>
    )
}

export default Home