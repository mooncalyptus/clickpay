import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <>
            <footer className="bg-[#82C3EC] font-nunito">
                <div>
                    <Image src={require('../assets/logo-remove.png')} className="ml-[5%]" width="150" height="40" alt="desc" ></Image>
                    <div className="grid grid-cols-4 ml-[5%]">
                        <div className="text-[#F1F6F5]">Simplify financial needs and saving much time in banking needs with one single app.</div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <hr className="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700 ml-[5%] mr-[5%]"></hr>
                    <div className="flex ml-[5%] mr-[5%]">
                        <div className="grow">
                            <span className="text-[#F1F6F5]">2022 ClickPay. All right reserved.</span>
                        </div>
                        <div className="text-[#F1F6F5] flex gap-[40px] mb-[5%]">
                            <span>+62 5637 8882 9901</span>
                            <span>contact@clickpay.com</span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer