import Logo from "../../public/logo.png";
import Image from "next/image";

export default function Header(){
    return(
        <div className="py-[20px] shadow-3xl">
            <div className="max-w-[1200px] xl:max-w-[1100px] mx-auto flex items-center justify-between">
                <div className="flex flex-1 items-center text-lg">
                    <Image src={Logo} width={25} alt="logo"/>
                    <span className="ml-[10px]">Keep<span className="text-blue">IT</span>Simple</span>
                </div>
                <div className="flex-1 text-center">
                    <a className="mx-[12.5px] font-medium"><span>Chatbot</span></a>
                    <a className="mx-[12.5px] font-medium"><span>Power BI</span></a>
                </div>
                <div className="flex-1 text-end font-medium">
                    <a>
                        Book a Demo
                    </a>
                </div>
            </div>
            
        </div>
    )
}