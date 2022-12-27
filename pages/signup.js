import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import Router from 'next/router';
// import { useNavigate } from "react-router-dom";

const SignUp = () => {
    // const router = useRouter();
    const url = "https://68xkph-8888.preview.csb.app/auth/register"
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })

    async function submit(e) {
        e.preventDefault();
        try {
            await axios.post(url, {
                // data for the register API
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                password: data.password
            });
            Router.push('/login');
        } catch (error) {
            // handle error
            console.log(error)
        }
    }

    function handle(e) {
        const newData = { ...data }
        newData[e.target.id] = e.target.value
        setData(newData)
    }
    return (
        <>
            <div className="md:flex font-nunito">
                <div className="hidden md:flex flex-col bg-[#82C3EC] overflow-hidden">
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

                <div className="flex flex-col pl-[50px] pt-[5%] pr-[50px] overflow-x-auto">
                    <span className="text-2xl font-bold">Start Accessing Banking Needs
                        With All Devices and All Platforms
                        With 30.000+ Users</span>
                    <span className="text-base text-[#3A3D42] opacity-60 pt-[5%]">Transfering money is eassier than ever, you can access ClickPay wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</span>
                    <form className="pt-[5%]" onSubmit={(e) => submit(e)}>
                        <div className="relative mb-6">
                            <div className="absolute inset-y-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                            </div>
                            <input onChange={(e) => handle(e)} value={data.firstName} type="text" name="firstName" className="w-full border-2 border-slate-300 placeholder:pl-[10%] rounded-lg" placeholder="Please write your first name" id="firstName"></input>
                        </div>

                        <div className="relative mb-6">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                            </div>
                            <input onChange={(e) => handle(e)} value={data.lastName} type="text" name="lastName" className="w-full border-2 border-slate-300 placeholder:pl-[10%] rounded-lg" placeholder="Please write your last name" id="lastName"></input>
                        </div>

                        <div className="relative mb-6">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            </div>
                            <input onChange={(e) => handle(e)} value={data.email} type="email" name="email" className="w-full border-2 border-slate-300 placeholder:pl-[10%] rounded-lg" placeholder="Please write your email" id="email"></input>
                        </div>

                        <div className="relative mb-6">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                            </div>
                            <input onChange={(e) => handle(e)} value={data.password} type="password" name="password" className="w-full border-2 border-slate-300 placeholder:pl-[10%] rounded-lg" placeholder="Please write your password" id="password"></input>
                        </div>
                        <div className="flex justify-center">
                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                        </div>
                    </form>
                    <div className="flex justify-center mt-10 mb-12">
                        <span>Already have an account? Let’s <Link href="/login">Login</Link></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp