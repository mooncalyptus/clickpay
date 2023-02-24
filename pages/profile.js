import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/navbar";
import FooterUser from "../components/footerUser";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import React from "react";
import { logout as logoutAction } from "../src/redux/reducers/auth";
import { useRouter } from "next/router";
import axios from "axios";
import ModalTopUp from "../components/modal-topup";

const Profile = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const [profile, setProfile] = React.useState({});
    const token = useSelector((state) => state.auth.token)
    const [showModal, setShowModal] = useState(false)
    const fetchProfile = async () => {
        try {
            const response = await axios.get("https://68xkph-8888.preview.csb.app/profile", {
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
    React.useEffect(() => {
        // getProfile(token)
        fetchProfile()
    }, [])
    console.log(profile)

    const LogoutProcess = () => {
        dispatch(logoutAction())
        router.push("/login")
    }
    return (
        <>
            <Navbar></Navbar>

            <div className="flex bg-[#E5E5E5] pt-5 pb-[35px]">
                {/* Dashboard kiri */}
                <div className="bg-white rounded-md ml-[5%] pl-[3%] pr-[5%] pt-[47px]">
                    <div className="h-screen">
                        <div className="flex gap-x-5">
                            <svg className="w-6 h-6 text-[#3A3D42] opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                            <Link href="/home"> <span className="text-[#3A3D42] opacity-80">Dashboard</span></Link>
                        </div>

                        <div className="flex gap-x-5 mt-[52px]">
                            <svg className="w-6 h-6 text-[#3A3D42] opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                            <Link href="/search-receiver"> <span className="text-[#3A3D42] opacity-80">Transfer</span> </Link>
                        </div>

                        <div className="flex gap-x-5 mt-[52px]">
                            <svg className="w-6 h-6 text-[#3A3D42] opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                            <button className="text-[#3A3D42] opacity-80" onClick={() => setShowModal(true)}>Top Up</button>
                            <ModalTopUp isVisible={showModal} onClose={() => setShowModal(false)}></ModalTopUp>
                        </div>

                        <div className="flex gap-x-5 mt-[52px]">
                            <svg className="w-6 h-6 text-[#82C3EC]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                            <span className="text-lg font-bold text-[#82C3EC]">Profile</span>
                        </div>
                    </div>

                    <div className="flex gap-5 mb-[10%]">
                        <svg className="w-6 h-6 text-[#3A3D42] opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                        <span className="text-[#3A3D42] opacity-80">Logout</span>
                    </div>
                </div>

                {/* Konten kanan */}
                <div className="ml-5 mr-[5%] w-full bg-white rounded-md">
                    <div className="flex flex-col justify-center items-center pt-6 gap-[10px]">
                        <div>
                            <Image src={require('../assets/profile.png')} alt="desc" ></Image>
                        </div>


                        <div>
                            {/* The button to open modal */}
                            <label htmlFor="my-modal-3" className="btn">EDIT PROFILE PICTURE</label>

                            {/* Put this part before </body> tag */}
                            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                            <div className="modal">
                                <div className="modal-box relative">
                                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                    <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
                                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                                </div>
                            </div>
                        </div>

                        <div>{profile?.firstName} {profile?.lastName}</div>

                        <div>+62 813-9387-7946</div>

                        <div className="flex flex-col gap-5">
                            <button className="flex bg-[#82C3EC] py-[18px] px-5 w-64 rounded-lg">
                                <div className="grow">Personal Information</div>
                                <div>
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                </div>
                            </button>

                            <button className="flex bg-[#82C3EC] py-[18px] px-5 w-64 rounded-lg">
                                <div className="grow">Change Password</div>
                                <div>
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                </div>
                            </button>

                            <button className="flex bg-[#82C3EC] py-[18px] px-5 w-64 rounded-lg">
                                <div className="grow">Change PIN</div>
                                <div>
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                </div>
                            </button>

                            <button className="flex bg-[#82C3EC] py-[18px] px-5 w-64 rounded-lg" onClick={LogoutProcess}>
                                <div className="grow">Logout</div>
                                <div>
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <FooterUser />
        </>
    )
}

export default Profile