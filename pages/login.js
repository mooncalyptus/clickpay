import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import axios from "axios";
import { useRouter } from 'next/router'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Icon } from '@iconify/react';
import {Login as loginAction} from "../src/redux/actions/auth"

const Login = () => {
    const dispatch = useDispatch()
    const {
        error, loading
    } = useSelector((state) => state.auth)
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter()
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .required('Password is required'),
    });
    const url = "https://68xkph-8888.preview.csb.app/auth/login"
    const handleSubmit = async (value) => {
        const email = value.email
        const password = value.password
        dispatch(loginAction({email, password, cb: ()=> router.push("/pin-blank")}))
    };
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema,
        onSubmit: handleSubmit,
    });
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
                    <span className="text-2xl font-bold">Start Accessing Banking Needs
                        With All Devices and All Platforms
                        With 30.000+ Users</span>
                    <span className="text-base text-[#3A3D42] opacity-60 pt-[5%]">Transfering money is eassier than ever, you can access ClickPay wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</span>

                    <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
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
                        <div className="flex justify-end">
                            <span className="text-[#3A3D42] opacity-80 text-base">Forgot Password</span>
                        </div>
                        <div className="flex justify-center">
                        <button type="submit" className="border-[1px] border-solid border-[#82C3EC] bg-[#82C3EC] w-[100%] pl-3 h-[50px] rounded-[4px] text-white">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login