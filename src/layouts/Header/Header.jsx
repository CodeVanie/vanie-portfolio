import NavItem from './NavItem.jsx';
import NavBar from './NavBar.jsx';
import Portfolio from './Portfolio.jsx';
import HeaderWrapper from '../HeaderWrapper.jsx';

export default function Header() {
    const navItems = [
        { page: "aboutme", label: "About Me"},
        { page: "projects", label: "Projects" },
        { page: "home", label: "Home" },
        { page: "contactme", label: "Contact Me" },
        { page: "myresume", label: "My Resume"},
    ];

    return (
        <HeaderWrapper>
            <Portfolio />
            <NavBar>
            {navItems.map(item => (
                <NavItem key={item.page} {...item} />
            ))}
            </NavBar>
        </HeaderWrapper>
    );
}