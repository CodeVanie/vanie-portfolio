import { aboutme, projects, home, extra, header, search, burger } from '../assets/images/nav-logos.js'
import React, { useEffect } from 'react'

function Header({ currentPage, onNavBarClick }) {

    // Add a style for a selected page
    useEffect(() => {
        var pageId = "#" + currentPage;
        document.querySelector(pageId).classList.add("border-b-2", "border-ptlpink/75")

        return () => {
            document.querySelector(pageId).classList.remove("border-b-2", "border-ptlpink/75")
        }
    }, [currentPage])

    return (
        <header className="main-header">
            <nav className='flex flex-col justify-around'>
                <div className='flex justify-between items-center mb-2'>
                    <a href="/" className='w-auto p-2'>
                        <img src={header} alt="header" className='max-w-60 w-[34vw] h-full'/>
                    </a>
                    <div className='flex justify-center items-center gap-x-5'>
                        <img src={search} alt="search" className='w-5 h-5 mr-3'/>
                        <img src={burger} alt="search" className='w-5 h-5 hidden'/> {/* HIDDEN - DON'T NEED YET */}
                    </div>
                </div>
                <ul className="flex justify-evenly">
                    <li id='aboutme' onClick={() => onNavBarClick("aboutme")}><img src={aboutme} alt="aboutme" /></li> {/* About Me */}
                    <li id='projects' onClick={() => onNavBarClick("projects")}><img src={projects} alt="projects" /></li> {/* Projects */}
                    <li id='home' onClick={() => onNavBarClick("home")}><img src={home} alt="home" /></li> {/* Home */}
                    <li id='extra1' onClick={() => onNavBarClick("extra1")}><img src={extra} alt="extra1" /></li> {/* Extra1 */}
                    <li id='extra2' onClick={() => onNavBarClick("extra2")}><img src={extra} alt="extra2" /></li> {/* Extra2 */}
                </ul>
            </nav>
        </header>
    );
}

export default Header