import star from "../../Images/star.png"
import wave from "../../Images/wave.png"
import pallete from "../../Images/pallete.png"
import startup from "../../Images/startup.png"
import { useRef } from "react"
import herbal from "../../Images/tea-banner.png"
import arr_down from "../../Images/arr_down.png";

const Banner = () => {


    const move_down_icon = useRef<HTMLDivElement>(null);


    return (

        <div className="w-full relative bg-[#e0e4eb] overflow-hidden">

            <div className="absolute w-[5%] xl:left-7 left-15 top-15 flex justify-center items-center ml:hidden mm:hidden xl:flex 2xl:flex 2xl:w-[4%]">
                <img src={star} className="object-contain w-[60%]"/>
            </div>

            <div className="absolute xl:w-[3%] 2xl:w-[50px] w-[3%] bottom-30 xl:left-10 xl:bottom-15 left-20 flex justify-center items-center ml:hidden mm:hidden xl:flex">
                <img src={startup} className="p-2 "/> 
            </div>
            
            <div className="xl:w-[42%] flex flex-row-reverse xl:justify-normal xl:mt-35 ml:w-[80%] ml:mt-20 mm:mt-15">
                <div className="xl:w-[36%] flex items-center justify-center ml:w-[80%] ml:mr-5 mm:w-[90%] xl:mr-8">
                    <div className="w-[10%] p-1 mm:p-2 xl:p-1">
                        <img src={herbal} />
                    </div>

                    <div className="w-[90%] p-1">
                        <p className="font-Poet text-[#737396] text-[15px] mm:text-[12px]">~ Currently Thinking Ideas ~</p>
                    </div>
                </div>
            </div>

            <div className="xl:w-[40%] xl:flex xl:items-center xl:flex-row-reverse xl:ml-85 mt-10 ml:w-[90%] ml:ml-0 ml:flex ml:flex-row-reverse mm:flex mm:justify-center ">
                <div className="xl:w-[70%] ml:w-[70%] mm:w-[80%] flex ml:flex ml:justify-center ml:items-center">
                    <div className="xl:w-[30%] flex justify-center ml:items-center ml:w-[24%]">
                        <p className="font-Mogra p-2 ml:p-0.5 mm:p-0.5 mm:text-[25px] xl:text-5xl mm:pl-2 text-[#2c2626] ml:text-[25px]">Hey ,</p>
                    </div>

                    <div className="flex justify-center items-center xl:w-[60%] ml:w-[66%] mm:flex mm:justify-normal">
                        <span className="font-Mogra ml:text-[26px] xl:text-5xl mm:text-[23px] text-[#2c2626] ml:p-1 p-4 xl:p-0 mm:p-0">I'm Prateek !</span>
                    </div>

                    <div className="xl:w-[10%] xl:mt-0 mm:mt-0 mm:w-[10%]
                    ml:w-[12%] ml:mt-0 ml:flex ml:items-center ml:justify-center mm:flex mm:justify-center">
                        <img src={wave} className="p-2 ml:p-0 mm:p-0 animate-hand ml:object-contain ml:w-[70%] mm:object-contain mm:w-[90%]"/>  
                    </div>
                </div>
            </div> 

            <div className="xl:w-[45%] xl:ml-55 flex flex-row-reverse ml:w-[55%] mm:w-[80%] mm:flex mm:flex-row mm:justify-center ml:ml-9 xl:mt-4">
                <div className="xl:w-[35%] relative xl:mr-10 ml:w-[82%] ml::mr-0 mm:w-[70%]">
                    <div className="w-[90%] border-2 xl:p-6.5 border-blue-700 my-2 ml:p-4.5 mm:p-5" />
                    <div className="w-[90%] border p-2 absolute left-1.5 top-3.5 border-blue-400 -rotate-1 ml:top-3.5 xl:flex xl:items-center" >
                         <p className="font-Poet xl:text-[24px] text-[#2c2626] ml:text-[14px]">Full Stack Developer</p>
                    </div>
                </div>
            </div>

            <div className="xl:w-[58%] xl:flex xl:flex-row-reverse xl:ml-0 xl:justify-normal mt-10 ml:w-[90%] ml:flex ml:justify-center mm:flex mm:justify-center ml:ml-3">
                <div className="xl:w-[56%] ml:w-[80%] mm:w-[78%] ">
                    <p className="font-Mogra xl:text-[20px] p-2 text-[#50504e] ml:text-[16px] xl:pl-1">I sketch ideas, code dreams, and create digital magic✨</p>
                </div>
            </div>

            <div className="xl:w-[56%] xl:flex xl:flex-row-reverse xl:justify-normal ml:w-[90%] ml:flex ml:justify-center mm:flex mm:justify-center ml:ml-3 xl:ml-0">
                <div className="xl:w-[55%] ml:w-[80%] mm:w-[78%]">
                    <p className="font-Mogra text-[16px] p-2 text-[#50504e] ml:text-[16px]">Passionate about turning napkin sketches into beautiful, functional web experiences. Let's build something awesome together!</p>
                </div>
            </div>

            <div className="xl:w-[36%] xl:flex xl:flex-row-reverse xl:justify-normal mt-22 xl:mt-20 ml:w-[50%] ml:hidden ml:justify-center ml:items-center mm:w-[60%] mm:flex mm:justify-center mm:mt-15">
                <div className="xl:w-[30%] relative hover:cursor-pointer ml:w-[65%] mm:w-[65%]">
                    <div className="bg-blue-500 m-2 mm:p-3.5 xl:p-5.5"/>
                    <div className="w-[90%] p-2 xl:p-2 mm:p-1 bg-white absolute top-0 left-1 border-2 border-blue-500 flex justify-center hover:bg-blue-200">
                        <button className="font-Poet text-[#2c2626] mm:text-[15px] xl:text-[18px] cursor-pointer">Testimonials</button>
                    </div>
                </div>
            </div>

            
            <div className="absolute w-[3%] 2xl:w-[50px] top-80 xl:right-10 right-5 mm:hidden ml:hidden xl:flex">
                <img src={pallete} className="p-2"/>
            </div>


            <div className="w-full ml:hidden xl:flex xl:mt-47 mm:hidden" />

            <div className="xl:w-[41%] xl:mt-2 items-center flex-row-reverse xl:justify-normal ml:animate-explore mm:max-ll::animate-bounce ml:flex xl:flex xl:mb-5 ml:w-[65%] ml:justify-center ml:items-center ml:mt-15 ml:mb-5 mm:w-[80%] mm:flex mm:justify-center mm:mt-5 mm:mb-2 ml:ml-4">
                <div className="xl:w-[40%] flex ml:w-[70%] mm:w-[70%]">
                    <div className="p-2 flex items-center mm:pl-0">
                        <p className="font-Poet text-[#737373] text-[13px] mm:text-[12px]">Scroll For More Content</p>
                    </div>

                    <div className="xl:w-[10%] ml:w-[8%] mm:w-[8%] xl:mt-2 2xl:mt-0 flex items-center animate-bounce" ref={move_down_icon}>  
                        <img src={arr_down} className="p-1 ml:p-0 2xl:p-1 mm:p-0"/>
                    </div>
                </div>  
            </div>



        </div>

    )
}

export default Banner;