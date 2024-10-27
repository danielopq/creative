import { useRef } from 'react';
import './navBar.css';

/**
 * Renders the main navigation bar of the website
 * 
 * @returns {JSX.Element} - The NavBar component
 */
const NavBar: React.FC = () => {
    const refMobileIcon = useRef<HTMLButtonElement>(null);

    const handleClick = (): void => {
        if (refMobileIcon.current) {
            if(refMobileIcon.current.className === 'mobileIconBurger'){
                refMobileIcon.current.className = 'mobileIconCross';
                document.getElementById('mobileMenu')!.style.display = 'block';
            }else{
                refMobileIcon.current.className = 'mobileIconBurger';
                document.getElementById('mobileMenu')!.style.display = 'none';
            }
        }
    }

    return (
        <nav id="desktopNavBar">
            <menu id="desktopMenu">
                <div>
                    <button className='menuButton' aria-label="About">About</button>
                    <button className='menuButton' aria-label="Service">Service</button>
                    <button className='menuButton' aria-label="Projects">Projects</button>
                </div>
                <button id="desktopMenu-scheduleBt" className='standardButton'>Schedule a Call</button>
            </menu>
            <button ref={refMobileIcon} id="mobileIcon" className='mobileIconBurger' onClick={() => handleClick()}></button>
            <menu id="mobileMenu">
                <div>
                    <button className='menuButton' aria-label="About">About</button>
                    <button className='menuButton' aria-label="Service">Service</button>
                    <button className='menuButton' aria-label="Projects">Projects</button>
                    <button id="mobileMenu-scheduleBt" className='standardButton'>Schedule a Call</button>
                </div>
            </menu>
        </nav>
    )
}
export default NavBar;