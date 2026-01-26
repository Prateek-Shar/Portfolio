import code from "/Images/coding.png"
import pallete from "/Images/pallete.png"
import rocket from "/Images/rocket.png"

const Skill_box = () => {

    return (
        <div className="w-full flex justify-center items-center">

            <div className="xl:w-[75%] 2xl:w-[60%] xl:flex xl:flex-row xl:justify-evenly mt-10 mb-40 ml:flex ml:flex-col ml:w-[90%] ml:items-center mm:flex mm:flex-col mm:w-[90%] mm:items-center">

                <div className="xl:w-[30%] xl:mt-2 xl:mb-2 bg-[#e0e5eb] shadow-2xl rounded-4xl ml:w-full mm:w-full">
                    <div className="w-full flex justify-center xl:mt-6 xl:mb-2 ml:mt-4 ml:mb-4 mm:mt-4 mm:mb-4" >
                        <div className="xl:w-[28%] ml:w-[28%] mm:w-[28%] 2xl:w-[25%] 2xl:h-21 xl:h-20 ml:h-25 mm:h-24 flex justify-center items-center bg-[#132135] rounded-[100px] ">
                            <div className="w-[40%]">
                                <img src={code} className=""/>
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex justify-center">
                        <div className="xl:w-[60%] xl:flex xl:justify-center w-[50%] ml:flex ml:justify-center mm:flex mm:justify-center">
                            <p className="font-Poppins p-2 text-[#0a0f1f]">Coding Wizard 🧙‍♂️</p>
                        </div>
                    </div>

                    <div className="w-full flex justify-center xl:mt-4 xl:mb-6 mm:mt-4 mm:mb-6">
                        <div className="xl:w-[80%] xl:flex xl:justify-center xl:items-center flex justify-center items-center ml:w-[90%] ml:p-2 ml:mb-2 mm:w-[90%] mm:p-2 ">
                           <p className="font-Poppins text-[#5c626c]">I speak fluent React, TypeScript, and Node.js! Plus I'm learning alien languages (aka new frameworks) daily! 👽</p> 
                        </div>
                    </div>
                </div>


                
                <div className="xl:w-[30%] xl:mt-0 bg-[#e0e5eb] shadow-2xl rounded-4xl ml:w-full ml:mt-10 mm:w-full mm:mt-10">
                    <div className="w-full flex justify-center mt-10 xl:mb-2 ml:mt-4 ml:mb-4 mm:mt-4 mm:mb-4">
                        <div className="xl:w-[27%] ml:w-[28%] 2xl:w-[26%] 2xl:h-22 xl:h-20 mm:w-[28%] mm:h-24 flex justify-center items-center bg-[#132135] rounded-[100px] ml:h-25">
                            <div className="w-[60%] mt-2 mb-2">
                                <img src={pallete} />
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex justify-center mt-2">
                        <div className="xl:w-[65%] ml:flex ml:justify-center mm:flex mm:justify-center">
                            <p className="font-Poppins p-2 text-[#0a0f1f]">Design Magician 🎨</p>
                        </div>
                    </div>

                    <div className="w-full flex justify-center xl:mt-4 xl:mb-13 mm:mt-4">
                        <div className="xl:w-[70%] flex justify-center items-center ml:w-[90%] ml:p-2 ml:mb-2 mm:w-[90%] mm:ml-2 mm:mb-7">
                           <p className="font-Poppins text-[#5c626c]">Turning boring interfaces into eye-candy that users actually want to click! ✨</p> 
                        </div>
                    </div>
                </div>




                <div className="xl:w-[30%] xl:mt-0 bg-[#e0e5eb] shadow-2xl rounded-4xl ml:w-full ml:mt-10 mm:w-full mm:mt-10">
                    <div className="w-full flex justify-center xl:mt-3 xl:mb-2 ml:mt-4 ml:mb-4 mm:mt-4 mm:mb-4">
                        <div className="xl:w-[27%] 2xl:w-[25%] 2xl:h-21 xl:h-19 flex justify-center items-center bg-[#132135] rounded-[100px] ml:h-25 ml:w-[28%] mm:w-[28%] mm:h-25">
                            <div className="w-[60%] mt-2 mb-2">
                                <img src={rocket} className="ml:p-1"/>
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex justify-center">
                        <div className="xl:w-[70%] xl:flex xl:justify-center xl:items-center w-[50%] ml:flex ml:justify-center mm:flex mm:justify-center">
                            <p className="font-Poppins p-2 text-[#0a0f1f]">Speed Demon🏎️</p>
                        </div>
                    </div>

                    <div className="w-full flex justify-center xl:mt-4 xl:mb-3 mm:mt-6">
                        <div className="xl:w-[70%] flex justify-center items-center ml:w-[90%] ml:p-2 xl:p-1 ml:mb-2 mm:w-[90%] mm:p-1 mm:mb-6">
                           <p className="font-Poppins text-[#5c626c]">Building lightning-fast apps that load faster than you can say 'performance optimization'! ⚡ Zoom zoom! 🚀</p> 
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
}

export default Skill_box;