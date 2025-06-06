import Image from "next/image";
import Introduce from "./components/Introduce";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Project from "./components/Project";
import SoftSkill from "./components/SoftSkill";
import TechnicalSkill from "./components/TechnicalSkill";
import Language from "./components/Language";
import Hobbies from "./components/Hobbies";

export default function Home() {
  return (
    <div className="flex justify-center min-h-screen bg-red-100 py-8   ">
      <div className="w-full max-w-5xl bg-white shadow-md rounded-lg py-6 px-[4rem] mt-5 ">
        <Introduce />
        <Experience name="Experience" />
        <Project name="Project" />
        <SoftSkill name="Soft Skills"></SoftSkill>
        <TechnicalSkill name="Technical Skills"/>
        <Language name="Languages" />
        <Education name="Education" />
        <Hobbies name="Hobbies" />
      </div>
    </div>
  );
}
