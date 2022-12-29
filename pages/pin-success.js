import Link from "next/link";
import Image from "next/image";

const PinSuccess = () => {
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
                    <div className="bg-[#1EC15F] w-[70px] h-[70px] flex justify-center items-center rounded-full">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-2xl font-bold mt-[50px]">Your PIN Was Successfully Created</span>
                    <span className="text-base text-[#3A3D42] opacity-60 mt-10">Your PIN was successfully created and you can now access all the features in ClickPay.</span>
                    <div className="flex justify-center mt-[10%]">
                            <Link href="/home"><button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Go to Dashboard</button></Link>
                        </div>
                </div>
            </div>
        </>
    )
}

export default PinSuccess