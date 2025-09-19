
export default function AboutMeContent() {
    
    return (
        <article className="flex flex-col text-justify p-5 gap-y-10 max-w-6xl relative z-1 mx-auto">
            <h1 className="text-5xl text-center text-ptlpink animate-titleentry text-shadow-lg text-shadow-ptlpink/50 underline-from-left mx-auto">About Me</h1>
            <div className="about-div">
                <section>
                    <h2><span className="underline-from-left">Introduction</span></h2>
                    <p>
                        Hello! I’m <span className="font-bold">Jazztine Ivanne Durana</span>, but you can call me <span className="font-bold">CodeVANIE</span> (or Vanie for short). I’m a developer who thrives on solving complex challenges and transforming ideas into user-focused, impactful applications.
                    </p>
                </section>
                <section>
                    <h2><span className="underline-from-left">My Journey</span></h2>
                    <p>
                        My fascination with technology started back in 7th grade, when I was curious about how applications — whether mobile, software, or web — were made. I first explored Java and OOP concepts, tinkered with game development, and experimented with Eclipse and NetBeans.
                    </p>
                    <p>
                        In college, while pursuing my Bachelor’s degree in Computer Science at the Technological Institute of the Philippines, I deepened my programming foundation. I worked on academic projects like building an Automated Teller Machine system in Java and creating a scholarship retention prediction portal using Support Vector Machine.
                    </p>
                    <p>
                        I also completed a Web Development Internship at DevOps Technologies, where I contributed to a Point of Sales system and a booking website using ASP.NET Core, C#, JavaScript, AJAX, and SQL — giving me a taste of full-stack development.
                    </p>
                </section>
                <section>
                    <h2><span className="underline-from-left">Professional Experience</span></h2>
                    <p>
                        Before graduation, I landed a full-time role at Oracle NetSuite. For almost 2 years, I’ve been working as an Associate Technical Support Engineer, supporting enterprise clients with SuiteCloud, SuiteScript, SQL, SOAP, REST APIs, OAuth, and TBA tokens.
                    </p>
                    <p>
                        I started in General Operations, handling 4–6 technical cases daily, mentoring new hires, and was recognized as Top Employee of the Month. Later, I joined the SWAT Enterprise team, where I handle the top 200 clients with complex setups, combining deep technical troubleshooting with clear communication.
                    </p>
                </section>
                <section>
                    <h2><span className="underline-from-left">Transition to Development</span></h2>
                    <p>
                        While my work at Oracle honed my problem-solving and technical foundation, I discovered my true passion in Web Development. I began focusing on ReactJS, JavaScript, HTML5, CSS3, and Tailwind CSS, where I recently finished building my TodoApp project — a feature-rich application that sharpened my skills in state management, UI/UX design, and modern front-end workflows.
                    </p>
                    <p>
                        I’m now expanding into TypeScript, Node.js, and Next.js, while leveraging my database knowledge from MySQL and SQL Server. My goal is to grow into a Full-Stack Developer, creating applications that solve real-world problems and make people’s lives easier.
                    </p>
                </section>
                <section>
                    <h2><span className="underline-from-left">Outside of Work</span></h2>
                    <p>
                        Beyond coding, I’m passionate about problem-solving, speed cubing (Rubik’s Cube), mathematics, and I’m a die-hard One Piece fan. These interests reflect the way I approach challenges — with creativity, persistence, and a bit of fun.
                    </p>
                </section>
                <section>
                    <h2><span className="underline-from-left">What Drives Me</span></h2>
                    <p>
                        For me, being a developer isn’t just about writing code — it’s about building solutions that matter. My portfolio is a reflection of my journey, combining technical skills, hands-on projects, and an eagerness to keep learning.
                    </p>
                </section>
            </div>
        </article>
    )
}