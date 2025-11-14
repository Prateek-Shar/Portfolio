interface link_func {
    SwitchToHome : () => void
}

const Footer_para:React.FC<link_func> = ({SwitchToHome}) => {

    return (
        <>

        <div className="w-full">
            <div className="w-full hover:cursor-pointer" onClick={SwitchToHome}>
                <h1 className="font-Poet text-[#d9d9d9] text-2xl p-2 mm:p-1 mm:pl-2">Portflio</h1>
            </div>

            <div className="w-full mt-7 mb-2 mm:mt-4">
                <p className="text-gray-500 font-Poppins p-2">Building digital experiences that matter. Let's create something amazing together.</p>
            </div>
        </div>

        </>
    )
} 


export default Footer_para;