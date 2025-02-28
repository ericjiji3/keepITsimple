import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ChatbotCards from "@/components/ChatbotCards";
import MicrosoftBIHome from "@/components/MicrosoftBIHome";
import Accordian from "@/components/Accordian";
import MicrosoftBIVideos from "@/components/MicrosoftBIVideos";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getHome, getChatbotCardsSection, getMicrosoftBIHomeSection, getAccordianSection, getVideoSection, getContactSection, getTestimonial1 } from "@/utils/contentful";
import Testimonials from "@/components/Testimonials";
import ERPIntegrationSection from "@/components/ERPIntegrationSection";
import CaseStudies from "@/components/CaseStudies";
import FAQ from "@/components/FAQ";
import GetStarted from "@/components/GetStarted";
import ScrollHandler from "@/components/ScrollHandler";

export default async function App() {
  const home = await getHome();
  const cards = await getChatbotCardsSection();
  const microsoftBIHome = await getMicrosoftBIHomeSection();
  const accordianData = await getAccordianSection();
  const videoData = await getVideoSection();
  const contactData = await getContactSection();
  const testimonial1 = await getTestimonial1();
  return (
    <main className="body-main">
      <div className="body-main-content">
        <Header/>
        <div id="home">
          <Hero homeContent={home}/>
        </div>
        <div id="erp-integration">
          <ERPIntegrationSection/>
        </div>
        <div id="testimonials">
          <Testimonials homeContent={home} testimonialsContent={testimonial1}/>
        </div>
        <div id="case-studies">
          <CaseStudies/>
        </div>
        <div id="faq">
          <FAQ/>
        </div>
        <div id="get-started">
          <GetStarted/>
        </div>
        {/* <div className="bg-blue py-[50px] lg:py-[100px]"> 
        <Accordian accContent={accordianData}/>
        <MicrosoftBIVideos vidsContent={videoData}/>
      
      
</div> */}
        {/* <Contact contContent={contactData}/> */}
        <Footer/> 
      </div>
      <ScrollHandler />
    </main>
  );
}
