import Logo from "../../public/logo.png";
import Image from "next/image";

export default function Header(){
    return(
        <div className="px-[100px] 2xl:px-[350px] py-[20px] flex items-center justify-between shadow-3xl">
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
    )
}