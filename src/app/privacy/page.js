import Image from "next/image";
import Header from "@/components/Header";
import Home from "@/components/Home";
import ChatbotCards from "@/components/ChatbotCards";
import MicrosoftBIHome from "@/components/MicrosoftBIHome";
import Accordian from "@/components/Accordian";
import MicrosoftBIVideos from "@/components/MicrosoftBIVideos";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Privacy(){
    return(
        <div>
            <Header/>
            <div className="mt-[50px] text-black bg-white max-w-[350px] mx-auto md:max-w-[1200px] md:px-[25px] xl:max-w-[1100px]">
                <div className="mb-[25px]">
                    <h2 className="lg:text-2xl text-mobile2xl">Privacy Policy</h2>
                    <span className="block text-mobilebase lg:text-base">Last Updated On: 17-Apr-2024</span>
                    <span className="block text-mobilebase lg:text-base">Effective Date: 17-Apr-2024</span>
                </div>
                <div className="mb-[25px]">
                    <span className="block text-mobilebase lg:text-base">This Privacy Policy describes the policies of email: blakeedwards324@gmail.com, phone: 0468538241 on the collection, use and disclosure of your information that we collect when you use our website ( https://www.bepbi.com/ ). (the “Service”). By accessing or using the Service, you are consenting to the collection, use and disclosure of your information in accordance with this Privacy Policy. If you do not consent to the same, please do not access or use the Service. 
                    We may modify this Privacy Policy at any time without any prior notice to you and will post the revised Privacy Policy on the Service. The revised Policy will be effective 180 days from when the revised Policy is posted in the Service and your continued access or use of the Service after such time will constitute your acceptance of the revised Privacy Policy. We therefore recommend that you periodically review this page. </span>
                </div>
                <div className="mb-[25px]">
                    <h2 className="lg:text-xl text-mobilexl">Information We Collect: </h2>
                    <span className="block text-mobilebase lg:text-base">We will collect and process the following personal information about you:</span>
                    <span className="block text-mobilebase lg:text-base">Name, Email, Mobile</span>
                </div>
                <div className="mb-[25px]">
                    <h2 className="lg:text-xl text-mobilexl">How We Use Your Information:</h2>
                    <span className="block text-mobilebase lg:text-base">We will use the information that we collect about you for the following purposes:</span>
                </div>
                <div className="mb-[25px]">
                    <h2 className="lg:text-xl text-mobilexl">Marketing/ Promotional</h2>
                    <span className="block text-mobilebase lg:text-base">If we want to use your information for any other purpose, we will ask you for consent and will use your information only on receiving your consent and then, only for the purpose(s) for which grant consent unless we are required to do otherwise by law.</span>
                </div>
                <div className="mb-[25px]">
                    <h2 className="lg:text-xl text-mobilexl">Retention Of Your Information</h2>
                    <span className="block text-mobilebase lg:text-base">We will retain your personal information with us for Its not stored or for as long as we need it to fulfill the purposes for which it was collected as detailed in this Privacy Policy. We may need to retain certain information for longer periods such as record-keeping / reporting in accordance with applicable law or for other legitimate reasons like enforcement of legal rights, fraud prevention, etc. Residual anonymous information and aggregate information, neither of which identifies you (directly or indirectly), may be stored indefinitely.</span>
                </div>
                <div className="mb-[25px]">
                    <h2 className="lg:text-xl text-mobilexl">Your Rights:</h2>
                    <span className="block text-mobilebase lg:text-base">Depending on the law that applies, you may have a right to access and rectify or erase your personal data or receive a copy of your personal data, restrict or object to the active processing of your data, ask us to share (port) your personal information to another entity, withdraw any consent you provided to us to process your data, a right to lodge a complaint with a statutory authority and such other rights as may be relevant under applicable laws. To exercise these rights, you can write to us at bedwards@bepbi.com. We will respond to your request in accordance with applicable law. Do note that if you do not allow us to collect or process the required personal information or withdraw the consent to process the same for the required purposes, you may not be able to access or use the services for which your information was sought.</span>
                </div>
                <div className="mb-[25px]">
                    <h2 className="lg:text-xl text-mobilexl">Cookies Etc.</h2>
                    <span className="block text-mobilebase lg:text-base">To learn more about how we use these and your choices in relation to these tracking technologies, please refer to our Cookie Policy.</span>
                </div>
                <div className="mb-[25px]">
                    <h2 className="lg:text-xl text-mobilexl">Security:</h2>
                    <span className="block text-mobilebase lg:text-base">The security of your information is important to us and we will use reasonable security measures to prevent the loss, misuse or unauthorized alteration of your information under our control. However, given the inherent risks, we cannot guarantee absolute security and consequently, we cannot ensure or warrant the security of any information you transmit to us and you do so at your own risk.</span>
                </div>
                <div className="mb-[25px]">
                    <h2 className="lg:text-xl text-mobilexl">Grievance / Data Protection Officer:</h2>
                    <span className="block text-mobilebase lg:text-base">If you have any queries or concerns about the processing of your information that is available with us, you may email our Grievance Officer at email: bedwards@bepbi.com. We will address your concerns in accordance with applicable law.</span>
                </div>
                
            </div>
            <div class="relative top-0 z-[5] h-[150px] md:h-[150px] w-full bg-white shadow-circle rounded-bl-[100%] rounded-br-[100%]"></div>
            <Footer/>
        </div>
    )
}