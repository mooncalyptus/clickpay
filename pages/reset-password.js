import Link from "next/link";
import Image from "next/image";

const ResetPassword = () => {
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
                    <span className="text-2xl font-bold">Did You Forgot Your Password?
                        Don’t Worry, You Can Reset Your
                        Password In a Minutes.</span>
                    <span className="text-base text-[#3A3D42] opacity-60 pt-[5%]">To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens.</span>
                    <form className="pt-[5%]">
                        <div className="relative mb-6">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                            </div>
                            <input type="text" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Input your email"></input>
                        </div>

                        <div className="flex justify-center">
                            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Confirm</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ResetPassword