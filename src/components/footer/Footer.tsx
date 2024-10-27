import './footer.css';

/**
 * Renders the footer section of the website, which includes a call-to-action.
 * 
 * @returns {JSX.Element} - The rendered Footer component
 */
const Footer: React.FC = () => {
    return (
        <footer>
            <div>
                <h2>Let's build something great together.</h2>
                <button className='standardButton' aria-label="Schedule a Call">Schedule a Call</button>
            </div>
        </footer>
    )
}
export default Footer;