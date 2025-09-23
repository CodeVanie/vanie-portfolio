
export default function ContactWrapper({ children }) {
    
    return (
        <section className="flex items-center flex-col lg:gap-y-10 gap-y-3 py-10">
            {children}
        </section>
    )
}