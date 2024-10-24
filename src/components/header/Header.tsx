import './header.css';

/**
 * Renders the website header, which includes the main content and a call-to-action button.
 * 
 * The header consists of a title, descriptive text, and a "Learn More" button. 
 * Additionally, it contains a section for displaying the main visual representation.
 * 
 * @returns {JSX.Element} The Header component.
 */
const Header:React.FC = () => {
    return (
        <header>
            <div id="header-mainContent">
                <h1>Branding & website design agency</h1>
                <p className='mainText'>
                    We specialize in visual storytelling by creating
                    cohesive brand and website design solutions for
                    small businesses, giving lasting impressions to
                    audiences in a digital world.
                </p>
                <button id="header-button" className='standardButton'>Learn More</button>
            </div>
            <div id="header-mainPic"></div>
        </header>
    )
}
export default Header;