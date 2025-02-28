import Image from "next/image";
import Header from "@/components/HeaderAlt";
import Footer from "@/components/Footer";
import "@/components/css/About.css";
import Logo from "@/components/images/kislogo.png";
import Profile from "@/components/images/profile.png";
import Contact from "@/components/Contact";
export default async function App() {

  return (
    <main className="body-main">
            <div className="body-main-content">
              <Header/>
              <div className="contact-main">
                <Contact/>
              </div>
              <Footer/>
            </div>
    </main>
  );
}
