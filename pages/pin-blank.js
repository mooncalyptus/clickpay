import Link from "next/link";
import axios from "axios";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import { useRouter } from "next/router";
import { useRef, useState } from "react";

const PinBlank = () => {
    const token = useSelector((state) => state.auth.token)
    const decode = jwt_decode(token)
    // console.log(decode)
    const userId = decode.id
    // console.log(userId)
    const router = useRouter()

    const [pin1, setPin1] = useState(0);
    const [pin2, setPin2] = useState(0);
    const [pin3, setPin3] = useState(0);
    const [pin4, setPin4] = useState(0);
    const [pin5, setPin5] = useState(0);
    const [pin6, setPin6] = useState(0);

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

        let pin = ""
        pin += pin1
        pin += pin2
        pin += pin3
        pin += pin4
        pin += pin5
        pin += pin6

        try {
            const { data } = await axios.post("https://68xkph-8888.preview.csb.app/auth/set-pin", { userId: decode.id, pin })
            router.push("/pin-success")
        } catch (err) {
            console.log(err);
        }
    }

    const changeInput = (e) => {
        if (e.target.value.length > 1) {
            e.target.value = e.target.value.slice(0, 1);
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
            <div className="md:flex font-nunito">
                <div className="hidden md:flex flex-col bg-[#82C3EC]">
                    <Image src={require('../assets/logo-remove.png')} className="ml-[5%]" width="150" height="40" alt="desc" ></Image>
                    <div className="flex justify-center">
                        <Image src={require('../assets/phone-form.png')} height="300" alt="desc" ></Image>
                    </div>
                    <div className="flex flex-col mx-[10%] mb-[3.5%]">
                        <span className="text-[#F1F6F5] text-6 font-bold">App that Covering Banking Needs.</span>
                        <span className="text-[#F1F6F5] text-base">ClickPay is an application that focussing in banking needs for all users
                            in the world. Always updated and always following world trends.
                            5000+ users registered in ClickPay everyday with worldwide
                            users coverage.</span>
                    </div>
                </div>

                <div className="flex flex-col pl-[50px] pt-[5%] pr-[50px]">
                    <span className="text-2xl font-bold">Secure Your Account, Your Wallet,
                        and Your Data With 6 Digits PIN
                        That You Created Yourself.</span>
                    <span className="text-base text-[#3A3D42] opacity-60 pt-[5%]">Create 6 digits pin to secure all your money and your data in ClickPay app. Keep it secret and don’t tell anyone about your ClickPay account password and the PIN.</span>

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
                    <div className="flex flex-col justify-center items-center mt-[30px] gap-4">
                        <div>Already have pin?</div>
                    <Link href="/home"><button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Go to Dashboard</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PinBlank