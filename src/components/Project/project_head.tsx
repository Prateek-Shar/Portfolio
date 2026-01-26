import playground from "/Images/playground.png"
import gamepad from "/Images/gamepad.png"

const Project_head = () => {

    return (
        <div className="w-[80%] flex flex-col items-center">

            <div className="w-full flex justify-center items-center mt-4">
                <div className="xl:w-[10%] flex justify-center ml:w-[40%] mm:w-[40%] 2xl:w-[8%]">
                    <img src={playground} className="xl:object-contain xl:w-[60%] xl:p-2 2xl:p-2 object-contain w-[50%] p-2 ml:p-4 mm:p-4" />
                </div>
            </div>

            <div className="w-full flex justify-center">
                <div className="xl:w-[45%] flex ml:w-full mm:w-full 2xl:w-[45%]">
                    <div className="w-[80%] flex justify-center items-center 2xl:w-[90%] mm:w-[90%]">
                        <p className="font-Poppins xl:text-3xl font-bold p-2 ml:text-[22px] mm:text-[22px] 2xl:text-[40px] text-[#0c1931]">My Project Playground</p>
                    </div>

                    <div className="w-[20%] ml:flex ml:items-center mm:flex mm:items-center ml:justify-center 2xl:w-[10%] mm:w-[10%]">
                        <img src={gamepad} className="p-2 xl:object-contain xl:p-2 object-contain xl:w-[60%] 2xl:w-[90%] ml:w-[90%] mm:w-[90%] mm:p-1"/>
                    </div>
                </div>
            </div>

            <div className="2xl:w-[60%] xl:w-[75%] xl:flex xl:justify-center xl:items-center xl:mt-4 flex justify-center items-center ml:w-full mm:w-full">
                <p className="font-Poppins xl:p-2 p-2 ml:p-1 xl:text-[16px] ml:text-[13px] mm:text-[13px] mm:p-1 text-[#282c31]">Welcome to my digital circus! 🎪 These are some of my favorite creations that I've built with lots of ☕, a sprinkle of ✨, and way too much excitement! 🤩</p>
            </div>
        </div>
    )
}

export default Project_head