import message from "/Images/message.png";
import email from "/Images/email.png"
import call from "/Images/telephone_2.png"
import pin from "/Images/pin.png"
import tea from "/Images/tea.png"
import graph from "/Images/graph.png"
import infinity from "/Images/infinity.png"

const Left_side_contact = () => {

    return (

        <div className="w-full">

            <div className="w-[80%] flex">
                <div className="w-[10%]">
                    <img src={message} className=" p-2" />
                </div>

                <div className="w-[70%] flex items-center">
                    <p className="font-Poet xl:text-[24px] text-[30px] pl-1 text-[#0c1931]">Let's start something epic</p>
                </div>

                {/* <div className="w-[10%] ml-12">
                    <img src={bullseye} className=" p-2"/>
                </div> */}
            </div>

            
            <div className="w-[90%]">
                <p className="font-Poppins text-[15px]  p-3">I'm like a golden retriever when it comes to new projects - I get super excited! 🐕 Whether you're a startup with big dreams, a company looking to level up, or just someone with a cool idea, I'm all ears! 👂✨</p>
            </div>

            <div className="w-full flex flex-col mt-4">

                <div className="w-[90%] bg-[#e9ecef] shadow-2xs  flex rounded-[10px]">
                    <div className="w-[30%] flex justify-center items-center">
                         <div className="w-[45%] 2xl:h-17 xl:h-16 h-18 flex justify-center items-center bg-gradient-to-r from-blue-400 to-purple-400 rounded-[100px] m-2">
                             <img src={email} className="object-contain w-[50%]"/>
                       </div>
                    </div>

                    <div className="w-[70%] flex flex-col justify-evenly mt-1 mb-1">
                        
                        <div className="w-full">
                             <p className="font-Poet text-[#0c1931] text-[20px] pl-2 pt-1 pb-1">Email Me !</p>
                        </div>
                        
                        <div className="w-full">
                             <p className="font-Poppins text-[16px] text-[#282c31] pl-2 pt-1 pb-1">prateeks1018@gmail.com</p>
                        </div>

                        <div className="w-full">
                             <p className="font-Poppins text-[12px] text-[#6d7286] pl-2 pt-1 pb-1">I reply faster than pizza delievery</p>
                        </div>
                    </div>
                </div> 


                <div className="w-[90%] bg-[#e9ecef] shadow-2xs flex mt-2 rounded-[10px]">
                    <div className="w-[30%] flex justify-center items-center ">
                        <div className="w-[45%] 2xl:h-17 xl:h-15 h-18 flex justify-center items-center bg-gradient-to-r from-blue-400 to-purple-400 rounded-[100px] m-2">
                            <img src={call} className="object-contain w-[50%]"/>
                        </div>
                    </div>

                    <div className="w-[70%] flex flex-col justify-evenly mt-1 mb-1">
                        
                        <div className="w-full">
                            <p className="font-Poet text-[#0c1931] text-[20px] pl-2 pt-1 pb-1">Ring Ring !</p>
                        </div>
                    
                        <div className="w-full">
                            <p className="font-Poppins text-[16px] text-[#282c31] pl-2 pt-1 pb-1">+91-7390900765</p>
                        </div>

                        <div className="w-full">
                            <p className="font-Poppins text-[12px] text-[#6d7286] pl-2 pt-1 pb-1">Let's chat over virtual tea! ☕ </p>
                        </div>
                    </div>
                </div>


                <div className="w-[90%] bg-[#e9ecef] shadow-2xs flex mt-2 rounded-[10px]">
                    <div className="w-[30%] flex justify-center items-center">
                        <div className="w-[45%]  2xl:h-17 xl:h-15 h-18 flex justify-center items-center bg-gradient-to-r from-blue-400 to-purple-400 rounded-[100px] m-2">
                            <img src={pin} className="object-contain w-[50%]"/>
                        </div>
                    </div>

                    <div className="w-[70%] flex flex-col justify-evenly mt-1 mb-1">
                        
                        <div className="w-full">
                            <p className="font-Poet text-[#0c1931] text-[20px] pl-2 pt-1 pb-1">Find Me !</p>
                        </div>
                        
                        <div className="w-full">
                            <p className="font-Poppins text-[16px] text-[#282c31] pl-2 pt-1 pb-1">Lucknow , Uttar Pradesh</p>
                        </div>

                        <div className="w-full">
                            <p className="font-Poppins text-[12px] text-[#6d7286] pl-2 pt-1 pb-1">Land of Nawabs</p>
                        </div>
                    </div>
                </div>   

                <div className="w-full xl:mt-7">
                    <div className="w-[90%] flex flex-col bg-[#e9ecef] shadow-2xs rounded-[10px]">
                        <div className="w-[35%] mt-2 mb-2 flex">
                            <div className="w-[20%] mt-2 mb-2 flex justify-center items-center animate-bounce">
                                <img src={tea} className="object-contain w-[80%] p-1"/>
                            </div>

                            <div className="w-[60%] mt-2 mb-2 flex items-center justify-center">
                                <p className="font-Poet text-[#0c1931]">Quick Stats</p>
                            </div>

                            <div className="w-[20%] mt-2 mb-2 flex justify-center items-center">
                                <img src={graph} className="object-contain w-[80%] p-1"/>
                            </div>
                        </div>

                        <div className="full flex justify-evenly">
                            <div className="w-[35%] flex flex-col">
                                <div className="w-full flex justify-center">
                                    <p className="font-Poppins font-bold text-2xl p-1 text-[#282c31]">48 Hrs</p>
                                </div>

                                <div className="w-full flex justify-center">
                                    <p className="font-Poppins p-2 text-[#6d7286] xl:text-[14px]">Response Time 🏃‍♂️</p>
                                </div>
                            </div>

                            <div className="w-[38%]  flex flex-col items-center">
                                <div className="w-[30%] flex justify-center items-center">
                                    <img src={infinity} className="object-contain w-[70%]"/>
                                </div>

                                <div className="w-full flex justify-center xl:mt-0.5">
                                    <p className="font-Poppins p-2 xl:text-[14px] text-[#6d7286]">Enthusiasm Level 🎉</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default Left_side_contact