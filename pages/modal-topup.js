import React from "react"

const ModalTopUp = ({ isVisible, onClose }) => {
    if (!isVisible) return null

    const handleClose = (e) => {
        if(e.target.id === "wrapper") onClose()
    }
    return (
        <>
            <div className="fixed inset-0 backdrop-blur-sm flex justify-center items-center" id="wrapper" onClick={handleClose}>
                <div className="w-[500px] flex flex-col">
                    {/* <button className="text-black text-xl place-self-end" onClick={() => onClose()}>X</button> */}
                    <div className="bg-white p-2 rounded-lg px-[35px]">
                        <div className="flex">
                            <div className="grow text-lg font-bold">Topup</div>
                            <button className="text-black text-xl place-self-end text-lg font-bold" onClick={() => onClose()}>X</button>
                        </div>
                        <div className="mt-5">
                            <div className="text-base text-[#3A3D42] opacity-60">Enter the amount of money, and click submit</div>
                        </div>
                        <div className="flex mt-[43px]">
                            <input type="text" className="w-[437px] h-[65px] border border-1 border-[#A9A9A9] rounded-lg"></input>
                        </div>
                        <div className="flex justify-end mt-[77px] mb-[35px]">
                        <button className="btn bg-[#82C3EC]">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalTopUp