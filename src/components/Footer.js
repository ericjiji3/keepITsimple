import Image from "next/image";
import Logo from '../../public/logo.png';
import Facebook from '../../public/linkedin-icon.png';
import Ig from '../../public/yt-icon.png';
import Twitter from '../../public/yt-icon.png';

export default function Footer(){
    return(
        <div className="bg-blue pt-[170px] lg:pt-[150px] pb-[20px] mt-[-130px]">
            <div className="max-w-[350px] md:max-w-[1200px] xl:max-w-[1100px] flex justify-between mx-auto">
                <div className="flex items-center">
                    <Image className="rounded-[5px]" src={Logo} width={20} height={20} alt="logo"/>
                    <span className="text-white text-mobilefine md:text-xs ml-[10px]">©2024 KeepingITSimple - All rights reserved.</span>

                </div>
                <div className="flex self-center items-center">
                    <a className="flex" href="/privacy"><span className="text-white text-mobilefine md:text-xs mr-[10px] md:mr-[15px]">Privacy Policy</span></a>
                    <a href="https://www.linkedin.com/company/kis-hq/" target="__blank"><Image className="w-[15px] mr-[5px] lg:w-[20px]" src={Facebook} width={20} height={20} alt="logo"/></a>
                    <a href="https://www.youtube.com/@BlakeEdwardsPBI" target="__blank"><Image className="w-[15px] lg:w-[20px]" src={Ig} width={20} height={20} alt="logo"/></a>
                </div>
            </div>
        </div>
    )
}