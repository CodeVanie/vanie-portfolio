
export default function PageHeading({ children }) {
    return (
        <h1 className="text-[clamp(1rem,2vw+1rem,7vw)] font-semibold text-ptlpink text-shadow-lg text-shadow-ptlpink/50 text-center animate-titleentry">
            {children}
        </h1>
    )
}