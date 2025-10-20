import ProjectsWrapper from "../../layouts/ProjectsWrapper";
import ProjectFolioTile from "../Projects/ProjectFolioTile";
import ProjectTodoTile from "../Projects/ProjectTodoTile";
import ProjectQuizTile from "../Projects/ProjectQuizTIle";

export default function TopProjectsSection() {
  return (
    <section className="p-5 lg:p-15 lg:space-y-20 space-y-3">
        <h3 className="text-center text-purple-400 text-[clamp(1rem,2vw+1rem,4vw)]"><span className="underline-from-left">TOP PROJECTS</span></h3>
        <ProjectsWrapper>
            <ProjectFolioTile />
            <ProjectTodoTile />
            <ProjectQuizTile />
        </ProjectsWrapper>
    </section>
  )
}
