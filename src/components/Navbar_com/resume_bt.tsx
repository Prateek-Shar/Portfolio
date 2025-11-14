import resume from "../../Images/resume.png"

const openResume = () => {
    window.open("/resume.pdf" , "_blank") 
}

const Resume_Button = () => {
    
    return (
        
        <div className="mm:full xl:w-full xl:bg-[#e0e5eb] xl:flex xl:shadow-md xl:rounded-2xl xl:hover:cursor-pointer xl:p-2 w-full rounded-2xl flex button-gradient shadow-md hover:cursor-pointer ml:p-3 mm:p-3
        2xl:bg-[#e0e5eb] 2xl:flex 2xl:shadow-md 2xl:cursor-pointer 2xl:w-[70%] ml:rounded-[12px] mm:rounded-[12px]" onClick={openResume} >
            <div className="w-[70%] flex items-center justify-center">
                <p className="font-Poppins ml:text-[12px] xl:text-[16px] mm:text-[12px]">Resume</p>
            </div>

            <div className="w-[30%] flex items-center justify-center xl:w-[30%] xl:flex xl:justify-center xl:items-center">
                <img src={resume} className="xl:object-contain xl:w-[55%] object-contain w-[60%]"/>
            </div>
        </div>
    )
}

export default Resume_Button;