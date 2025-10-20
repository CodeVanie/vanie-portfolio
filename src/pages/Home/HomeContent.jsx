import { useNavigate } from "react-router-dom";
import WelcomeSection from "./WelcomeSection";
import TopProjectsSection from "./TopProjectsSection";
import SkillsSection from "./SkillsSection";

export default function HomeContent() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col lg:gap-y-45 gap-y-10 py-10 relative z-1">
            <WelcomeSection />
            <SkillsSection />
            <TopProjectsSection />
        </div>
    )
}