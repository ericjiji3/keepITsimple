import Image from "next/image";
import Header from "@/components/HeaderAlt";
import Footer from "@/components/Footer";
import "@/components/css/About.css";
import Logo from "@/components/images/kislogo.png";
import Profile from "@/components/images/profile.png";
import { getAbout } from "@/utils/contentful";




export default async function App() {
  const about = await getAbout();


  console.log(about);

  return (
    <main className="body-main" >
            <div className="body-main-content">
              <Header/>
              <div className="about-main">
                <div className="about-content">
                <h1 className="about-title">{about.fields.header}</h1>
                <p className="about-description">
                {about.fields.description}                </p>
                <div className="about-profile-container">
                    <div className="about-profile-image">
                        <Image src={Profile} alt="profile" />
                    </div>
                    <div className="about-profile-text">
                        <h2 className="about-profile-name">Blake Edwards</h2>
                        <p className="about-profile-title">Founder of KeepingITSimple</p>
                    </div>
                </div>
                </div>
              </div>
              <Footer/>
            </div>
    </main>
  );
}
