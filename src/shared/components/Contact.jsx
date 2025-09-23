
export default function Contact({ hasLink, text, children }) {
    
    return (
        <div className="contact group">
            {hasLink ? 
                <a href={text} target="_blank" rel="noopener noreferrer">
                    {children}
                    <p className="underline-from-left group-hover:before:right-0">{text}</p>
                </a>
            : 
                <a>
                    {children}
                    <p className="underline-from-left group-hover:before:right-0">{text}</p>
                </a>
            }
        </div>
    )
}