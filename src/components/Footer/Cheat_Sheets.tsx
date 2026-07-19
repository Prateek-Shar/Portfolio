import next from "/Images/next.png"
import react from "/Images/react.png"
import unity from "/Images/unity.png";
import github from "/Images/github.png";
import mongo from "/Images/mongo.png";

const Cheat_sheet = () => {

    const openReact = () => {
        window.open("/cheatsheet/React.pdf" , "_blank")
    }

    const openUnity = () => {
        window.open("/cheatsheet/Unity_Manual.pdf" , "_blank")
    }

    const openNextJs = () => {
        window.open("/cheatsheet/Next_JS_Manual.pdf" , "_blank")
    }

    const openGithub = () => {
        window.open("/cheatsheet/Git_Manual.pdf" , "_blank")
    }

    const openMongo = () => {
        window.open("/cheatsheet/Mongo_Manual.pdf" , "_blank")
    }

    return (
          
        <div className="w-full">

            <div className="w-full p-2 ml-1">
                <p className="font-Poet text-2xl text-[#d9d9d9]">Cheat Sheet Links</p>
            </div>

            <div className="flex items-center mt-2 ml-2">
                <button className="w-[10%] hover:cursor-pointer" onClick={openReact}>
                    <img src={react} />
                </button>

                <button className="w-[10%] hover:cursor-pointer ml-3" onClick={openNextJs}>
                    <img src={next} />
                </button>

                <button className="w-[15%] hover:cursor-pointer ml-1" onClick={openUnity}>
                    <img src={unity} />
                </button>

                <button className="w-[11%] hover:cursor-pointer ml-1" onClick={openGithub}>
                    <img src={github} />
                </button>

                <button className="w-[15%] hover:cursor-pointer ml-1" onClick={openMongo}>
                    <img src={mongo} />
                </button>
            </div>

        </div>

    )
}

export default Cheat_sheet;