
export default function HeaderWrapper({ children }) {
    
    return (
        <header className="sticky top-0 z-20 min-h-14 transition-allout-500 bg-smooth-purple bg-cover border-b bg-center before:absolute before:inset-0 before:bg-black/35 text-ptlpink">

            <nav className='h-full max-w-6xl flex mx-auto px-3'>
                {children}
            </nav>
        </header>
    )
}