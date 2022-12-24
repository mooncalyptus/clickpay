import Link from "next/link";
import Image from "next/image";

const PinBlank = () => {
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
                    <form className="pt-[5%]">
                        <div className="flex gap-[23px] justify-center">
                        <input type="text" className="border border-2 w-[53px] h-[65px] rounded-md"></input>
                        <input type="text" className="border border-2 w-[53px] h-[65px] rounded-md"></input>
                        <input type="text" className="border border-2 w-[53px] h-[65px] rounded-md"></input>
                        <input type="text" className="border border-2 w-[53px] h-[65px] rounded-md"></input>
                        <input type="text" className="border border-2 w-[53px] h-[65px] rounded-md"></input>
                        <input type="text" className="border border-2 w-[53px] h-[65px] rounded-md"></input>
                        </div>
                        <div className="flex justify-center mt-[10%]">
                            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default PinBlank