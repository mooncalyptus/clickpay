import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import FooterUser from "../components/footerUser";
import Navbar from "../components/navbar";
import http from "../src/helpers/http";

const History = () => {
    const token = useSelector((state) => state.auth.token)
    const [transPage, setTransPage] = React.useState(1)
    const [transLimit, setTransLimit] = React.useState(5)
    const [transHistory, setTransHistory] = React.useState([])

    const TransactionHistory = async () => {
        try {
            const response = await http(token).get(`/transactions?page=${transPage}&limit=${transLimit}`)
            setTransHistory(response?.data?.results)
        } catch (error) {
            console.log(error)
        }
    }

    console.log(transHistory)
    React.useEffect(() => {
        TransactionHistory()
    }, [transPage, transLimit])
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
                        <span className="font-bold text-lg grow">Transaction History</span>
                        <select className="select select-bordered">
                            <option disabled selected>--Select Filter--</option>
                            <option>-</option>
                            <option>-</option>
                        </select>
                    </div>
                    {transHistory.map(item => {
                        return (
                            <>
                                <div className="flex mt-8">
                                    {item.recipientPicture ? (
                                        <Image src={"https://68xkph-8888.preview.csb.app/upload/" + (item.recipientPicture)} alt="desc" width={30} height={30}></Image>
                                    ) : (
                                        <Image src={require('../assets/profile.png')} alt="desc" ></Image>
                                    )}
                                    <div className="flex ml-[15px] w-full">
                                        <div className="flex flex-col grow">
                                            <span className="font-bold text-base">{item.recipientname}</span>
                                            <span className="text-sm text-[#7A7886]">{item.notes}</span>
                                        </div>
                                        <div>
                                            <span className="font-bold text-[#1EC15F] text-base">+ {item.amount}</span>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
            <FooterUser></FooterUser>
        </>
    )
}

export default History