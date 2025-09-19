import ContactMeContentWrapper from "../layouts/ContactMeContentWrapper";
import ContactWrapper from "../layouts/ContactWrapper";
import Contact from "../shared/components/Contact";
import PageHeading from "../shared/components/PageHeading";
import { FacebookIcon, GithubIcon, GmailIcon, LinkedInIcon, PhoneIcon } from "../shared/icons/IconCollection";

export default function ContactMeContent() {

    return (
        <ContactMeContentWrapper>
            <PageHeading><span className="underline-from-left">CodeVANIE's Contact Details</span></PageHeading>
            <ContactWrapper>
                <Contact hasLink={true} text="https://www.linkedin.com/in/codevanie/">
                    <LinkedInIcon className="w-[8vw] lg:animate-linkedspin" />
                </Contact>
                <Contact hasLink={false} text="jazztineicd302@gmail.com">
                    <GmailIcon className="w-[7vw] lg:animate-gmailspin" />
                </Contact>
                <Contact hasLink={true} text="https://github.com/CodeVanie">
                    <GithubIcon className="w-[7vw] lg:animate-githubspin" />
                </Contact>
                <Contact hasLink={false} text="+63 976 484 2947">
                    <PhoneIcon className="w-[9vw] lg:animate-phonespin" />
                </Contact>
                <Contact hasLink={true} text="https://www.facebook.com/jazztineicd">
                    <FacebookIcon className="w-[8vw] lg:animate-facebookspin" />
                </Contact>
            </ContactWrapper>
        </ContactMeContentWrapper>
    )
}