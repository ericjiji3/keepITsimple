import Image from "next/image";
import Header from "@/components/Header";
import Home from "@/components/Home";
import ChatbotCards from "@/components/ChatbotCards";
import MicrosoftBIHome from "@/components/MicrosoftBIHome";
import Accordian from "@/components/Accordian";
import MicrosoftBIVideos from "@/components/MicrosoftBIVideos";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getHome, getChatbotCardsSection, getMicrosoftBIHomeSection, getAccordianSection, getVideoSection, getContactSection } from "@/utils/contentful";

export default async function App() {
  const home = await getHome();
  const cards = await getChatbotCardsSection();
  const microsoftBIHome = await getMicrosoftBIHomeSection();
  const accordianData = await getAccordianSection();
  const videoData = await getVideoSection();
  const contactData = await getContactSection();

  return (
    <main className="bg-white">
      <div >
        <Header/>
        <Home homeContent={home}/>
        <ChatbotCards cardsContent={videoData}/>
        <MicrosoftBIHome microBIContent={microsoftBIHome}/>
        <div className="bg-blue py-[50px] lg:py-[100px]">
          <Accordian accContent={accordianData}/>
          {/* <MicrosoftBIVideos vidsContent={videoData}/> */}
        </div>
        <Contact contContent={contactData}/>
        <Footer/>
      </div>
      
    </main>
  );
}
