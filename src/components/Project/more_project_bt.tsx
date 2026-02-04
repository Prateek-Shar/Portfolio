import redirect from "/Images/redirect.png";
import { useRef } from "react";


const More_project_bt = () => {

    const ClickToGithub = () => {
        window.open("https://github.com/Prateek-Shar?tab=repositories" , "_blank")
    }

    const arrow = useRef<HTMLImageElement>(null)

    const showAnim = () => {

        if(arrow.current) {
            arrow.current.classList.add("animate-arrow")
        }

    }
   

    return (

        <div className="shadow-2xs xl:w-[23%] 2xl:w-[17%] xl:flex xl:bg-[#e9ecef] xl:rounded-[10px] xl:justify-center xl:items-center xl:mt-2 xl:mb-2 xl:hover:cursor-pointer flex bg-[#e9ecef] rounded-[10px] mt-2 mb-2 hover:cursor-pointer ml:w-[50%] mm:w-[70%]" onClick={ClickToGithub} onMouseEnter={showAnim}>

            <div className="ml:w-[80%] xl:w-[75%] p-3 flex justify-center items-center">
                <p className="font-Poet xl:text-[20px] ml:text-[14px] text-[#495057]">Explore More Projects</p>
            </div>

            <div className="w-[8%] flex items-center">
                <img src={redirect} className="ml:p-0.5" ref={arrow} />
            </div>

        </div>
        
    )
}


export default More_project_bt