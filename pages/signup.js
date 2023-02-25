import React, { useState } from "react";
import http from "../src/helpers/http";
import {login as loginAction} from "../src/redux/reducers/auth"
import { useDispatch } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/router'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Icon } from '@iconify/react';

const SignUp = () => {
    const dispatch = useDispatch()
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter()
    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required("First Name is required"),
        lastName: Yup.string().required("Last Name is required"),
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .required('Password is required'),
    });

    const handleSubmit = async (value) => {
        try {
            const response = await http().post("/auth/register", value)
            const token = response?.data?.results?.token
            dispatch(loginAction({token}))
            router.push("/login")
        } catch (error) {
            console.log(error)
        }
    }
    // const url = "https://68xkph-8888.preview.csb.app/auth/register"
    // const handleSubmit = async (value) => {
    //     // value.preventDefault();
    //     try {
    //         const response = await axios.post(url, value);
    //         if(value){
    //             alert('login berhasil')
    //         }
    //         console.log(response);
    //         router.push("/login")
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        },
        validationSchema,
        onSubmit: handleSubmit,
    });
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
                    {/* FORM REGISTER */}
                    <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
                    <div className="hidden">
                            <div className="alert alert-success shadow-lg">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    <span>Register success</span>
                                </div>
                            </div>
                            </div>
                        <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            className="border-[1px] border-solid border-neutral bg-white w-[100%] pl-3 h-[50px] rounded-[4px]"
                            placeholder="Input your First Name"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.firstName}
                        />
                        {formik.errors.firstName && <div>{formik.errors.firstName}</div>}

                        <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            className="border-[1px] border-solid border-neutral bg-white w-[100%] pl-3 h-[50px] rounded-[4px]"
                            placeholder="Input your Last Name"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.lastName}
                        />
                        {formik.errors.lastName && <div>{formik.errors.lastName}</div>}

                        <input
                            id="email"
                            name="email"
                            type="email"
                            className="border-[1px] border-solid border-neutral bg-white w-[100%] pl-3 h-[50px] rounded-[4px]"
                            placeholder="Input your Email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        {formik.errors.email && <div>{formik.errors.email}</div>}

                        <div className="mb-5 relative">
                            <input
                                id="password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                className="border-[1px] border-solid border-neutral bg-white w-[100%] pl-3 h-[50px] rounded-[4px]"
                                placeholder="Input your Password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                            />
                            {showPassword ? (
                                <Icon
                                    className="absolute top-[10px] right-4 w-[30px] h-auto"
                                    icon="mdi:eye"
                                    onClick={() => setShowPassword(!showPassword)}
                                />
                            ) : (
                                <Icon
                                    className="absolute top-[10px] right-4 w-[30px] h-auto"
                                    icon="mdi:eye-off"
                                    onClick={() => setShowPassword(!showPassword)}
                                />
                            )}
                            {formik.errors.password && <div>{formik.errors.password}</div>}
                        </div>

                        <button type="submit" className="border-[1px] border-solid border-[#82C3EC] bg-[#82C3EC] w-[100%] pl-3 h-[50px] rounded-[4px] text-white">Submit</button>
                        
                    </form>

                    <div className="flex justify-center mt-10 mb-12">
                        <span>Already have an account? <Link href="/login">Let’s Login</Link></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp