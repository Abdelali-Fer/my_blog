import Image from "next/image";
import NavBar from "./component/NavBar";
import HomeHero from "./component/HomeHero";
import FeaturPost from "./component/FeaturPost";
import AboutSection from "./component/AboutSection";

export default function Home() {
  return (
    <>
      <NavBar />
      <HomeHero />
      <FeaturPost/>
      <AboutSection/>
    </>
  );
}
