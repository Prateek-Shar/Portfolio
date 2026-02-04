import { useState } from "react";
import next from "/Images/next.png";
import react from "/Images/react.png"
import typescript from "/Images/typescript.png"
import exp from "/Images/express.png";
import node from "/Images/NodeJS.png";
import mongo from "/Images/mongo.png";
import tailwind from "/Images/Tailwind_CSS.png"
import github from "/Images/github.png"
import eyes from "/Images/eyes.png"
import dashboard from "/Images/dashboard_cover.jpg"
import game from "/Images/game.png";
import CSharp from "/Images/CSharp.png";
import Unity from "/Images/unity.png"
import dashboard_icon from "/Images/dashboard.png"
import space_game_icon from "/Images/space_game.png";
import demo from "/Images/demo.png";
import recipe from "/Images/recipe_bg.png";
import recipe_icon from "/Images/recipe_icon.png";


const Project_box = () => {

    const Navigate_Dashboard_Demo = () => {
        window.open("https://insightboard.vercel.app/" , "_blank")
    }

    const Navigate_Space_project = () => {
        window.open("https://github.com/Prateek-Shar/Space_Shooter" , "_blank")
    }

    const Navigate_Dashboard_code = () => {
        window.open("https://github.com/stars/Prateek-Shar/lists/dashboard" , "_blank")
    }

    


    const [moreBt1 , setMoreBt1] = useState(true)
    const [moreBt2 , setMoreBt2] = useState(true)
    const [moreBt3 , setMoreBt3] = useState(true)

    const [projectPara1 , setProjectPara1] = useState(false)
    const [projectPara2 , setProjectPara2] = useState(false)
    const [projectPara3 , setProjectPara3] = useState(false)

    const [spaceGameIcon , setSpaceGameIcon] = useState(false)
    const [dashboardIcon , setDashboardIcon] = useState(false)
    const [expenseIcon , setExpenseIcon] = useState(false)


    const handleClickToAnimateBox1 = () => {
        setExpenseIcon(true)
    }

    const disableAnimateBox1 = () => {
        setExpenseIcon(false)
    }


    const handleClickToAnimateBox2 = () => {
        setDashboardIcon(true)
    }

    const disableAnimateBox2 = () => {
        setDashboardIcon(false)
    }


    const handleClickToAnimateBox3 = () => {
        setSpaceGameIcon(true)
    }

    const disableAnimateBox3 = () => {
        setSpaceGameIcon(false)
    }

    
    const extendPara1 = () => {

        setProjectPara1(true)

        setMoreBt1(false)
    }   

    const extendPara2 = () =>{

        setProjectPara2(true)

        setMoreBt2(false)
    }

    const extendPara3 = () => {

        setProjectPara3(true)

        setMoreBt3(false)
    }

    
    
    return (

        <div className="2xl:w-[80%] xl:w-[80%] xl:flex xl:flex-row xl:justify-between ml:flex-col ml:w-full ml:items-center ml:justify-center ml:flex mm:w-full mm:flex mm:flex-col mm:justify-center mm:items-center">
            
            {/* Project 1 */}
            <div className="xl:w-[28%] shadow-md rounded-3xl bg-[#e0e4eb] mt-4 mb-4 ml:w-[85%] mm:w-[85%] 2xl:mt-10 relative hover:shadow-md hover:shadow-gray-500" onMouseEnter={handleClickToAnimateBox2} onMouseLeave={disableAnimateBox2}>
                
                {dashboardIcon && (
                    <div className="w-[7%] absolute right-3 top-3 animate-expense">
                        <img src={dashboard_icon} />
                    </div>
                )}

                <div className="w-[11%] absolute top-3 2xl:-translate-x-6 mm:-translate-x-4">
                    <p className="2xl:text-5xl font-Poet text-[#0c1931] mm:text-3xl">01</p>
                </div>

                <div className="w-full flex justify-center items-center mt-20">
                    <img src={dashboard}  className=" object-contain w-[52%] rounded-[5px]"/>
                </div>

                <div className="w-full mt-10">
                    <p className="pl-2 pt-2 pb-2 font-Poppins font-bold text-[#0c1931]">Insight Board ✨</p>
                </div>

                <div className="w-full">
                    <div className="w-full">
                        <p className="font-Poppins pl-2 pr-4 pt-4 text-[#282c31]">Designed and built a modern financial dashboard to track and visualize key income , customer and products data.<br/></p>
                        
                        {moreBt2 && (
                            <span className="text-[#343a40] hover:cursor-pointer font-Poppins pl-2" onClick={extendPara2}>More...</span>
                        )}
                        
                        {projectPara2 && (
                            <p className="font-Poppins pl-2 pr-4 mt-2 text-[#282c31]">
                            Users can toggle between daily, monthly, and yearly views effortlessly.
                            Visual insights are presented through dynamic charts 🎉</p>
                        )}
                    </div>
                </div>

                <div className="w-full flex-col">
                    <div className="w-full flex justify-evenly ml:mt-8 mm:mt-8">

                        <div className="w-[20%] flex bg-[#e9ecef] shadow-2xs mt-2 mb-2 p-1 rounded-4xl">
                            <div className="w-[80%] flex justify-center items-center">
                                <p className="font-Poppins xl:text-[13px] ml:text-[10px] mm:text-[10px] 2xl:text-[14px]">React</p>
                            </div>

                            <div className="w-[20%] flex justify-center items-center">
                                <img src={react} />
                            </div>
                        </div>

                        <div className="w-[30%] flex bg-[#e9ecef] shadow-2xs mt-2 mb-2 p-1 rounded-4xl">
                            <div className="w-[80%] flex justify-center items-center">
                                <p className="font-Poppins xl:text-[12px] ml:text-[10px] mm:text-[10px] 2xl:text-[14px]">TypeScript</p>
                            </div>

                            <div className="w-[20%] flex justify-center items-center">
                                <img src={typescript} className="p-1"/>
                            </div>
                        </div>

                        <div className="w-[25%] flex bg-[#e9ecef] shadow-2xs mt-2 mb-2 p-1 rounded-4xl">
                            <div className="w-[80%] flex justify-center items-center">
                                <p className="font-Poppins xl:text-[13px] ml:text-[10px] mm:text-[10px] 2xl:text-[15px]">Express</p>
                            </div>

                            <div className="w-[20%] flex justify-center items-center">
                                <img src={exp} />
                            </div>
                        </div>

                    </div>

                    <div className="w-full">
                        <div className="w-full flex justify-evenly">
                            
                            <div className="w-[25%] flex bg-[#e9ecef] shadow-2xs mt-2 mb-2 p-1 rounded-4xl">
                                <div className="w-[80%] flex justify-center items-center">
                                    <p className="font-Poppins xl:text-[12px] ml:text-[10px] mm:text-[10px] 2xl:text-[14px]">Node JS</p>
                                </div>

                                <div className="w-[20%] flex justify-center items-center">
                                    <img src={node} />
                                </div>
                            </div> 

                            <div className="w-[25%] flex bg-[#e9ecef] shadow-2xs mt-2 mb-2 p-1 rounded-4xl">
                                <div className="w-[80%] flex justify-center items-center">
                                    <p className="font-Poppins xl:text-[12px] ml:text-[10px] mm:text-[10px] 2xl:text-[13px]">MongoDB</p>
                                </div>

                                <div className="w-[20%] flex justify-center items-center">
                                    <img src={mongo} />
                                </div>
                            </div>

                            <div className="w-[35%] flex bg-[#e9ecef] shadow-2xs mt-2 mb-2 p-1 rounded-4xl">
                                <div className="w-[80%] flex justify-center items-center">
                                    <p className="font-Poppins xl:text-[12px] ml:text-[10px] mm:text-[10px] 2xl:text-[14px]">Tailwind Css</p>
                                </div>

                                <div className="w-[20%] flex justify-center items-center">
                                    <img src={tailwind} className="p-1"/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="w-full flex justify-evenly xl:mt-13 ml:mt-5 mm:mt-5">

                    <div className="xl:w-[55%] justify-around border-2 border-[#e5e7eb] bg-[#e9ecef] shadow-2xl rounded-[10px] flex ml:w-[70%] mm:w-[70%] ml:mb-2 ml:mt-2 mm:mt-2 mm:mb-2 hover:cursor-pointer p-2">
                        <button className="w-[35%] flex justify-center items-center" onClick={Navigate_Dashboard_Demo}>
                            <img src={demo} className="object-contain w-[26%]" />
                            <p className="font-Poppins xl:text-[12px] ml:text-[11px] mm:text-[9px] pl-3 hover:to-default">Live</p>
                        </button>

                        <div className="w-[5%] flex justify-center items-center">
                            <hr className="w-[20%] border-0 bg-[#0c1931] h-full rounded-full" />
                        </div>

                        <button className="w-[55%] flex justify-center items-center" onClick={Navigate_Dashboard_code}>
                            <p className="font-Poppins xl:text-[12px] ml:text-[11px] mm:text-[9px] pr-2 hover:to-default">Source Code</p>
                            <img src={github} className="object-contain w-[18%]" />
                        </button>
                    </div>

                </div>

                <div className="w-full flex justify-center items-center mt-2 mb-2">
                    <div className="w-[50%] mm:w-[60%] flex mm:ml-8 ml:ml-12 xl:ml-25">
                        <div className="xl:w-[2.5%] mm:w-[3%] ml:w-[2.5%] flex justify-center items-center animate-pulse">
                            <div className="w-full h-[6px] bg-red-600 rounded-full" />
                        </div>

                        <div className="w-[90%] flex items-center pl-2">
                            <p className="text-[12px] font-Poppins">Please Open on Laptop</p>
                        </div>
                    </div>
                </div>

            </div>


            {/* Project 2 */}
            <div className=" bg-[#e0e4eb] relative xl:w-[28%] shadow-md rounded-3xl mt-4 mb-4 ml:w-[85%] mm:w-[85%] 2xl:mt-10 hover:shadow-md hover:shadow-gray-500" onMouseEnter={handleClickToAnimateBox1} onMouseLeave={disableAnimateBox1}>

                {expenseIcon && (
                    <div className="w-[7%] absolute right-3 top-3 animate-expense">
                        <img src={recipe_icon} />
                    </div>
                )}

                <div className="w-[11%] absolute top-3 2xl:-translate-x-6 mm:-translate-x-4">
                    <p className="xl:text-5xl font-Poet text-[#0c1931] mm:text-3xl">02</p>
                </div>

                <div className="w-full mb-15 flex justify-center items-center mt-22">
                    <img src={recipe}  className=" object-contain w-[90%] rounded-[5px]"/>
                </div>

                <div className="w-full xl:mt-8">
                    <p className="pl-2 font-Poppins font-bold text-[#0c1931]">Recipe Tales! ✨</p>
                </div>

                <div className="w-full mm:mt-2">
                    <div className="w-full">
                        <p className="font-Poppins pl-2  pr-4 pt-4 text-[#282c31]">A recipe website that allows users to browse and explore different dishes.<br/></p>

                        {moreBt1 && (
                            <span onClick={extendPara1} className="hover:cursor-pointer font-Poppins pl-2 text-[#343a40]">More....</span>
                        )} 
                        
                        {projectPara1 && (
                            <p className="font-Poppins pl-2 pr-4 text-[#282c31] mt-2"> Each recipe includes basic details like ingredients and step-by-step instructions. The focus of the project is on an easy-to-use layout, smooth navigation, and a pleasant browsing experience.</p>
                        )}
                    </div>
                </div>


                <div className="w-full flex justify-center items-center xl:mt-15 mm:mt-10 ml:mt-12">
                    <div className="w-[30%] bg-[#e9ecef] rounded-[10px] flex shadow-2xs ">
                        <div className="w-[75%] flex justify-center items-center pt-2 pb-2">
                            <p className="font-Poppins ml:text-[14px] mm:text-[14px] text-[#282c31] xl:text-[15px]">Next JS</p>
                        </div>

                        <div className="w-[20%] flex items-center justify-center">
                            <img src={next} className="object-contain w-[80%]"/>
                        </div>
                    </div>
                </div>



                <div className="w-full flex justify-center xl:mt-10 ml:mt-5 mm:mt-5">
                    <div className="xl:w-[55%] justify-around border-2 border-[#e5e7eb] bg-[#e9ecef] shadow-2xl rounded-[10px] flex ml:w-[70%] mm:w-[70%] ml:mb-2 ml:mt-2 mm:mt-2 mm:mb-2 hover:cursor-pointer p-2">
                        <button className="w-[35%] flex justify-center items-center" onClick={Navigate_Dashboard_Demo}>
                            <img src={demo} className="object-contain w-[26%]" />
                            <p className="font-Poppins xl:text-[12px] ml:text-[11px] mm:text-[9px] pl-3 hover:to-default">Live</p>
                        </button>

                        <div className="w-[5%] flex justify-center items-center">
                            <hr className="w-[20%] border-0 bg-[#0c1931] h-full rounded-full" />
                        </div>

                        <button className="w-[55%] flex justify-center items-center" onClick={Navigate_Dashboard_code}>
                            <p className="font-Poppins xl:text-[12px] ml:text-[11px] mm:text-[9px] pr-2 hover:to-default">Source Code</p>
                            <img src={github} className="object-contain w-[18%]" />
                        </button>
                    </div>
                </div>



                <div className="w-full flex justify-center items-center my-2">
                    <div className="w-[50%] flex xl:ml-20 mm:w-[60%] mm:ml-8 ml:ml-12">
                        <div className="xl:w-[2%] mm:w-[3%] ml:w-[2.5%] flex justify-center items-center animate-pulse">
                            <div className="w-full h-[6px] bg-red-600 rounded-full" />
                        </div>

                        <div className="w-[90%] flex items-center pl-2">
                            <p className="text-[12px] font-Poppins">Please Open on Laptop</p>
                        </div>
                    </div>
                </div>


            </div>



            {/* Project 3 */}
            <div className="xl:w-[28%] bg-[#e0e4eb] shadow-md rounded-3xl mt-4 mb-4 ml:w-[85%] mm:w-[85%] 2xl:mt-10 relative hover:shadow-md hover:shadow-gray-500" onMouseEnter={handleClickToAnimateBox3} onMouseLeave={disableAnimateBox3}>

                {spaceGameIcon && (
                    <div className="w-[7%] absolute right-3 top-3 animate-expense">
                        <img src={space_game_icon} />   
                    </div>
                )}

                <div className="w-[11%] absolute top-2 2xl:-translate-x-6 mm:-translate-x-4">
                    <p className="xl:text-5xl font-Poet text-[#0c1931] mm:text-3xl">03</p>
                </div>
                
                <div className="w-full flex justify-center items-center mt-20">
                    <img src={game} className="object-contain w-[80%] rounded-[5px]"/>
                </div>

                <div className="w-full mt-12">
                    <p className="pl-2 py-2 font-Poppins font-bold text-[#0c1931]"> Space Shooter ✨</p>
                </div>

                <div className="w-full">
                    <div className="w-full">
                        <p className="font-Poppins pl-2 pr-4 pt-4 text-[#282c31]">A fast-paced 2D space shooter game with simple controls and dynamic enemy waves.<br/></p>
                        
                        {moreBt3 && (
                        <span className="text-[#343a40] hover:cursor-pointer font-Poppins pl-2" onClick={extendPara3}>More...</span>
                        )}
                        
                        {projectPara3 && (
                        <p className="font-Poppins pl-2 pr-4 text-[#282c31] mt-2">
                        Players navigate a spaceship, and shoot down enemies to earn points.
                        The game features power-ups, and a lives system to maintain balanced difficulty.
                        Smooth animations, sound effects, and UI elements enhance the gameplay experience..🎉</p>
                        )}
                    </div>
                </div>

                <div className="w-full flex-col">
                    <div className="w-full flex justify-evenly mt-5 2xl:mt-7">

                        <div className="2xl:w-[25%] w-[20%] flex bg-[#e9ecef] shadow-2xs mt-2 mb-2 xl:p-0 p-1 rounded-4xl mm:w-[20%]">
                            <div className="w-[60%] flex justify-center items-center">
                                <p className="font-Poppins xl:text-[14px] ml:text-[11px] mm:text-[11px] 2xl:text-[16px]">C#</p>
                            </div>

                            <div className="w-[40%] flex justify-center items-center">
                                <img src={CSharp} className="p-1 2xl:p-2"/>
                            </div>
                        </div>

                        <div className="w-[40%] 2xl:w-[35%] flex bg-[#e9ecef] shadow-2xs mt-2 mb-2 xl:p-0 p-1 rounded-4xl mm:w-[45%]">
                            <div className="2xl:w-[80%] w-[70%] flex justify-center items-center">
                                <p className="font-Poppins xl:text-[14px] ml:text-[12px] mm:text-[12px] 2xl:text-[15px]">Unity Engine</p>
                            </div>

                            <div className="2xl:w-[20%] w-[30%] flex justify-center items-center">
                                <img src={Unity} className="p-1 2xl:p-0"/>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="w-full flex justify-center ml:mt-5 mm:mt-5 xl:mt-2" >
                    <button className="xl:w-[45%] border-2 border-[#e5e7eb] bg-[#e9ecef] shadow-2xl rounded-[10px] flex ml:w-[50%] mm:w-[50%] ml:mt-2 ml:mb-2 mm:mt-2 mm:mb-2 2xl:mt-10 hover:cursor-pointer" onClick={Navigate_Space_project}>
                        <div className="w-[20%]">
                            <img src={github} className="p-2" />
                        </div>

                        <div className="w-[60%] flex justify-center items-center">
                            <p className="font-Poppins xl:text-[14px] ml:text-[12px] mm:text-[11px]">See Code</p>
                        </div>

                        <div className="w-[20%]">
                            <img src={eyes} />
                        </div>
                    </button>
                </div>

                <div className="w-full flex justify-center items-center my-2">
                    <div className="xl:w-[40%] mm:w-[60%] flex mm:ml-20 ml:ml-28 xl:ml-14">
                        <div className="ml:w-[2.5%] mm:w-[2.5%] xl:w-[3%] flex justify-center items-center animate-pulse">
                            <div className="w-full h-[5px] bg-red-600 rounded-full" />
                        </div>

                        <div className="w-[90%] flex items-center pl-2">
                            <p className="text-[12px] font-Poppins">Not Executable</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Project_box