import AboutMeContent from "../pages/AboutMeContent"
import ExtraContentOne from "../pages/ExtraContentOne"
import ExtraContentTwo from "../pages/ExtraContentTwo"
import HomeContent from "../pages/HomeContent"
import ProjectsContent from "../pages/ProjectsContent"

function Content({ selectedPage }) {

    return (
        <main className="flex-grow">
            {selectedPage === "home" && <HomeContent />}
            {selectedPage === "aboutme" && <AboutMeContent />}
            {selectedPage === "projects" && <ProjectsContent />}
            {selectedPage === "extra1" && <ExtraContentOne />}
            {selectedPage === "extra2" && <ExtraContentTwo />}
        </main>
    )
}

export default Content