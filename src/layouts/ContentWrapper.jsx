
export default function ContentWrapper({ children }) {
    
    return (
        <main className="grow relative before:absolute before:inset-0 bg-center bg-no-repeat bg-cover bg-fixed before:bg-black/60 bg-rough-purple">
            {children}
        </main>
    )
}