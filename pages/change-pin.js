import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import jwt_decode from "jwt-decode";;
import http from "../src/helpers/http";
import { useRouter } from "next/router";
import FooterUser from "../components/footerUser";
import Navbar from "../components/navbar";

const ChangePin = () => {
    const token = useSelector((state) => state.auth.token)
    const decode = jwt_decode(token)
    const userId = decode.id
    const router = useRouter()

    const [pin1, setPin1] = useState(0)
    const [pin2, setPin2] = useState(0)
    const [pin3, setPin3] = useState(0)
    const [pin4, setPin4] = useState(0)
    const [pin5, setPin5] = useState(0)
    const [pin6, setPin6] = useState(0)

    const input1 = useRef(null)
    const input2 = useRef(null)
    const input3 = useRef(null)
    const input4 = useRef(null)
    const input5 = useRef(null)
    const input6 = useRef(null)

    const createPin = async (e) => {
        e.preventDefault()
        const pin1 = e.target.pin1.value
        const pin2 = e.target.pin2.value
        const pin3 = e.target.pin3.value
        const pin4 = e.target.pin4.value
        const pin5 = e.target.pin5.value
        const pin6 = e.target.pin6.value

        let newPin = ""
        newPin += pin1
        newPin += pin2
        newPin += pin3
        newPin += pin4
        newPin += pin5
        newPin += pin6

        try {
            const { data } = await http().post("/auth/set-pin", { newPin })
            alert('Change Pin Success')
            router.push("/profile")
        } catch (error) {
            console.log(error)
        }
    }

    const changeInput = (e) => {
        if (e.target.value.length > 1) {
            e.target.valeu = e.target.value.slice(0, 1)
        }

        if (e.target.value.length) {
            if (e.target.name === "pin1") {
                input2.current.focus();
            }
            if (e.target.name === "pin2") {
                input3.current.focus();
            }
            if (e.target.name === "pin3") {
                input4.current.focus();
            }
            if (e.target.name === "pin4") {
                input5.current.focus();
            }
            if (e.target.name === "pin5") {
                input6.current.focus();
            }
        }

        if (!e.target.value.length) {
            if (e.target.name === "pin2") {
                input1.current.focus();
            }
            if (e.target.name === "pin3") {
                input2.current.focus();
            }
            if (e.target.name === "pin4") {
                input3.current.focus();
            }
            if (e.target.name === "pin5") {
                input4.current.focus();
            }
            if (e.target.name === "pin6") {
                input5.current.focus();
            }
        }
    }
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
                        <span className="font-bold text-lg grow">Change Pin</span>
                    </div>
                    <div className="text-base text-[#7A7886] my-[25px]">
                        <span>Enter your current 6 digits ClickPay PIN below to continue to the next steps.</span>
                    </div>

                    {/* Form PIN */}
                    <div>
                    <form className="pt-[5%]" onSubmit={createPin}>
                        <div className="flex gap-[23px] justify-center">
                            <div className={`bg-white rounded-xl text-center px-1 py-2 border-[1px] ${pin1 ? "border-[#2C74B3]" : "border-[#A9A9A9]"}`}>
                                <input
                                    onChange={(e) => {
                                        setPin1(e.target.value.length);
                                        return changeInput(e);
                                    }}
                                    className={`grow no_arrows w-[53px] h-[65px] rounded-md border-[#A9A9A9] focus:outline-none text-4xl text-center ${pin1 ? null : "border-b-[1px]"}`}
                                    type="number"
                                    ref={input1}
                                    name="pin1"
                                    id="pin1"
                                    maxLength="1"
                                />
                            </div>

                            <div className={`bg-white rounded-xl text-center px-1 py-2 border-[1px] ${pin2 ? "border-[#2C74B3]" : "border-[#A9A9A9]"}`}>
                                <input
                                    onChange={(e) => {
                                        setPin2(e.target.value.length);
                                        return changeInput(e);
                                    }}
                                    className={`grow no_arrows w-[53px] h-[65px] rounded-md border-[#A9A9A9] focus:outline-none text-4xl text-center ${pin2 ? null : "border-b-[1px]"}`}
                                    type="number"
                                    ref={input2}
                                    name="pin2"
                                    id="pin2"
                                    maxLength="1"
                                />
                            </div>

                            <div className={`bg-white rounded-xl text-center px-1 py-2 border-[1px] ${pin3 ? "border-[#2C74B3]" : "border-[#A9A9A9]"}`}>
                                <input
                                    onChange={(e) => {
                                        setPin3(e.target.value.length);
                                        return changeInput(e);
                                    }}
                                    className={`grow no_arrows w-[53px] h-[65px] rounded-md border-[#A9A9A9] focus:outline-none text-4xl text-center ${pin3 ? null : "border-b-[1px]"}`}
                                    type="number"
                                    ref={input3}
                                    name="pin3"
                                    id="pin3"
                                    maxLength="1"
                                />
                            </div>

                            <div className={`bg-white rounded-xl text-center px-1 py-2 border-[1px] ${pin4 ? "border-[#2C74B3]" : "border-[#A9A9A9]"}`}>
                                <input
                                    onChange={(e) => {
                                        setPin4(e.target.value.length);
                                        return changeInput(e);
                                    }}
                                    className={`grow no_arrows w-[53px] h-[65px] rounded-md border-[#A9A9A9] focus:outline-none text-4xl text-center ${pin4 ? null : "border-b-[1px]"}`}
                                    type="number"
                                    ref={input4}
                                    name="pin4"
                                    id="pin4"
                                    maxLength="1"
                                />
                            </div>
                            <div className={`bg-white rounded-xl text-center px-1 py-2 border-[1px] ${pin5 ? "border-[#2C74B3]" : "border-[#A9A9A9]"}`}>
                                <input
                                    onChange={(e) => {
                                        setPin5(e.target.value.length);
                                        return changeInput(e);
                                    }}
                                    className={`grow no_arrows w-[53px] h-[65px] rounded-md border-[#A9A9A9] focus:outline-none text-4xl text-center ${pin5 ? null : "border-b-[1px]"}`}
                                    type="number"
                                    ref={input5}
                                    name="pin5"
                                    id="pin5"
                                    maxLength="1"
                                />
                            </div>
                            <div className={`bg-white rounded-xl text-center px-1 py-2 border-[1px] ${pin6 ? "border-[#2C74B3]" : "border-[#A9A9A9]"}`}>
                                <input
                                    onChange={(e) => {
                                        setPin6(e.target.value.length);
                                        return changeInput(e);
                                    }}
                                    className={`grow no_arrows w-[53px] h-[65px] rounded-md border-[#A9A9A9] focus:outline-none text-4xl text-center ${pin6 ? null : "border-b-[1px]"}`}
                                    type="number"
                                    ref={input6}
                                    name="pin6"
                                    id="pin6"
                                    maxLength="1"
                                />
                            </div>
                        </div>
                        <div className="flex justify-center mt-[10%]">
                            <button type="submit" class={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${pin1 && pin2 && pin3 && pin4 && pin5 && pin6 ? "bg-[#2C74B3]" : "bg-[#DADADA]"}`} disabled={pin1 && pin2 && pin3 && pin4 && pin5 && pin6 ? false : true}>Submit</button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
            <FooterUser></FooterUser>
        </>
    )
}

export default ChangePin