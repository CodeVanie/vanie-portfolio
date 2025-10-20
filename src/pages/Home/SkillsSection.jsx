import SkillBoxWrapper from '../../layouts/SkillBoxWrapper'
import FeatureBox from '../../shared/components/FeatureBox'
import zodicon from "../../assets/images/zodicon.png"
import { CSSIcon, ExpressJSIcon, GithubIcon, HTMLIcon, JavaScriptIcon, MongoDBIcon, NodeJSIcon, RctFormIcon, RctRouterIcon, ReactIcon, SQLIcon, TailwindIcon, TypeScriptIcon, VSCodeIcon } from '../../shared/icons/IconCollection'

export default function SkillsSection() {
    return (
        <section className="p-5 lg:p-15 lg:space-y-20 space-y-3">
            <h3 className="text-center text-purple-400 text-[clamp(2rem,2vw+1rem,4vw)]"><span className="underline-from-left">Skills</span></h3>
            <SkillBoxWrapper>
                <FeatureBox size="lg" variant="folio">
                    <HTMLIcon className="w-6 hvr-icon" />HTML
                </FeatureBox>
                <FeatureBox size="lg" variant="folio">
                    <CSSIcon className="w-6 hvr-icon" />CSS
                </FeatureBox>
                <FeatureBox size="lg" variant="folio">
                    <JavaScriptIcon className="w-6 hvr-icon" />JavaScript
                </FeatureBox>
                <FeatureBox size="lg" variant="folio">
                    <TypeScriptIcon className="w-6 hvr-icon" />TypeScript
                </FeatureBox>
                <FeatureBox size="lg" variant="folio">
                    <img src={zodicon} alt="zodicon" className='w-6 hvr-icon' />Zod
                </FeatureBox>
                <FeatureBox size="lg" variant="folio">
                    <ReactIcon className="w-6 hvr-icon" />React JS
                </FeatureBox>
                <FeatureBox size="lg" variant="folio">
                    <MongoDBIcon className="w-6 hvr-icon" />MongoDB
                </FeatureBox>
                <FeatureBox size="lg" variant="folio">
                    <ExpressJSIcon className="w-6 hvr-icon" />Express JS
                </FeatureBox>
                <FeatureBox size="lg" variant="folio">
                    <NodeJSIcon className="w-6 hvr-icon" />Node JS
                </FeatureBox>
                <FeatureBox size="lg" variant="folio">
                    <RctFormIcon className="w-6 hvr-icon" />React Hook Form
                </FeatureBox>
                <FeatureBox size="lg" variant="folio">
                    <RctRouterIcon className="w-6 hvr-icon" />React Router
                </FeatureBox>
                <FeatureBox size="lg" variant="folio">
                    <TailwindIcon className="w-6 hvr-icon" />Tailwind CSS
                </FeatureBox>
                <FeatureBox size="lg" variant="folio">
                    <GithubIcon className="w-6 hvr-icon" />Git/Github
                </FeatureBox>
                <FeatureBox size="lg" variant="folio">
                    <SQLIcon className="w-6 hvr-icon" />SQL
                </FeatureBox>
                <FeatureBox size="lg" variant="folio">
                    <VSCodeIcon className="w-6 hvr-icon" />Visual Studio Code
                </FeatureBox>
            </SkillBoxWrapper>
        </section>
    )
}
