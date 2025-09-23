import { Link } from "react-router-dom"

function NotFoundPage() {
    
    return (
        <div className="flex flex-col gap-x-10 justify-center items-center bg-smooth-purple min-h-screen bg-cover bg-fixed bg-no-repeat bg-center">
            <h1 className="text-[clamp(1rem,5vw+1rem,20vw)] font-bold text-ptlpink text-center">
                404 Not Found
            </h1>
            
            <Link to="/" className="text-[clamp(1rem,2vw+1rem,5vw)] bg-ptlpink rounded-2xl px-6 hover:scale-110 transition-out-200 text-purple-950 border-2 border-purple-950">
                Back to Home
            </Link>
        </div>
    )
}

export default NotFoundPage