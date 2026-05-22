import git from "/Images/github.png";
import link from "/Images/linkedin.png"
import twitter from "/Images/twitter.png"



const Social_links = () => {

    const handleToGithub = () => {
        window.open("https://github.com/Prateek-Shar" , "_blank")
    }

    const handleToLinkedin = () => {
        window.open("https://www.linkedin.com/in/prateek-sharma-116848249/" , "_blank")
    }   

    const handleToTwitter = () => {
        window.open("https://x.com/home" , "_blank")
    }
    
    return (
        <div className="w-full">

            <div className="w-full p-2 ml-1">
                <p className="font-Poet text-2xl text-[#d9d9d9]">Socials</p>
            </div>

            <div className="w-[50%] flex justify-evenly items-center mt-2">
                <button className="w-[30%] p-1 hover:cursor-pointer" onClick={handleToGithub}>
                    <img src={git} />
                </button>

                <button className="w-[30%] p-2 hover:cursor-pointer" onClick={handleToLinkedin}>
                    <img src={link} />
                </button>

                <button className="w-[30%] p-2 hover:cursor-pointer" onClick={handleToTwitter}>
                    <img src={twitter} />
                </button>
            </div>

            <div className="w-full p-2 ml-1">
                <p className="font-Poppins text-[13px] text-gray-500">Open to opportunities and collaborations</p>
            </div>
        </div>
    )
}



export default Social_links