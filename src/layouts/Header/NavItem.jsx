import { NavLink } from "react-router-dom"
import { NavIcon } from "../../shared/icons/IconCollection";

export default function NavItem({ page, label }) {
    
    return (
        <li id={page} className="hover:bg-ptlpink/20 flex-1 z-1 rounded-xl">
            <NavLink key={page} to={`/${page}`} className={({ isActive }) => 
                `${isActive ? "max-sm:bg-ptlpink/20" : "opacity-80 border-ptlpink/0"}  
                 flex flex-col h-full items-center lg:justify-end justify-center sm:border-b-2 gap-y-1 hover:opacity-100 transition-allout-500`}>

                <NavIcon name={page} className="w-6 xs:scale-115" />
                <h6 className="font-bold text-[10px] max-lg:hidden">{label}</h6>
            </NavLink>
        </li>
    )
}