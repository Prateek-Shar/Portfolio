import { useState } from "react"

interface Switch {
    SwitchToAbout : () => void
    SwitchToContact : () => void
    SwitchToProject : () => void
}



const Quick_links:React.FC<Switch> = ({SwitchToAbout , SwitchToContact , SwitchToProject}) => {
    
    const [loadUnderlineOne , setUnderlineOne] = useState(false)
    const [loadUnderlineTwo , setUnderlineTwo] = useState(false)
    const [loadUnderlineThree , setUnderlineThree] = useState(false)

    const enableUnderline = () => {
        setUnderlineOne(true)
    }

    const disableUnderline = () => {
        setUnderlineOne(false)
    }


    const enableUnderlineTwo = () => {
        setUnderlineTwo(true)
    }

    const disableUnderlineTwo = () => {
        setUnderlineTwo(false)
    }


    const enableUnderlineThree = () => {
        setUnderlineThree(true)
    }

    const disableUnderlineThree = () => {
        setUnderlineThree(false)
    }


    return (
        <div className="w-full flex">

            <div className="w-[90%] flex flex-col">
                <div className="w-full">
                    <h2 className="font-Poet text-2xl p-2 pl-1 text-[#d9d9d9] mm:pl-2">Quick Links</h2>
                </div>

                <div className="w-full mt-2 xl:mt-4">
                    <div className="xl:w-[20%] hover:cursor-pointer xl:ml-0 mm:ml-1 mm:mt-2">
                        <p className="font-Poppins text-gray-500 p-0.5 ml-1 mm:pl-1.5 hover:text-white" onMouseEnter={enableUnderline} onMouseLeave={disableUnderline} onClick={SwitchToAbout}>About</p> 

                        {loadUnderlineOne && (
                            <div className="w-full animate-undeline">
                                <div className="xl:w-[58%] h-[1px] bg-[#e0e4eb] ml-1.5 mm:w-[17%] mm:ml-1 xl:ml-2.5" />
                            </div>
                        )}
                    </div>

                    <div className="xl:w-[20%] hover:cursor-pointer xl:mt-2 mm:ml-1 mm:mt-2">
                        <p className="font-Poppins text-gray-500 p-0.5 ml-1 hover:text-white" onMouseEnter={enableUnderlineTwo} onTouchMove={enableUnderline} onMouseLeave={disableUnderlineTwo} onClick={SwitchToContact}>Contact</p>

                        {loadUnderlineTwo && (
                            <div className="w-full animate-undeline">
                                <div className="xl:w-[75%] h-[1px] bg-[#e0e4eb] mm:w-[20%] mm:ml-2 xl:ml-1.5" />
                            </div>
                        )}
                    </div>

                    <div className="xl:w-[20%] hover:cursor-pointer xl:mt-2 mm:ml-1 mm:mt-2">
                        <p className="font-Poppins text-gray-500 p-0.5 ml-1 hover:text-white" onMouseEnter={enableUnderlineThree} onMouseLeave={disableUnderlineThree} onClick={SwitchToProject}>Projects</p>

                        {loadUnderlineThree && (
                            <div className="w-full animate-undeline rounded-full">
                                <div className="xl:w-[75%] h-[1px] bg-[#e0e4eb] ml-1.5 mm:w-[20%] mm:ml-1.5" />
                            </div>
                        )}
                    </div>
                </div>
            </div>  

            
        </div>
    )
}



export default Quick_links