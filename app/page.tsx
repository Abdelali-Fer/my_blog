import Image from "next/image";
import NavBar from "./component/NavBar";
import HomeHero from "./component/HomeHero";
import FeaturPost from "./component/FeaturPost";
import AboutSection from "./component/AboutSection";
import ChoseCategory from "./component/ChoseCategory";
import SpecialPost from "./component/SpecialPost";
import AuthorList from "./component/AuthorList";

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
    </>
  );
}
