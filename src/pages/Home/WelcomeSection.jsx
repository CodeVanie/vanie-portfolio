
export default function WelcomeSection() {
  return (
    <section className="flex flex-col justify-center lg:py-45 whitespace-pre-line max-w-[1800px] mx-auto text-shadow-lg text-shadow-fuchsia-600/75 px-10 animate-titleentry py-15">
        <p className="m-0 text-purple-400 text-[clamp(1rem,2vw+1rem,4vw)] select-none">Welcome to</p>
        <h1 className="text-pink-300 text-[clamp(1rem,5vw+1rem,20vw)] font-extrabold select-none group">
            <span className="underline-from-left group-hover:before:right-0 group-focus:before:right-0 group-active:before:right-0">
                <span className="underline-from-left">
                    CodeVANIE's 
                </span>
                <br className="lg:hidden"/>
                {` Portfolio`}
            </span>
        </h1>
        <p className="text-fuchsia-400 tracking-widest text-shadow-none text-[clamp(8px,0.5vw+0.5rem,16px)] select-none">
            Hey there! I’m CodeVANIE, a developer & problem-solver who loves building sleek, responsive, and user-friendly websites.
        </p>
    </section>
  )
}
