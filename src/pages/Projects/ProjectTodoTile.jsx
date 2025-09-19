import { useLocation } from "react-router-dom"
import todoicon from "../../assets/images/todotodologo.png"

export default function ProjectTodoTile() {
    const { pathname } = useLocation();
    
    return (
        <a href="https://todo-to-do.vercel.app/" target="_blank" rel="noopener noreferrer" className={`project-tiles bg-black/50 bg-blend-multiply bg-todotodo bg-cover font-quicks shadow-[2px_0_8px_#e7b574,-2px_0_8px_#e7b574] ${pathname === "/home" ? "max-w-[275px]" : ""}`}>
            <div className="w-full grid place-items-center">
                <img src={todoicon} alt="todoicon" className="w-20"/>
                <h1 className='text-3xl font-extrabold text-ptlbrown-100 text-shadow-sm text-shadow-yellow-950'>TODO-To-Do</h1>
            </div>
            <p className="text-ptlbrown-100 self-end text-justify">
                TODO-To-Do is a smart and simple task management app designed to help you stay on top of both one-time and recurring tasks.
            </p>
        </a>
    )
}