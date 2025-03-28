import Image from "next/image";
import NavBar from "../components/NavBar";
import HomeHero from "../components/HomeHero";
import FeaturPost from "../components/FeaturPost";
import AboutSection from "../components/AboutSection";
import ChoseCategory from "../components/ChoseCategory";
import SpecialPost from "../components/SpecialPost";
import AuthorList from "../components/AuthorList";
import TestMonial from "../components/TestMonial";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <HomeHero />
      <FeaturPost/>
      <AboutSection />
      <ChoseCategory />
      <SpecialPost />
      <AuthorList />
      <TestMonial />
      <Footer/>
    </>
  );
}
