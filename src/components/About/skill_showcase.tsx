import react from "../../Images/react.png";
import typescript from "../../Images/typescript.png"
import nodejs from "../../Images/NodeJS.png"
import python from "../../Images/python.png";
import git from "../../Images/git.png"
import mongo from "../../Images/mongo.png"
import exp from "../../Images/express.png"
import CSharp from "../../Images/CSharp.png"
import bullseye from "../../Images/bullseye.png"
import clock from "../../Images/clock.png"
import smile from "../../Images/smile.png"
import tea from "../../Images/tea.png"
import next from "../../Images/next.png"
import unity from "../../Images/unity.png";


const Skill_showcase = () => {
    
    return (
        <div className="xl:w-[80%] 2xl:w-[60%] xl:flex xl:flex-col mb-20 bg-[#e0e4eb] shadow-2xl rounded-4xl ml:flex ml:flex-col ml:w-[90%] mm:w-[90%]">
            
            <div className="w-full flex justify-center">
                <div className="xl:w-[60%] flex justify-center items-center p-4 ml:w-full mm:w-full">
                    <h2 className="xl:text-3xl font-bold font-Poppins text-[#0c1931] ml:text-[15px] mm:text-[14px]">Let's Create Something Amazing! 🎨✨</h2>
                </div>
            </div>

            <div className="w-full flex justify-center">
                <div className="xl:w-[70%] xl:mt-4 
                ml:mt-4 ml:w-[90%]
                mm:w-[90%] mm:mt-4">
                    <p className="p-2 font-Poppins text-[#282c31] ml:text-[13px] mm:text-[14px]">I believe the best projects happen when talented people get together and have fun! Want to build something that'll make users go "WOW!"? Let's do it! 🚀</p>
                </div>
            </div>

            <div className="w-full flex justify-center flex-col items-center mt-10 ">
                <div className="w-[80%] flex justify-evenly pt-2 pb-2 xl:flex ml:hidden mm:hidden">

                    <div className="w-[12%] bg-[#e9ecef] flex rounded-[10px] shadow-2xs">
                        <div className="w-[70%] flex justify-center items-center pt-2 pb-2 ml-1">
                            <p className="font-Poppins">React</p> 
                        </div>

                        <div className="w-[30%] pt-2 pb-2 flex items-center justify-center mr-1">
                            <img src={react} className="w-[70%]"/>
                        </div>
                    </div>

                    <div className="w-[15%] bg-[#e9ecef] rounded-[10px] flex shadow-2xs">
                        <div className="w-[80%] flex justify-center items-center pt-2 pb-1">
                            <p className="font-Poppins">TypeScript</p>
                        </div>

                        <div className="w-[20%] flex items-center mr-1">
                            <img src={typescript} className="p-1"/>
                        </div>
                    </div>

                    <div className="w-[13%] bg-[#e9ecef] flex rounded-[10px] shadow-2xs">
                        <div className="w-[75%] flex justify-center items-center">
                            <p className="font-Poppins">NodeJS</p>
                        </div>

                        <div className="w-[25%] flex items-center justify-center">
                            <img src={nodejs} className="object-contain w-[90%] p-0.5"/>
                        </div>
                    </div>

                    <div className="w-[12%] bg-[#e9ecef] rounded-[10px] flex shadow-2xs">
                        <div className="w-[75%] flex justify-center items-center">
                            <p className="font-Poppins">Python</p>
                        </div>

                        <div className="w-[25%] flex justify-center items-center">
                            <img src={python} className="object-contain w-[70%]"/>
                        </div>
                    </div>

                    <div className="w-[9%] bg-[#e9ecef] rounded-[10px] flex shadow-2xs">
                        <div className="w-[60%] flex justify-center items-center">
                            <p className="font-Poppins">Git</p>
                        </div>

                        <div className="w-[40%] flex items-center justify-center">
                            <img src={git} className="object-contain w-[70%]"/>
                        </div>
                    </div>

                    <div className="w-[12%] bg-[#e9ecef] rounded-[10px] flex shadow-2xs">
                        <div className="w-[70%] flex justify-center items-center">
                            <p className="font-Poppins">Express</p>
                        </div>

                        <div className="w-[30%] flex items-center justify-center">
                            <img src={exp} className="object-contain w-[70%]"/>
                        </div>
                    </div>

                </div>

                <div className="w-[50%] flex justify-evenly mt-2 xl:flex ml:hidden mm:hidden">
                    <div className="w-[22%] bg-[#e9ecef] rounded-[10px] flex mt-2 mb-2 shadow-2xs">
                        <div className="w-[80%] flex justify-center items-center pt-2 pb-2">
                            <p className="font-Poppins text-[#282c31]">MongoDB</p>
                        </div>

                        <div className="w-[20%] flex items-center justify-center">
                            <img src={mongo} className=""/>
                        </div>
                    </div>

                    <div className="w-[15%] bg-[#e9ecef] rounded-[10px] flex mt-2 mb-2 shadow-2xs">
                        <div className="w-[60%] flex justify-center items-center pt-2 pb-2">
                            <p className="font-Poppins text-[#282c31]">C#</p>
                        </div>

                        <div className="w-[40%] flex items-center justify-center">
                            <img src={CSharp} className="object-contain w-[60%]"/>
                        </div>
                    </div>

                    <div className="w-[20%] bg-[#e9ecef] rounded-[10px] flex mt-2 mb-2 shadow-2xs">
                        <div className="w-[80%] flex justify-center items-center pt-2 pb-2">
                            <p className="font-Poppins text-[#282c31] xl:text-[16px]">Next JS</p>
                        </div>

                        <div className="w-[18%] flex items-center justify-center mr-2">
                            <img src={next} className=""/>
                        </div>
                    </div>

                    <div className="w-[18%] bg-[#e9ecef] rounded-[10px] flex mt-2 mb-2">
                        <div className="w-[65%] flex justify-center items-center py-2">
                            <p className="font-Poppins ml:text-[14px] mm:text-[14px] text-[#282c31] xl:text-[16px]">Unity</p>
                        </div>

                        <div className="w-[35%] flex items-center justify-center">
                            <img src={unity} className=""/>
                        </div>
                    </div>  
                </div>


                {/* Responsive Design */}
                <div className="w-full ml:flex ml:justify-evenly mm:flex mm:justify-evenly
                xl:hidden">
                    <div className="w-[12%] bg-[#e9ecef] flex rounded-[10px] ml:w-[30%] ml:flex ml:justify-evenly mm:w-[30%] mm:flex mm:justify-evenly">
                        <div className="w-[70%] flex justify-center items-center pt-2 pb-2 ml-1">
                            <p className="font-Poppins text-[#282c31]">React</p> 
                        </div>

                        <div className="w-[30%] pt-2 pb-2 flex items-center justify-center mr-1">
                            <img src={react} className="w-[70%]"/>
                        </div>
                    </div>

                    <div className="w-[15%] bg-[#e9ecef] rounded-[10px] flex ml:w-[30%] mm:w-[30%] mm:flex mm:justify-evenly">
                        <div className="w-[80%] flex justify-center items-center pt-2 pb-1 mm:pt-1.5">
                            <p className="font-Poppins ml:text-[13px] mm:text-[13px] text-[#282c31]">TypeScript</p>
                        </div>

                        <div className="w-[20%] flex items-center mr-1">
                            <img src={typescript} className="p-1"/>
                        </div>
                    </div>
                </div>

                <div className="w-full ml:flex ml:justify-evenly ml:mt-2 mm:flex mm:justify-evenly mm:mt-2
                xl:hidden">
                    <div className="w-[13%] bg-[#e9ecef] flex rounded-[10px] ml:w-[30%] ml:p-1.5 mm:w-[30%] mm:p-1.5">
                        <div className="w-[75%] flex justify-center items-center">
                            <p className="font-Poppins ml:text-[14px] mm:text-[14px] text-[#282c31]">NodeJS</p>
                        </div>

                        <div className="w-[25%] flex items-center justify-center">
                            <img src={nodejs} className="object-contain w-[90%] p-0.5"/>
                        </div>
                    </div>

                    <div className="w-[12%] bg-[#e9ecef] rounded-[10px] flex ml:w-[30%] ml:p-1.5 mm:w-[30%] mm:p-1.5">
                        <div className="w-[75%] flex justify-center items-center">
                            <p className="font-Poppins ml:text-[14px] mm:text-[14px] text-[#282c31]">Python</p>
                        </div>

                        <div className="w-[25%] flex justify-center items-center">
                            <img src={python} className="object-contain w-[70%]"/>
                        </div>
                    </div>
                </div>

                <div className="w-full ml:flex ml:justify-evenly ml:mt-2 mm:flex mm:justify-evenly mm:mt-2
                xl:hidden">
                    <div className="w-[9%] bg-[#e9ecef] rounded-[10px] flex ml:w-[30%] mm:w-[30%] mm:p-1.5">
                        <div className="w-[60%] flex justify-center items-center">
                            <p className="font-Poppins text-[#282c31]">Git</p>
                        </div>

                        <div className="w-[40%] flex items-center justify-center">
                            <img src={git} className="object-contain w-[70%] ml:w-[50%] mm:w-[50%]"/>
                        </div>
                    </div>

                    <div className="w-[12%] bg-[#e9ecef] rounded-[10px] flex ml:w-[30%] mm:w-[30%] mm:p-1.5">
                        <div className="w-[70%] flex justify-center items-center">
                            <p className="font-Poppins ml:text-[14px] mm:text-[14px] text-[#282c31]">Express</p>
                        </div>

                        <div className="w-[30%] flex items-center justify-center">
                            <img src={exp} className="object-contain w-[70%]"/>
                        </div>
                    </div>
                </div>

                <div className="w-full ml:flex ml:justify-evenly mm:flex mm:justify-evenly
                xl:hidden">
                    <div className="w-[30%] bg-[#e9ecef] rounded-[10px] flex mt-2 mb-2">
                        <div className="w-[80%] flex justify-center items-center pt-2 pb-2">
                            <p className="font-Poppins ml:text-[14px] mm:text-[14px] text-[#282c31]">MongoDB</p>
                        </div>

                        <div className="w-[20%] flex items-center justify-center">
                            <img src={mongo} className=""/>
                        </div>
                    </div>

                    <div className="w-[30%] bg-[#e9ecef] rounded-[10px] flex mt-2 mb-2">
                        <div className="w-[60%] flex justify-center items-center pt-2 pb-2">
                            <p className="font-Poppins text-[#282c31]">C#</p>
                        </div>

                        <div className="w-[40%] flex items-center justify-center">
                            <img src={CSharp} className="object-contain w-[70%] ml:w-[50%] mm:w-[50%]"/>
                        </div>
                    </div>
                </div>

                <div className="w-full ml:flex ml:justify-evenly mm:flex mm:justify-evenly
                xl:hidden">
                    <div className="w-[30%] bg-[#e9ecef] rounded-[10px] flex">
                        <div className="w-[75%] flex justify-center items-center pt-2 pb-2">
                            <p className="font-Poppins ml:text-[14px] mm:text-[14px] text-[#282c31] xl:text-[12px]">Next JS</p>
                        </div>

                        <div className="w-[20%] flex items-center justify-center">
                            <img src={next} className="object-contain w-[80%]"/>
                        </div>
                    </div>

                    <div className="w-[30%] bg-[#e9ecef] rounded-[10px] flex">
                        <div className="w-[60%] flex justify-center items-center pt-2 pb-2">
                            <p className="font-Poppins ml:text-[14px] mm:text-[14px] text-[#282c31] xl:text-[18px]">Unity</p>
                        </div>

                        <div className="w-[40%] flex items-center justify-center">
                            <img src={unity} className="object-contain w-[80%]"/>
                        </div>
                    </div>
                </div>

            </div>


            <div className="w-full flex justify-center mb-6 mt-5">
                <div className="xl:w-[90%] xl:flex xl:flex-row
                ml:flex justify-evenly mt-5 ml:flex-col ml:items-center mm:flex mm:items-center mm:flex-col">

                    <div className="xl:w-[20%] mb-5 mt-5 ml:w-[90%] mm:w-[90%]">
                        <div className="w-full flex justify-center">
                            <div className="w-[15%]">
                                <img src={bullseye} />
                            </div>
                        </div>

                        <div className="w-full flex justify-center">
                            <div className="w-[35%] flex justify-center">
                                <p className="font-Poppins font-bold text-[#0c1931] text-4xl p-2">5</p>
                            </div>
                        </div>

                        <div className="w-full flex justify-center">
                            <div className="w-[70%] flex justify-center">
                                <p className="font-Poppins text-[20px] text-[#282c31]">Projects Built</p>  
                            </div>
                        </div>

                        <div className="w-full flex justify-center">
                            <div className="w-[70%] flex justify-center">
                                <p className="font-Poppins opacity-70 text-[#282c31]">and Counting</p>
                            </div>
                        </div>
                    </div>

                    <div className="xl:w-[20%] mb-5 mt-5 ml:w-[90%] mm:w-[90%]">
                        <div className="w-full  flex justify-center">
                            <div className="w-[15%] ">
                                <img src={clock} />
                            </div>
                        </div>

                        <div className="w-full flex justify-center">
                            <div className="w-[35%] flex justify-center">
                                <p className="font-Poppins font-bold text-[#0c1931] text-4xl p-2">2+</p>
                            </div>
                        </div>

                        <div className="w-full flex justify-center">
                            <div className="w-[70%] flex justify-center">
                                <p className="font-Poppins text-[20px] text-[#282c31]">Years Of Fun</p>  
                            </div>
                        </div>

                        <div className="w-full flex justify-center">
                            <div className="w-[70%] flex justify-center">
                                <p className="font-Poppins opacity-70 text-[#282c31]">Still loving it</p>
                            </div>
                        </div>
                    </div>

                    <div className="xl:w-[20%] mb-5 mt-5 ml:w-[90%] mm:w-[90%]">
                        <div className="w-full flex justify-center">
                            <div className="w-[15%]">
                                <img src={smile} />
                            </div>
                        </div>

                        <div className="w-full flex justify-center">
                            <div className="w-[35%] flex justify-center">
                                <p className="font-Poppins font-bold text-[#0c1931] text-4xl p-2">80%</p>
                            </div>
                        </div>

                        <div className="w-full flex justify-center">
                            <div className="w-[70%] flex justify-center">
                                <p className="font-Poppins text-[20px] text-[#282c31]">Smile Rate</p>  
                            </div>
                        </div>

                        <div className="w-full flex justify-center">
                            <div className="w-[70%] flex justify-center">
                                <p className="font-Poppins opacity-70 text-[13px] text-[#282c31]">Never settle for less</p>
                            </div>
                        </div>
                    </div>


                    <div className="xl:w-[20%] mb-5 mt-5 ml:w-[90%]">
                        <div className="w-full flex justify-center">
                            <div className="w-[15%]">
                                <img src={tea} />
                            </div>
                        </div>

                        <div className="w-full flex justify-center">
                            <div className="w-[35%] flex justify-center">
                                <p className="font-Poppins font-bold text-[#0c1931] text-4xl p-2">∞</p>
                            </div>
                        </div>

                        <div className="w-full flex justify-center">
                            <div className="xl:w-[90%] 2xl:w-[90%] flex justify-center">
                                <p className="font-Poppins xl:text-[18px] 2xl:text-[20px] text-[#282c31]">Tea Consumed</p>  
                            </div>
                        </div>

                        <div className="w-full flex justify-center">
                            <div className="w-[70%] flex justify-center">
                                <p className="font-Poppins opacity-70 text-[#282c31]">Fuel for code!</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>

    )
}

export default Skill_showcase;