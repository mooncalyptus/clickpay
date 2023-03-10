import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import http from "../src/helpers/http"

const Navbar = () => {
    const router = useRouter()
    const [profile, setProfile] = React.useState({});
    const [page, setPage] = React.useState(1)
    const [limit, setLimit] = React.useState(5)
    const [notification, setNotification] = React.useState([])
    const token = useSelector((state) => state.auth.token)
    const fetchProfile = async () => {
        try {
            const response = await http().get("/profile", {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            setProfile(response.data.results);
        } catch (error) {
            if (error) throw error;
        }
    };

    const getNotification = async () => {
        try {
            const response = await http(token).get(`/transactions/notification?page=${page}&limit=${limit}`)
            setNotification(response?.data?.results)
        } catch (error) {
            console.log(error)
        }
    }
    React.useEffect(() => {
        if (token) {
            fetchProfile()
            getNotification()
        }
    }, [token, page, limit])
    return (
        <>
            <div className="flex bg-[#82C3EC] font-nunito">
                <div className="grow">
                    <Image src={require('../assets/logo-remove.png')} className="ml-[5%]" width="150" height="40" alt="desc" ></Image>
                </div>

                <div className="flex justify-center items-center gap-5 mr-[10%]">
                    <div>
                        {profile?.picture ? (
                            <Image src={"https://68xkph-8888.preview.csb.app/upload/" + (profile?.picture)} alt="profile" width={40} height={40} className="rounded-lg"></Image>
                        ) : (
                            <Image src={require('../assets/profile.png')} alt="desc" ></Image>
                        )}
                    </div>
                    <div className="flex flex-col">
                        <Link href="/profile"><span className="text-lg font-bold">{profile?.firstName}</span></Link>
                        <span className="text-[13px] text-[#3A3D42] opacity-90">{profile?.phoneNumber}</span>
                    </div>
                    <div>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                            </label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-[400px] px-[3opx] gap-5">
                                {notification.map(item => {
                                    return (
                                        <>
                                            <div key={item.id}>
                                                <div className="flex">
                                                    <div>
                                                    <svg className="w-6 h-6 text-[#4CEDB3]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                                                        {/* {item.notes.includes("Accept") || item.notes.includes("Top Up") ? (
                                                            <svg className="w-6 h-6 text-[#4CEDB3]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                                                        ) : (
                                                            <svg className="w-6 h-6 text-[#FF5B37]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                                                        )} */}

                                                    </div>
                                                    <div>
                                                        <div>{item.notes}</div>
                                                        <div>{item.amount}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}
                                {/* <li>
                                    <div className="flex gap-6">
                                        <div><svg className="w-6 h-6 text-[#4CEDB3]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg></div>

                                        <div>
                                            <div className="text-sm text-[#7A7A7A]">Accept from Joshua Lee</div>
                                            <div className="text-lg font-bold">Rp220.000</div>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="flex gap-6">
                                        <div><svg className="w-6 h-6 text-[#FF5B37]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg></div>

                                        <div>
                                            <div className="text-sm text-[#7A7A7A]">Transfer to Deni</div>
                                            <div className="text-lg font-bold">Rp149.000</div>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="flex gap-6">
                                        <div><svg className="w-6 h-6 text-[#FF5B37]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg></div>

                                        <div>
                                            <div className="text-sm text-[#7A7A7A]">Transfer to Deni</div>
                                            <div className="text-lg font-bold">Rp149.000</div>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="flex gap-6">
                                        <div><svg className="w-6 h-6 text-[#FF5B37]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg></div>

                                        <div>
                                            <div className="text-sm text-[#7A7A7A]">Transfer to Jessice Lee</div>
                                            <div className="text-lg font-bold">Rp100.000</div>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="flex gap-6">
                                        <div><svg className="w-6 h-6 text-[#4CEDB3]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg></div>

                                        <div>
                                            <div className="text-sm text-[#7A7A7A]">Top Up</div>
                                            <div className="text-lg font-bold">Rp300.000</div>
                                        </div>
                                    </div>
                                </li> */}

                            </ul>
                        </div>
                        {/*  */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar