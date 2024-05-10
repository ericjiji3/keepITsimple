import Image from "next/image";
import Header from "@/components/Header";
import Home from "@/components/Home";
import ChatbotCards from "@/components/ChatbotCards";
import MicrosoftBIHome from "@/components/MicrosoftBIHome";
import Accordian from "@/components/Accordian";
import { getHome, getChatbotCardsSection, getMicrosoftBIHomeSection, getAccordianSection } from "@/utils/contentful";

export default async function App() {
  const home = await getHome();
  const cards = await getChatbotCardsSection();
  const microsoftBIHome = await getMicrosoftBIHomeSection();
  const accordianData = await getAccordianSection();

  return (
    <main className="bg-white">
      <div >
        <Header/>
        <Home homeContent={home}/>
        <ChatbotCards cardsContent={cards}/>
        <MicrosoftBIHome microBIContent={microsoftBIHome}/>
        <div className="bg-blue pt-[100px]">
          <Accordian accContent={accordianData}/>
        </div>
        
      </div>
      
    </main>
  );
}
