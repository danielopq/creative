import './navbar.css';

/**
 * Renders the main navigation bar of the website
 * 
 * @returns {JSX.Element} - The NavBar component
 */
const NavBar: React.FC = () => {
    return (
        <nav id="desktopNavBar">
            <menu id="desktopMenu">
                <div>
                    <button className='menuButton'>About</button>
                    <button className='menuButton'>Service</button>
                    <button className='menuButton'>Projects</button>
                </div>
                <button id="desktopMenu-scheduleBt" className='standarButton'>Schedule a Call</button>
            </menu>
        </nav>
    )
}
export default NavBar;