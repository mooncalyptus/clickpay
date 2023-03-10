import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import http from "../src/helpers/http";
import { useSelector } from "react-redux";
import FooterUser from "../components/footerUser";
import Navbar from "../components/navbar";
import ModalTopUp from "../components/modal-topup";

const SearchReceiver = () => {
    const [searchRecipient, setSearchRecipient] = useState([])
    const [searchPage, setSearchPage] = useState(1)
    const [searchLimit, setSearchLimit] = useState(5)
    const [showModal, setShowModal] = useState(false)
    const token = useSelector((state) => state.auth.token)

    const ListRecipient = async () => {
        try {
            const response = await http(token).get(`/transactions/recipient?page=${searchPage}&limit=${searchLimit}`)
            setSearchRecipient(response?.data?.results)
        } catch (error) {
            console.log(error)
        }
    }

    // console.log(searchRecipient)
    React.useEffect(() => {
        ListRecipient()
    }, [searchPage, searchLimit])
    return (
        <>
            <Navbar></Navbar>
            <div className="flex bg-[#E5E5E5] pt-5 pb-[35px]">
                {/* Dashboard kiri */}
                <div className="bg-white rounded-md ml-[5%] pl-[3%] pr-[5%] pt-[47px]">
                    <div className="h-screen">
                        <div className="flex gap-x-5">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                            <Link href="/home"> <span className="text-[#3A3D42] opacity-80">Dashboard</span></Link>
                        </div>

                        <div className="flex gap-x-5 mt-[52px]">
                            <svg className="w-6 h-6 text-[#82C3EC]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                            <span className="text-lg font-bold text-[#82C3EC]">Transfer</span>
                        </div>

                        <div className="flex gap-x-5 mt-[52px]">
                            <svg className="w-6 h-6 text-[#3A3D42] opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                            <button className="text-[#3A3D42] opacity-80" onClick={() => setShowModal(true)}>Top Up</button>
                            <ModalTopUp isVisible={showModal} onClose={() => setShowModal(false)}></ModalTopUp>
                        </div>

                        <div className="flex gap-x-5 mt-[52px]">
                            <svg className="w-6 h-6 text-[#3A3D42] opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                            <Link href="/profile"> <span className="text-[#3A3D42] opacity-80">Profile</span></Link>
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
                        <span className="font-bold text-lg grow">Search Receiver</span>
                    </div>

                    <form className="mt-[25px]">
                        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </div>
                            <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search receiver here" required></input>
                        </div>
                    </form>

                    {searchRecipient.map(item => {
                        return (
                            <>
                                <Link href={"/input-amount"}>  
                                <div className="flex mt-8">
                                    {item.picture ? (
                                        <Image src={"https://68xkph-8888.preview.csb.app/upload/" + (item.picture)} alt="desc" width={30} height={30} className="rounded"></Image>
                                    ) : (
                                        <Image src={require('../assets/profile.png')} alt="desc" ></Image>
                                    )}
                                    <div className="flex ml-[15px] w-full">
                                        <div className="flex flex-col grow">
                                            <span className="font-bold text-base">{item.firstName} {item.lastName}</span>
                                            {item.phoneNumber ? (
                                                <span className="text-sm text-[#7A7886]">{item.phoneNumber}</span>
                                            ) : (
                                                <span className="text-sm text-[#7A7886]"> - </span>
                                            )}
                                        </div>
                                        <div className="ml-[30px]">
                                        </div>
                                    </div>
                                </div>
                                </Link>
                            </>
                        )
                    })}
                </div>
            </div>

            <FooterUser></FooterUser>
        </>
    )
}

export default SearchReceiver