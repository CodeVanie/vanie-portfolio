import { aboutme, projects, home, extra, header, search, burger } from '../assets/images/nav-logos.js'
import React, { useEffect } from 'react'

function Header({ currentPage, onNavBarClick }) {

    // Add a style for a selected page
    useEffect(() => {
        var pageId = "#" + currentPage;
        document.querySelector(pageId).classList.add("border-b-1", "border-ptlpink/75")

        return () => {
            document.querySelector(pageId).classList.remove("border-b-4", "border-ptlpink/75")
        }
    }, [currentPage])

    return (
        <>
            <header className="main-header">
                <nav>
                    <div className='main-header-top'>
                        <a href="/">
                            <img src={header} alt="header" />
                        </a>
                        <div className='main-header-top-toolbar'>
                            <img src={search} alt="search" className='w-6 h-6 mr-1'/>
                            <img src={burger} alt="search" className='w-7 h-7 hidden'/> {/* HIDDEN - DON'T NEED YET */}
                        </div>
                    </div>
                    <ul className="main-header-nav-bar">
                        <li id='aboutme' onClick={() => onNavBarClick("aboutme")}><img src={aboutme} alt="aboutme" /></li> {/* About Me */}
                        <li id='projects' onClick={() => onNavBarClick("projects")}><img src={projects} alt="projects" /></li> {/* Projects */}
                        <li id='home' onClick={() => onNavBarClick("home")}><img src={home} alt="home" /></li> {/* Home */}
                        <li id='extra1' onClick={() => onNavBarClick("extra1")}><img src={extra} alt="extra1" /></li> {/* Extra1 */}
                        <li id='extra2' onClick={() => onNavBarClick("extra2")}><img src={extra} alt="extra2" /></li> {/* Extra2 */}
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header