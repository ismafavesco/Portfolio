
import {AiOutlineConsoleSql} from "react-icons/ai"
import { SiJavascript, SiReact, SiJava, SiNodedotjs, SiPython, SiTailwindcss, SiTensorflow } from "react-icons/si";

const Skills = () => {
  return (
    <div
    name="Skills"
    className="bg-sky-100 dark:bg-slate-900 dark:text-white h-screen w-full flex-col flex items-center font-myfont"
  >
    <div className="w-2/3 mx-auto h-full flex flex-col justify-center">
      <div className="md:text-center font-bold mb-8">
        <h1 className="sm:text-6xl text-3xl border-b-4 border-sky-700 in  inline">
          Skills
        </h1>
      </div>


      <div className=" mt-5 grid  grid-cols-2 gap-5 md:grid-cols-1 lg:grid-cols-5">
        <SkillCard icon={<SiJavascript />} title="JavaScript" />
        <SkillCard icon={<SiReact />} title="React" />
        <SkillCard icon={<SiJava />} title="Java" />
        <SkillCard icon={<SiNodedotjs />} title="Node.js" />
        <SkillCard icon={<SiPython />} title="Python" />
        <SkillCard icon={<AiOutlineConsoleSql />} title="SQL" />
        <SkillCard icon={<SiTailwindcss />} title="Tailwind" />
        <SkillCard icon={<SiTensorflow />} title="AI" />
      </div>
    </div>
    </div>
  );
};

const SkillCard = ({ icon, title }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-lg font-medium">{title}</h3>
    </div>
  );
};

  
export default Skills