
export default function AppWrapper({ children }) {
    
    return (
        <div id="appwrapper" className="flex flex-col h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-ptlpink scrollbar-track-purple-950">
            {children}
        </div>
    )
}