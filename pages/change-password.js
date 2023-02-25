import React from "react";
import http from "../src/helpers/http";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import YupPassword from 'yup-password'
import FeatherIcon from 'feather-icons-react'
import Image from "next/image";
import FooterUser from "../components/footerUser";
import Navbar from "../components/navbar";
YupPassword(Yup)


const passwordSchema = Yup.object().shape({
    currentPassword: Yup.string()
    .password()
    .min(8, 'Min length 8')
    .minLowercase(1, 'Min lowercase 1')
    .minUppercase(1, 'Min uppercase 1')
    .minSymbols(1, 'Min symbol 1')
    .minNumbers(1, 'Min number 1')
    .required('Password required'),
    newPassword: Yup.string()
    .password()
    .min(8, 'Min length 8')
    .minLowercase(1, 'Min lowercase 1')
    .minUppercase(1, 'Min uppercase 1')
    .minSymbols(1, 'Min symbol 1')
    .minNumbers(1, 'Min number 1')
    .required('Password required'),
confirmPassword: Yup.string().oneOf(
    [Yup.ref('newPassword'), null],
    'Passwords must match',
)
})
const ChangePassword = () => {
    const router = useRouter()
    const token = useSelector((state) => state.auth.token)
    const [profile, setProfile] = React.useState({})
    const [currentPassword, setCurrentPassword] = React.useState('')
    const [newPassword, setNewPassword] = React.useState('')
    const [confirmPassword, setConfirmPassword] = React.useState('')

    const getProfile = async () => {
        try {
            const response = await http(token).get("/profile")
            setProfile(response?.data?.results)
        } catch (error) {
            if (error) throw error
        }
    }

    const UpdatePassword = async (e) => {
        try{
            e.preventDefault()
            const {data} = await http(token).post("/profile/change-password", {
                currentPassword, newPassword, confirmPassword
            })
            alert('password berhasil diupdate')
            router.push("/personal-info")
        } catch (error) {
            if(error) throw error
        }
    }

    const [eyeClicked2, setEyeClicked2] = React.useState(false)
    const showCurrentPassword = () => {
        if (eyeClicked === false) {
            setEyeClicked2(true)
        } else {
            setEyeClicked2(false)
        }
    }
    const [eyeClicked1, setEyeClicked1] = React.useState(false)
    const showConfirmPassword = () => {
        if (eyeClicked1 === false) {
            setEyeClicked1(true)
        } else {
            setEyeClicked1(false)
        }
    }

    const [eyeClicked, setEyeClicked] = React.useState(false)
    const showNewPassword = () => {
        if (eyeClicked === false) {
            setEyeClicked(true)
        } else {
            setEyeClicked(false)
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
                        <span className="font-bold text-lg grow">Change Password</span>
                    </div>
                    <div className="text-base text-[#7A7886] mt-[25px] mb-[25px]">
                        <div>You must enter your current password and then</div>
                        <div>type your new password twice.</div>
                    </div>

                    <form onSubmit={UpdatePassword}>
                    <div className="relative mb-6 w-80">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                        <FeatherIcon onClick={showNewPassword} icon={eyeClicked ? 'eye-off' : 'eye'} />
                        </div>
                        <input type={eyeClicked ? 'text' : 'password'} id="currentPassword" className="h-11 px-5 pl-10 w-full outline-none border-b-2 border-gray-700 focus:border-[#CE7777] peer" placeholder="Input your Password" onChange={e => setCurrentPassword(e.target.value)}></input>
                    </div>

                    <div className="relative mb-6 w-80">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                        <FeatherIcon onClick={showNewPassword} icon={eyeClicked ? 'eye-off' : 'eye'} />
                        </div>
                        <input type={eyeClicked ? 'text' : 'password'} id="newPassword" className="h-11 px-5 pl-10 w-full outline-none border-b-2 border-gray-700 focus:border-[#CE7777] peer" placeholder="New Password" onChange={e => setNewPassword(e.target.value)}></input>
                    </div>

                    <div className="relative mb-6 w-80">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                        <FeatherIcon onClick={showNewPassword} icon={eyeClicked ? 'eye-off' : 'eye'} />
                        </div>
                        <input type={eyeClicked ? 'text' : 'password'} id="confirmPassword" className="h-11 px-5 pl-10 w-full outline-none border-b-2 border-gray-700 focus:border-[#CE7777] peer" placeholder="Repeat new Password" onChange={e => setConfirmPassword(e.target.value)}></input>
                    </div>
                    <button type="submit" className="bg-[#82C3EC] w-80 py-4 rounded-lg">Change Password</button>
                    </form>
                </div>
            </div>
            <FooterUser></FooterUser>
        </>
    )
}

export default ChangePassword