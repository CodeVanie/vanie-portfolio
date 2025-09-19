import { useNavigate } from "react-router-dom";
import SkillBoxWrapper from "../../layouts/SkillBoxWrapper";
import { CSSIcon, GithubIcon, HTMLIcon, JavaScriptIcon, ReactIcon, SQLIcon, TailwindIcon } from "../../shared/icons/IconCollection";
import SkillBox from "./SkillBox";
import ProjectsWrapper from "../../layouts/ProjectsWrapper";
import ProjectTodoTile from "../Projects/ProjectTodoTile";

export default function HomeContent() {
    const navigate = useNavigate();


    return (
        <div className="flex flex-col relative z-1 lg:gap-y-45 gap-y-10 py-15">
            <section className="flex flex-col justify-center lg:py-45 whitespace-pre-line max-w-[1800px] mx-auto text-shadow-lg text-shadow-fuchsia-600/75 px-10 animate-titleentry py-15">
                <p className="m-0 text-purple-400 text-[clamp(1rem,2vw+1rem,4vw)] select-none">Welcome to</p>
                <h1 className="text-pink-300 text-[clamp(1rem,5vw+1rem,20vw)] font-extrabold select-none">
                    <span className="underline-from-left">CodeVANIE's Portfolio</span>
                </h1>
                <p className="text-fuchsia-400 tracking-widest text-shadow-none text-[clamp(8px,0.5vw+0.5rem,16px)] select-none">
                    Hey there! I’m CodeVANIE, a developer & problem-solver who loves building sleek, responsive, and user-friendly websites.
                </p>
            </section>
            <section className="p-5 lg:p-15 lg:space-y-20 space-y-3">
                <h3 className="text-center text-purple-400 text-[clamp(2rem,2vw+1rem,4vw)]"><span className="underline-from-left">Skills</span></h3>
                <SkillBoxWrapper>
                    <SkillBox><HTMLIcon className="w-6 hvr-icon" />HTML</SkillBox>
                    <SkillBox><CSSIcon className="w-6 hvr-icon" />CSS</SkillBox>
                    <SkillBox><JavaScriptIcon className="w-6 hvr-icon" />JavaScript</SkillBox>
                    <SkillBox><ReactIcon className="w-6 hvr-icon" />React JS</SkillBox>
                    <SkillBox><TailwindIcon className="w-6 hvr-icon" />Tailwind CSS</SkillBox>
                    <SkillBox><GithubIcon className="w-6 hvr-icon" />Git/Github</SkillBox>
                    <SkillBox><SQLIcon className="w-6 hvr-icon" />SQL</SkillBox>
                </SkillBoxWrapper>
            </section>
            <section className="p-5 lg:p-15 lg:space-y-20 space-y-3">
                <h3 className="text-center text-purple-400 text-[clamp(1rem,2vw+1rem,4vw)]"><span className="underline-from-left">TOP PROJECT</span></h3>
                <ProjectsWrapper>
                    <ProjectTodoTile onClick={() => navigate("/projects")}/>
                </ProjectsWrapper>
            </section>
        </div>
    )
}