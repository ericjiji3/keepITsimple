import Image from "next/image";
import Header from "@/components/HeaderAlt";
import Footer from "@/components/Footer";
import "@/components/css/About.css";
import Logo from "@/components/images/kislogo.png";
import Profile from "@/components/images/profile.png";
export default async function App() {

  return (
    <main className="body-main">
            <div className="body-main-content">
              <Header/>
              <div className="about-main">
                <div className="about-content">
                <h1 className="about-title">What We Stand For</h1>
                <p className="about-description">
                “We know exactly what typical consultants are like—expensive, they over complicate simple tasks, and deliver little to no real value. They drag out projects, bury you in jargon, and leave you wondering what you actually paid for. That’s not us. Our goal is the complete opposite: we keep things straightforward, cost-effective, and results-driven. We focus on real impact, solving problems efficiently, and making sure you get tangible value from our work. No fluff, no unnecessary complexity—just practical solutions that help your business move forward.”                </p>
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
