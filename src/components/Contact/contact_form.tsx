import profile from "/Images/profile.png"
import profileTwo from "/Images/profileTwo.png";
import email from "/Images/email_color.png"
import bullseye from "/Images/bullseye.png"
import thinking from "/Images/thinking.png"
import emailjs from '@emailjs/browser';
import  { useRef } from 'react';
 


const Contact_form = () => {

    
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) return; // ✅ ensure it's not null before using

        emailjs.sendForm('service_a4stthr', 'template_zhvh6zp', form.current, {
            publicKey: 'u8ZliBVz6pzl5rqw2',
        })
        .then(
            () => {
            console.log('SUCCESS!');
             if (form.current) form.current.reset(); // <-- This resets the actual form fields


            },
            (error) => {
            console.log('FAILED...', error.text);
            },
        );
    };
  

    return (
        
        <form className="w-[80%] flex flex-col justify-center xl:mt-10 ml:mt-7 mm:mt-7 mb-11" ref={form} onSubmit={sendEmail}>

            <div className="w-full flex flex-col justify-between">
                <div className="w-full flex justify-between">
                    <div className="w-[45%] flex">
                        <div className="w-[20%] flex items-center justify-center">
                            <img src={profile} className="object-center w-[70%] p-1"/> 
                        </div>

                        <div className="w-[80%] flex items-center">
                            <p className="font-Poppins pl-2 text-[14px] p-1">First Name</p> 
                        </div>
                    </div>

                    <div className="w-[45%] flex">
                        <div className="w-[20%] flex items-center justify-center">
                            <img src={profileTwo} className="object-center w-[60%]" />
                        </div>

                        <div className="w-[80%] flex items-center">
                            <p className="font-Poppins pl-2 text-[14px] p-1">Last Name</p>
                        </div>
                    </div>
                </div>

                <div className="w-full flex justify-between">
                    <div className="w-[45%] border-2 border-[#e5e7eb] rounded-[10px]">
                        <input type="text" name="FirstName" required placeholder="Your Awesome Name" className="w-full rounded-[8px] placeholder:text-[#6b7280] xl:placeholder:text-[12px] bg-white xl:pt-3 xl:pb-3 focus:outline-0 font-Poppins xl:text-[14px] ml:text-[12px] ml:placeholder:text-[10px] ml:py-3 ml:pl-2 mml:placeholder:text-[12px] mm:py-3 mm:pl-1 mm:placeholder:text-[9px] mm:text-[10px]" />
                    </div>

                    <div className="w-[45%] border-2 border-[#e5e7eb] rounded-[10px]">
                        <input type="text" name="LastName" required placeholder="Your Awesome Name" className="w-full rounded-[8px] placeholder:text-[#6b7280] xl:placeholder:font-Poppins xl:placeholder:text-[12px] bg-white xl:pt-3 xl:pb-3 xl:pl-2 focus:outline-0 font-Poppins ml:text-[12px] ml:py-3 xl:text-[14px] ml:placeholder:text-[10px] mm:py-3 mm:pl-1 mm:placeholder:text-[9px] mm:text-[10px]" />
                    </div>
                </div>
            </div>


            <div className="w-full flex flex-col mt-5">
                <div className="w-full flex">
                    <div className="xl:w-[8%] ml:w-[10%] mm:w-[10%]">
                        <img src={email} className="p-2" />
                    </div>

                    <div className="w-[90%] flex items-center">
                        <p className="font-Poppins pl-2 text-[16px]">Email</p>
                    </div>
                </div>

                <div className="w-full border-2 border-[#e5e7eb] rounded-[10px]">
                    <input type="email" name="email"  placeholder="Your.email@awesome.com" required className="w-full bg-white p-3 rounded-[8px] focus:outline-0 font-Poppins placeholder:text-[12px] placeholder:-text-[#6b7280] text-[14px] ml:text-[12px] " />
                </div>
            </div>

            <div className="w-full flex flex-col mt-5">
                <div className="w-full flex">
                    <div className="xl:w-[8%] ml:w-[10%] mm:w-[10%]">
                        <img src={bullseye} className="p-2" />
                    </div>

                    <div className="w-[90%] flex items-center">
                        <p className="font-Poppins pl-2 text-[14px]">What's Cooking</p>
                    </div>
                </div>

                <div className="w-full border-2 border-[#e5e7eb] rounded-[10px]">
                    <input type="text" name="idea"  required placeholder="Project Idea / Random Hello !" className="w-full bg-white p-3 rounded-[8px] focus:outline-0 placeholder:text-[12px] placeholder:-text-[#6b7280] font-Poppins ml:text-[12px]" />
                </div>
            </div>


            <div className="w-full flex flex-col mt-5">
                <div className="w-full flex">
                    <div className="xl:w-[8%] ml:w-[10%] mm:w-[10%]">
                        <img src={thinking} className="p-2" />
                    </div>

                    <div className="w-[90%] flex items-center">
                        <p className="font-Poppins pl-2 text-[14px]">Tell Me Everything</p>
                    </div>
                </div>

                <textarea 
                    placeholder="Share your amazing idea, tell me about your project, or just say hi! I love hearing from awesome people like you! 🎉" 
                    name="description"
                    className="w-full xl:h-30 ml:h-40 mm:h-38 rounded-[8px] focus:outline-0 placeholder:text-[12px] bg-white placeholder:text-[#6b7280] border-2 border-[#e5e7eb] font-Poppins text-[14px] ml:text-[12px] ml:pl-2 ml:pt-2 ml:pr-3 mm:p-2"
                />
            </div> 

            <div className="w-full flex justify-center mt-8 ">
                <div className="w-[50%] rounded-2xl ">
                    <button type="submit" 
                    className="w-full hover:cursor-pointer bg-[#e9ecef] rounded-2xl pt-3 pb-3 font-Poet text-[#0c1931] shadow-lg">
                    Send Details</button>
                </div>
            </div>  

            
        </form>
    )
}

export default Contact_form;