import love from "../../Images/love.png"
import wand from "../../Images/magic_wand.png";


const More_project_bt = () => {

    const ClickToGithub = () => {
        window.open("https://github.com/Prateek-Shar?tab=repositories" , "_blank")
    }

    return (

        <div className="xl:w-[24%] 2xl:w-[17%] xl:flex xl:bg-[#e9ecef] xl:rounded-[10px] xl:justify-around xl:mt-2 xl:mb-2 xl:hover:cursor-pointer flex bg-[#e9ecef] rounded-[10px] justify-around mt-2 mb-2 hover:cursor-pointer ml:w-[50%] mm:w-[70%]" onClick={ClickToGithub}>
            
            <div className="w-[10%] flex items-center">
                <img src={love} />
            </div>

            <div className="ml:w-[70%] w-[60%] p-3 flex justify-center items-center">
                <p className="font-Poppins xl:text-[20px] ml:text-[14px]">See More Magic</p>
            </div>

            <div className="w-[10%] flex items-center">
                <img src={wand} className="xl:p-0.5 ml:p-0.5"/>
            </div>

        </div>
        
    )
}


export default More_project_bt