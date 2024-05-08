import Image from "next/image";
import Header from "@/components/Header";
import Home from "@/components/Home";
import ChatbotCards from "@/components/ChatbotCards";
import { getHome, getChatbotCardsSection } from "@/utils/contentful";

export default async function App() {
  const home = await getHome();
  const cards = await getChatbotCardsSection();
  return (
    <main className="bg-white">
      <div >
        <Header/>
        <Home homeContent={home}/>
        <ChatbotCards cardsContent={cards}/>
      </div>
      
    </main>
  );
}
