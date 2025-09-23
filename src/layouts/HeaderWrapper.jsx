
export default function HeaderWrapper({ children }) {
    
    return (
        <header className="sticky top-0 z-20 min-h-14 transition-allout-500 bg-smooth-purple bg-cover border-b bg-center bg-black/40 bg-blend-darken text-ptlpink border-purple-400">

            <nav className='h-full max-w-6xl flex mx-auto px-3'>
                {children}
            </nav>
        </header>
    )
}